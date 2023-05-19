 interface Article{
    id:number,
    title:string,
    content:string,
    time:string,

}
export class MGT{
     Articles:Array<Article>
     constructor(Articles:Array<Article>){
       this.Articles=Articles
     }
     // 获取所有文章
     GETArticles(){
        return this.Articles
     }
     GETArticle(i:number){
        return this.Articles[i]
     }
     SGETArticle(title:string){
         const data=this.Articles.filter(i=>
            !i.title.indexOf(title)
          )

          return data
     }
     DeleteArticle(i:number){
      this.Articles.splice(i+1)
console.log(this.Articles);

     
     }
     addArticle(item:Article){
        if (item.id&&item.title&&item.content) {
            this.Articles.push(item)
        }
     }
}