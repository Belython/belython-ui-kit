import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from './VButton.vue';

describe('Button', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, {
            props: {
                size: 'small',
                color: 'primary',
            },
        });
        expect(wrapper.classes()).includes('_primary');
        expect(wrapper.exists()).toBe(true);
    });
});
describe('when clicked', () => {
    it('emits an event', () => {
        const wrapper = mount(Button);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
    });
});
