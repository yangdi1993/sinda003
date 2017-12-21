import axios from 'axios'
import qs from 'qs'


export default function purchase(id, that) {
  console.log(that)
  axios.post("/xinda-api/cart/add", qs.stringify({
      id: id,
      num: that.num,
    }))
    .then(data => {
        that.$router.push({
            path: "/inner/cart",
        })
    });
}
