export default {
	name: "progress",
	title: "User Progress",
	type: "document",
	fields: [
		{
			name: "enrollment",
			title: "Enrollment",
			type: "reference",
			to: { type: "enrollment" },
		},
		{
			name: "content",
			title: "Content",
			type: "reference",
			to: { type: "checkpoint" },
		},
		{
			name: "status",
			title: "Status",
			type: "number",
		},
	],
	preview: {
		select: {
			firstName: "enrollment.student.firstName",
			lastName: "enrollment.student.lastName",
			sub: "content.title",
			stage: "content.stage.title",
			course: "content.stage.mission.title",
			avatar: "enrollment.student.avatar",
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
