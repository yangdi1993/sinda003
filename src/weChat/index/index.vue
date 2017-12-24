<template>
  <div class="test">
    测试文字，测试文字，测试文字，测试文字，测试文字，测试文字，测试文字，
  </div>
</template>

<script>
import getrem from '../../main'
export default {
  created(){
    console.log(getrem())
    this.rem=getrem()
  },
  data () {
    return {
      rem:1,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.test{
  width: 1rem;
  height: 1rem;
  font-size: .2rem;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
