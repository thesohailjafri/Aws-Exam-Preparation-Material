import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { ExamListitem } from '../types/ExamListitem'
interface Exams {
	exams: ExamListitem[]
	count: number
}

export const getStaticProps = (async (context) => {
	const res = await fetch('http://localhost:3000/api/exams')
	const examsData = await res.json()
	return { props: { examsData } }
}) satisfies GetStaticProps<{
	examsData: Exams
}>

export default function Home({ examsData }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(examsData)

	return (
		<div className=''>
			<Head>
				<title>AWS Exam Prep App</title>
			</Head>
			<main className=''>
				<h1 className=''>AWS Exam Prep App</h1>
			</main>
		</div>
	)
}

// read data/examlist.json and create pages for each exam
