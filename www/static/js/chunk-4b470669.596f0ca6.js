(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b470669"],{"22e4":function(e,a,t){},"3fd4":function(e,a,t){"use strict";var s=t("22e4"),n=t.n(s);n.a},"5a22":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{height:"100%",background:"#fff","max-width":"700px",margin:"0 auto"}},[t("topBar",{attrs:{isBack:!0,title:"上传"}}),t("div",{staticClass:"upload-content"},[t("div",{staticClass:"item"},[t("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.type,callback:function(a){e.type=a},expression:"type"}},[t("van-radio",{attrs:{name:"1"}},[e._v("图片")]),t("van-radio",{attrs:{name:"4"}},[e._v("视频")])],1)],1),"1"==e.type?t("div",{staticClass:"item"},[t("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.cid,callback:function(a){e.cid=a},expression:"cid"}},e._l(e.cataList,(function(a,s){return t("van-radio",{key:s,attrs:{name:a.id}},[e._v(e._s(a.name))])})),1)],1):e._e(),"1"==e.type?t("div",{staticClass:"item"},[t("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:e.tag,callback:function(a){e.tag=a},expression:"tag"}},[t("van-checkbox",{attrs:{shape:"square",name:"至尊"}},[e._v("至尊")]),t("van-checkbox",{attrs:{shape:"square",name:"极品"}},[e._v("极品")]),t("van-checkbox",{attrs:{shape:"square",name:"精华"}},[e._v("精华")]),t("van-checkbox",{attrs:{shape:"square",name:"风骚"}},[e._v("风骚")]),t("van-checkbox",{attrs:{shape:"square",name:"风韵"}},[e._v("风韵")]),t("van-checkbox",{attrs:{shape:"square",name:"顶级"}},[e._v("顶级")]),t("van-checkbox",{attrs:{shape:"square",name:"豪华"}},[e._v("豪华")]),t("van-checkbox",{attrs:{shape:"square",name:"高级"}},[e._v("高级")]),t("van-checkbox",{attrs:{shape:"square",name:"浪"}},[e._v("浪")]),t("van-checkbox",{attrs:{shape:"square",name:"萌"}},[e._v("萌")]),t("van-checkbox",{attrs:{shape:"square",name:"卡哇伊"}},[e._v("卡哇伊")]),t("van-checkbox",{attrs:{shape:"square",name:"嫩木耳"}},[e._v("嫩木耳")])],1)],1):e._e(),t("div",{staticClass:"rember v-flex v-justify-between v-items-center"},[t("div",[e._v("密码")]),t("div",{staticClass:"passwordInput"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"v-input",attrs:{placeholder:"上传密码",type:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"v-flex v-justify-around v-items-center"},[t("span",{staticStyle:{padding:"0 5px"}},[e._v("记住密码")]),t("van-switch",{attrs:{size:"15px"},on:{change:e.RemberPasswordChange},model:{value:e.remberPassword,callback:function(a){e.remberPassword=a},expression:"remberPassword"}})],1)]),e.fileList.length>0?t("div",{staticStyle:{padding:"10px 0"}},[t("van-button",{attrs:{type:"danger"},on:{click:function(a){return e.emptyImage()}}},[e._v("清空")])],1):e._e(),"4"==e.type?t("div",[t("van-uploader",{attrs:{accept:"video/mp4",multiple:"","max-count":20},model:{value:e.fileList,callback:function(a){e.fileList=a},expression:"fileList"}},[t("van-button",{attrs:{icon:"video",block:"",type:"warning"}},[e._v("上传文件")])],1)],1):e._e(),"1"==e.type?t("div",[t("van-uploader",{attrs:{accept:"image/png, image/jpeg, image/gif,image/jpg",multiple:"","max-count":1e3},model:{value:e.fileList,callback:function(a){e.fileList=a},expression:"fileList"}})],1):e._e(),t("div",{staticStyle:{height:"120px"}}),t("div",{staticClass:"bottom-button"},[t("van-button",{attrs:{disabled:0==e.fileList.length||""==e.password||e.uploading,type:"primary",block:""},on:{click:e.upload}},[e._v("提交")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.uploading,expression:"uploading"}],staticClass:"progress",style:{opacity:e.uploading?1:0}},[t("van-progress",{attrs:{percentage:e.progress}})],1)],1)])],1)},n=[],r=(t("99af"),t("4160"),t("b0c0"),t("159b"),t("96cf"),t("c964")),i=t("fc11"),o={head:function(){return{title:"",meta:[{name:"theme-color",content:"#181818"},{name:"description",content:""},{name:"keywords",content:""}]}},data:function(){var e;return e={remberPassword:!0,type:"1",password:"",fileList:[],progress:0,uploading:!1},Object(i["a"])(e,"remberPassword",!0),Object(i["a"])(e,"cid",1),Object(i["a"])(e,"tag",["极品"]),Object(i["a"])(e,"cataList",[{id:1,name:"极品身材"},{id:2,name:"极品美颜"},{id:3,name:"极品美臀"},{id:4,name:"极品美奶"},{id:5,name:"极品美腰"},{id:6,name:"极品美足"}]),e},mounted:function(){var e=window.localStorage.getItem("remberPassword");e&&(this.remberPassword=!0,this.password=e)},methods:{emptyImage:function(){this.fileList=[]},afterRead:function(e){this.fileList.push(e)},upload:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var t,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""==e.password&&alert("密码不能为空！~"),e.remberPassword&&window.localStorage.setItem("remberPassword",e.password),t=new FormData,s=!0,e.fileList.forEach((function(e,a){t.append(a,e.file),e.size>52428800&&(s=!1)})),0!=e.fileList.length&&s){a.next=7;break}return a.abrupt("return",e.$message.warning("请填写正确的文件格式！"));case 7:return e.uploading=!0,n="",e.cataList.forEach((function(a,t){a.id==e.cid&&(n=a.name)})),e.$toast.loading({message:"上传中...",forbidClick:!0}),a.next=13,e.$axios.post("http://154.214.157.2:7001/api/upload?password=".concat(e.password,"&type=").concat(e.type,"&cid=").concat(e.cid,"&tag=").concat(e.tag,"&cname=").concat(n),t,{onUploadProgress:function(a){e.progress=a.loaded/a.total*100|0}}).then((function(){e.uploading=!1,e.$toast.success("上传成功！"),e.fileList=[],e.progress=0})).catch((function(){e.$toast.fail("上传失败！"),e.uploading=!1,e.progress=0}));case 13:case"end":return a.stop()}}),a)})))()},RemberPasswordChange:function(e){e&&(this.remberPassword=!0,this.password&&window.localStorage.setItem("remberPassword",this.password))}}},c=o,d=(t("3fd4"),t("2877")),p=Object(d["a"])(c,s,n,!1,null,"36638fc2",null);a["default"]=p.exports}}]);