webpackJsonp([10],{SGKA:function(e,t,r){var n=r("XC0R");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("8db3df44",n,!1,{})},XC0R:function(e,t,r){(e.exports=r("FZ+f")(!0)).push([e.i,"\n.mu-demo-form {\n  font-size: 0.373333rem;\n  font-family: arial;\n}\n.mu-input-content {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n.mu-input.has-label .mu-input-label {\n  top: -0.4rem !important;\n}","",{version:3,sources:["E:/_fzyXm/agentApp/src/pages/login/index.vue"],names:[],mappings:";AAAA;EACE,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,qBAAqB;EACrB,4BAA4B;CAC7B;AAED;EACE,wBAAwB;CACzB",file:"index.vue",sourcesContent:[".mu-demo-form {\n  font-size: 0.373333rem;\n  font-family: arial;\n}\n\n.mu-input-content {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n\n.mu-input.has-label .mu-input-label {\n  top: -0.4rem !important;\n}"],sourceRoot:""}])},fytt:function(e,t,r){e.exports=r.p+"static/img/loginBg.690aa81.jpg"},jT7l:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("woOf"),o=r.n(n),a=r("gyMJ"),s=r("VuIw"),i=r("OKQQ"),u={data:function(){return{usernameRules:[{validate:function(e){return!!e}}],passwordRules:[{validate:function(e){return!!e}}],params:{username:this.$route.query.account,password:this.$route.query.password,remember:!1}}},created:function(){var e=s.f.getJSON();e.username&&this.turnToLogin(e),this.timer()},methods:{timer:function(){var e=this;return setTimeout(function(){e.login()},50)},login:function(){var e=this;this.$refs.form.validate().then(function(t){if(t){var r=o()({},e.params);e.turnToLogin(r)}})},turnToLogin:function(e){var t=this;a.e.login(e).then(function(r){if(1===r.obj.userType||2===r.obj.userType||3===r.obj.userType||4===r.obj.userType){s.f.setJSON(e);var n=o()({},r.obj.levelAlias);n.status?(n.oemName=n.oemName||"服务商",n.firstName=n.firstName||"一级代理商",n.secondName=n.secondName||"二级代理商",n.thirdName=n.thirdName||"三级代理商"):(n.oemName="服务商",n.firstName="一级代理商",n.secondName="二级代理商",n.thirdName="三级代理商"),r.obj.levelAlias=n,s.a.setJSON(r.obj),sessionStorage.token=r.obj.token,t.$router.push({name:i.o})}else t.$toast.error("该代理商用户不存在")})}},watch:{list:function(){this.timer()}},destroyed:function(){clearTimeout(this.timer)}},m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vm-bg-white"},[r("div",{staticClass:"login-body"},[e._m(0),e._v(" "),r("div",{staticClass:"loginLG"}),e._v(" "),r("mu-contanier",[r("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:e.params}},[r("mu-form-item",{attrs:{prop:"username",rules:e.usernameRules}},[r("mu-text-field",{attrs:{prop:"username",placeholder:"请输入手机号码",icon:"account_circle","max-length":"11",autocomplete:"off"},model:{value:e.params.username,callback:function(t){e.$set(e.params,"username",t)},expression:"params.username"}})],1),e._v(" "),r("mu-form-item",{attrs:{prop:"password",rules:e.passwordRules}},[r("mu-text-field",{attrs:{type:"password",placeholder:"请输入密码",icon:"locked","max-length":"22",autocomplete:"off"},model:{value:e.params.password,callback:function(t){e.$set(e.params,"password",t)},expression:"params.password"}})],1),e._v(" "),r("mu-form-item",[r("mu-button",{staticStyle:{background:"#3791CE",opacity:"0.9"},attrs:{color:"primary"},on:{click:e.login}},[e._v("登    录")])],1)],1)],1)],1)])},l=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-pic"},[t("img",{attrs:{src:r("fytt")}})])}];m._withStripped=!0;var c={render:m,staticRenderFns:l},p=c;var f=!1;var d=r("VU/8")(u,p,!1,function(e){f||r("SGKA")},null,null);d.options.__file="src\\pages\\login\\index.vue";t.default=d.exports}});
//# sourceMappingURL=10.108b9102ab657bf0a614.js.map