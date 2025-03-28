import { languages } from "src/app/core/modules/translate/languages";

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
	languages: [
		{ name: 'Albanian', origin: 'shqiptare', code: 'sq' },
		{ name: 'Arabic', origin: 'العربية', code: 'ar' },
		{ name: 'Basque', origin: 'euskara', code: 'eu' },
		{ name: 'Bengali', origin: 'বাংলা', code: 'bn' },
		{ name: 'Bulgarian', origin: 'български', code: 'bg' },
		{ name: 'Catalan', origin: 'català', code: 'ca' },
		{ name: 'Croatian', origin: 'hrvatski', code: 'hr' },
		{ name: 'Czech', origin: 'čeština', code: 'cs' },
		{ name: 'Danish', origin: 'dansk', code: 'da' },
		{ name: 'Dutch', origin: 'Nederlands', code: 'nl' },
		{ name: 'English', origin: 'english', code: 'en' },
		{ name: 'Estonian', origin: 'eesti', code: 'et' },
		{ name: 'Finnish', origin: 'suomi', code: 'fi' },
		{ name: 'French', origin: 'français', code: 'fr' },
		{ name: 'Galician', origin: 'galego', code: 'gl' },
		{ name: 'German', origin: 'Deutsch', code: 'de' },
		{ name: 'Greek', origin: 'ελληνικά', code: 'el' },
		{ name: 'Hindi', origin: 'हिन्दी', code: 'hi' },
		{ name: 'Hungarian', origin: 'magyar', code: 'hu' },
		{ name: 'Indonesian', origin: 'bahasa Indonesia', code: 'id' },
		{ name: 'Irish', origin: 'Gaeilge', code: 'ga' },
		{ name: 'Italian', origin: 'italiano', code: 'it' },
		{ name: 'Japanese', origin: '日本語', code: 'ja' },
		{ name: 'Latvian', origin: 'latviešu', code: 'lv' },
		{ name: 'Lithuanian', origin: 'lietuvių', code: 'lt' },
		{ name: 'Luxembourgish', origin: 'Lëtzebuergesch', code: 'lb' },
		{ name: 'Maltese', origin: 'Malti', code: 'mt' },
		{ name: 'Mandarin Chinese', origin: '中文', code: 'zh' },
		{ name: 'Nigerian Pidgin', origin: 'pidgin', code: 'pcm' },
		{ name: 'Norwegian', origin: 'norsk', code: 'no' },
		{ name: 'Polish', origin: 'polski', code: 'pl' },
		{ name: 'Portuguese', origin: 'português', code: 'pt' },
		{ name: 'Romanian', origin: 'română', code: 'ro' },
		{ name: 'Serbian', origin: 'српски / srpski', code: 'sr' },
		{ name: 'Slovak', origin: 'slovenčina', code: 'sk' },
		{ name: 'Slovenian', origin: 'slovenščina', code: 'sl' },
		{ name: 'Spanish', origin: 'español', code: 'es' },
		{ name: 'Swedish', origin: 'svenska', code: 'sv' },
		{ name: 'Ukrainian', origin: 'українська', code: 'uk' },
		{ name: 'Urdu', origin: 'اردو', code: 'ur' }
	],
	defaultLanguageCode: 'en'
};
