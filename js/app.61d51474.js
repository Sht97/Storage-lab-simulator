(function(t){function e(e){for(var s,n,l=e[0],o=e[1],d=e[2],u=0,m=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Storage-lab-simulator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1004:function(t,e,a){t.exports=a.p+"img/platters-spindle-1.21825df4.png"},"1a12":function(t,e,a){},"2b7d":function(t,e,a){t.exports=a.p+"img/reading-writing-data-1.44834517.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-light",staticStyle:{"background-color":"#348f41"}},[a("div",{staticClass:"navbar-left"},[a("router-link",{attrs:{to:"/"}},[t._v(" Disk comparison |")]),a("router-link",{attrs:{to:"/Disk"}},[t._v(" How it works? |")]),a("router-link",{attrs:{to:"/about"}},[t._v(" Info About HDD by Animagraffs and Seagate |")])],1),a("a",{staticClass:"navbar-brand",attrs:{href:"#",id:"title"}},[t._v("StorageLab Simulator")])])])},l=[],o={name:"Navbar"},d=o,c=(a("5dfc"),a("2877")),u=Object(c["a"])(d,n,l,!1,null,null,null),m=u.exports,v={name:"App",components:{Navbar:m}},p=v,f=(a("034f"),Object(c["a"])(p,i,r,!1,null,null,null)),_=f.exports,k=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-5",attrs:{id:"home"}},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped table-highlight"},[t._m(0),a("tbody",[a("tr",[a("td",[t._v("Name")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.name,expression:"disk1.name"}],staticClass:"form-control",attrs:{type:"text",value:"Disk 1"},domProps:{value:t.disk1.name},on:{input:function(e){e.target.composing||t.$set(t.disk1,"name",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.name,expression:"disk2.name"}],staticClass:"form-control",attrs:{type:"text",value:"Disk 2"},domProps:{value:t.disk2.name},on:{input:function(e){e.target.composing||t.$set(t.disk2,"name",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.name,expression:"disk3.name"}],staticClass:"form-control",attrs:{type:"text",value:"Disk 3"},domProps:{value:t.disk3.name},on:{input:function(e){e.target.composing||t.$set(t.disk3,"name",e.target.value)}}})])]),a("tr",[a("td",[t._v("RPM")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.rpm,expression:"disk1.rpm"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"30000",oninput:"validity.valid||(value='');",placeholder:"6200 rpm",required:""},domProps:{value:t.disk1.rpm},on:{input:function(e){e.target.composing||t.$set(t.disk1,"rpm",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.rpm,expression:"disk2.rpm"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"30000",oninput:"validity.valid||(value='');",placeholder:"7300 rpm",required:""},domProps:{value:t.disk2.rpm},on:{input:function(e){e.target.composing||t.$set(t.disk2,"rpm",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.rpm,expression:"disk3.rpm"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"30000",oninput:"validity.valid||(value='');",placeholder:"15000 rpm",required:""},domProps:{value:t.disk3.rpm},on:{input:function(e){e.target.composing||t.$set(t.disk3,"rpm",e.target.value)}}})])]),a("tr",[a("td",[t._v("Average seek")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.average_seek,expression:"disk1.average_seek"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"50",oninput:"validity.valid||(value='');",placeholder:"4 ms",required:""},domProps:{value:t.disk1.average_seek},on:{input:function(e){e.target.composing||t.$set(t.disk1,"average_seek",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.average_seek,expression:"disk2.average_seek"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"50",oninput:"validity.valid||(value='');",placeholder:"9 ms",required:""},domProps:{value:t.disk2.average_seek},on:{input:function(e){e.target.composing||t.$set(t.disk2,"average_seek",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.average_seek,expression:"disk3.average_seek"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"50",oninput:"validity.valid||(value='');",placeholder:"12 ms",required:""},domProps:{value:t.disk3.average_seek},on:{input:function(e){e.target.composing||t.$set(t.disk3,"average_seek",e.target.value)}}})])]),a("tr",[a("td",[t._v("Max transfer")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.max_transfer,expression:"disk1.max_transfer"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1000",oninput:"validity.valid||(value='');",placeholder:"125 MB/s",required:""},domProps:{value:t.disk1.max_transfer},on:{input:function(e){e.target.composing||t.$set(t.disk1,"max_transfer",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.max_transfer,expression:"disk2.max_transfer"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1000",oninput:"validity.valid||(value='');",placeholder:"105 MB/s",required:""},domProps:{value:t.disk2.max_transfer},on:{input:function(e){e.target.composing||t.$set(t.disk2,"max_transfer",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.max_transfer,expression:"disk3.max_transfer"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1000",oninput:"validity.valid||(value='');",placeholder:"84 MB/s",required:""},domProps:{value:t.disk3.max_transfer},on:{input:function(e){e.target.composing||t.$set(t.disk3,"max_transfer",e.target.value)}}})])]),a("tr",[a("td",[t._v("Platters")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.platters,expression:"disk1.platters"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"10",oninput:"validity.valid||(value='');",placeholder:"6"},domProps:{value:t.disk1.platters},on:{input:function(e){e.target.composing||t.$set(t.disk1,"platters",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.platters,expression:"disk2.platters"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"10",oninput:"validity.valid||(value='');",placeholder:"5"},domProps:{value:t.disk2.platters},on:{input:function(e){e.target.composing||t.$set(t.disk2,"platters",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.platters,expression:"disk3.platters"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"10",oninput:"validity.valid||(value='');",placeholder:"4"},domProps:{value:t.disk3.platters},on:{input:function(e){e.target.composing||t.$set(t.disk3,"platters",e.target.value)}}})])])])])]),a("div",[a("button",{staticClass:"btn btn-success",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:t.calcule}},[t._v("Calcule")])]),a("div",[a("b-modal",{attrs:{id:"modal-xl",size:"xl",title:"Calculated results"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.ok;return[a("b-button",{attrs:{variant:"success"},on:{click:function(t){return s()}}},[t._v(" OK ")])]}}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("table",{staticClass:"table table-bordered "},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center","font-size":"20px"},attrs:{colspan:"2"}},[t._v("Disk")]),a("th",{staticStyle:{"text-align":"center","font-size":"20px"}},[t._v(t._s(t.disk1.name))]),a("th",{staticStyle:{"text-align":"center","font-size":"20px"}},[t._v(t._s(t.disk2.name))]),a("th",{staticStyle:{"text-align":"center","font-size":"20px"}},[t._v(t._s(t.disk3.name))])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"2"}},[t._v("T seek")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.Tseek)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.Tseek)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.Tseek)+" ms")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"2"}},[t._v("T rotation")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.Trotation)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.Trotation)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.Trotation)+" ms")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"},attrs:{rowspan:"3"}},[t._v("Random")]),a("td",{staticStyle:{"font-weight":"bold"}},[t._v(" Ttransfer")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.random.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.random.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.random.Ttransfer)+" ms")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"}},[t._v("Ti/o")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.random.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.random.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.random.Tio)+" ms")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"}},[t._v("Rio")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.random.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.random.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.random.Rio)+" MB/s")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"},attrs:{rowspan:"3"}},[t._v("Secuential")]),a("td",{staticStyle:{"font-weight":"bold"}},[t._v("Ttransfer")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.secuential.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.secuential.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.secuential.Ttransfer)+" ms")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"}},[t._v("Tio")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.secuential.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.secuential.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.secuential.Tio)+" ms")])]),a("tr",[a("td",{staticStyle:{"font-weight":"bold"}},[t._v("Rio")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.secuential.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.secuential.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.secuential.Rio)+" MB/s")])])])])])],1)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th"),a("th",[t._v("Disk 1")]),a("th",[t._v("Disk 2")]),a("th",[t._v("Disk 3")])])}],h=(a("d3b7"),{name:"Home",components:{},data:function(){return{showModal:!1,disk1:{name:"Disk 1",capacity:22,rpm:1,average_seek:1,max_transfer:1,platters:0,cache:0,result:{random:{},secuential:{}}},disk2:{name:"Cheetah",capacity:22,rpm:15e3,average_seek:4,max_transfer:125,platters:4,cache:16,result:{random:{},secuential:{}}},disk3:{name:"Barracuda",capacity:800,rpm:7200,average_seek:9,max_transfer:105,platters:4,cache:32,result:{random:{},secuential:{}},arr:[]}}},methods:{calcule:function(){var t=this;fetch("https://storage-sim-back.herokuapp.com/api/disk/compare/",{method:"POST",body:JSON.stringify([this.disk1,this.disk2,this.disk3]),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){t.showModal=!0,t.disk1.result=e.result[0],t.disk2.result=e.result[1],t.disk3.result=e.result[2],t.arr=[t.disk1,t.disk2,t.disk3]}))}},mounted:function(){}}),b=h,x=(a("cccb"),Object(c["a"])(b,y,g,!1,null,null,null)),S=x.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1"),s("img",{attrs:{src:a("a0fd")}}),s("img",{attrs:{src:a("2b7d")}}),s("img",{attrs:{src:a("1004")}}),s("img",{attrs:{src:a("6aaa")}}),s("p"),t._m(0)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"csl-bib-body",staticStyle:{"line-height":"1.35"}},[a("div",{staticClass:"csl-entry",staticStyle:{clear:"left"}},[a("div",{staticClass:"csl-left-margin",staticStyle:{float:"left","padding-right":"0.5em","text-align":"right",width:"1em"}}),a("div",{staticClass:"csl-right-inline",staticStyle:{margin:"0 0.4em 0 1.5em"}},[t._v(" «How Hard Disk Drives Work», "),a("i",[t._v("Animagraffs")]),t._v(", 07-abr-2017. [Online]. Disponible en: "),a("a",{staticClass:"link",attrs:{href:"https://animagraffs.com/hard-disk-drive/"}},[t._v("https://animagraffs.com/hard-disk-drive/")]),t._v(". [Accedido: 20-ene-2021] ")])])])}],w={name:"About"},$=w,M=(a("e76e"),Object(c["a"])($,C,T,!1,null,null,null)),O=M.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"howItWorks my-5"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col col-lg-9"},[a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$I/O \\ \\ Time(T_{I/O}) = T_{seek} + T_{rotation} + T_{transfer}$"}}),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$The \\ rate \\ of \\ I/O \\ (R_{I/O}): R_{I/O} = { Size_{Transfer} \\over T_{I/O} }$"}}),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$T_{rotation} =  \\frac{Time(ms)}{1Rot} =   \\frac{1 min}{15000 rot}  *  \\frac{60 s}{1 min} * \\frac{1000 ms}{1 s} =  \\frac{60000 ms}{15000 rot} = \\frac{4 ms}{2} = 2 ms$"}}),a("p",{staticClass:"my-2"},[t._v("Random")]),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$T_{transfer} = \\frac{Time(ms)}{1Req} = \\frac{4KB}{1Req} * \\frac{1s}{125MB} * \\frac{1MB}{1024KB} * \\frac{1000ms}{1s} =  \\frac{4000ms}{125 * 1024Req} = 0,031ms$"}}),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$T_{I/O} = T_{seek} + T_{rotation} + T_{transfer} = 4ms + 2ms + 0,031ms = 6,031ms$"}}),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$R_{I/O} = { Size_{Transfer} \\over T_{I/O} } = { 4KB \\over 6,031ms } = 0,66 \\frac{MB}{s}$"}}),a("p",{staticClass:"my-2"},[t._v("Sequential")]),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$T_{transfer} = \\frac{Time(ms)}{1Req} = \\frac{100MB}{1Req} . \\frac{1s}{125MB} . \\frac{1000ms}{1s} =  \\frac{100000ms}{125} = 800ms$"}}),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$T_{I/O} = T_{seek} + T_{rotation} + T_{transfer} = 4ms + 2ms + 800ms = 806ms$"}}),a("vue-mathjax",{staticClass:"equ",attrs:{formula:"$R_{I/O} = { Size_{Transfer} \\over T_{I/O} } = { 100MB \\over 0,806s } = 124 \\frac{MB}{s}$"}})],1)])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-sm-auto"},[a("table",{staticClass:"table table-bordered"},[a("thead",[a("tr",[a("th"),a("th",[t._v("Cheetah 15K.5")])])]),a("tbody",[a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("Capacity")]),a("td",[t._v("300 GB")])]),a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("RPM")]),a("td",[t._v("15,000")])]),a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("Average Seek")]),a("td",[t._v("4 ms")])]),a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("Max Transfer")]),a("td",[t._v("125 MB/s")])]),a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("Platters")]),a("td",[t._v("4")])]),a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("Cache")]),a("td",[t._v("16 MB")])]),a("tr",[a("td",{attrs:{id:"titleBold"}},[t._v("Connects via")]),a("td",[t._v("SCSI")])])])])])}],P=a("7b93"),q={name:"Disk",components:{"vue-mathjax":P["VueMathjax"]}},R=q,N=(a("dc4e"),Object(c["a"])(R,B,j,!1,null,null,null)),D=N.exports;s["default"].use(k["a"]);var I=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:O},{path:"/Disk",name:"Disk",component:D}],A=new k["a"]({routes:I}),z=A,E=a("5f5b"),H=a("b1e0");a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(E["a"]),s["default"].use(H["a"]),s["default"].use(P["VueMathjax"]),new s["default"]({router:z,render:function(t){return t(_)}}).$mount("#app")},"5ced":function(t,e,a){},"5dfc":function(t,e,a){"use strict";a("1a12")},6921:function(t,e,a){},"6aaa":function(t,e,a){t.exports=a.p+"img/case-1.e4e38e17.png"},"85ec":function(t,e,a){},"91aa":function(t,e,a){},a0fd:function(t,e,a){t.exports=a.p+"img/how-hard-disk-drives-work-1.76c28490.png"},cccb:function(t,e,a){"use strict";a("5ced")},dc4e:function(t,e,a){"use strict";a("6921")},e76e:function(t,e,a){"use strict";a("91aa")}});
//# sourceMappingURL=app.61d51474.js.map