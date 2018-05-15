import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import NewsPreviewComponent from '../news-preview-component/NewsPreviewComponent.vue'
@Component({
  template: require('./template.html'),
  components:{
    'listing-item':  NewsPreviewComponent
  }
})

class ListingPaginationComponent extends Vue{
  

  @Prop({default: () => [], type: [Array]})
  source!: any[]

  @Prop({ required: true, type: [Number] })
  value!: number

  @Prop({ required: true, type: [Number] })
  total!: number


  get vModel(): number{
    return this.value
  }
  set vModel(val: number){
    this.$emit('input', val)
    setTimeout(() => this.$emit('fetch'), 100);
  }
  get pageDisplayed() {
    return { limitation: [0,1,2,3], maxi: 10, mini: this.value };
}
  handleView(item: any){
    this.$emit('view', item)
  }
}

export default ListingPaginationComponent;