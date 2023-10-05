export interface ExamListitem {
	exam: string
	examCode: string
	examLink: string
	examPriceInDollar: number | string
	examDurationInMinutes: number | string
	examPassingScore: number | string
	examMaxScore: number | string
	examLanguage: string
	examFormat: string
	examType: string
	examAudience: string
	examObjectiveLink: string
	examImage: string
	examDomains: string[]
}
