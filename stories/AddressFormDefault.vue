<template>
	<address-form v-model='formData' @itemselect='onItemSelect'></address-form>
</template>

<script>
import { action } from '@storybook/addon-actions';

export default {
	name: 'address-form-default',
	data() {
		return {
			formData: {
				subdistrict: null,
				district: null,
				province: null,
				zipcode: null
			}
		};
	},
	methods: {
		onItemSelect: action('onItemSelect')
	}
};
</script>
