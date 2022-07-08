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
			subtitle: "student.lastName",
			media: "student.avatar",
			email: "course.title",
		},
		prepare({ title, subtitle, media, email }) {
			return {
				title: `${title} ${subtitle}`,
				subtitle: email,
				media,
			};
		},
	},
};
