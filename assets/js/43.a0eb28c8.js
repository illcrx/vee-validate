(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{204:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{currentStep:1,address:"",fname:"",lname:"",email:""}},methods:{onSubmit:function(){3!==this.currentStep?this.currentStep++:alert("Form submitted!")}}},a=(r(309),r(17)),s=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[1===e.currentStep?r("fieldset",[r("legend",[e._v("Step 1")]),e._v(" "),r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Your email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!0)})],1):2===e.currentStep?r("fieldset",[r("legend",[e._v("Step 2")]),e._v(" "),r("ValidationProvider",{attrs:{name:"first name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],attrs:{type:"text",placeholder:"Your first name"},domProps:{value:e.fname},on:{input:function(t){t.target.composing||(e.fname=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"last name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],attrs:{type:"text",placeholder:"Your last name"},domProps:{value:e.lname},on:{input:function(t){t.target.composing||(e.lname=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!0)})],1):3===e.currentStep?r("fieldset",[r("legend",[e._v("Step 3")]),e._v(" "),r("ValidationProvider",{attrs:{name:"address",rules:"required|min:5"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"Your address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(n[0]))])]}}],null,!0)})],1):e._e(),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("Next")])])]}}])})},[],!1,null,"4c033f92",null);t.default=s.exports},235:function(e,t,r){},309:function(e,t,r){"use strict";var n=r(235);r.n(n).a}}]);