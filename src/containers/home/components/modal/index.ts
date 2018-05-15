import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import { INewsDetail } from "../../../../models";

@Component({
  template: require('./template.html'),
  components:{
  //  'news-preview': 
  }
})
class HomePreviewModal extends Vue{

  

  @Prop({default: false, required: true, type:[Boolean]})
  value!: boolean

  @Prop({default: () => {}})
  news!: any | null

  dtDefaultSettingModalWidth: string;
  dtDefaultSettingModelFullScreen: boolean;

  get visible(): boolean{
    return this.value
  }
  set visible(val: boolean){
    this.$emit('input', val)
  }

  get title(){
    return this.news.headline.main;
  }
  get textContent(){
    return this.news.snippet;
  }
  get wordCount(){
    return this.news.word_count;
  }
  get type(){
    return this.news.type_of_material;
  }
  get source(){
    return this.news.source;
  }
  get keywords(): string[]{
    return this.news.keywords
  }
  get headImage(){
    if(this.news.multimedia && this.news.multimedia.length > 0){
      return  'https://static01.nyt.com/' + this.news.multimedia[0].url ;
    }
    return 'static/images/world-cat/1.jpg';
  }
  get pubDate(){
    return new Date(this.news.pub_date).toLocaleDateString()
  }

  /**
   *
   */
  constructor() {
    super();
    if(window.screen.width < 767){
      this.dtDefaultSettingModalWidth = '100%'
      this.dtDefaultSettingModelFullScreen = true
    } else{
      this.dtDefaultSettingModalWidth = '65%'
      this.dtDefaultSettingModelFullScreen = false
    }
  }
}

export default HomePreviewModal; 