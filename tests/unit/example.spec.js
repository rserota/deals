import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { ModalPlugin, ButtonPlugin, CardPlugin, ImagePlugin } from 'bootstrap-vue'
import Vue from 'vue'
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)
Vue.use(ImagePlugin)
import Deal from '@/components/Deal.vue'

describe('The Deal component', () => {
	it('should render the "Read More" button', () => {

		const propsData = {deal: { image_urls:{'160x160':''}}} // mock a deal so we can mount the component
		const wrapper = shallowMount(Deal, {
			propsData: propsData
		})
		expect(wrapper.text()).to.include('Read More')
	})
})
