import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				base: '#F3F8FF',
				primary: '#5695F3',
				secondary: '#AECFFF',
				white: '#FBFDFF',
				black: '#2B363F',
				red: '#FF4438',
			},
			dark: {
				base: '#384956',
				primary: '#5695F3',
				secondary: '#AECFFF',
				white: '#FBFDFF',
				black: '#2B363F',
				red: '#FF4438',
			},
		},
	},
});
