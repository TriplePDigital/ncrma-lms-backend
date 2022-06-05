export default {
	name: "quizAttempt",
	title: "Quiz Attempt",
	type: "document",
	fields: [
		{
			name: "user",
			title: "User",
			type: "reference",
			to: { type: "user" },
		},
		{
			name: "quiz",
			title: "Quiz",
			type: "reference",
			to: { type: "checkpoint" },
		},
		{
			name: "score",
			title: "Score",
			type: "number",
		},
	],
	preview: {
		select: {
			_createdAt: "_createdAt",
		},
		prepare(selection) {
			return {
				title: selection._createdAt,
			};
		},
	},
};
