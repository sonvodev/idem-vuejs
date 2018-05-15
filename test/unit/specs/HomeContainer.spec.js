import Vue from 'vue'
import HomeContainer from '../../../containers/HomeContainer.vue'

describe('HomeContainer.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomeContainer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
