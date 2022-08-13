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
									{
										title: "Extraction / Infusion",
										value: "extractionInfusion",
									},
									{ title: "Distribution", value: "distribution" },
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
											name: "prime",
											title: "Proficiency Scoring",
											type: "number",
										},
									],
								},
							],
						},
					],
					options: {
						editModal: "fullscreen",
					},
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
			type: "reference",
			to: [{ type: "user" }],
			options: {
				filter: "role == $role",
				filterParams: {
					role: "riskManager",
				},
			},
		},
		{
			name: "client",
			title: "Client",
			type: "string",
		},
	],
};
