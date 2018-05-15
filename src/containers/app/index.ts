import Vue from 'vue'
import { namespace, Getter } from 'vuex-class'
import { Component } from 'vue-property-decorator'
import { StoreTypes } from '../../store';
import { INewsListing } from '../../models';
import axios from 'axios'
import { AxiosConfiguration } from '../../utils/AxiosConfiguration';
@Component({
  template: require('./template.html')
})

class App extends Vue {
  constructor() {
    super();

    axios.defaults.baseURL = '//api.nytimes.com/svc/search/v2'
    axios.interceptors.request.use(
      (config) =>
        AxiosConfiguration.requestInterceptor(config),
      (error) =>
        AxiosConfiguration.exceptionist(error));
    axios.interceptors.response.use(
      (response) =>
        AxiosConfiguration.responseInterceptor(response),
      (error) =>
        AxiosConfiguration.exceptionist(error))

  }
  mounted() {
    console.log('app')
  }
}
export default App