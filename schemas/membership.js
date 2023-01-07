import { isUnique } from "../util/isUnique";

export default {
	name: "membership",
	title: "Memberships",
	type: "document",
	fields: [
		{
			type: "string",
			name: "name",
			title: "Membership Name",
		},
		{
			title: "SKU",
			name: "sku",
			type: "string",
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const found = await isUnique(value, context, "membership", "sku");
					if (!found) return "SKU is not unique";
					return true;
				}),
		},
		{
			type: "number",
			name: "price",
			title: "Membership Price",
		},
		{
			type: "markdown",
			name: "description",
			title: "Membership Description",
		},
		{
			type: "array",
			name: "benefits",
			title: "Benefits Included",
			of: [
				{
					type: "string",
				},
			],
		},
		{
			type: "array",
			name: "missions",
			title: "Courses Included with Purchase",
			of: [
				{
					type: "reference",
					to: {
						type: "mission",
					},
				},
			],
		},
		{
			name: "avatar",
			title: "Avatar",
			type: "image",
		},
		{
			type: "number",
			name: "discount",
			title: "Discount Included",
			validation: (Rule) => Rule.min(0).max(100),
		},
	],
};
