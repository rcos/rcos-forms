webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"container pt-4",attrs:{id:"app"}},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar bg-dark"},[e("a",{staticClass:"navbar-brand text-light",attrs:{href:"#/"}},[this._v("RCOS URP Forms")])])}]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("nlZ8")},null,null).exports,r=s("/ocq"),o=s("fZjL"),l=s.n(o),c=s("sJst"),d=s.n(c),u={name:{x:235,y:165},email:{x:160,y:210},rin:{x:160,y:247},project:{x:1360,y:357},course:{x:320,y:555},credits:{x:320,y:598},date:{x:430,y:1130}},f={name:"Canvas",mounted:function(){var t=this;setTimeout(function(){t.renderForm()},500)},created:function(){window.fields||(window.location="#/")},computed:{downloadUrl:function(){if(window.fields)return window.fields.signature}},methods:{downloadImage:function(){document.getElementById("canvas").toBlob(function(t){d()(t,"rcos_urp_form.png","image/png")})},renderForm:function(){var t=document.getElementById("canvas").getContext("2d"),e=new Image;e.onload=function(){if(t.drawImage(e,0,0),window.fields.signature){var s=new Image;s.onload=function(){t.drawImage(s,100,1080,270,90)},s.src=window.fields.signature}l()(window.fields).forEach(function(e){if("signature"!==e){var s=window.fields[e],a=u[e];t.font="15pt Calibri",t.fillText(s,a.x,a.y)}})},e.src="static/form.png"}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[t.downloadUrl?s("button",{staticClass:"btn btn-lg btn-primary",attrs:{name:"button"},on:{click:function(e){t.downloadImage()}}},[t._v("\n      DOWNLOAD\n    ")]):t._e()]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-8"},[e("canvas",{attrs:{id:"canvas",width:"1760",height:"1300"}})])}]};var m=s("VU/8")(f,v,!1,function(t){s("S/Yr")},"data-v-a4b6436e",null).exports,p=s("n6Vz"),g={name:"Signature",mounted:function(){var t=document.getElementById("sig-canvas"),e=new p.a(t);this.signaturePad=e},methods:{onSubmit:function(){this.fields.signature=this.signaturePad.toDataURL();var t=this.fields,e=t.first,s=t.last,a=t.email,i=t.rin,n=t.project,r=t.course,o=t.credits,l=t.date;window.fields={name:e+" "+s,signature:this.signaturePad.toDataURL(),email:a,rin:i,project:n,course:r,credits:o,date:l},window.location="#/form"}},data:function(){var t=new Date;return{fields:{first:"John",last:"Doe",email:"johndoe@rpi.edu",rin:"661000001",project:"YACS",course:"CSCI 2941 or CSCI 4941",credits:4,signature:"",date:t.getMonth()+1+" / "+t.getDate()+" / "+t.getFullYear()}}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("First Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.first,expression:"fields.first"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.first},on:{input:function(e){e.target.composing||t.$set(t.fields,"first",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Last Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.last,expression:"fields.last"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.last},on:{input:function(e){e.target.composing||t.$set(t.fields,"last",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("RPI Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.email,expression:"fields.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.email},on:{input:function(e){e.target.composing||t.$set(t.fields,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("RIN")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.rin,expression:"fields.rin"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.rin},on:{input:function(e){e.target.composing||t.$set(t.fields,"rin",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Course")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.course,expression:"fields.course"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.course},on:{input:function(e){e.target.composing||t.$set(t.fields,"course",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Credits")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.credits,expression:"fields.credits"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.credits},on:{input:function(e){e.target.composing||t.$set(t.fields,"credits",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Project")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.project,expression:"fields.project"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fields.project},on:{input:function(e){e.target.composing||t.$set(t.fields,"project",e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"col-lg-12"},[s("hr"),t._v(" "),s("div",{staticClass:"row d-flex justify-content-center mb-4"},[s("div",{staticClass:"col-lg-6"},[s("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{type:"button",name:"button"},on:{click:function(e){t.onSubmit()}}},[t._v("\n          Submit\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12"},[e("p",{staticClass:"lead"},[this._v("Signature")]),this._v(" "),e("div",{staticClass:"col-lg-12 d-flex justify-content-center"},[e("br"),this._v(" "),e("canvas",{attrs:{id:"sig-canvas",width:"900",height:"300"}})])])}]};var C=s("VU/8")(g,_,!1,function(t){s("qeO0")},"data-v-5a99fe92",null).exports;a.a.use(r.a);var w=new r.a({routes:[{path:"/",component:C},{path:"/form",component:m}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:w,components:{App:n},template:"<App/>"})},"S/Yr":function(t,e){},nlZ8:function(t,e){},qeO0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f3ab14675a33f7862185.js.map