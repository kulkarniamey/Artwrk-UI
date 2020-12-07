import { shallowMount } from '@vue/test-utils'
import ImageGrid from '../ImageGrid'

const factory = () => {
  return shallowMount(ImageGrid, {})
}

describe('ImageGrid', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
