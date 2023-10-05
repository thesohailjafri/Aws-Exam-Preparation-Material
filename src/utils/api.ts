import createHttpError from 'http-errors';

import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ErrorResponse, Method } from '@/types/Api';

type ApiMethodHandlers = {
	[key in Uppercase<Method>]?: NextApiHandler;
};

function errorHandler(
	err: {
		statusCode: number;
		message: string;
		expose: boolean;
	},
	res: NextApiResponse<ErrorResponse>,
) {
	// Errors with statusCode >= 500 are should not be exposed
	if (createHttpError.isHttpError(err) && err.expose) {
		// Handle all errors thrown by http-errors module
		return res.status(err.statusCode).json({ error: { message: err.message } });
	} else {
		// default to 500 server error
		console.error(err);
		return res.status(500).json({
			error: { message: 'Internal Server Error', err: err },
			status: createHttpError.isHttpError(err) ? err.statusCode : 500,
		});
	}
}

export function apiHandler(handler: ApiMethodHandlers) {
	return async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
		try {
			const method = req.method ? (req.method.toUpperCase() as keyof ApiMethodHandlers) : undefined;

			// check if handler supports current HTTP method
			if (!method)
				throw new createHttpError.MethodNotAllowed(`No method specified on path ${req.url}!`);

			const methodHandler = handler[method];
			if (!methodHandler)
				throw new createHttpError.MethodNotAllowed(
					`Method ${req.method} Not Allowed on path ${req.url}!`,
				);

			// call method handler
			await methodHandler(req, res);
		} catch (err: any) {
			// global error handler
			errorHandler(err, res);
		}
	};
}
