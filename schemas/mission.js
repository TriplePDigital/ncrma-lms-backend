import { isUnique } from "../util/isUnique";

export default {
	name: "mission",
	title: "Mission",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Course Title",
			type: "string",
			validation: (Rule) => Rule.required().min(2).max(70),
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
			name: "blurb",
			title: "Course Blurb",
			description: "One liner about the course",
			type: "text",
			validation: (Rule) => Rule.required().max(150),
		},
		{
			name: "description",
			title: "Description",
			type: "markdown",
			validation: (Rule) => Rule.required(),
			options: {
				minRows: 15,
			},
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		},
		{
			name: "instructors",
			title: "Instructor(s)",
			type: "array",
			validation: (Rule) => Rule.required(),
			of: [
				{
					type: "reference",
					to: { type: "instructor" },
				},
			],
		},
		{
			name: "colorCode",
			title: "Color Code of the Course",
			description:
				"The hexadecimal value of the color assigned to the course (including the # mark at the beginning).",
			type: "string",
			placeholder: "#000000",
			validation: (Rule) => Rule.required().length(7),
		},
		{
			name: "fallbackURL",
			title: "Fallback URL",
			type: "url",
			hidden: ({ currentUser }) => {
				return !currentUser.roles.find(({ name }) => name === "administrator");
			},
		},
		{
			name: "activePromo",
			title: "Active Promo",
			type: "reference",
			to: { type: "marketing" },
		},
		{
			title: "Categories",
			name: "categories",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		},
		{
			title: "SKU",
			name: "sku",
			type: "string",
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const found = await isUnique(value, context, "mission", "sku");
					if (!found) return "SKU is not unique";
					return true;
				}),
		},
	],
};
