webpackJsonp([12],{cF9V:function(e,n,t){var i=t("waTO");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("0c1b4c7f",i,!1,{})},cIZu:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("gyMJ"),a=(t("OKQQ"),t("VuIw"),{data:function(){return{payPriceType:0,commissionType:0,isorder:!0,isorder2:!0,agencyDetailList:[],companyId:this.$route.query.companyId,companyName:this.$route.query.companyName,companyType:this.$route.query.companyType}},created:function(){switch(this.getagencyDetail(),this.companyType){case"2":this.companyType="一级代理";break;case"3":this.companyType="二级代理";break;case"4":this.companyType="三级代理"}},methods:{getisorder:function(){this.isorder=!this.isorder,this.isorder?this.payPriceType=0:this.payPriceType=1,this.getagencyDetail()},getisorder2:function(){this.isorder2=!this.isorder2,this.isorder2?this.commissionType=0:this.commissionType=1,this.getagencyDetail()},goback:function(){this.$router.back(-1)},changeType:function(e){this.isactive=e},getagencyDetail:function(){var e=this;i.f.agencyDetail(this.companyId,this.payPriceType,this.commissionType).then(function(n){e.agencyDetailList=n.obj.listVoList},function(n){e.$toast.error(n.msg)})}}}),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"myMerchant"},[t("div",{staticClass:"flex myTitle"},[t("p",{on:{click:e.goback}},[t("i",{staticClass:"el-icon-arrow-left",staticStyle:{"font-size":"16px"}})]),e._v(" "),t("p",{staticStyle:{"font-weight":"600"}},[e._v("代理发展的商户")]),e._v(" "),t("p")]),e._v(" "),t("div",[t("div",{staticClass:"flex",staticStyle:{padding:"10px"}},[1===e.companyType?t("p",[e._v("服务商-"+e._s(e.companyName))]):e._e(),e._v(" "),2===e.companyType?t("p",[e._v("一级代理-"+e._s(e.companyName))]):e._e(),e._v(" "),3===e.companyType?t("p",[e._v("二级代理-"+e._s(e.companyName))]):e._e(),e._v(" "),4===e.companyType?t("p",[e._v("三级代理-"+e._s(e.companyName))]):e._e(),e._v(" "),-1===e.companyType?t("p",[e._v("超级服务商-"+e._s(e.companyName))]):e._e(),e._v(" "),1!=e.companyType&&2!=e.companyType&&3!=e.companyType&&4!=e.companyType&&-1!=e.companyType?t("p",[e._v("超级服务商-"+e._s(e.companyName))]):e._e(),e._v(" "),t("div",{staticClass:"flex"},[t("p",{staticStyle:{"margin-right":"5px",color:"#6A6A6A"}},[e._v("\n          销售总额\n          "),t("i",{class:e.isorder?"el-icon-caret-bottom":"el-icon-caret-top",on:{click:e.getisorder}})]),e._v(" "),t("p",{staticStyle:{color:"#6A6A6A"}},[e._v("\n          佣金总额\n          "),t("i",{class:e.isorder2?"el-icon-caret-bottom":"el-icon-caret-top",on:{click:e.getisorder2}})])])]),e._v(" "),t("ul",e._l(e.agencyDetailList,function(n,i){return t("li",{key:i,staticClass:"flex myLi"},[t("div",[t("p",{staticStyle:{"font-size":"14px"}},[e._v(e._s(n.storeName))]),e._v(" "),t("p",{staticClass:"ywy"},[e._v("业务员："+e._s(n.managerName))])]),e._v(" "),t("div",{staticClass:"flex"},[t("div",[t("p",[t("span",{staticClass:"hui"},[e._v("销售总额：")]),e._v(" "),t("span",{staticClass:"hui"},[e._v("￥"+e._s(n.countPayPrice))])]),e._v(" "),t("p",[t("span",{staticClass:"hui"},[e._v("佣金总额：")]),e._v(" "),t("span",{staticClass:"lan"},[e._v("￥"+e._s(n.CommissionMoney))])])])])])}))])])};c._withStripped=!0;var o={render:c,staticRenderFns:[]},s=o;var r=!1;var p=t("VU/8")(a,s,!1,function(e){r||t("cF9V")},"data-v-83f7466c",null);p.options.__file="src\\pages\\agencyDetail\\index.vue";n.default=p.exports},waTO:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.hui[data-v-83f7466c] {\n  color: #9f9f9f;\n}\n.lan[data-v-83f7466c] {\n  color: #3791ce;\n}\n.ywy[data-v-83f7466c] {\n  color: #6f6c6c;\n}\n.myLi[data-v-83f7466c] {\n  padding: 0.266667rem;\n  border-bottom: 0.026667rem solid #f2f2f2;\n}\n.myLi p[data-v-83f7466c] {\n  text-align: left;\n}\n.myType[data-v-83f7466c] {\n  border-bottom: 0.026667rem solid #ecebeb;\n}\n.myType p[data-v-83f7466c] {\n  width: 50%;\n  height: 100%;\n  padding: 0.266667rem;\n}\n.active[data-v-83f7466c] {\n  color: #3791ce;\n  border-bottom: 0.053333rem solid #3791ce;\n}\n.myMerchant[data-v-83f7466c] {\n  background: #fff;\n}\n.myTitle[data-v-83f7466c] {\n  padding: 0.266667rem;\n  height: 1.066667rem;\n}","",{version:3,sources:["E:/_fzyXm/agentApp/src/pages/agencyDetail/index.vue"],names:[],mappings:";AAAA;EACE,eAAe;CAChB;AAED;EACE,eAAe;CAChB;AAED;EACE,eAAe;CAChB;AAED;EACE,qBAAqB;EACrB,yCAAyC;CAC1C;AAED;EACE,iBAAiB;CAClB;AAED;EACE,yCAAyC;CAC1C;AAED;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;CACtB;AAED;EACE,eAAe;EACf,yCAAyC;CAC1C;AAED;EACE,iBAAiB;CAClB;AAED;EACE,qBAAqB;EACrB,oBAAoB;CACrB",file:"index.vue",sourcesContent:[".hui {\n  color: #9f9f9f;\n}\n\n.lan {\n  color: #3791ce;\n}\n\n.ywy {\n  color: #6f6c6c;\n}\n\n.myLi {\n  padding: 0.266667rem;\n  border-bottom: 0.026667rem solid #f2f2f2;\n}\n\n.myLi p {\n  text-align: left;\n}\n\n.myType {\n  border-bottom: 0.026667rem solid #ecebeb;\n}\n\n.myType p {\n  width: 50%;\n  height: 100%;\n  padding: 0.266667rem;\n}\n\n.active {\n  color: #3791ce;\n  border-bottom: 0.053333rem solid #3791ce;\n}\n\n.myMerchant {\n  background: #fff;\n}\n\n.myTitle {\n  padding: 0.266667rem;\n  height: 1.066667rem;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=12.f36c224b05efd1fbb19d.js.map