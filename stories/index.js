import { storiesOf } from '@storybook/vue';

import AddressFormDefault from './AddressFormDefault.vue';
import AddressFormProps from './AddressFormProps.vue';

storiesOf('Address Form', module)
	.add('with default props', () => {
		return {
			components: { AddressFormDefault },
			template: '<address-form-default />'
		};
	})
	.add('with props', () => {
		return {
			components: { AddressFormProps },
			template: '<address-form-props />'
		};
	});
