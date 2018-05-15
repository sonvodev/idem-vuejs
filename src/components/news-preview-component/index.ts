import Vue from 'vue'
import { namespace, Getter, Action } from 'vuex-class'
import { Component, Prop, Emit } from 'vue-property-decorator'
@Component({
  template: require('./template.html')
})

class NewsPreviewComponent extends Vue {

  @Prop({ default: () => {}})
  news: any

  @Prop({ default: 'left', type: [String] })
  imagePosition!: string;

  get coNews(){
    return this.news
  }
  imageUrlParser(url: string): string{
    return  'https://static01.nyt.com/'+url;
  }
  getDate(date: string){
    return new Date(date).toLocaleDateString()
  }

  @Emit('view')
  handleView(){
  }
}
export default NewsPreviewComponent