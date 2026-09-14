import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders the message prop', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Test message',
      },
    })

    expect(wrapper.get('h1').text()).toBe('Test message')
  })
})
