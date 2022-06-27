export default {
	name: "stage",
	title: "Stage",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "order",
			title: "Numeric Place in course",
			type: "number",
			validation: (Rule) => Rule.required(),
		},
		// {
		// 	name: "preview",
		// 	title: "Preview",
		// 	type: "boolean",
		// 	initialValue: false,
		// 	validation: (Rule) => Rule.required(),
		// },
		{
			name: "mission",
			title: "Mission",
			type: "reference",
			to: { type: "mission" },
		},
	],
	orderings: [
		{
			title: "Order in Course",
			name: "orderInCourse",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "mission.title",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
			};
		},
	},
};
