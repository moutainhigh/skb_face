webpackJsonp([4],{"T5I/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),n=s.n(i),o=s("CJJO"),a={data:function(){return{htmlProportion:"",htmlWidth:"",htmlheight:"",isWxPay:!0,yenSymbol:"¥",payMoney:"",userId:"",testProcess:"",testMoney:"",testRes:"暂无数据",testFail:"暂无错误信息",merchantName:"测试商家",hasPoint:!1,showMask:!1,remark:"",equipmentId:"123"}},watch:{},created:function(){var t=this;this.htmlWidth=document.documentElement.clientWidth||document.body.clientWidth,this.htmlheight=document.documentElement.clientHeight||document.body.clientHeight,this.htmlProportion=this.htmlWidth/750,this.payMoney=sessionStorage.getItem("totalPrice"),this.userId=sessionStorage.getItem("userId");var e=sessionStorage.getItem("storeId");this.storeId="",null!=e&&""!=e&&e&&(this.storeId=e),this.testProcess="创建页面",this.testMoney=this.payMoney,Object(o.g)(this.userId).then(function(e){t.testProcess="商家信息调取成功",console.log(e),t.merchantName=e.obj}).catch(function(e){console.log(e),t.testProcess="商家信息调取失败，尝试获得错误信息",t.testFail=e})},mounted:function(){var t=this.$refs.inputRef;this.numberPercent(t)},methods:{numberPercent:function(t){var e=this;t.onkeydown=function(t){var s=t.keyCode;if(!(s>95&&s<106||s>47&&s<60||110==s||190==s||8==s||46==s||13==s||9==s||37==s||39==s))return!1;if(190===t.keyCode||110===t.keyCode){if(e.hasPoint)return!1;e.hasPoint=!0}else{var i=e.payMoney||"";if(i.indexOf(".")>-1?e.hasPoint=!0:e.hasPoint=!1,8!==t.keyCode&&46!==t.keyCode){var n=i.split(".");n[1]&&n[1].length>1&&(e.payMoney=parseFloat(i).toFixed(1))}}}},payment:function(){var t=this;this.testProcess="进行付款";var e=this.$route.query.uuid||"";this.showMask=!0,this.equipmentId=sessionStorage.getItem("equipmentId"),Object(o.h)(this.equipmentId,2,this.payMoney,this.userId,this.storeId,e,this.remark).then(function(e){t.testProcess="付款接口调取成功，进行付款跳转",console.log(e),t.testRes=n()(e),window.location.href=e.obj.payUrl,setTimeout(function(){t.showMask=!1},500)}).catch(function(e){console.log(e),t.showMask=!1,t.testProcess="付款接口调取失败，尝试获得错误信息",t.testFail=e})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"lf-store-name",style:{height:150*t.htmlProportion+"px"}},[s("span",{staticClass:"text-lg",staticStyle:{opacity:"0"}},[t._v(t._s(t.merchantName?t.merchantName:"测试商家名"))])]),t._v(" "),s("div",{staticClass:"lf-pay-panel",staticStyle:{height:"10rem"}},[s("div",[t._m(0),t._v(" "),s("div",{staticClass:"two"},[s("span",{staticClass:"text-llg"},[t._v(t._s(t.yenSymbol))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.payMoney,expression:"payMoney"}],ref:"inputRef",staticClass:"text-lg pay-price-input",staticStyle:{padding:"0.1875rem 0.3125rem"},attrs:{type:"number"},domProps:{value:t.payMoney},on:{input:function(e){e.target.composing||(t.payMoney=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"three"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],staticClass:"text-grey",attrs:{type:"text",maxlength:"20",placeholder:"添加备注(20个字以内)"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"lf-pay-btn",style:{height:200*t.htmlProportion+"px"}},[s("div",{on:{click:t.payment}},[s("span",{staticClass:"text-lg text-fs"},[t._v("付 款")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMask,expression:"showMask"}],staticClass:"zfb-mask"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"one"},[e("span",{staticClass:"text-sm"},[this._v("请向收银员询问应付金额")])])}]};var l=s("VU/8")(a,r,!1,function(t){s("UEA5")},null,null);e.default=l.exports},UEA5:function(t,e){}});
//# sourceMappingURL=4.5f206ee417b24646b632.js.map