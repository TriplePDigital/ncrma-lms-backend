export default {
	name: "company",
	title: "Company",
	type: "document",
	fields: [
		{
			name: "facilities",
			title: "Facilities",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "type",
							title: "Facility Type",
							type: "string",
							options: {
								list: [
									{ title: "Cultivation", value: "cultivation" },
									{ title: "Dispensary", value: "dispensary" },
									{ title: "Distribution", value: "distribution" },
									{
										title: "Cultivation / Dispensary",
										value: "cultivationDispensary",
									},
									{
										title: "Cultivation / Extraction",
										value: "cultivationExtraction",
									},
									{
										title: "Extraction / Infusion",
										value: "extractionInfusion",
									},
									{ title: "Mix", value: "mix" },
								],
							},
						},
						{
							name: "name",
							title: "Facility Name",
							type: "string",
						},
						{
							name: "location",
							title: "Facility Location",
							type: "object",
							fields: [
								{
									name: "streetAddress",
									title: "Street Address",
									type: "string",
								},
								{
									name: "city",
									title: "City",
									type: "string",
								},
								{
									name: "state",
									title: "State",
									type: "string",
								},
								{
									name: "zip",
									title: "Zip Code",
									type: "string",
								},
							],
						},
						{
							name: "employees",
							title: "Employees",
							type: "array",
							of: [
								{
									type: "reference",
									to: [{ type: "user" }],
								},
							],
						},
						{
							name: "controlDeficiency",
							title: "Control Deficiency",
							type: "string",
							options: {
								list: [
									{ title: "Severe", value: "severe" },
									{ title: "Significant", value: "significant" },
									{ title: "Moderate", value: "moderate" },
									{ title: "Negligible", value: "negligible" },
									{ title: "Minor", value: "minor" },
								],
							},
						},
						{
							name: "moduleTypes",
							title: "Module Types",
							type: "string",
							options: {
								list: [
									{ title: "Enterprise-Wide", value: "enterpriseWide" },
									{ title: "Baseline Critical", value: "baseline" },
									{ title: "Significant", value: "significant" },
									{ title: "Advanced", value: "advanced" },
									{ title: "Full", value: "full" },
								],
							},
						},
						{
							name: "recommendedCourses",
							title: "Recommended Courses",
							type: "array",
							of: [
								{
									type: "reference",
									to: [{ type: "mission" }],
								},
							],
						},
						{
							name: "assessment",
							title: "Assessment",
							type: "array",
							of: [
								{
									type: "object",
									fields: [
										{
											name: "createdAt",
											title: "Created At",
											type: "datetime",
											readOnly: true,
											hidden: true,
											initialValue: () => new Date(),
										},
										{
											name: "crppID",
											title: "CRPP ID",
											type: "string",
										},
										{
											name: "score",
											title: "Score",
											type: "number",
											validation: (Rule) => [
												Rule.min(0)
													.max(100)
													.error("Score must be between 0 and 100"),
											],
										},

										{
											name: "prime",
											title: "Proficiency Scoring",
											type: "boolean",
											initialValue: false,
										},
									],
									preview: {
										select: {
											title: "_createdAt",
											subtitle: "score",
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "crppID",
			title: "Company CRPP ID",
			type: "string",
		},
		{
			name: "name",
			title: "Company Name",
			type: "string",
		},
		{
			name: "location",
			title: "Company Location",
			type: "object",
			fields: [
				{
					name: "streetAddress",
					title: "Street Address",
					type: "string",
				},
				{
					name: "city",
					title: "City",
					type: "string",
				},
				{
					name: "state",
					title: "State",
					type: "string",
				},
				{
					name: "zip",
					title: "Zip Code",
					type: "string",
				},
			],
		},
		{
			name: "primaryContact",
			title: "Primary Contact",
			type: "object",
			fields: [
				{
					name: "firstName",
					title: "First Name",
					type: "string",
				},
				{
					name: "lastName",
					title: "Last Name",
					type: "string",
				},
				{
					name: "email",
					title: "Email",
					type: "string",
				},
				{
					name: "phone",
					title: "Phone",
					type: "string",
				},
				{
					name: "crppID",
					title: "CRPP ID",
					type: "string",
				},
			],
		},
		{
			name: "riskManger",
			title: "Risk Manager",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "user" }],
					options: {
						filter: "role == $role",
						filterParams: {
							role: "riskManager",
						},
					},
				},
			],
		},
		{
			name: "client",
			title: "Client",
			type: "string",
		},
	],
};
