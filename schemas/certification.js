import { isUnique } from "../util/isUnique";

export default {
	name: "certification",
	title: "Certification",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "markdown",
			options: {
				minRows: 15,
			},
		},
		{
			name: "missions",
			title: "Mission(s) included",
			description:
				"Select the missions that are required for the completion of this certification.",
			type: "array",
			of: [{ name: "mission", type: "reference", to: { type: "mission" } }],
		},
		{
			name: "sku",
			title: "SKU",
			type: "string",
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const found = await isUnique(value, context, "certification", "sku");
					if (!found) return "SKU is not unique";
					return true;
				}),
		},
		{
			name: "price",
			title: "Price",
			type: "number",
			validation: (Rule) => Rule.required().min(0),
		},
	],
};
