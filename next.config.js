// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: "@import \"styles/variables.scss\";",
	},
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
			})
		);
		return config;
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
