import { shallowMount } from '@vue/test-utils'
import Modal from '../Modal'

const factory = () => {
  return shallowMount(Modal, {})
}

describe('Modal', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
