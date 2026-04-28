/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'SoftX',
		author: 'Gibbu',
		version: '2.0.0',
		description: 'A soft and comfy feel for Discord.',
		source: 'https://github.com/MaxTomahawk/SoftX-Light-Dark',
		invite: 'ZHthyCw'
	},
	github: 'MaxTomahawk',
	addons: [
		{ target: 'src/addons/_radialglow.scss', name: 'RadialGlow' },
		{ target: 'src/SoftX-Dark.scss', name: 'SoftX-Dark.theme' },
		{ target: 'src/SoftX-Light.scss', name: 'SoftX-Light.theme' }
	]
};
