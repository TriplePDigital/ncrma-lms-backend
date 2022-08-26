export default {
	name: "riskManagerProfile",
	title: "Risk manager profile",
	type: "document",
	fields: [
		{
			name: "courseProgress",
			title: "Course progress",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "progress" }],
				},
			],
		},
		{
			name: "riskManager",
			title: "Risk manager",
			type: "reference",
			to: [{ type: "user" }],
		},
		{
			name: "crpVideoTraining",
			title: "CRP2 Video Training",
			type: "object",
			fields: [
				{
					name: "videoNumberOne",
					title: "Video 1",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					name: "videoNumberTwo",
					title: "Video 2",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
			],
		},
		{
			title: "Training Assessments",
			name: "trainingAssessments",
			type: "object",
			fields: [
				{
					title: "Dispensary",
					name: "dispensary",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Property Premises",
					name: "propertyPremises",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Express assess",
					name: "expressAssess",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "BC Dispensary",
					name: "bcDispensary",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
			],
		},
		{
			title: "Shadow Assessment",
			name: "shadowAssessment",
			type: "object",
			fields: [
				{
					name: "updatedAt",
					title: "Updated at",
					type: "datetime",
					hidden: true,
					options: {
						dateFormat: "DD/MM/YYYY",
						timeFormat: "HH:mm",
					},
				},
				{
					name: "status",
					title: "Status",
					type: "string",
					options: {
						list: [
							{ title: "Started Training", value: "started" },
							{ title: "In Training", value: "inTraining" },
							{ title: "Can Identify most Risks", value: "idRisk" },
							{ title: "Fully Proficient", value: "proficient" },
						],
					},
				},
			],
		},
		{
			title: "Probation Assessments",
			name: "probationAssessments",
			type: "object",
			fields: [
				{
					name: "assessmentNumberOne",
					title: "Assessment Number One",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					name: "assessmentNumberTwo",
					title: "Assessment Number Two",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					name: "assessmentNumberThree",
					title: "Assessment Number Three",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
			],
		},
		{
			title: "Assessment Proficiency",
			name: "assessmentProficiency",
			type: "object",
			fields: [
				{
					title: "Risk Management",
					name: "riskManagement",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Health and Safety (OSHA)",
					name: "healthAndSafety",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Property and Premises",
					name: "propertyAndPremises",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Product and Process (Cannabis)",
					name: "productProcess",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Quality Assurance (ISO)",
					name: "qualityAssurance",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
				{
					title: "Insurance",
					name: "insurance",
					type: "object",
					fields: [
						{
							name: "updatedAt",
							title: "Updated at",
							type: "datetime",
							hidden: true,
							options: {
								dateFormat: "DD/MM/YYYY",
								timeFormat: "HH:mm",
							},
						},
						{
							name: "status",
							title: "Status",
							type: "string",
							options: {
								list: [
									{ title: "Started Training", value: "started" },
									{ title: "In Training", value: "inTraining" },
									{ title: "Can Identify most Risks", value: "idRisk" },
									{ title: "Fully Proficient", value: "proficient" },
								],
							},
						},
					],
				},
			],
		},
	],
	preview: {
		select: {
			title: "riskManager.firstName",
			subtitle: "riskManager.lastName",
			media: "riskManager.avatar",
		},
		prepare({ title, subtitle, media }) {
			return {
				title: `${title} ${subtitle}`,
				media,
			};
		},
	},
};
