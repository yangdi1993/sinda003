webpackJsonp([15],{e3X2:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n*[data-v-5f7746be] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.r-outter[data-v-5f7746be] {\n  margin-top: 2rem;\n  width: 7.5rem;\n  height: 10.34rem;\n}\n.msg[data-v-5f7746be] {\n  margin: 0.07rem auto -0.5rem;\n  font-size: 0.28rem;\n  color: #ff0000;\n}\nli[data-v-5f7746be] {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 0 0.32rem 1.01rem;\n  position: relative;\n}\nli input[data-v-5f7746be] {\n  padding-left: 0.19rem;\n  width: 5.46rem;\n  height: 0.73rem;\n  border: 1px solid #b0b0b0;\n  outline: 0;\n  font-size: 0.28rem;\n}\nli input[data-v-5f7746be]::-webkit-input-placeholder {\n  font-size: 0.28rem;\n}\nli a[data-v-5f7746be] {\n  position: absolute;\n  font-size: 0.11rem;\n}\n.phone[data-v-5f7746be] {\n  margin-top: 0.71rem;\n}\n.code-img input[data-v-5f7746be],\n.code-phone input[data-v-5f7746be] {\n  width: 2.72rem;\n  margin-right: 0.3rem;\n}\n.code-img img[data-v-5f7746be] {\n  width: 2.43rem;\n}\n.code-phone button[data-v-5f7746be] {\n  width: 2.43rem;\n  background: #2693d4;\n  color: #fff;\n  font-size: 0.28rem;\n}\n.code-phone .blue[data-v-5f7746be] {\n  background: #999;\n}\n.newPw[data-v-5f7746be],\n.pw[data-v-5f7746be] {\n  position: relative;\n}\n.newPw a[data-v-5f7746be],\n.pw a[data-v-5f7746be] {\n  position: absolute;\n  margin: 1rem 0 0 4.5rem;\n  color: #2693d4;\n  font-size: 0.28rem;\n  text-decoration: none;\n}\n.pw img[data-v-5f7746be],\n.newPw img[data-v-5f7746be] {\n  position: absolute;\n  margin: 0.2rem 0 0 5rem;\n  width: 0.5rem;\n  height: 0.25rem;\n}\n.modify button[data-v-5f7746be] {\n  margin: 1.13rem 0 4.67rem 0;\n  width: 5.65rem;\n  height: 0.73rem;\n  background: #2693d4;\n  color: #fff;\n  outline: 0;\n  font-size: 0.28rem;\n}\n","",{version:3,sources:["E:/web前端/js正式讲解后/项目02，信达/sinda/sinda003/src/weChat/mine/wForget.vue"],names:[],mappings:";AACA;EACE,UAAU;EACV,WAAW;EACX,UAAU;CACX;AACD;EACE,iBAAiB;EACjB,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,4BAA4B;EAC5B,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,0BAA0B;EAC1B,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;;EAEE,eAAe;EACf,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;EACnB,wBAAwB;EACxB,eAAe;EACf,mBAAmB;EACnB,sBAAsB;CACvB;AACD;;EAEE,mBAAmB;EACnB,wBAAwB;EACxB,cAAc;EACd,gBAAgB;CACjB;AACD;EACE,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,mBAAmB;CACpB",file:"wForget.vue",sourcesContent:["\n*[data-v-5f7746be] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.r-outter[data-v-5f7746be] {\n  margin-top: 2rem;\n  width: 7.5rem;\n  height: 10.34rem;\n}\n.msg[data-v-5f7746be] {\n  margin: 0.07rem auto -0.5rem;\n  font-size: 0.28rem;\n  color: #ff0000;\n}\nli[data-v-5f7746be] {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 0 0.32rem 1.01rem;\n  position: relative;\n}\nli input[data-v-5f7746be] {\n  padding-left: 0.19rem;\n  width: 5.46rem;\n  height: 0.73rem;\n  border: 1px solid #b0b0b0;\n  outline: 0;\n  font-size: 0.28rem;\n}\nli input[data-v-5f7746be]::-webkit-input-placeholder {\n  font-size: 0.28rem;\n}\nli a[data-v-5f7746be] {\n  position: absolute;\n  font-size: 0.11rem;\n}\n.phone[data-v-5f7746be] {\n  margin-top: 0.71rem;\n}\n.code-img input[data-v-5f7746be],\n.code-phone input[data-v-5f7746be] {\n  width: 2.72rem;\n  margin-right: 0.3rem;\n}\n.code-img img[data-v-5f7746be] {\n  width: 2.43rem;\n}\n.code-phone button[data-v-5f7746be] {\n  width: 2.43rem;\n  background: #2693d4;\n  color: #fff;\n  font-size: 0.28rem;\n}\n.code-phone .blue[data-v-5f7746be] {\n  background: #999;\n}\n.newPw[data-v-5f7746be],\n.pw[data-v-5f7746be] {\n  position: relative;\n}\n.newPw a[data-v-5f7746be],\n.pw a[data-v-5f7746be] {\n  position: absolute;\n  margin: 1rem 0 0 4.5rem;\n  color: #2693d4;\n  font-size: 0.28rem;\n  text-decoration: none;\n}\n.pw img[data-v-5f7746be],\n.newPw img[data-v-5f7746be] {\n  position: absolute;\n  margin: 0.2rem 0 0 5rem;\n  width: 0.5rem;\n  height: 0.25rem;\n}\n.modify button[data-v-5f7746be] {\n  margin: 1.13rem 0 4.67rem 0;\n  width: 5.65rem;\n  height: 0.73rem;\n  background: #2693d4;\n  color: #fff;\n  outline: 0;\n  font-size: 0.28rem;\n}\n"],sourceRoot:""}])},hP8k:function(e,t,n){"use strict";function s(e){n("qDNf")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),o=n("NYxO"),r=n("L6bb"),f=[n("whNU"),n("i4Wu")],m={name:"HelloWorld",data:function(){return{message:"",forgetPhone:"",fImg:"",disable:!1,fCmg:"",fNew:"",newPwType:"password",newUrl:f[0],fPw:"",pwType:"password",verUrl:f[0],fgetNew:!1,fget:!0,count:"",msg:"Welcome to Your Vue.js App",imgUrl:"/xinda-api/ajaxAuthcode"}},created:function(){this.setTitle("忘记密码")},methods:a()({},Object(o.b)(["setTitle"]),{buttonChange:function(){this.imgUrl=this.imgUrl+"?t"+(new Date).getTime()},fpBlur:function(){""==this.forgetPhone&&(this.message="手机号不能为空")},fpFocus:function(){this.message=""},fiBlur:function(){var e=this;""==this.fImg?this.message="图片验证码不能为空":this.ajax.post("/xinda-api/register/valid-sms",this.qs.stringify({cellphone:this.forgetPhone,smsType:1,validCode:111111})).then(function(t){-2==t.data.status?e.message="":1==t.data.status?e.message="手机号未注册":-3==t.data.status?e.message="图片验证码错误":e.message="手机号格式错误"})},fiFocus:function(){this.message="",""!=this.fImg&&(this.imgUrl=this.imgUrl+"?t"+(new Date).getTime(),this.fImg="")},fcBlur:function(){""==this.fCmg?this.message="动态验证码不能为空":111111==this.fCmg?this.message="":this.message="动态验证码错误"},fcFocus:function(){this.message=""},fnBlur:function(){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;""==this.fNew?this.message="新密码不能为空":e.test(this.fNew)?this.message="":this.message="新密码格式错误"},fnFocus:function(){this.message=""},changeType:function(){this.newPwType="password"===this.newPwType?"text":"password","password"===this.newPwType?this.newUrl=f[0]:this.newUrl=f[1]},chVerType:function(){this.pwType="password"===this.pwType?"text":"password","password"===this.pwType?this.verUrl=f[0]:this.verUrl=f[1]},fPwBlur:function(){""==this.fPw?this.message="确认密码不能为空":this.fNew==this.fPw?this.message="":this.message="两次输入密码不一致"},fPwFocus:function(){this.message=""},gutCode:function(){var e=this;""==this.forgetPhone?this.message="手机号不能为空":/^1[3578]\d{9}$/.test(this.forgetPhone)?(this.message="",""==this.fImg?this.message="图片验证码不能为空":this.ajax.post("/xinda-api/register/sendsms",this.qs.stringify({cellphone:this.forgetPhone,smsType:1,imgCode:this.fImg})).then(function(t){if(1==t.data.status){e.message="",e.disable=!0,e.fgetNew=!0,e.fget=!1;var n=e;e.count=60;var s=setInterval(function(){1==--n.count&&(clearInterval(s),n.disable=!1,n.fgetNew=!1,n.fget=!0,this.imgUrl=this.imgUrl+"?t"+(new Date).getTime())},1e3)}else e.message="图片验证码错误"})):this.message="手机号格式错误"},modifyBut:function(){var e=this,t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;""==this.forgetPhone?this.message="手机号不能为空":""==this.fImg?this.message="图片验证码不能为空":""==this.fCmg?this.message="动态验证码不能为空":""==this.fNew?this.message="新密码不能为空":""==this.fPw&&(this.message="确认密码不能为空"),this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/register/findpas",this.qs.stringify({cellphone:this.forgetPhone,smsType:1,validCode:111111,password:r(this.fNew)})).then(function(n){1==n.data.status&&t.test(e.fNew)&&e.fNew==e.fPw?(location.href="#/weChatdog/wLogin",e.message=""):-2==n.data.status?e.message="手机号未注册":-3==n.data.status&&(e.message="图片验证码错误")})}})},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"r-outter"},[n("div",{staticClass:"r-content"},[n("p",{staticClass:"msg"},[e._v(e._s(e.message))]),e._v(" "),n("li",{staticClass:"phone"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.forgetPhone,expression:"forgetPhone"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.forgetPhone},on:{blur:e.fpBlur,focus:e.fpFocus,input:function(t){t.target.composing||(e.forgetPhone=t.target.value)}}})]),e._v(" "),n("li",{staticClass:"code-img"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fImg,expression:"fImg"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.fImg},on:{blur:e.fiBlur,focus:e.fiFocus,input:function(t){t.target.composing||(e.fImg=t.target.value)}}}),e._v(" "),n("img",{attrs:{src:e.imgUrl,alt:""},on:{click:e.buttonChange}})]),e._v(" "),n("li",{staticClass:"code-phone"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fCmg,expression:"fCmg"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.fCmg},on:{blur:e.fcBlur,focus:e.fcFocus,input:function(t){t.target.composing||(e.fCmg=t.target.value)}}}),e._v(" "),n("button",{class:{blue:1==e.disable},attrs:{disabled:e.disable},on:{click:e.gutCode}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.fget,expression:"fget"}],attrs:{id:"blueget"}},[e._v("点击获取")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.fgetNew,expression:"fgetNew"}],attrs:{id:"bluegetNew"}},[e._v("重新获取"+e._s(e.count))])])]),e._v(" "),n("li",{staticClass:"newPw"},["checkbox"===e.newPwType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.fNew,expression:"fNew"}],attrs:{placeholder:"请输入新密码",type:"checkbox"},domProps:{checked:Array.isArray(e.fNew)?e._i(e.fNew,null)>-1:e.fNew},on:{blur:e.fnBlur,focus:e.fnFocus,change:function(t){var n=e.fNew,s=t.target,i=!!s.checked;if(Array.isArray(n)){var a=e._i(n,null);s.checked?a<0&&(e.fNew=n.concat([null])):a>-1&&(e.fNew=n.slice(0,a).concat(n.slice(a+1)))}else e.fNew=i}}}):"radio"===e.newPwType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.fNew,expression:"fNew"}],attrs:{placeholder:"请输入新密码",type:"radio"},domProps:{checked:e._q(e.fNew,null)},on:{blur:e.fnBlur,focus:e.fnFocus,change:function(t){e.fNew=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.fNew,expression:"fNew"}],attrs:{placeholder:"请输入新密码",type:e.newPwType},domProps:{value:e.fNew},on:{blur:e.fnBlur,focus:e.fnFocus,input:function(t){t.target.composing||(e.fNew=t.target.value)}}}),e._v(" "),n("img",{staticClass:"eye",attrs:{src:e.newUrl,alt:""},on:{click:e.changeType}})]),e._v(" "),n("li",{staticClass:"pw"},["checkbox"===e.pwType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.fPw,expression:"fPw"}],attrs:{placeholder:"请再次输入密码",type:"checkbox"},domProps:{checked:Array.isArray(e.fPw)?e._i(e.fPw,null)>-1:e.fPw},on:{blur:e.fPwBlur,focus:e.fPwFocus,change:function(t){var n=e.fPw,s=t.target,i=!!s.checked;if(Array.isArray(n)){var a=e._i(n,null);s.checked?a<0&&(e.fPw=n.concat([null])):a>-1&&(e.fPw=n.slice(0,a).concat(n.slice(a+1)))}else e.fPw=i}}}):"radio"===e.pwType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.fPw,expression:"fPw"}],attrs:{placeholder:"请再次输入密码",type:"radio"},domProps:{checked:e._q(e.fPw,null)},on:{blur:e.fPwBlur,focus:e.fPwFocus,change:function(t){e.fPw=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.fPw,expression:"fPw"}],attrs:{placeholder:"请再次输入密码",type:e.pwType},domProps:{value:e.fPw},on:{blur:e.fPwBlur,focus:e.fPwFocus,input:function(t){t.target.composing||(e.fPw=t.target.value)}}}),e._v(" "),n("img",{staticClass:"eye",attrs:{src:e.verUrl,alt:""},on:{click:e.chVerType}}),e._v(" "),n("a",{attrs:{href:"#/weChatdog/wLogin"}},[e._v("返回登录")])]),e._v(" "),n("li",{staticClass:"modify"},[n("button",{on:{click:e.modifyBut}},[e._v("确认修改")])])])])},d=[],c={render:l,staticRenderFns:d},A=c,u=n("VU/8"),g=s,p=u(m,A,!1,g,"data-v-5f7746be",null);t.default=p.exports},qDNf:function(e,t,n){var s=n("e3X2");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("dcf2bf68",s,!0)}});
//# sourceMappingURL=15.a2c707c6c182c786575b.js.map