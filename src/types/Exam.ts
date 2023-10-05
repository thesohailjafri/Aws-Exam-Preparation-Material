import { ExamType } from "./_ExamMeta"
import Question from "./Question"

// ExamMeta Type Definition
export default interface Exam {
	exam: string;
	examCode: string;
	examLink: string;
	examPriceInDollar: number;
	examDurationInMinutes: number;
	examPassingScore: number;
	examMaxScore: number;
	examLanguage: string;
	examFormat: string;
	examType: string;
	examAudience: string;
	examObjectiveLink: string;
	questionTypes: ExamType[];
	questions: Question[],
}