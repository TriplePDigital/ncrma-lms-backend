import { isUnique } from "../util/isUnique";

export default {
	name: "track",
	title: "Course Track",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Track Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "achievement",
			title: "Achievement",
			description:
				"Achievement received by the user for the completion of all missions in the track",
			type: "reference",
			to: { type: "certification" },
		},
		{
			name: "missions",
			title: "Missions",
			type: "array",
			of: [{ name: "mission", type: "reference", to: { type: "mission" } }],
		},
		{
			name: "sku",
			title: "SKU",
			type: "string",
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const found = await isUnique(value, context, "track", "sku");
					if (!found) return "SKU is not unique";
					return true;
				}),
		},
	],
};
