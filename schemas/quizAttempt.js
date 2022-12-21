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
			firstName: "user.firstName",
			lastName: "user.lastName",
			sub: "quiz.title",
			stage: "quiz.stage.title",
			course: "quiz.stage.mission.title",
			avatar: "user.avatar",
		},
		prepare(selection) {
			return {
				title: `${selection.firstName} ${selection.lastName}`,
				subtitle: `${selection.sub} | ${selection.stage} | ${selection.course}`,
				media: selection.avatar,
			};
		},
	},
};
