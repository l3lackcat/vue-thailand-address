/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/vue';

import Vue from 'vue';
import VueThailandAddress from 'vue-thailand-address';

import 'vue-thailand-address/dist/vue-thailand-address.css';

Vue.use(VueThailandAddress);

function loadStories() {
	require('../stories');
}

configure(loadStories, module);
