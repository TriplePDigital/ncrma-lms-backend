export default {
	name: "verificationRequest",
	title: "Verification Request",
	type: "document",
	fields: [
		{
			name: "identifier",
			title: "Identifier",
			type: "string",
		},
		{
			name: "token",
			title: "Token",
			type: "string",
		},
		{
			name: "expires",
			title: "Expires",
			type: "date",
		},
	],
};
