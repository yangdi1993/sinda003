import axios from 'axios';
import qs from 'qs'

export default function getData(listobjsA,changepage){
    axios.post('xinda-api/product/package/grid',qs.stringify({
        start:changepage*3,
        limit:3,
        productTypeCode: "1",
        // sort:2,
    })).then(function(data){
        var rData=data.data.data
        listobjsA.page=rData   //数据
    })

}