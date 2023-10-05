import { ExamListitem } from '@/types/ExamListitem'
import { apiHandler } from '@/utils/api'
import { promises as fs } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import exam from '..'
interface Exam extends ExamListitem {
	questions: []
}

type Query = {
	page?: number
	limit?: number
	view_all?: boolean
}

async function getExamList(req: NextApiRequest, res: NextApiResponse<Exam>) {
	const {
		page = 1, // Current page number
		limit = 20, // Number of items per page
		view_all = false, // View all items
	}: Query = req.query

	let examFileLocation = req.url?.replace('/api/exam', '')
	examFileLocation = examFileLocation?.split('?')[0]
	const dataDirectory = path.join(process.cwd(), 'data')
	const fileContents = await fs.readFile(dataDirectory + `${examFileLocation}.json`, 'utf8')
	let data = JSON.parse(fileContents)
	if (!view_all) {
		data.questions = data.questions.slice((page - 1) * limit, page * limit)
	}

	res.status(200).json(data)
}

export default apiHandler({
	GET: getExamList,
})
