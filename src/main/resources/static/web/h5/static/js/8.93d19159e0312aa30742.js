webpackJsonp([8],{"7cwu":function(e,a,n){(e.exports=n("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"submitTq.vue",sourceRoot:""}])},"8XRR":function(e,a,n){var l=n("7cwu");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);n("rjj0")("251ab763",l,!1,{})},T6PB:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,i=n("bOdI"),c=n.n(i),r=n("/vau"),d=n("OKQQ"),t=n("gyMJ"),u=n("VuIw"),v=n("5Ah4"),h=n("rWYZ"),m=n("ei4f"),s=n.n(m),o={components:{FzyCascaderTree:v.a},data:function(){return{isImagePreview:!1,openMenu:!1,detail:{},params:{companyId:u.a.getJSON().companyId,managerId:u.a.getJSON().userId,status:"1"},businessLevOneRules:[{validate:function(e){return!!e},message:""}],cascaderArr:[],cascaderTree:[],cooperationLevArr:[],cooperationLevTree:[]}},watch:{cooperationLevArr:function(e,a){e=e||[],this.params.businessLevOne=e[0]||"",this.params.businessLevTwo=e[1]||"",this.params.businessLevThree=e[2]||""},cascaderArr:function(e,a){e=e||[],this.params.province=e[0]||"",this.params.city=e[1]||"",this.params.area=e[2]||""}},filters:{loadImage:function(e){return e?r.b+"/fms/upload/resource/thumbnail/"+e:""},previewLoadImage:function(e){return e?r.b+"/fms/upload/resource/"+e:""}},created:function(){this.intiMerchantType(),this.id=JSON.parse(u.b.get()),this.id?(this.initDetail(),this.sourceData=Object(h.a)(),this.tmpSourceData=this.sourceData):this.$toast.error("详情数据丢失")},mounted:function(){},methods:(l={saveBtn:function(){var e=this,a={id:this.detail.id,tqSxfMccId:this.detail.tqSxfMccId,tqSxfMccName:this.detail.tqSxfMccName,tqsxfWxRate:this.detail.tqsxfWxRate/100,tqsxfZfbRate:this.detail.tqsxfZfbRate/100,openingPermit:this.detail.openingPermit};t.b.zfBAdd(a).then(function(a){console.log(a),200===a.code?e.$toast.success(a.msg):e.$toast.info(a.msg)},function(a){e.$toast.success(a.msg)})},intiMerchantType:function(){var e=this.loopSet(s.a);this.cooperationLevTree=e},loopSet:function(e){var a=this;return e.forEach(function(e){return a.$set(e,"id",e.name),e.children&&e.children.length&&(e.children=a.loopSet(e.children)),e}),e},onBack:function(){this.$router.push({name:d.j})},submitBtn:function(){var e=this,a={id:this.detail.id,tqSxfMccId:this.detail.tqSxfMccId,tqSxfMccName:this.detail.tqSxfMccName,tqsxfWxRate:this.detail.tqsxfWxRate/100,tqsxfZfbRate:this.detail.tqsxfZfbRate/100,openingPermit:this.detail.openingPermit};t.b.tqsxfInto(a).then(function(a){200===a.code&&(e.$toast.success("提交成功！请留意进件状态"),e.$router.push({name:d.j})),console.log(a)}),console.log(a)},initDetail:function(){this.detail=JSON.parse(u.c.get()),"SUBJECT_TYPE_INDIVIDUAL"==this.detail.subjectType?this.comTypeName="个体工商户":"SUBJECT_TYPE_ENTERPRISE"!=this.detail.subjectType||(this.comTypeName="企业"),this.detail.zfbRate=this.detail.zfbRate,this.merchantName=JSON.parse(u.d.get()),this.merchantName=this.merchantName.merchantName},previewImage:function(e){e&&(this.imgUrl=e,this.isImagePreview=!0)},callTakePhoto:function(e){this.photoTaker=+e,this.openMenu=!0},onFileChange:function(e){var a=this;if(e.target.files){var n=e.target.files[0];n&&t.b.uploadImage(n).then(function(e){if(200===e.code){a.$toast.success("图片上传成功");var n=e.obj;1===a.photoTaker?a.$set(a.detail,"openingPermit",n):a.$toast.error(e.msg)}})}},onTakePhoto:function(e){1==+e?this.$refs.fileCamera.click():2==+e&&this.$refs.file.click(),this.openMenu=!1},getImage:function(e){return e?r.b+"/fms/upload/resource/thumbnail/"+e:""},change1:function(e){console.log("##",e),this.detail.tqSxfMccName=e[0].name+"/"+e[1].name+"/"+e[2].name,this.detail.tqSxfMccId=e[2].value}},c()(l,"intiMerchantType",function(){var e=this.loopSet(s.a);this.cooperationLevTree=e}),c()(l,"loopSet",function(e){var a=this;return e.forEach(function(e){return a.$set(e,"id",e.name),e.children&&e.children.length&&(e.children=a.loopSet(e.children)),e}),e}),l)},f=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("div",{staticClass:"client-info-detail frame-container box"},[n("div",{staticClass:"client-info-detail__padding"}),e._v(" "),n("div",{staticClass:"client-info-detail__nav box plr-30 align-hor-bet",staticStyle:{position:"relative","z-index":"999"}},[n("div",{staticClass:"icon iconfont  iconreturn",on:{click:e.onBack}}),e._v(" "),n("div",{staticClass:"title"},[e._v("天阙")]),e._v(" "),n("div",{staticClass:"text",staticStyle:{"background-color":"#4ba8ff",padding:"3px",color:"white","border-radius":"5px"},on:{click:e.saveBtn}},[e._v("保存")])]),e._v(" "),n("div",{staticClass:"client-info-detail__content"},[n("div",{staticClass:"match-width box align-default"},[n("div",{staticClass:"title"},[e._v("经营者信息")]),e._v(" "),n("mu-form",[n("mu-form-item",{staticStyle:{margin:"0 10px",padding:"0"},attrs:{label:"",prop:"businessLevOne",rules:e.businessLevOneRules}},[n("FzyCascaderTree",{attrs:{dataTree:e.cooperationLevTree,label:"经营类别",placeholder:"请选择经营类别",modalLabel:"选择经营类别",required:!0},on:{change1:e.change1},model:{value:e.cooperationLevArr,callback:function(a){e.cooperationLevArr=a},expression:"cooperationLevArr"}}),e._v(" "),n("mu-text-field",{staticStyle:{display:"none"},model:{value:e.params.businessLevOne,callback:function(a){e.$set(e.params,"businessLevOne",a)},expression:"params.businessLevOne"}})],1)],1),e._v(" "),n("div",{staticClass:"item"},[e._m(0),e._v(" "),n("div",{staticClass:"match-left-space align-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.tqsxfWxRate,expression:"detail.tqsxfWxRate"}],attrs:{placeholder:"输入费率0.38~0.6"},domProps:{value:e.detail.tqsxfWxRate},on:{input:function(a){a.target.composing||e.$set(e.detail,"tqsxfWxRate",a.target.value)}}}),e._v("  %\r\n                    ")])]),e._v(" "),n("div",{staticClass:"item"},[e._m(1),e._v(" "),n("div",{staticClass:"match-left-space align-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.detail.tqsxfZfbRate,expression:"detail.tqsxfZfbRate"}],attrs:{placeholder:"输入费率0.38~0.6"},domProps:{value:e.detail.tqsxfZfbRate},on:{input:function(a){a.target.composing||e.$set(e.detail,"tqsxfZfbRate",a.target.value)}}}),e._v("  %\r\n                    ")])]),e._v(" "),n("div",{staticClass:"item"},[e._m(2),e._v(" "),n("div",{staticClass:"match-left-space align-right"},[n("div",{staticClass:"match-left-space",on:{click:function(a){e.callTakePhoto(1)}}},[e._v(" ")]),e._v(" "),n("div",{staticClass:"input align-right",staticStyle:{width:"auto"}},[e.detail.openingPermit?n("img",{attrs:{src:e._f("loadImage")(e.detail.openingPermit)},on:{click:function(a){e.previewImage(e.detail.openingPermit)}}}):e._e(),e._v(" "),n("div",{staticClass:"icon iconfont iconenter ml-10",on:{click:function(a){e.callTakePhoto(1)}}})])])]),e._v(" "),n("div",{staticClass:"match-width box align-center"},[n("div",{staticClass:"next box align-center",on:{click:e.submitBtn}},[e._v("\r\n                    确认提交\r\n                ")])])],1)])]),e._v(" "),n("div",{staticClass:"file"},[n("input",{ref:"fileCamera",attrs:{type:"file",capture:"camera",accept:"image/*"},on:{change:e.onFileChange}}),e._v(" "),n("div",{staticClass:"cover"})]),e._v(" "),n("div",{staticClass:"file"},[n("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}}),e._v(" "),n("div",{staticClass:"cover"})]),e._v(" "),e.isImagePreview?n("div",{staticClass:"cover-x align-default",on:{click:function(a){e.isImagePreview=!1}}},[n("div",{staticClass:"match-left-space"}),e._v(" "),n("div",{staticClass:"image-preview"},[n("img",{staticClass:"match-parent",attrs:{src:e._f("previewLoadImage")(e.imgUrl)}})]),e._v(" "),n("div",{staticClass:"match-left-space"})]):e._e(),e._v(" "),n("mu-bottom-sheet",{attrs:{open:e.openMenu},on:{"update:open":function(a){e.openMenu=a}}},[n("div",{staticClass:"action-sheet box align-default menu"},[n("div",{staticClass:"item align-center",on:{click:function(a){e.onTakePhoto(1)}}},[e._v("\r\n      拍照\r\n      ")]),e._v(" "),n("div",{staticClass:"item align-center",on:{click:function(a){e.onTakePhoto(2)}}},[e._v("\r\n      从手机相册选择\r\n      ")]),e._v(" "),n("div",{staticClass:"item align-center cancel",on:{click:function(a){e.onActionMenuShow(2)}}},[e._v("\r\n      取消\r\n      ")]),e._v(" "),n("div",{staticClass:"action-sheet__padding"})])])],1)};f._withStripped=!0;var p={render:f,staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"subtitle"},[a("span",{staticClass:"star"},[this._v("*")]),this._v("微信费率\r\n                    ")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"subtitle"},[a("span",{staticClass:"star"},[this._v("*")]),this._v("支付宝费率\r\n                    ")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"subtitle"},[a("span",{staticClass:"star"}),this._v("开户许可证\r\n                ")])}]},g=p;var _=!1;var b=n("VU/8")(o,g,!1,function(e){_||n("8XRR")},"data-v-7e8df76a",null);b.options.__file="src\\pages\\clientInfo\\submitTq.vue";a.default=b.exports},ei4f:function(e,a){e.exports=[{value:"航旅交通",name:"航旅交通",children:[{value:"公共交通",name:"公共交通",children:[{value:"4121",name:"出租车服务（TAXI）",children:[]},{value:"4457",name:"出租船只",children:[]},{value:"4468",name:"船舶、海运服务提供商",children:[]},{value:"4111",name:"公共交通",children:[]},{value:"4119",name:"急救服务",children:[]},{value:"4784",name:"路桥通行费",children:[]},{value:"4011",name:"铁路货运",children:[]},{value:"4112",name:"铁路客运",children:[]},{value:"4411",name:"游轮及巡游航线服务",children:[]},{value:"4131",name:"长途公路客运",children:[]},{value:"4013",name:"ETC不停车自动缴费",children:[]},{value:"4014",name:"MTC半自动车道收费",children:[]},{value:"4015",name:"地铁",children:[]}]},{value:"航空票务",name:"航空票务",children:[{value:"4511",name:"航空公司",children:[]},{value:"4514",name:"航空系统商",children:[]},{value:"4582",name:"机场服务",children:[]},{value:"4512",name:"机票代理人",children:[]},{value:"4513",name:"机票平台",children:[]}]},{value:"旅行住宿",name:"旅行住宿",children:[{value:"4733",name:"大型旅游景点",children:[]},{value:"7012",name:"度假用别墅服务",children:[]},{value:"4723",name:"国际货运代理和报关行",children:[]},{value:"7033",name:"活动房车场及野营场所",children:[]},{value:"4722",name:"旅行社和旅游服务",children:[]},{value:"4789",name:"未列入其他代码的运输服务",children:[]},{value:"7032",name:"运动和娱乐露营",children:[]},{value:"7011",name:"住宿服务（旅馆、酒店、汽车旅馆、度假村等）",children:[]}]},{value:"物流仓储",name:"物流仓储",children:[{value:"4225",name:"公共仓储、集装整理",children:[]},{value:"4215",name:"快递服务",children:[]},{value:"4214",name:"物流货运服务",children:[]}]}]},{value:"商业及生活服务",name:"商业及生活服务",children:[{value:"承包商（农业、建筑、出版）",name:"承包商（农业、建筑、出版）",children:[{value:"1731",name:"电器承包商",children:[]},{value:"1771",name:"混凝土承包商",children:[]},{value:"1740",name:"建筑材料承包商",children:[]},{value:"1761",name:"金属产品承包商",children:[]},{value:"0780",name:"景观美化与园艺服务",children:[]},{value:"1711",name:"空调类承包商",children:[]},{value:"1750",name:"木工承包商",children:[]},{value:"0763",name:"农业合作与农具",children:[]},{value:"0743",name:"葡萄酒生产商",children:[]},{value:"1799",name:"其他工程承包商",children:[]},{value:"0744",name:"其他酒类生产商",children:[]},{value:"0742",name:"兽医服务",children:[]}]},{value:"房地产",name:"房地产",children:[{value:"7013",name:"不动产代理——房地产经纪",children:[]},{value:"6513",name:"不动产管理－物业管理",children:[]},{value:"1520",name:"房地产开发商",children:[]}]},{value:"公共事业",name:"公共事业",children:[{value:"4906",name:"充电桩",children:[]},{value:"4900",name:"公共事业（电、气、水）",children:[]},{value:"4901",name:"公共事业-电力缴费",children:[]},{value:"4902",name:"公共事业-煤气缴费",children:[]},{value:"4904",name:"公共事业-清洁服务缴费",children:[]},{value:"4903",name:"公共事业-自来水缴费",children:[]},{value:"4905",name:"图书馆",children:[]},{value:"4908",name:"其他缴费",children:[]},{value:"4909",name:"有线电视缴费",children:[]}]},{value:"金融服务",name:"金融服务",children:[{value:"6301",name:"保险代理",children:[]},{value:"6300",name:"保险公司",children:[]},{value:"5933",name:"典当行",children:[]},{value:"4829",name:"电汇和汇票服务",children:[]},{value:"6760",name:"个人资金借贷",children:[]},{value:"6050",name:"贵金属投资",children:[]},{value:"6012",name:"金融机构-其他服务",children:[]},{value:"6010",name:"金融机构-商业银行服务",children:[]},{value:"6011",name:"金融机构-自动现金服务",children:[]},{value:"6051",name:"外币汇兑",children:[]},{value:"6211",name:"证券期货基金",children:[]},{value:"6068",name:"借贷消费平台",children:[]},{value:"6064",name:"金融租赁公司",children:[]},{value:"6062",name:"汽车金融公司",children:[]},{value:"6067",name:"融资担保公司",children:[]},{value:"6063",name:"融资租赁公司",children:[]},{value:"6061",name:"消费金融公司",children:[]},{value:"6060",name:"小贷公司",children:[]},{value:"6065",name:"信托公司",children:[]},{value:"6066",name:"支付机构",children:[]},{value:"6069",name:"P2P",children:[]},{value:"6070",name:"网络借贷信息撮合平台",children:[]}]},{value:"汽车租赁和服务",name:"汽车租赁和服务",children:[{value:"7519",name:"房车和娱乐车辆出租",children:[]},{value:"7513",name:"卡车及拖车出租",children:[]},{value:"7534",name:"轮胎翻新、维修",children:[]},{value:"7512",name:"汽车出租",children:[]},{value:"7538",name:"汽车改造等服务（非经销商）",children:[]},{value:"7535",name:"汽车喷漆店",children:[]},{value:"7531",name:"汽车维修、保养、美容装饰",children:[]},{value:"7523",name:"停车服务",children:[]},{value:"7549",name:"拖车服务",children:[]},{value:"7542",name:"洗车",children:[]}]},{value:"商业服务",name:"商业服务",children:[{value:"7393",name:"保安和监控服务",children:[]},{value:"2741",name:"出版印刷服务",children:[]},{value:"7338",name:"复印及绘图服务",children:[]},{value:"7392",name:"公关和企业管理服务",children:[]},{value:"7311",name:"广告服务",children:[]},{value:"5935",name:"海上船只遇难救助",children:[]},{value:"2791",name:"刻版排版服务",children:[]},{value:"7361",name:"猎头、职业中介",children:[]},{value:"7342",name:"灭虫及消毒服务",children:[]},{value:"7399",name:"其他商业服务",children:[]},{value:"7333",name:"商业摄影、设计、绘图服务",children:[]},{value:"7395",name:"商业摄影摄像服务",children:[]},{value:"7394",name:"设备、工具、家具和电器出租",children:[]},{value:"7339",name:"文字处理/翻译速记",children:[]},{value:"7322",name:"债务催收机构",children:[]},{value:"7321",name:"征信和信用报告咨询服务",children:[]},{value:"7349",name:"清洁、保养及门卫服务",children:[]},{value:"2842",name:"清洁抛光服务",children:[]},{value:"7340",name:"商业拓展",children:[]}]},{value:"生活服务",name:"生活服务",children:[{value:"7297",name:"按摩服务",children:[]},{value:"7276",name:"财务债务咨询",children:[]},{value:"7278",name:"导购、经纪和拍卖服务",children:[]},{value:"7296",name:"服装出租",children:[]},{value:"7216",name:"干洗店",children:[]},{value:"7273",name:"婚介服务",children:[]},{value:"7277",name:"婚庆服务",children:[]},{value:"7295",name:"家政服务",children:[]},{value:"7230",name:"美容/美发服务",children:[]},{value:"7298",name:"美容SPA和美体保健",children:[]},{value:"7231",name:"美甲",children:[]},{value:"7261",name:"丧仪殡葬服务",children:[]},{value:"7221",name:"摄影服务",children:[]},{value:"7217",name:"室内清洁服务",children:[]},{value:"7210",name:"洗衣服务",children:[]},{value:"7211",name:"洗熨服务（自助洗衣服务）",children:[]},{value:"7251",name:"鞋帽清洗",children:[]}]},{value:"团购",name:"团购",children:[{value:"5310",name:"团购及折扣店",children:[]}]},{value:"维修服务",name:"维修服务",children:[{value:"7629",name:"办公电器和小家电维修",children:[]},{value:"7622",name:"电器维修",children:[]},{value:"7699",name:"各类维修相关服务",children:[]},{value:"7692",name:"焊接维修服务",children:[]},{value:"7641",name:"家具维修、翻新",children:[]},{value:"7623",name:"空调、制冷设备维修",children:[]},{value:"7631",name:"手表、钟表和首饰维修店",children:[]}]},{value:"直销",name:"直销",children:[{value:"5960",name:"保险直销（代扣）",children:[]},{value:"5967",name:"电话接入直销",children:[]},{value:"5966",name:"电话外呼直销",children:[]},{value:"5968",name:"订阅订购服务",children:[]},{value:"5962",name:"旅游相关服务直销",children:[]},{value:"5964",name:"目录直销平台",children:[]},{value:"5963",name:"上门直销（直销员）",children:[]},{value:"5969",name:"直销",children:[]},{value:"5965",name:"直销代理",children:[]}]},{value:"无人值守服务",lable:"无人值守服务",children:[{value:"自助贩卖机",lable:"6071",children:[]},{value:"自助零售",lable:"6072",children:[]},{value:"自助借还",lable:"6073",children:[]},{value:"自助娱乐服务",lable:"6074",children:[]},{value:"其他自助生活服务",lable:"6075",children:[]}]}]},{value:"生活百货",name:"生活百货",children:[{value:"百货商城",name:"百货商城",children:[{value:"5411",name:"超市（非平台类）",children:[]},{value:"5914",name:"成人用品/避孕用品/情趣内衣",children:[]},{value:"5309",name:"国外代购及免税店",children:[]},{value:"5300",name:"会员制批量零售店",children:[]},{value:"5311",name:"平台类综合商城",children:[]},{value:"5999",name:"其他专业零售店",children:[]},{value:"5399",name:"其他综合零售",children:[]},{value:"5984",name:"烟花爆竹",children:[]},{value:"5983",name:"油品燃料经销",children:[]},{value:"5331",name:"杂货店",children:[]},{value:"5998",name:"帐篷和遮阳篷商店",children:[]},{value:"5715",name:"酒精饮料批发商（国际专用）",children:[]}]},{value:"服饰鞋包",name:"服饰鞋包",children:[{value:"5697",name:"裁缝、修补、改衣制衣",children:[]},{value:"5691",name:"高档时装及奢侈品",children:[]},{value:"5699",name:"各类服装及饰物",children:[]},{value:"5948",name:"行李箱包",children:[]},{value:"5698",name:"假发等饰品",children:[]},{value:"5611",name:"男性服饰",children:[]},{value:"5651",name:"内衣/家居服",children:[]},{value:"5621",name:"女性成衣",children:[]},{value:"5631",name:"配饰商店",children:[]},{value:"5681",name:"皮草皮具",children:[]},{value:"5661",name:"鞋类",children:[]},{value:"5139",name:"鞋类销售平台（批发商）",children:[]},{value:"5137",name:"制服与商务正装定制",children:[]}]},{value:"家居家纺建材",name:"家居家纺建材",children:[{value:"5718",name:"壁炉、屏风",children:[]},{value:"5231",name:"玻璃、油漆涂料、墙纸",children:[]},{value:"5131",name:"布料、缝纫用品和其他纺织品（批发商）",children:[]},{value:"5261",name:"草坪和花园用品",children:[]},{value:"5714",name:"窗帘、帷幕、室内装潢",children:[]},{value:"5200",name:"大型仓储式家庭用品卖场",children:[]},{value:"5713",name:"地板和地毯",children:[]},{value:"5719",name:"各种家庭装饰专营",children:[]},{value:"5193",name:"花木栽种用品、苗木和花卉（批发商）",children:[]},{value:"5712",name:"家具/家庭摆设",children:[]},{value:"5949",name:"家用纺织品",children:[]},{value:"5251",name:"家用五金工具",children:[]},{value:"5211",name:"木材与建材商店",children:[]},{value:"5039",name:"未列入其他代码的建材（批发商）",children:[]},{value:"5198",name:"油漆、清漆用品（批发商）",children:[]},{value:"5996",name:"游泳、SPA、洗浴设备",children:[]}]},{value:"美妆珠宝配饰",name:"美妆珠宝配饰",children:[{value:"5977",name:"化妆品",children:[]},{value:"5997",name:"男士用品：剃须刀、烟酒具、瑞士军刀",children:[]},{value:"5944",name:"钟表店",children:[]},{value:"5094",name:"珠宝和金银饰品",children:[]}]},{value:"母婴玩具",name:"母婴玩具",children:[{value:"5641",name:"母婴用品",children:[]},{value:"5945",name:"玩具、游戏用品",children:[]}]},{value:"数码家电",name:"数码家电",children:[{value:"5722",name:"家用电器",children:[]},{value:"5045",name:"商用计算机及服务器",children:[]},{value:"4812",name:"手机、通讯设备销售",children:[]},{value:"5732",name:"数码产品及配件",children:[]},{value:"5946",name:"专业摄影器材",children:[]}]},{value:"图书音像",name:"图书音像",children:[{value:"5994",name:"报纸、杂志",children:[]},{value:"5192",name:"书、期刊和报纸（批发商）",children:[]},{value:"5942",name:"书籍",children:[]},{value:"5735",name:"音像制品",children:[]}]},{value:"文化玩乐宠物",name:"文化玩乐宠物",children:[{value:"5995",name:"宠物及宠物用品",children:[]},{value:"5950",name:"瓷器、玻璃和水晶摆件",children:[]},{value:"5970",name:"工艺美术用品",children:[]},{value:"5937",name:"古玩复制品（赝品）",children:[]},{value:"5992",name:"花店",children:[]},{value:"7993",name:"家用电子游戏",children:[]},{value:"5931",name:"旧商品店、二手商品店",children:[]},{value:"5733",name:"乐器",children:[]},{value:"5947",name:"礼品、卡片、纪念品",children:[]},{value:"5932",name:"文物古董",children:[]},{value:"5971",name:"艺术品和画廊",children:[]},{value:"5972",name:"邮票/纪念币",children:[]},{value:"5973",name:"宗教物品",children:[]}]},{value:"饮食保健",name:"饮食保健",children:[{value:"5467",name:"保健品",children:[]},{value:"5812",name:"餐厅、订餐服务",children:[]},{value:"5466",name:"茶叶",children:[]},{value:"5813",name:"酒吧、舞厅、夜总会",children:[]},{value:"5921",name:"酒类",children:[]},{value:"5814",name:"快餐店",children:[]},{value:"5815",name:"咖啡厅、茶馆",children:[]},{value:"5423",name:"水果店",children:[]},{value:"5462",name:"面包糕点",children:[]},{value:"5499",name:"其他食品零售",children:[]},{value:"5422",name:"肉、禽、蛋及水产品",children:[]},{value:"5451",name:"乳制品/冷饮",children:[]},{value:"5441",name:"糖果及坚果商店",children:[]},{value:"5993",name:"烟草/雪茄",children:[]},{value:"5811",name:"宴会提供商",children:[]},{value:"5880",name:"校园团餐",children:[]},{value:"5881",name:"综合团餐",children:[]}]},{value:"运动户外",name:"运动户外",children:[{value:"5941",name:"体育用品/器材",children:[]},{value:"5655",name:"运动服饰",children:[]},{value:"5940",name:"自行车及配件",children:[]}]}]},{value:"网络虚拟",name:"网络虚拟",children:[{value:"彩票",name:"彩票",children:[{value:"7995",name:"彩票",children:[]}]},{value:"互联网服务",name:"互联网服务",children:[{value:"7409",name:"SNS社交网站",children:[]},{value:"4816",name:"互联网IDC服务",children:[]},{value:"5734",name:"计算机软件",children:[]},{value:"7379",name:"计算机维护和修理服务",children:[]},{value:"7374",name:"门户网站",children:[]},{value:"7413",name:"其他在线应用或综合类",children:[]},{value:"7372",name:"软件系统商",children:[]},{value:"7414",name:"视频点播",children:[]},{value:"7412",name:"手机图铃",children:[]},{value:"7373",name:"网络论坛",children:[]},{value:"7408",name:"网站设计、推广",children:[]},{value:"7375",name:"信息检索服务（信息平台）",children:[]},{value:"7410",name:"休闲游戏",children:[]},{value:"7411",name:"在线文学类",children:[]}]},{value:"数娱网游",name:"数娱网游",children:[{value:"7954",name:"网络游戏点卡、渠道代理",children:[]},{value:"7958",name:"网游运营商（含网页游戏）",children:[]},{value:"7957",name:"网游周边服务、交易平台",children:[]},{value:"7956",name:"游戏系统商",children:[]}]},{value:"娱乐票务",name:"娱乐票务",children:[{value:"7933",name:"保龄球",children:[]},{value:"7994",name:"电玩娱乐场所",children:[]},{value:"7832",name:"电影院及电影票",children:[]},{value:"7998",name:"动物园、水族馆",children:[]},{value:"7992",name:"高尔夫球场",children:[]},{value:"7911",name:"歌舞厅/夜店",children:[]},{value:"7997",name:"健身和运动俱乐部",children:[]},{value:"7929",name:"乐队和文艺表演",children:[]},{value:"7999",name:"其他娱乐服务",children:[]},{value:"7941",name:"体育场馆",children:[]},{value:"7922",name:"演出票务服务",children:[]},{value:"7829",name:"艺术创作服务",children:[]},{value:"7841",name:"音像制品出租",children:[]},{value:"7996",name:"游乐园、马戏团、嘉年华",children:[]},{value:"7991",name:"展览和艺术场馆",children:[]},{value:"7932",name:"桌球/桌游",children:[]}]},{value:"电信通讯",name:"电信通讯",children:[{value:"4814",name:"电信运营商",children:[]},{value:"4899",name:"付费电视",children:[]},{value:"4815",name:"话费充值与缴费",children:[]},{value:"4821",name:"网络电话、传真",children:[]}]}]},{value:"专业服务",name:"专业服务",children:[{value:"教育服务",name:"教育服务",children:[{value:"8220",name:"大学与学院",children:[]},{value:"8351",name:"儿童保育服务（含学前教育）",children:[]},{value:"8241",name:"函授学校（成人教育）",children:[]},{value:"8299",name:"其他学校和教育服务",children:[]},{value:"8244",name:"商业和文秘学校",children:[]},{value:"8298",name:"少年宫及青少年发展中心",children:[]},{value:"8249",name:"职业技能培训",children:[]},{value:"8211",name:"中小学校",children:[]}]},{value:"其他",name:"其他",children:[{value:"9702",name:"GCAS紧急服务（仅限Visa使用）",children:[]},{value:"9701",name:"Visa信任服务",children:[]},{value:"9715",name:"档案",children:[]},{value:"9752",name:"电子档案",children:[]},{value:"9950",name:"站内清算",children:[]}]},{value:"社会组织",name:"社会组织",children:[{value:"8398",name:"慈善和社会公益服务",children:[]},{value:"8641",name:"行业协会和专业社团",children:[]},{value:"8699",name:"其他会员组织",children:[]},{value:"8675",name:"汽车协会",children:[]},{value:"8651",name:"政府机构",children:[]},{value:"8661",name:"宗教组织",children:[]}]},{value:"医疗服务",name:"医疗服务",children:[{value:"8041",name:"按摩医生",children:[]},{value:"8062",name:"公立医院",children:[]},{value:"8050",name:"护理和照料服务",children:[]},{value:"8099",name:"其他医疗保健服务",children:[]},{value:"8011",name:"诊所",children:[]},{value:"8049",name:"公立社区卫生服务中心、卫生院",children:[]},{value:"8021",name:"牙科医生",children:[]},{value:"8043",name:"眼镜店",children:[]},{value:"8042",name:"眼科医疗服务",children:[]},{value:"8071",name:"医学及牙科实验室",children:[]},{value:"8031",name:"正骨医生",children:[]},{value:"8061",name:"民营医院",children:[]}]},{value:"政府服务",name:"政府服务",children:[{value:"9223",name:"保释金",children:[]},{value:"9211",name:"法庭费用",children:[]},{value:"9402",name:"国家邮政",children:[]},{value:"9222",name:"行政费用和罚款",children:[]},{value:"9399",name:"社会保障服务",children:[]},{value:"9400",name:"使领馆",children:[]},{value:"9311",name:"税务、海关",children:[]},{value:"9405",name:"政府采购",children:[]},{value:"9411",name:"政府贷款",children:[]}]},{value:"专业咨询",name:"专业咨询",children:[{value:"8734",name:"测试实验服务",children:[]},{value:"8111",name:"法律咨询和律师事务所",children:[]},{value:"8931",name:"会计、审计、财务服务",children:[]},{value:"8911",name:"建筑、工程和测量服务",children:[]},{value:"8999",name:"其他专业服务",children:[]},{value:"8912",name:"装修、装潢、园艺",children:[]}]}]},{value:"专业销售",name:"专业销售",children:[{value:"办公用品",name:"办公用品",children:[{value:"5044",name:"办公、影印及微缩摄影器材（批发商）",children:[]},{value:"5021",name:"办公及商务家具（批发商）",children:[]},{value:"5978",name:"打字设备、打印复印机、扫描仪",children:[]},{value:"5046",name:"未列入其他代码的商用器材",children:[]},{value:"5111",name:"文具、办公用品、复印纸和书写纸（批发商）",children:[]},{value:"5943",name:"文具及办公用品",children:[]}]},{value:"工业产品",name:"工业产品",children:[{value:"5065",name:"电气产品和设备",children:[]},{value:"5085",name:"工业设备和制成品",children:[]},{value:"5074",name:"管道及供暖设备",children:[]},{value:"5169",name:"化工产品",children:[]},{value:"5051",name:"金属产品和服务（批发商）",children:[]},{value:"5099",name:"其他工业耐用品",children:[]},{value:"5199",name:"其他工业原料和消耗品",children:[]},{value:"5172",name:"石油及石油产品（批发商）",children:[]},{value:"5072",name:"五金器材及用品（批发商）",children:[]}]},{value:"汽车和运输工具",name:"汽车和运输工具",children:[{value:"5551",name:"船舶及配件销售",children:[]},{value:"5572",name:"电动车及配件",children:[]},{value:"5521",name:"二手车销售",children:[]},{value:"5565",name:"飞机及配件、航道设施",children:[]},{value:"5564",name:"轨道交通设备器材",children:[]},{value:"5271",name:"活动房车销售商",children:[]},{value:"5013",name:"机动车供应及零配件（批发商）",children:[]},{value:"5599",name:"机动车综合经营",children:[]},{value:"5542",name:"加油卡、加油服务",children:[]},{value:"5541",name:"加油站、服务站",children:[]},{value:"5592",name:"露营及旅行汽车",children:[]},{value:"5571",name:"摩托车及配件",children:[]},{value:"5533",name:"汽车零配件",children:[]},{value:"5532",name:"汽车轮胎经销",children:[]},{value:"5511",name:"汽车销售",children:[]},{value:"5561",name:"拖车、篷车及娱乐用车",children:[]},{value:"5598",name:"雪车",children:[]},{value:"5566",name:"运输搬运设备、起重装卸设备",children:[]}]},{value:"药品医疗",name:"药品医疗",children:[{value:"5976",name:"康复和身体辅助用品",children:[]},{value:"5122",name:"药品、药品经营者（批发商）",children:[]},{value:"5912",name:"药物",children:[]},{value:"5047",name:"医疗器械",children:[]},{value:"5975",name:"助听器",children:[]}]}]}]}});
//# sourceMappingURL=8.93d19159e0312aa30742.js.map