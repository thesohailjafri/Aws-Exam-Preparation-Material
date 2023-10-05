import { ExamListitem } from '@/types/ExamListitem';
import { apiHandler } from '@/utils/api';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
type Data = {
	exams: ExamListitem[];
	count: number;
};

async function getExamList(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { domain } = req.query;
	const dataDirectory = path.join(process.cwd(), 'data');
	const fileContents = await fs.readFile(dataDirectory + '/examlist.json', 'utf8');
	let data = JSON.parse(fileContents);
	if (domain) {
		data = data.filter((exam: any) => exam.domains.includes(domain));
	}
	res.status(200).json({ exams: data, count: data.length });
}

export default apiHandler({
	GET: getExamList,
});
