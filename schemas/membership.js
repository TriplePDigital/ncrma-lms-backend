import client from "part:@sanity/base/client";

const isUniqueSKU = (sku, context) => {
	const { document } = context;

	const id = document._id.replace(/^drafts\./, "");

	if (!sku) {
		return true;
	}

	const params = {
		draft: `drafts.${id}`,
		published: id,
		sku,
	};

	const query = `!defined(*[
    _type == 'membership' &&
    !(_id in [$draft, $published]) &&
    sku == $sku
  ][0]._id)`;

	return client.fetch(query, params);
};

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
			name: "type",
			title: "Membership Type",
			type: "string",
			options: {
				list: [
					{ title: "Individual", value: "individual" },
					{ title: "Company", value: "company" },
				],
				layout: "dropdown",
			},
		},
		{
			title: "SKU",
			name: "sku",
			type: "string",
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const isUnique = await isUniqueSKU(value, context);
					if (!isUnique) return "SKU is not unique";
					return true;
				}).max(3),
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
