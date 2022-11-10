/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	images: {
		domains: [
			"i.imgur.com",
			"cdn.sanity.io",
			"static.vecteezy.com",
			"miro.medium.com",
		],
	},
});
