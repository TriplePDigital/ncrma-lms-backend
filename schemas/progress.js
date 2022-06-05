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
			title: "enrollment.student.firstName",
			subtitle: "content.title",
		},
	},
};
