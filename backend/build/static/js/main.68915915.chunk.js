(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(33),i=n.n(c),o=n(37);var l=function(){return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsxs)("div",{className:"w3-container w3-center w3-blue",style:{padding:"2rem"},children:[Object(r.jsx)("h1",{className:"w3-jumbo",children:"Tweet - Quick Twitter"}),Object(r.jsx)("button",{className:"w3-button w3-pink",style:{marginRight:"1rem"},children:"Login"}),Object(r.jsx)("button",{className:"w3-button w3-pink",children:"Register"})]}),Object(r.jsxs)("div",{className:"w3-container w3-blue",style:{padding:"2rem",marginTop:"2rem"},children:[Object(r.jsx)("h2",{children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur libero nibh, non sodales urna malesuada nec. Sed tortor eros, blandit eget fringilla at, gravida a nibh. Etiam dui nulla, aliquam vitae purus a, auctor malesuada arcu. Vestibulum venenatis orci nisl, sed elementum leo tincidunt eget. Nullam convallis nisi in."})]}),Object(r.jsxs)("div",{className:"w3-container w3-blue",style:{padding:"2rem",marginTop:"2rem"},children:[Object(r.jsx)("h2",{children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur libero nibh, non sodales urna malesuada nec. Sed tortor eros, blandit eget fringilla at, gravida a nibh. Etiam dui nulla, aliquam vitae purus a, auctor malesuada arcu. Vestibulum venenatis orci nisl, sed elementum leo tincidunt eget. Nullam convallis nisi in."})]}),Object(r.jsxs)("div",{className:"w3-container w3-blue",style:{padding:"2rem",marginTop:"2rem"},children:[Object(r.jsx)("h2",{children:"Lorem ipsum dolor sit amet"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur libero nibh, non sodales urna malesuada nec. Sed tortor eros, blandit eget fringilla at, gravida a nibh. Etiam dui nulla, aliquam vitae purus a, auctor malesuada arcu. Vestibulum venenatis orci nisl, sed elementum leo tincidunt eget. Nullam convallis nisi in."})]})]})};var d=function(){var e=localStorage.getItem("token"),t={name:e?"Settings":"Login",link:e?"/settings":"/login"},n={name:e?"Logout":"Register",link:e?"/logout":"/register"};return Object(r.jsxs)("div",{className:"w3-bar w3-black",children:[Object(r.jsx)("a",{className:"w3-bar-item w3-button",href:"/",children:"Tweet"}),Object(r.jsxs)("div",{style:{float:"right"},children:[Object(r.jsx)("a",{className:"w3-bar-item w3-button",href:t.link,children:t.name}),Object(r.jsx)("a",{className:"w3-bar-item w3-button",href:n.link,children:n.name})]})]})},u=n(8),m=n(9),b=n(11),j=n(10);var h=function(e){return Object(r.jsx)("div",{className:"w3-pale-red w3-text-red w3-border w3-border-red w3-round-large",style:{padding:"1rem",marginTop:"1rem"},children:e.message})},w=n(15),g=n.n(w),p=n(18),x=n(4),O=n.n(x);function f(e,t){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(g.a.mark((function e(t,n){var r,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",{email:t,pwd:n});case 2:return r=e.sent,e.next=5,r;case 5:if(a=e.sent,!(s=a.data).error){e.next=11;break}return e.abrupt("return",s.error);case 11:return localStorage.setItem("token",s.token),localStorage.setItem("refreshToken",s.refreshToken),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(g.a.mark((function e(){var t,n,r,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,O.a.post("/api/checkiftokenexpire",{},{headers:{Authorization:"Bearer "+t}});case 4:return n=e.sent,e.next=7,n;case 7:return r=e.sent,a=r.data,e.abrupt("return",a.success);case 12:if(e.prev=12,e.t0=e.catch(1),console.log("p"),s=localStorage.getItem("refreshToken")){e.next=19;break}return localStorage.removeItem("token"),e.abrupt("return",!1);case 19:return O.a.post("/api/refreshtoken",{},{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){localStorage.setItem("token",e.data.token)})),e.abrupt("return",!0);case 21:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={err:""},e.login=function(t){t.preventDefault(),f(document.getElementById("email").value,document.getElementById("password").value).then((function(t){!0===t?window.location="/":e.setState({err:t})}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){y().then((function(e){e&&(window.location="/")}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"w3-card-4",style:{margin:"2rem"},children:[Object(r.jsx)("div",{className:"w3-container w3-blue w3-center w3-xlarge",children:"LOGIN"}),Object(r.jsxs)("div",{className:"w3-container",children:[this.state.err.length>0&&Object(r.jsx)(h,{message:"Check your form and try again! (".concat(this.state.err,")")}),Object(r.jsxs)("form",{onSubmit:this.login,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",className:"w3-input w3-border",id:"email"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",className:"w3-input w3-border",id:"password"})]}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"submit",className:"w3-button w3-blue",children:"Login"})})]})]})]})}}]),n}(a.Component),S=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={err:""},e.register=function(t){t.preventDefault(),O.a.post("/api/register",{email:document.getElementById("email").value,username:document.getElementById("username").value,pwd:document.getElementById("password").value}).then((function(t){t.data.error?e.setState({err:t.data.error}):window.location="/login"}))},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"w3-card-4",style:{margin:"2rem"},children:[Object(r.jsx)("div",{className:"w3-container w3-blue w3-center w3-xlarge",children:"REGISTER"}),Object(r.jsxs)("div",{className:"w3-container",children:[this.state.err.length>0&&Object(r.jsx)(h,{message:"Check your form and try again! (".concat(this.state.err,")")}),Object(r.jsxs)("form",{onSubmit:this.register,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",class:"w3-input w3-border",id:"email"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"username",children:"Username"}),Object(r.jsx)("input",{type:"text",class:"w3-input w3-border",id:"username"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",class:"w3-input w3-border",id:"password"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("button",{type:"submit",class:"w3-button w3-blue",children:"Register"}),this.state.register&&Object(r.jsx)("p",{children:"You're registered!"})]})]})]})]})}}]),n}(a.Component),E=n(35),I=n(2);var T=function(e){return Object(r.jsxs)("div",{className:"w3-card w3-border w3-border-gray w3-round-large",style:{marginTop:"2rem"},children:[Object(r.jsxs)("header",{className:"w3-container w3-opacity w3-light-gray",style:{padding:"1rem"},children:["@",e.author]}),Object(r.jsxs)("div",{className:"w3-container",style:{padding:"2rem"},children:[Object(r.jsxs)("h2",{className:"w3-xxlarge",children:[Object(r.jsx)("span",{className:"w3-opacity",children:e.title}),e.isOwner&&Object(r.jsx)("button",{className:"w3-right w3-button w3-red w3-large w3-hover-pale-red w3-round-large",onClick:function(){return t=e.id,void O.a.delete("/api/deletetweet/"+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),window.location.reload()}));var t},children:"Delete"})]}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}})]}),Object(r.jsxs)("footer",{className:"w3-container w3-center w3-large",children:[Object(r.jsx)("button",{className:"w3-button",style:{marginRight:"2rem"},children:"Like"}),Object(r.jsx)("button",{className:"w3-button",style:{marginRight:"2rem"},children:"Retweet"}),Object(r.jsx)("button",{className:"w3-button",children:"Reply"})]})]})},C=n(34),B=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={content:"<p>I have to edit this!</p>",titleErr:"",contentErr:"",formErr:""},e.handleEditorChange=function(t,n){e.setState({content:t})},e.submitForm=function(t){t.preventDefault(),0!==e.state.content.length?0!==document.getElementById("title").value.length?O.a.post("/api/addtweet",{title:document.getElementById("title").value,content:e.state.content},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){t.data.success?window.location.reload():e.setState({formErr:t.data.error})})):e.setState({titleErr:"Add a title!"}):e.setState({contentErr:"Add some data to the content!"})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"w3-modal w3-animate-opacity",id:"addTweet",children:Object(r.jsxs)("div",{className:"w3-modal-content w3-card",children:[Object(r.jsxs)("header",{className:"w3-container w3-blue",children:[Object(r.jsx)("span",{className:"w3-button w3-display-topright w3-hover-none w3-hover-text-white",onClick:function(){document.getElementById("addTweet").style.display="none"},children:"X"}),Object(r.jsx)("h2",{children:"Add tweet"})]}),Object(r.jsxs)("form",{className:"w3-container",onSubmit:this.submitForm,children:[this.state.formErr.length>0&&Object(r.jsx)(h,{message:this.state.formErr}),Object(r.jsxs)("div",{className:"w3-section",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title"}),Object(r.jsx)("input",{type:"text",id:"title",className:"w3-input w3-border w3-margin-bottom"}),Object(r.jsx)("small",{className:"w3-text-gray",children:this.state.titleErr})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(C.Editor,{initialValue:"<p>This is the initial content of the editor</p>",apiKey:"h4lob04s358sx82cxoploj3qas5qx4szcdgohhxgja5z5bq2",init:{height:300,menubar:!1,statusbar:!1,toolbar_mode:"sliding",plugins:["advlist autolink lists link image imagetools media emoticons preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic underline strikethrough | image anchor media |                                         alignleft aligncenter alignright alignjustify |                                         outdent indent | bulllist numlist | fullscreen preview | emoticons help",contextmenu:"bold italic underline indent outdent help"},onEditorChange:this.handleEditorChange}),Object(r.jsx)("small",{className:"w3-text-gray",children:this.state.contentErr})]}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"submit",className:"w3-button w3-blue",children:"Post"})})]})]})]})})}}]),n}(s.a.Component),A=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={tweets:[],currentUser:{username:""}},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/api/tweets").then((function(t){e.setState({tweets:t.data.reverse()})})),setTimeout((function(){O.a.get("/api/getcurrentuser",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({currentUser:t.data})}))}),200)}},{key:"render",value:function(){var e=this;return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsxs)("div",{className:"w3-container w3-jumbo",style:{margin:"3rem",paddingLeft:"1rem"},children:[Object(r.jsx)("h1",{children:"Tweets"}),Object(r.jsx)("button",{className:"w3-button w3-blue w3-large",onClick:function(){document.getElementById("addTweet").style.display="block"},children:"Add tweet"})]}),Object(r.jsx)(B,{}),Object(r.jsx)("div",{className:"w3-container",children:0===this.state.tweets.length?Object(r.jsx)("p",{className:"w3-xlarge w3-opacity",style:{marginLeft:"2rem"},children:"No tweets! Create one"}):this.state.tweets.map((function(t,n){return Object(r.jsx)(T,{id:t.id,title:t.title,content:t.content,author:t.user.username,isOwner:e.state.currentUser.username===t.user.username},n)}))})]})}}]),n}(s.a.Component),L=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){!function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");O.a.post("/api/logout/access",{},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.data.error?console.error(e.data.error):localStorage.removeItem("token")}))}if(localStorage.getItem("refreshToken")){var t=localStorage.getItem("refreshToken");O.a.post("/api/logout/refresh",{},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){e.data.error?console.error(e.data.error):localStorage.removeItem("refreshToken")}))}localStorage.clear(),setTimeout((function(){return window.location="/"}),500)}()}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"w3-container w3-xlarge",children:Object(r.jsx)("p",{children:"Please wait, logging you out..."})})}}]),n}(s.a.Component),D=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={currentSetting:"main",err:""},e.changePassword=function(t){t.preventDefault(),O.a.post("/api/changepassword",{password:document.getElementById("password").value,npassword:document.getElementById("npassword").value},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){t.data.error?e.setState({err:t.data.error}):(alert("Password changed! Logging you out..."),window.location="/logout")}))},e.deleteAccount=function(e){e.preventDefault(),window.confirm("Are you sure you want to delete your account? THIS CANNOT BE UNDONE. ALL OF YOUR POSTS WILL BE DELETED")&&O.a.delete("/api/deleteaccount",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){e.data.error?alert("An error occurred: "+e.data.error):(alert("Your account has been deleted. We're sad to see you go :(. Now, anyone can sign up with your username. Logging you out..."),window.location="/logout")}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("token")||(window.location="/login")}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"w3-container",style:{margin:"3rem"},children:Object(r.jsxs)("div",{className:"w3-card w3-border w3-round-large",children:[Object(r.jsx)("header",{className:"w3-container w3-xlarge w3-blue",style:{padding:"0.5rem",paddingLeft:"3rem"},children:"Settings"}),Object(r.jsxs)("div",{className:"w3-container",children:[this.state.err.length>0&&Object(r.jsx)(h,{message:this.state.err}),"main"===this.state.currentSetting&&Object(r.jsxs)("div",{style:{margin:"1rem"},children:[Object(r.jsx)("h1",{className:"w3-xxlarge",children:"Settings"}),Object(r.jsx)("hr",{className:"w3-border-top w3-border-black"}),Object(r.jsx)("p",{children:"Choose a setting from below:"}),Object(r.jsxs)("ul",{className:"w3-ul w3-border w3-hoverable",children:[Object(r.jsx)("li",{onClick:function(){return e.setState({currentSetting:"cpwd"})},style:{cursor:"pointer"},className:"w3-hover-light-gray",children:"Change password"}),Object(r.jsx)("li",{onClick:function(){return e.setState({currentSetting:"del"})},style:{cursor:"pointer"},className:"w3-text-red w3-hover-pale-red w3-hover-text-red",children:"Delete account"})]})]}),"cpwd"===this.state.currentSetting&&Object(r.jsxs)("div",{style:{margin:"1rem"},children:[Object(r.jsx)("h1",{className:"w3-xxlarge",children:"Change password"}),Object(r.jsx)("hr",{className:"w3-border-top w3-border-black"}),Object(r.jsx)("button",{className:"w3-button w3-blue",onClick:function(){return e.setState({currentSetting:"main"})},children:"\xab Back"}),Object(r.jsxs)("form",{onSubmit:this.changePassword,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"password",children:"Old password"}),Object(r.jsx)("input",{type:"password",id:"password",className:"w3-input w3-border"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{htmlFor:"npassword",children:"New password"}),Object(r.jsx)("input",{type:"password",id:"npassword",className:"w3-input w3-border"})]}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"submit",className:"w3-button w3-blue",children:"Submit"})})]})]}),"del"===this.state.currentSetting&&Object(r.jsxs)("div",{style:{margin:"1rem"},children:[Object(r.jsx)("h1",{className:"w3-xxlarge w3-text-red",children:"Delete account"}),Object(r.jsx)("hr",{className:"w3-border-top w3-border-black"}),Object(r.jsx)("button",{className:"w3-button w3-blue",onClick:function(){return e.setState({currentSetting:"main"})},children:"\xab Back"}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{className:"w3-button w3-red w3-large",onClick:this.deleteAccount,children:"DELETE ACCOUNT"})})]})]})]})})}}]),n}(s.a.Component);var F=function(){return Object(r.jsxs)("div",{className:"w3-container w3-center",style:{margin:"3rem"},children:[Object(r.jsx)("h1",{className:"w3-jumbo",children:"404"}),Object(r.jsx)("p",{className:"w3-xxlarge",children:"The page you were searching for was not found. Double check your URL and try again"}),Object(r.jsx)("button",{type:"button",className:"w3-button w3-blue",onClick:function(){return window.location="/"},children:"\xab Back"})]})};var R=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return y().then((function(e){return a(e)})),Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)(E.a,{children:Object(r.jsxs)(I.c,{children:[Object(r.jsx)(I.a,{path:"/",exact:!0,children:n?Object(r.jsx)(A,{}):Object(r.jsx)(l,{})}),Object(r.jsx)(I.a,{path:"/login",exact:!0,component:k}),Object(r.jsx)(I.a,{path:"/register",exact:!0,component:S}),Object(r.jsx)(I.a,{path:"/logout",exact:!0,component:L}),Object(r.jsx)(I.a,{path:"/settings",exact:!0,component:D}),Object(r.jsx)(I.a,{component:F})]})})]})};i.a.render(Object(r.jsx)(R,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.68915915.chunk.js.map