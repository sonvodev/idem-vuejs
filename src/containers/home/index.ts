import Vue from 'vue'
import { namespace, Getter, Action } from 'vuex-class'
import { Component } from 'vue-property-decorator'
import { StoreTypes, HomeStoreTypes } from '../../store';
import { INewsListing, INewsParamter, NewsParamter } from '../../models';
const HomeGetter = namespace(StoreTypes.Home, Getter)
const HomeAction = namespace(StoreTypes.Home, Action)

@Component({
  template: require('./template.html')
})

class HomeContainer extends Vue {

  @HomeGetter
  listNews!: INewsListing[];
  @HomeAction(HomeStoreTypes.GET_LIST_NEWS)
  storeGetListNew!: (param: INewsParamter) => Promise<any>;

  dtSearchParam!: INewsParamter
  /**
   *
   */
  constructor() {
    super();
    this.dtSearchParam = new NewsParamter({ q: 'singapore', page: 0 })
  }
  get coListNews(): INewsListing[] {
    return this.listNews
  }
  mounted() {
    console.log(this.listNews)
    this.storeGetListNew(this.dtSearchParam)
      .then((listNews: INewsListing[]) => console.log(listNews))
      .catch(error => console.log(error))
  }

  getDate(date: string) {
    if (date)
      return Intl.DateTimeFormat().format(new Date(date))
    return date
  }
}
export default HomeContainer