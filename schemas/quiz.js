export default {
	name: "quiz",
	title: "Quiz",
	type: "document",
	fields: [
		{
			name: "attempts",
			title: "Quiz Attempts",
			type: "array",
			of: [{ type: "reference", to: { type: "quizAttempt" } }],
		},
		{
			name: "questions",
			title: "Questions",
			type: "array",
			of: [{ type: "reference", to: { type: "question" } }],
		},
		{
			name: "title",
			type: "string",
			title: "Quiz Title",
		},
		{
			name: "minimumScore",
			title: "Minimum Score to Pass",
			type: "number",
			validation: (num) => num.min(0),
		},
		{
			name: "stage",
			title: "Stage",
			type: "reference",
			to: { type: "stage" },
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "stage.title",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
			};
		},
	},
};
