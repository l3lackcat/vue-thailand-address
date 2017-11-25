<template>
	<address-form @itemselect='onItemSelect'></address-form>
</template>

<script>
import { action } from '@storybook/addon-actions';

export default {
	name: 'address-form-default',
	methods: {
		onItemSelect: action('onItemSelect')
	}
};
</script>
