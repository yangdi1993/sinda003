<template>
    <div class="pay">
        <div class="pay-content">
            <div class="pay-top">
                <p>首页/
                    <span>购物车</span>
                </p>
            </div>
            <div class="pay-head">
                <div>
                    <p>全部商品
                        <span>(1)</span>
                    </p>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>公司</th>
                        <th>服务商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <p>店铺：<span>哈哈哈哈啊哈哈</span></p>
                    <tr>
                        <td><img src="" alt="">哈哈哈哈</td>
                        <td>代理记账</td>
                        <td>￥1200</td>
                        <td><input></td>
                        <td class="zjia">￥1200</td>
                        <td class="dele"><div>删除</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped lang="less">
.pay-content {
  width: 1200px;
  height: 1155px;
  background: white;
  margin: 0 auto;
  overflow: hidden;
}
.pay-top {
  width: 100%;
  margin-top: 20px;
  color: black;
  font-size: 16px;
  p {
    margin-right: 1100px;
  }
}
.pay-head {
  width: 100%;
  border-bottom: 1px solid #bcbdbd;
  margin-top: 25px;
  p {
    color: #74b2df;
    width: 150px;
    font-size: 16px;
    margin-right: 1115px;
    margin-bottom: 10px;
  }
}
table{
   width: 1200px;
}
thead{
    width: 1200px;
    tr{
        line-height: 55px;
        width: 1100px;
        margin-left: 50px;
        color: #686868;
        display: flex;
        justify-content: space-between;
    }
}
tbody{
    width: 1200px;
    background-color: #f7f7f7;
     tr{
        line-height: 55px;
        width: 1100px;
        margin-left: 50px;
        color: #686868;
        display: flex;
        justify-content: space-between;
    }
}
.zjia{
    color: #71afdd;
}
</style>