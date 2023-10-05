export type Method =
	| 'GET'
	| 'DELETE'
	| 'HEAD'
	| 'OPTIONS'
	| 'POST'
	| 'PUT'
	| 'PATCH'
	| 'PURGE'
	| 'LINK'
	| 'UNLINK';

// Shape of the response when an error is thrown
export interface ErrorResponse {
	error: {
		message: string;
		err?: any; // Sent for unhandled errors reulting in 500
	};
	status?: number; // Sent for unhandled errors reulting in 500
}
