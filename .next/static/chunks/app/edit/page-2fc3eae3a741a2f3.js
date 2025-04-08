(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{22:(e,t,o)=>{"use strict";o.d(t,{Ay:()=>s,iD:()=>r,ri:()=>i});let a=(0,o(8943).Z0)({name:"auth",initialState:{isLoggedIn:!1,user:null},reducers:{login:(e,t)=>{e.isLoggedIn=!0,e.user=t.payload},logout:e=>{e.isLoggedIn=!1,e.user=null}}}),{login:r,updateUser:n,logout:i}=a.actions,s=a.reducer},518:(e,t,o)=>{"use strict";o.d(t,{Ay:()=>s,L$:()=>i,jD:()=>n});let a=(0,o(8943).Z0)({name:"credentials",initialState:{showCredentials:!1},reducers:{show:e=>{e.showCredentials=!0},hide:e=>{e.showCredentials=!1},toggle:e=>{e.showCredentials=!e.showCredentials}}}),{show:r,hide:n,toggle:i}=a.actions,s=a.reducer},775:()=>{},859:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1996:(e,t,o)=>{e.exports=o(5192)()},2593:()=>{},2913:(e,t,o)=>{"use strict";o.d(t,{default:()=>y});var a=o(5155);o(2593);var r=o(2115),n=o(9606),i=o(2651);o(5424);var s=o(5565);o(6044);let c=e=>{let{label:t,name:o,type:r="text",iconSrc:n,register:i,defaultValue:c}=e;return(0,a.jsxs)("div",{className:"editProfile-inputBox",children:[(0,a.jsx)("h5",{className:"editProfile-inputHeading",children:t}),(0,a.jsxs)("div",{className:"editProfile-input",children:[(0,a.jsx)(s.default,{src:n,alt:"".concat(t," Icon"),width:22,height:22}),(0,a.jsx)("span",{children:"|"}),(0,a.jsx)("input",{type:r,className:"editProfile-inputField",placeholder:t,defaultValue:c,...i(o)})]})]})};var u=o(3391),l=o(1665),h=o(3049),d=o(9208);let p=e=>{let{register:t,handleSubmit:o}=e,r=(0,u.wA)(),n=async e=>{try{let t=d.A.get("accessToken");if(!t){console.error("No access token found in cookies");return}await i.A.put("https://api.urido.co.uk/user/update",e,{headers:{Authorization:"Bearer ".concat(t)}}),(0,h.gt)(r),l.oR.success("Profile updated successfully!")}catch(e){console.error("Error updating profile",e),l.oR.error("Error updating profile. Please try again.")}};return(0,a.jsx)("div",{className:"editProfile-formBox",children:(0,a.jsxs)("form",{className:"editProfile-inputs",onSubmit:o(n),children:[(0,a.jsx)(c,{label:"Name",name:"userName",iconSrc:"/user.png",register:t}),(0,a.jsx)(c,{label:"Email",name:"email",type:"email",iconSrc:"/mail.png",register:t}),(0,a.jsx)(c,{label:"Password",name:"password",type:"password",iconSrc:"/password.png",register:t}),(0,a.jsx)(c,{label:"Phone",name:"phone",type:"tel",iconSrc:"/call-black.png",register:t}),(0,a.jsx)("button",{type:"submit",className:"editProfile-button",children:"Save Profile"})]})})};o(775);var g=o(9369),f=o.n(g);let m=e=>{let{profilePic:t,setProfilePic:o}=e,[n,c]=(0,r.useState)("/profilePic.png"),[u,h]=(0,r.useState)(null),[p,g]=(0,r.useState)("Upload Picture"),[m,v]=(0,r.useState)(1),y=(0,r.useRef)(null),b=async()=>{if(!y.current){alert("No image selected!");return}y.current.getImageScaledToCanvas().toBlob(async e=>{if(e){let t=new FormData;t.append("file",e,u.name);try{let e=d.A.get("accessToken");if(!e){console.error("No access token found in cookies");return}let a=await i.A.post("https://api.urido.co.uk/user/update-profile-pic",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(e)}});o(a.data.data.profilePicUrl),l.oR.success("Your Booking Is Done!"),g("Upload Picture"),h(null)}catch(e){console.error("Error uploading image:",e),l.oR.error("Image upload failed!")}}})};return(0,a.jsxs)("div",{className:"editProfile-imageBox",children:["Adjust & Save"===p?(0,a.jsxs)("div",{className:"editor-container",children:[(0,a.jsx)(f(),{ref:y,image:n,width:180,height:180,border:50,borderRadius:100,color:[255,255,255,.6],scale:m,rotate:0,style:{backgroundColor:"rgb(217, 217, 217)"}}),(0,a.jsx)("input",{type:"range",value:m,min:"1",max:"3",step:"0.1",onChange:e=>{v(parseFloat(e.target.value))},className:"scale-slider"})]}):(0,a.jsx)(s.default,{src:t||n,width:200,height:200,alt:"Profile Picture",className:"editProfile-image"}),(0,a.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{let t=e.target.files[0];t&&(h(t),c(URL.createObjectURL(t)),g("Adjust & Save"))},style:{display:"none"},id:"file-input"}),(0,a.jsx)("button",{className:"editProfile-uploadButton",onClick:()=>{"Upload Picture"===p?document.getElementById("file-input").click():b()},children:p})]})};var v=o(6046);let y=()=>{let{register:e,handleSubmit:t,setValue:o}=(0,n.mN)(),s=(0,v.useRouter)(),c=(0,u.d4)(e=>e.auth.isLoggedIn),[l,h]=(0,r.useState)(!0),[g,f]=(0,r.useState)("");return((0,r.useEffect)(()=>{if(c)h(!1);else{let e=setTimeout(()=>{c||s.push("/"),h(!1)},100);return()=>clearTimeout(e)}},[c,s]),(0,r.useEffect)(()=>{let e=async()=>{try{let e=d.A.get("accessToken");if(!e){console.error("No access token found in cookies");return}let t=(await i.A.get("https://api.urido.co.uk/user/current",{headers:{Authorization:"Bearer ".concat(e)}})).data.data;f(t.profilePic),o("userName",t.userName),o("email",t.email),o("phone",t.phone)}catch(e){console.error("Error fetching user data",e)}};c&&e()},[c,o,f]),l)?(0,a.jsx)("div",{className:"loading-container",children:"Loading..."}):(0,a.jsxs)("div",{className:"editProfile-container",children:[(0,a.jsx)(m,{profilePic:g,setProfilePic:f}),(0,a.jsx)(p,{register:e,handleSubmit:t})]})}},3049:(e,t,o)=>{"use strict";o.d(t,{$u:()=>c,gt:()=>l,rM:()=>u});var a=o(2651),r=o(9208),n=o(22),i=o(518),s=o(5829);let c=async(e,t)=>{try{let o=(await a.A.post(e,t,{withCredentials:!0})).data.data.accessToken;if(o)return r.A.set("accessToken",o,{expires:1,secure:!0,sameSite:"None"}),o}catch(e){var o,n;throw(null===(n=e.response)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:o.message)||e.message}},u=(e,t)=>{let o=(0,s.oL)(t);if(!o)throw Error("Failed to decode token");e((0,n.iD)(o)),e((0,i.jD)())},l=e=>{let t=r.A.get("accessToken");if(t){let o=(0,s.oL)(t);o&&e((0,n.iD)(o))}}},3755:(e,t,o)=>{Promise.resolve().then(o.bind(o,2913))},5192:(e,t,o)=>{"use strict";var a=o(859);function r(){}function n(){}n.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,n,i){if(i!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:r};return o.PropTypes=o,o}},5424:()=>{},5829:(e,t,o)=>{"use strict";o.d(t,{Yq:()=>i,fU:()=>s,oL:()=>c,sH:()=>u}),o(3691);var a=o(2922),r=o(9208),n=o(2651);let i=e=>new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g," ").replace(",",""),s=e=>{let[t,o]=e.split(":");return"".concat(t,":").concat(o)},c=e=>{try{return(0,a.s)(e)}catch(e){return console.error("Invalid token:",e),null}},u=async e=>{let t,o,a;let i=r.A.get("accessToken");if(i){let e=c(i);if(!e)throw Error("Failed to decode token");t=e.email,o=e.phone,a=e.userName}else t=e.passengerEmail,o=e.passengerPhone,a=e.passengerName;let s={phone:o,subject:"Booking Confirmation",bookingDetails:e,userEmail:t,userName:a};try{let t=await n.A.post("https://api.urido.co.uk/booking/create",e,{withCredentials:!0});return t.data.data.accessToken&&r.A.set("accessToken",t.data.data.accessToken,{expires:1,secure:!0}),await n.A.post("/frontend-api/sendBookingEmail",s,{withCredentials:!0}),t}catch(e){var u,l;throw console.error("Error in createBooking:",e),(null===(l=e.response)||void 0===l?void 0:null===(u=l.data)||void 0===u?void 0:u.message)||e.message}}},6044:()=>{},9369:function(e,t,o){var a;a=function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),r=o(t);function n(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function c(e,t){var o,a=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)),a}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach(function(t){i(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],a=!0,r=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}return o}}(e,t)||g(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=Array(t);o<t;o++)a[o]=e[o];return a}function m(e,t){return new Promise(function(o,a){var r=new Image;r.onload=function(){return o(r)},r.onerror=a,!1==(null!==e&&!!e.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(r.crossOrigin=t),r.src=e})}var v,y="undefined"!=typeof window&&"undefined"!=typeof navigator&&!!("ontouchstart"in window||0<navigator.msMaxTouchPoints),b="undefined"!=typeof File,w={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},P=y?w.touch:w.desktop,k="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,x={x:.5,y:.5},M=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,r.default.Component);var e,t,o,a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var t,o=l(c);return t=e?Reflect.construct(o,arguments,l(this).constructor):o.apply(this,arguments),t&&("object"==typeof t||"function"==typeof t)?t:d(this)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),i(d(t=a.call(this,e)),"state",{drag:!1,my:null,mx:null,image:x}),i(d(t),"handleImageReady",function(e){var o=t.getInitialSize(e.width,e.height);o.resource=e,o.x=.5,o.y=.5,o.backgroundColor=t.props.backgroundColor,t.setState({drag:!1,image:o},t.props.onImageReady),t.props.onLoadSuccess(o)}),i(d(t),"clearImage",function(){t.canvas.getContext("2d").clearRect(0,0,t.canvas.width,t.canvas.height),t.setState({image:x})}),i(d(t),"handleMouseDown",function(e){(e=e||window.event).preventDefault(),t.setState({drag:!0,mx:null,my:null})}),i(d(t),"handleMouseUp",function(){t.state.drag&&(t.setState({drag:!1}),t.props.onMouseUp())}),i(d(t),"handleMouseMove",function(e){var o,a,r,n,i,s,c,l,h,d,p,g,f,m,v,y;e=e||window.event,!1!==t.state.drag&&(e.preventDefault(),r={mx:o=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:a=e.targetTouches?e.targetTouches[0].pageY:e.clientY},y=(y=t.props.rotate%360)<0?y+360:y,t.state.mx&&t.state.my&&(n=t.state.mx-o,i=t.state.my-a,s=t.state.image.width*t.props.scale,c=t.state.image.height*t.props.scale,h=(l=t.getCroppingRect()).x,d=l.y,h*=s,d*=c,g=Math.cos((p=function(e){return Math.PI/180*e})(y)),m=d+-n*(f=Math.sin(p(y)))+i*g,v={x:(h+n*g+i*f)/s+1/t.props.scale*t.getXScale()/2,y:m/c+1/t.props.scale*t.getYScale()/2},t.props.onPositionChange(v),r.image=u(u({},t.state.image),v)),t.setState(r),t.props.onMouseMove(e))}),i(d(t),"setCanvas",function(e){t.canvas=e}),t.canvas=null,t}return t=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(k=1);var e,t,o=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(o),document&&(e=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()&&{passive:!1},t=P.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),y&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===x||this.clearImage();var o=this.canvas.getContext("2d");o.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(o),this.paintImage(o,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=P.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),y&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,a=e.rotate,r=e.border,n={},i=p(this.getBorders(r),2),s=i[0],c=i[1];return this.isVertical()?(n.width=o,n.height=t):(n.width=t,n.height=o),n.width+=2*s,n.height+=2*c,{canvas:n,rotate:a,width:t,height:o,border:r}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var a=o.getContext("2d");return a.translate(o.width/2,o.height/2),a.rotate(this.props.rotate*Math.PI/180),a.translate(-o.width/2,-o.height/2),this.isVertical()&&a.translate((o.width-o.height)/2,(o.height-o.width)/2),t.backgroundColor&&(a.fillStyle=t.backgroundColor,a.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),a.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,a=document.createElement("canvas");return this.isVertical()?(a.width=o,a.height=t):(a.width=t,a.height=o),this.paintImage(a.getContext("2d"),this.state.image,0,1),a}},{key:"getXScale",value:function(){return Math.min(1,this.props.width/this.props.height/(this.state.image.width/this.state.image.height))}},{key:"getYScale",value:function(){return Math.min(1,this.props.height/this.props.width/(this.state.image.height/this.state.image.width))}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),a={x:e.x-t/2,y:e.y-o/2,width:t,height:o},r=0,n=1-a.width,i=0,s=1-a.height;return(this.props.disableBoundaryChecks||1<t||1<o)&&(r=-a.width,i=-a.height,s=n=1),u(u({},a),{},{x:Math.max(r,Math.min(a.x,n)),y:Math.max(i,Math.min(a.y,s))})}},{key:"loadImage",value:function(e){b&&e instanceof File?this.loadingImage=new Promise(function(t,o){var a=new FileReader;a.onload=function(e){try{var a=m(e.target.result);t(a)}catch(e){o(e)}},a.readAsDataURL(e)}).then(this.handleImageReady).catch(this.props.onLoadFailure):"string"==typeof e&&(this.loadingImage=m(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var o,a,r=this.getDimensions();return t/e<r.height/r.width?a=e*((o=this.getDimensions().height)/t):o=t*((a=this.getDimensions().width)/e),{height:o,width:a}}},{key:"paintImage",value:function(e,t,o,a){var r,n=3<arguments.length&&void 0!==a?a:k;t.resource&&(r=this.calculatePosition(t,o),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(n,n),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,r.x,r.y,r.width,r.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(r.x,r.y,r.width,r.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=p(this.getBorders(t),2),a=o[0],r=o[1],n=this.getCroppingRect(),i=e.width*this.props.scale,s=e.height*this.props.scale,c=-n.x*i,u=-n.y*s;return this.isVertical()?(c+=r,u+=a):(c+=a,u+=r),{x:c,y:u,height:s,width:i}}},{key:"paint",value:function(e){e.save(),e.scale(k,k),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,o,a,r,n,i=this.props.borderRadius,s=this.getDimensions(),c=p(this.getBorders(s.border),2),u=c[0],l=c[1],h=s.canvas.height,d=s.canvas.width,i=Math.max(i,0);i=Math.min(i,d/2-u,h/2-l),e.beginPath(),t=d-2*u,o=h-2*l,0===(a=i)?e.rect(u,l,t,o):(r=t-a,n=o-a,e.translate(u,l),e.arc(a,a,a,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,a,a,1.5*Math.PI,2*Math.PI),e.lineTo(t,n),e.arc(r,n,a,2*Math.PI,.5*Math.PI),e.lineTo(a,o),e.arc(a,n,a,.5*Math.PI,Math.PI),e.translate(-u,-l)),e.rect(d,0,-d,h),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),o=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,function(e,t){if(null==e)return{};var o,a=function(e,t){if(null==e)return{};for(var o,a={},r=Object.keys(e),n=0;n<r.length;n++)o=r[n],0<=t.indexOf(o)||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n++)o=r[n],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o]);return a}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),a=this.getDimensions(),n={width:a.canvas.width,height:a.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},i={width:a.canvas.width*k,height:a.canvas.height*k,style:u(u({},n),t)};return i[P.react.down]=this.handleMouseDown,y&&(i[P.react.mouseDown]=this.handleMouseDown),r.default.createElement("canvas",s({ref:this.setCanvas},i,o))}}],n(c.prototype,t),o&&n(c,o),c}();return i(M,"propTypes",{scale:a.default.number,rotate:a.default.number,image:a.default.oneOfType([a.default.string].concat(function(e){if(Array.isArray(e))return f(e)}(v=b?[a.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(v)||g(v)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),borderRadius:a.default.number,width:a.default.number,height:a.default.number,position:a.default.shape({x:a.default.number,y:a.default.number}),color:a.default.arrayOf(a.default.number),backgroundColor:a.default.string,crossOrigin:a.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:a.default.func,onLoadSuccess:a.default.func,onImageReady:a.default.func,onImageChange:a.default.func,onMouseUp:a.default.func,onMouseMove:a.default.func,onPositionChange:a.default.func,disableBoundaryChecks:a.default.bool,disableHiDPIScaling:a.default.bool,disableCanvasRotation:a.default.bool}),i(M,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),M},e.exports=a(o(1996),o(2115))}},e=>{var t=t=>e(e.s=t);e.O(0,[70,586,970,651,790,46,874,441,587,358],()=>t(3755)),_N_E=e.O()}]);