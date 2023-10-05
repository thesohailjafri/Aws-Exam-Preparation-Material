// Types definition for Question

import { ExamType, Option } from "./_ExamMeta"


export default interface Question {
	id: string | number;
	question: string;
	questionType: ExamType;
	options: Option[];
	answer: string[];
	answerDescription: string;
	answerLink: string;
}
