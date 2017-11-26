<template>
	<address-form
		subdistrictLabel='Sub-District'
		districtLabel='District'
		provinceLabel='Province'
		zipcodeLabel='Zip Code'
		v-model='formData'
		@itemselect='onItemSelect'
	>
	</address-form>
</template>

<script>
import { action } from '@storybook/addon-actions';

export default {
	name: 'address-form-props',
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
