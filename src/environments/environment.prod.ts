import { languages } from 'src/app/core/modules/translate/languages';

export const environment = {
	roles: [],
	production: true,
	appId: 'wStory',
	url: 'https://webart.work',
	sign: {
		logo: '',
		email: '',
		password: ''
	},
	image: {
		default: 'https://ngx.webart.work/assets/logo.png',
		logo: 'https://ngx.webart.work/assets/logo.png'
	},
	meta: {
		title: 'Web Art Work',
		description:
			'An amazing solution to build web or mobile app for your business',
		favicon: 'https://ngx.webart.work/assets/favicon.ico',
		image: 'https://ngx.webart.work/assets/logo.png'
	},
	defaultLanguageCode: 'uk',
	languages: [
		{
			code: 'en',
			name: 'English',
			origin: 'English'
		},
		{
			code: 'uk',
			name: 'Українська',
			origin: 'Українська'
		}
	]
};
