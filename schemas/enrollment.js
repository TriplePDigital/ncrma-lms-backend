export default {
	name: "enrollment",
	title: "Enrollment",
	type: "document",
	fields: [
		{
			name: "student",
			title: "Student",
			type: "reference",
			to: { type: "user" },
		},
		{
			name: "course",
			title: "Course",
			type: "reference",
			to: { type: "mission" },
		},
	],
	preview: {
		select: {
			title: "student.firstName",
			subtitle: "course.title",
			media: "student.avatar",
		},
	},
};
