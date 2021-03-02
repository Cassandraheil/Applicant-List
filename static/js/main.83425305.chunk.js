(this["webpackJsonpapplicant-list"]=this["webpackJsonpapplicant-list"]||[]).push([[0],[,,,,,,,,,function(t){t.exports=JSON.parse('[{"id":1,"firstName":"Cassandra","lastName":"Heil","occupation":"Intern","ssn":"123456789","img":"https://miro.medium.com/max/11520/0*pAypSD1ZSCCw0NcL"},{"id":2,"firstName":"Liam","lastName":"West","occupation":"Sales Associate","ssn":"234567891","img":"https://d1i4t8bqe7zgj6.cloudfront.net/07-14-2017/t_1500047472941_name_Tthumb.jpg"},{"id":3,"firstName":"Roselynn","lastName":"Quick","occupation":"Bank Teller","ssn":"345678912","img":"https://www.actionnewsjax.com/resizer/KK9gZy4Ne-5LGVD0_zKDXZVbC3Q=/1200x675/cloudfront-us-east-1.images.arcpublishing.com/cmg/BIHFDAMMDVBMNMIPQQSFF2MRZE.jpg"},{"id":4,"firstName":"Regina","lastName":"Mehaphy","occupation":"Artist","ssn":"456789123","img":"https://hips.hearstapps.com/esq.h-cdn.co/assets/15/23/1433261929-25-toughest-animals-lede.jpg"}]')},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(7),c=n.n(i),o=(n(14),n(8)),l=n(2),r=n(3),p=n(5),m=n(4),h=(n(15),n(9)),u=(n(16),n(0));var d=function(t){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:t.img,alt:"applicants"}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["First Name: ",t.firstName]}),Object(u.jsxs)("li",{children:["Last Name: ",t.lastName]}),Object(u.jsxs)("li",{children:["Occupation: ",t.occupation]}),Object(u.jsxs)("li",{children:["SSN: ",t.ssn]})]}),Object(u.jsx)("button",{className:"cardBtn",onClick:function(){return t.linkUpdateForm(t)},children:"Update"}),Object(u.jsx)("button",{className:"cardBtn",onClick:function(e){return t.showModal(t.id,t.firstName,t.lastName)},children:" Remove"})]})]})},j=(n(18),function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(t){var e=this;return this.props.show?Object(u.jsxs)("div",{className:"modal",id:"modal",children:[Object(u.jsx)("div",{className:"content",children:this.props.children}),Object(u.jsxs)("div",{className:"actions",children:[Object(u.jsx)("button",{onClick:function(){return e.props.removeApplicant()},children:"remove"}),Object(u.jsx)("button",{onClick:function(){return e.props.onClose()},children:"Cancel"})]})]}):null}}]),n}(s.a.Component));n(19);var f=function(t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("input",{value:t.firstName,name:"firstName",onChange:t.handleInputChange,type:"text",placeholder:"First Name"}),Object(u.jsx)("input",{value:t.lastName,name:"lastName",onChange:t.handleInputChange,type:"text",placeholder:"Last Name"}),Object(u.jsx)("input",{value:t.occupation,name:"occupation",onChange:t.handleInputChange,type:"text",placeholder:"Occupation"}),Object(u.jsx)("input",{value:t.ssn,name:"ssn",onChange:t.handleInputChange,type:"number",placeholder:"SSN"}),Object(u.jsx)("input",{value:t.img,name:"img",onChange:t.handleInputChange,type:"text",placeholder:"Image URL(Optional)"}),Object(u.jsx)("button",{className:"btn",onClick:t.sortForUpdate,children:"update/add"})]}),Object(u.jsx)("button",{className:"btn",onClick:t.showHome,children:"Cancel"})]})},b=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={applicants:h,show:!1,id:null,firstName:"",lastName:"",occupation:"",ssn:"",img:"https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg",form:"none",home:"inline-block"},t.showForm=function(e){t.setState({form:"inline",home:"none"})},t.showHome=function(e){t.setState({form:"none",home:"inline-block"})},t.showModal=function(e,n,a){t.setState({show:!0,id:e,firstName:n,lastName:a})},t.onClose=function(e){t.setState({show:!1})},t.removeApplicant=function(e){var n=t.state.applicants.filter((function(e){return e.id!==t.state.id}));t.setState({applicants:n}),t.onClose()},t.linkUpdateForm=function(e){t.setState({id:e.id,firstName:e.firstName,lastName:e.lastName,occupation:e.occupation,ssn:e.ssn,img:e.img},(function(){t.showForm()}))},t.sortForUpdate=function(e){e.preventDefault();var n=t.state.applicants.filter((function(e){return e.id!==t.state.id}));t.setState({applicants:n},(function(){t.addApplicant()}))},t.newApplicant=function(e){var n=t.state.applicants.length+1;t.setState({id:n,firstName:"",lastName:"",occupation:"",ssn:"",img:"https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"}),t.showForm()},t.addApplicant=function(e){var n=t.state.applicants.concat([{id:t.state.id,firstName:t.state.firstName,lastName:t.state.lastName,occupation:t.state.occupation,ssn:t.state.ssn,img:t.state.img}]);t.setState({applicants:n}),t.showHome()},t.handleInputChange=function(e){var n=e.target,a=n.name,s=n.value;t.setState(Object(o.a)({},a,s))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Applicants for Roostify"}),Object(u.jsxs)("div",{style:{display:this.state.home},children:[Object(u.jsxs)(j,{onClose:this.onClose,show:this.state.show,removeApplicant:this.removeApplicant,children:["Are you sure you would like to remove ",this.state.firstName," from the list?"]}),this.state.applicants.map((function(e){return Object(u.jsx)(d,{id:e.id,firstName:e.firstName,lastName:e.lastName,occupation:e.occupation,ssn:e.ssn,img:e.img,showModal:t.showModal,linkUpdateForm:t.linkUpdateForm})})),Object(u.jsx)("button",{className:"btn",onClick:this.newApplicant,children:"Add Applicant"}),"   "]}),Object(u.jsx)("div",{style:{display:this.state.form},children:Object(u.jsx)(f,{firstName:this.state.firstName,lastName:this.state.lastName,occupation:this.state.occupation,ssn:this.state.ssn,img:this.state.img,handleInputChange:this.handleInputChange,sortForUpdate:this.sortForUpdate,showHome:this.showHome})})]})}}]),n}(s.a.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),N()}],[[20,1,2]]]);
//# sourceMappingURL=main.83425305.chunk.js.map