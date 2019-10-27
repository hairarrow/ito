const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
	exportPathMap: function() {
		return {
			"/": { page: "/" }
		};
	}
});
