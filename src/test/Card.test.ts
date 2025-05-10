import { nextTick } from 'vue'
import Card from '../components/Card.vue'
import { mount } from '@vue/test-utils'

describe('card test', () => {
    test('test for card shadow', () => {
        const wrapper = mount(Card, {
            props: {
                shadow: 'always'
            }
        })

        expect(wrapper.classes()).toContain('always')
    })

    test('test for card slots', () => {
        const wrapper = mount(Card, {
            slots: {
                default: 'Hello'
            }
        })
        expect(wrapper.text()).toContain('Hello')
    })
})