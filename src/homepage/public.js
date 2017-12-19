import axios from 'axios';
import qs from 'qs'

export default function getData(listobjsA,changepage=0,much=3,sort=2,url,alltotle,allpagecount,productId,productTypeCode,number){
    //此翻页器的方法形参分别为：listobjsA为需要在页面显示的所有数据，即this.listobjsA，必填；
    //changepage=获取数据的起始位置，选填，默认是0；much为单次请求/显示个数，选填，默认是3;
    //sort为排序方式，空为默认排序，2为价格升序，3为降序；url为获取地址，，必填；
    //alltotle为应分的页数，即this.totle，必填；allpagecount为页数的对象，即this.pagecount，必填；
    var that=this
    axios.post(url,qs.stringify({
        start:changepage*number,
        limit:much,
        productTypeCode: productTypeCode, 
        productId:productId,
        sort:sort,
    })).then(function(data){
        var totle=Math.ceil(data.data.totalCount/number)   //总页数
        var pagecount={}  //翻页器的对象
        for(var i=0;i<totle;i++){
          pagecount[i]=i+1
        }
        alltotle.allpage=totle  //总页数
        allpagecount.allshow=pagecount  //总页数对象z{0:1,1:2,2:3....60:61}
        var rData=data.data.data
        console.log(rData)
        listobjsA.page=rData   //数据
    })
}