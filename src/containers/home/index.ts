import Vue from 'vue'
import { namespace, Getter, Action } from 'vuex-class'
import { Component } from 'vue-property-decorator'
import { StoreTypes, HomeStoreTypes } from '../../store';
import { INewsListing, INewsParamter, NewsParamter, INewsDetail, NewsDetail } from '../../models';
import ListingPaginationComponent from '../../components/listing-component/ListingComponent.vue'
import HomePreviewModal from './components/HomeViewNewsModal.vue'
const HomeGetter = namespace(StoreTypes.Home, Getter)
const HomeAction = namespace(StoreTypes.Home, Action)

@Component({
  template: require('./template.html'),
 components:{ 
   'news-list': ListingPaginationComponent,
   'news-preview': HomePreviewModal
  }
})

class HomeContainer extends Vue {

  @HomeGetter
  listNews!: INewsListing[];
  @HomeAction(HomeStoreTypes.GET_LIST_NEWS)
  storeGetListNew!: (param: INewsParamter) => Promise<any>;

  dtSearchParam!: INewsParamter
  dtDefaultSettingModalVisible: boolean;
  dtNews: INewsDetail | null;

  /**
   *
   */
  constructor() {
    super();
    this.dtSearchParam = new NewsParamter({ q: 'singapore', page: 0 })
    this.dtDefaultSettingModalVisible = false
    this.dtNews = new NewsDetail({headline: {},multimedia:[], byline:{}})
  }
  get coListNews(): INewsListing[] {
    return this.listNews
  }
  mounted() {
    this.getListNews();
  }

  getListNews(){

    this.storeGetListNew(this.dtSearchParam)
    .catch(error => this.$message.error(error))
  }
  
  getDate(date: string) {
    if (date)
      return Intl.DateTimeFormat().format(new Date(date))
    return date
  }

  handleView(data: any){
    this.dtDefaultSettingModalVisible = true;
    this.dtNews =  Object.assign({}, require('./api.json'),data)
  }
}
export default HomeContainer