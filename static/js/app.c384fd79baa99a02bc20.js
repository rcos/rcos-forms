webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("div",{staticClass:"container pt-4"},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar bg-white"},[e("a",{staticClass:"navbar-brand text-dark d-flex",attrs:{href:"#/"}},[e("img",{attrs:{width:"30",height:"30",src:"https://github.com/rcos/rcos-branding/blob/master/img/logo-square-red.png?raw=true"}}),this._v(" "),e("span",{staticClass:"ml-3"},[this._v("\n        RCOS URP Form Tool\n      ")])]),this._v(" "),e("a",{staticClass:"navbar-brand text-dark",attrs:{href:"https://github.com/rcos/rcos-forms",target:"_blank"}},[e("i",{staticClass:"fa fa-lg fa-github mr-1"}),this._v("\n      GitHub\n    ")])])}]};var n=a("VU/8")({name:"App"},r,!1,function(t){a("SC4u")},null,null).exports,l=a("/ocq"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 text-center mt-5 pt-5"},[e("h2",[this._v("RCOS URP Form Tool")]),this._v(" "),e("p",{staticClass:"lead"},[this._v("Use this tool to generate a URP form for "),e("a",{attrs:{target:"_blank",href:"https://rcos.io"}},[this._v("RCOS")])]),this._v(" "),e("a",{staticClass:"btn btn-lg py-4  px-4 btn-primary",staticStyle:{"font-size":"2rem"},attrs:{href:"#/form"}},[e("i",{staticClass:"fa fa fa-check-circle mr-2"}),this._v("\n      Let's get started\n    ")])])])}]},o=a("VU/8")({},i,!1,null,null,null).exports,c=a("fZjL"),u=a.n(c),d=a("sJst"),m=a.n(d),f={name:{x:265,y:194},email:{x:180,y:244},rin:{x:180,y:290},project:{x:1580,y:422},course:{x:280,y:662},credits:{x:380,y:715},date:{x:500,y:1350},major:{x:300,y:384},classYear:{FRESHMAN:{x:260,y:430},SOPHMORE:{x:390,y:430},JUNIOR:{x:510,y:430},SENIOR:{x:630,y:430}},semester:{FALL:{x:310,y:490},SPRING:{x:420,y:490},SUMMER:{x:570,y:490}}},v={name:"Canvas",mounted:function(){var t=this;setTimeout(function(){t.renderForm()},500)},created:function(){window.fields||(window.location="#/")},computed:{downloadUrl:function(){if(window.fields)return window.fields.signature}},methods:{downloadImage:function(){document.getElementById("canvas").toBlob(function(t){var e=window.fields.email.split("@")[0]+"_rcos_urp.png";m()(t,e,"image/png")})},reset:function(){window.location="#/form",delete window.fields},renderForm:function(){var t=document.getElementById("canvas").getContext("2d"),e=new Image;e.onload=function(){var a=window.fields;if(t.drawImage(e,0,0),a.signature){var s=new Image;s.onload=function(){t.drawImage(s,100,1280,270,90)},s.src=a.signature}var r=f.classYear[window.fields.classYear];t.font="25pt Calibri",t.fillText("X",r.x,r.y);var n=void 0,l=new Date,i=l.getMonth()+1,o=l.getFullYear()-2e3;n=[8,9,10,11,12].includes(i)?f.semester.FALL:[1,2,3,4,5].includes(i)?f.semester.SPRING:f.semester.SUMMER,t.font="20pt Calibri",t.fillText(o,n.x,n.y),u()(a).forEach(function(e){if("signature"!==e&&"classYear"!==e){var s=a[e],r=f[e];t.font="20pt Calibri",t.fillText(s,r.x,r.y)}})},e.src="static/form.png"}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",[t._v("Your URP form is ready")]),t._v(" "),t._m(0),t._v(" "),t.downloadUrl?a("button",{staticClass:"btn btn-lg btn-primary mr-4",on:{click:function(e){t.downloadImage()}}},[a("i",{staticClass:"fa fa-download"}),t._v("\n      Download\n    ")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:function(e){t.reset()}}},[a("i",{staticClass:"fa fa-refresh"}),t._v("\n      Reset\n    ")]),t._v(" "),a("hr")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"lead"},[this._v("Download your form and send it to "),e("a",{attrs:{target:"_blank",href:"https://github.com/aeksco"}},[this._v("@aeksco")]),this._v(" on Slack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12"},[e("canvas",{attrs:{id:"canvas",width:"2086",height:"1612"}})])}]};var _=a("VU/8")(v,p,!1,function(t){a("yrk9")},"data-v-d700b038",null).exports,h=a("n6Vz"),C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{staticClass:"mb-0"},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?a("span",{staticClass:"text-danger"},[t._v("*")]):t._e()]),t._v(" "),t.help?a("small",{staticClass:"form-text text-muted mb-1"},[t._v(t._s(t.help))]):t._e(),t._v(" "),"BOOL"===t.type?a("input",{ref:"input_el",staticClass:"form-control",attrs:{name:t.name,type:"checkbox"},domProps:{checked:t.value},on:{change:function(e){t.updateModel()}}}):"DATE"===t.type?a("input",{ref:"input_el",staticClass:"form-control",attrs:{name:t.name,type:"date",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateModel()}}}):"TIME"===t.type?a("input",{ref:"input_el",staticClass:"form-control",attrs:{name:t.name,type:"time",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateModel()}}}):"EMAIL"===t.type?a("input",{ref:"input_el",staticClass:"form-control",attrs:{name:t.name,type:"email",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateModel()}}}):"NUMBER"===t.type?a("input",{ref:"input_el",staticClass:"form-control",attrs:{name:t.name,type:"number",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateModel()}}}):a("input",{ref:"input_el",staticClass:"form-control",attrs:{name:t.name,type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateModel()}}})])},staticRenderFns:[]};var g={name:"Signature",components:{FormInput:a("VU/8")({props:["required","label","name","type","example","ex","help","placeholder","value"],methods:{updateModel:function(){"BOOL"===this.type?this.$emit("input",this.$refs.input_el.checked):this.$emit("input",this.$refs.input_el.value)}}},C,!1,function(t){a("axrk")},null,null).exports},mounted:function(){var t=document.getElementById("sig-canvas"),e=new h.a(t);this.signaturePad=e},methods:{clearSignature:function(){this.signaturePad.clear()},onSubmit:function(){var t=this.fields,e=t.first,a=t.last,s=t.email,r=t.rin,n=t.project,l=t.course,i=t.credits,o=t.date,c=t.major,u=t.classYear;window.fields={name:e+" "+a,signature:this.signaturePad.toDataURL(),email:s,rin:r,project:n,course:l,credits:i,date:o,major:c,classYear:u},window.location="#/download"}},data:function(){var t=new Date;return{fields:{first:"",last:"",email:"",rin:"",project:"",course:"CSCI 2941",credits:"4",signature:"",major:"CSCI",classYear:"SOPHMORE",date:t.getMonth()+1+" / "+t.getDate()+" / "+t.getFullYear()}}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("FormInput",{attrs:{label:"First Name",placeholder:"First Name",required:"true",help:"Your first name"},model:{value:t.fields.first,callback:function(e){t.$set(t.fields,"first",e)},expression:"fields.first"}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("FormInput",{attrs:{label:"Last Name",placeholder:"Last Name",required:"true",help:"Your last name"},model:{value:t.fields.last,callback:function(e){t.$set(t.fields,"last",e)},expression:"fields.last"}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("FormInput",{attrs:{name:"email",type:"EMAIL",label:"RPI Email",placeholder:"RPI Email",required:"true",help:"Your RPI Email"},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("FormInput",{attrs:{label:"RPI RIN",placeholder:"RIN",type:"NUMBER",required:"true",help:"Your Rensselaer ID Number - '661000000'"},model:{value:t.fields.rin,callback:function(e){t.$set(t.fields,"rin",e)},expression:"fields.rin"}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("FormInput",{attrs:{label:"RPI Major",placeholder:"Major",required:"true",help:"Example: 'CSCI'"},model:{value:t.fields.major,callback:function(e){t.$set(t.fields,"major",e)},expression:"fields.major"}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("small",{staticClass:"form-text text-muted mb-1"},[t._v("Your class year at RPI")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.classYear,expression:"fields.classYear"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.fields,"classYear",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"FRESHMAN"}},[t._v("Freshman")]),t._v(" "),a("option",{attrs:{value:"SOPHMORE"}},[t._v("Sophmore")]),t._v(" "),a("option",{attrs:{value:"JUNIOR"}},[t._v("Junior")]),t._v(" "),a("option",{attrs:{value:"SENIOR"}},[t._v("Senior")])])])]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("small",{staticClass:"form-text text-muted mb-1"},[t._v('Choose "CSCI 2941" if you are taking RCOS for the first time.')]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.course,expression:"fields.course"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.fields,"course",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"CSCI 2941"}},[t._v("CSCI 2941")]),t._v(" "),a("option",{attrs:{value:"CSCI 4941"}},[t._v("CSCI 4941")])])])]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[t._m(4),t._v(" "),a("small",{staticClass:"form-text text-muted mb-1"},[t._v("The number of credits you'll be pursuing in RCOS.")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.credits,expression:"fields.credits"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.fields,"credits",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[t._v("0 Credits (Experience)")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("1 Credit")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("2 Credits")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("3 Credits")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("4 Credits")])])])]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("FormInput",{attrs:{label:"Project Name",placeholder:"Project Name",required:"true",help:"The name of your RCOS project"},model:{value:t.fields.project,callback:function(e){t.$set(t.fields,"project",e)},expression:"fields.project"}})],1),t._v(" "),a("div",{staticClass:"col-lg-12 text-center"},[a("p",{staticClass:"lead mb-0"},[t._v("Signature")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Please draw your signature in the box below")]),t._v(" "),t._m(5),t._v(" "),a("button",{staticClass:"btn btn-sm btn-warning mt-3",on:{click:function(e){t.clearSignature()}}},[a("i",{staticClass:"fa fa-eraser"}),t._v("\n      Clear Signature\n    ")])]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("hr"),t._v(" "),a("div",{staticClass:"row d-flex justify-content-center mb-4"},[a("div",{staticClass:"col-lg-6"},[a("button",{staticClass:"btn btn-success btn-lg btn-block py-3 px-3",staticStyle:{"font-size":"2rem"},attrs:{type:"button",name:"button"},on:{click:function(e){t.onSubmit()}}},[a("i",{staticClass:"fa fa-gears"}),t._v("\n          Generate URP Form\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12"},[e("p",{staticClass:"lead mb-0"},[e("i",{staticClass:"fa fa-info-circle"}),this._v("\n      Please fill out all the fields below\n    ")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mb-0"},[this._v("\n        Class Year\n        "),e("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mb-0"},[this._v("\n        Course\n        "),e("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mb-0"},[this._v("\n        Credits\n        "),e("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 mt-2 d-flex justify-content-center"},[e("br"),this._v(" "),e("canvas",{attrs:{id:"sig-canvas",width:"450",height:"150"}})])}]};var x=a("VU/8")(g,b,!1,function(t){a("tLH7")},"data-v-9f9e07d6",null).exports;s.a.use(l.a);var y=new l.a({routes:[{path:"/",component:o},{path:"/form",component:x},{path:"/download",component:_}],scrollBehavior:function(t,e,a){return{x:0,y:0}}});s.a.config.productionTip=!1,new s.a({el:"#app",router:y,components:{App:n},template:"<App/>"})},SC4u:function(t,e){},axrk:function(t,e){},tLH7:function(t,e){},yrk9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c384fd79baa99a02bc20.js.map