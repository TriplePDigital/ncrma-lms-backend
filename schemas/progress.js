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
		},
		prepare(selection) {
			return {
				title: `${selection.firstName} ${selection.lastName}`,
				subtitle: selection.sub,
			};
		},
	},
};
