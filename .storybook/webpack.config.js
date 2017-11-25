const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const merge = require('webpack-merge');

module.exports = (baseConfig, env) => {
	let config = genDefaultConfig(baseConfig, env);
	config = merge(config, {
		resolve: {
			alias: {
				'vue-thailand-address$': require.resolve('vue-thailand-address/dist/vue-thailand-address.esm')
			}
		}
	});

	return config;
};
