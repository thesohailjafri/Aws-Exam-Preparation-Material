import { ExamListitem } from '@/types/ExamListitem'
import { apiHandler } from '@/utils/api'
import { promises as fs } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
interface Exam extends ExamListitem {
	questions: []
}

async function getExamList(req: NextApiRequest, res: NextApiResponse<Exam>) {
	const examFileLocation = req.url?.replace('/api/exam', '')
	const dataDirectory = path.join(process.cwd(), 'data')
	const fileContents = await fs.readFile(dataDirectory + `${examFileLocation}.json`, 'utf8')
	let data = JSON.parse(fileContents)
	res.status(200).json(data)
}

export default apiHandler({
	GET: getExamList,
})
