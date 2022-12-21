import T from "@sanity/base/initial-value-template-builder";

export default [
	...T.defaults(),
	T.template({
		id: "progress-by-enrollment",
		title: "Progress by enrollment",
		description: "Create a progress document for a specific enrollment",
		schemaType: "progress",
		parameters: [
			{ name: "enrollment", type: "reference", to: [{ type: "enrollment" }] },
		],
		value: (params) => {
			return {
				enrollment: {
					_type: "reference",
					_ref: params.enrollmentID,
				},
			};
		},
	}),
];
