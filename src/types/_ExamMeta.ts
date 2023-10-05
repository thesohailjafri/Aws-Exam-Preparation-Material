// Type definition for ExamMeta

export interface Option {
	a: string | undefined;
	b: string | undefined;
	c: string | undefined;
	d: string | undefined;
	e: string | undefined;
}

export type ExamType = 'single' | 'multiple';

export type ExamDomain =
	| 'Cloud Computing'
	| 'Data Science'
	| 'Machine Learning'
	| 'Web Development'
	| 'Mobile Development'
	| 'DevOps'
	| 'Cyber Security'
	| 'Backend Development'
	| 'Frontend Development'
	| 'Other';
