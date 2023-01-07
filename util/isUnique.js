import { client } from "part:@sanity/base/client";

export const isUnique = (value, context, type, property) => {
	const { document } = context;

	const id = document._id.replace(/^drafts\./, "");

	if (!value) {
		return true;
	}

	const params = {
		draft: `drafts.${id}`,
		published: id,
		[property]: value,
	};

	const query = `!defined(*[
    _type == '${type}' &&
    !(_id in [$draft, $published]) &&
    ${property} == $${property}
  ][0]._id)`;

	return client.fetch(query, params);
};
