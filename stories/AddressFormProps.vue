<template>
	<address-form
		:subdistrictLabel='subdistrictLabel'
		:districtLabel='districtLabel'
		:provinceLabel='provinceLabel'
		:zipcodeLabel='zipcodeLabel'
	>
	</address-form>
</template>

<script>
export default {
	name: 'address-form-props',
	data() {
		return {
			subdistrictLabel: 'Sub-District',
			districtLabel: 'District',
			provinceLabel: 'Province',
			zipcodeLabel: 'Zip Code'
		};
	}
};
</script>
