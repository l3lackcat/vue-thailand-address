<template>
	<address-form
		:subdistrictLabel='subdistrictLabel'
		:districtLabel='districtLabel'
		:provinceLabel='provinceLabel'
		:zipcodeLabel='zipcodeLabel'
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
			subdistrictLabel: 'Sub-District',
			districtLabel: 'District',
			provinceLabel: 'Province',
			zipcodeLabel: 'Zip Code'
		};
	},
	methods: {
		onItemSelect: action('onItemSelect')
	}
};
</script>
