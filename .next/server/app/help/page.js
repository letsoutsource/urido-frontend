(()=>{var e={};e.id=728,e.ids=[728],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},13290:()=>{},18536:(e,r,t)=>{"use strict";t.d(r,{default:()=>eR});var o=t(45512);t(13290);var a=t(58009),s=t(45103);t(34397);let i=[{icon:"/call.png",details:["01733 595092","01733 201000"]},{icon:"/location.png",details:"Unit 2 Northey House, Oxney Road,Peterborough,England, PE1 5YW"},{icon:"/location.png",details:"Unit 57 C70, The Winning Box, 27-37 Station Rd, Hayes UB3 4DX, United Kingdom"}],l=[{name:"Name",placeholder:"Name",icon:"/user.png",validation:{required:"Name?"}},{name:"email",placeholder:"Email",icon:"/mail.png",validation:{required:"Email?",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Please enter a valid email address"}}}],n=[{value:"complaintaboutdriver",label:"Complaint About Driver"},{value:"lostitem",label:"Lost Item"},{value:"technicalsupport",label:"Technical Support"},{value:"paymentissue",label:"Payment Issue"},{value:"bookingproblem",label:"Booking Problem"},{value:"other",label:"Other"}],d=()=>(0,o.jsxs)("div",{className:"helpline-information-card",children:[(0,o.jsx)("h4",{className:"information-card-header",children:"Contact Information"}),i.map((e,r)=>(0,o.jsxs)("div",{className:"information-card-row",children:[(0,o.jsx)(s.default,{src:e.icon,alt:"icon",height:18,width:18,className:"helpline-information-card-icon"}),(0,o.jsx)("p",{className:"contact-details",children:Array.isArray(e.details)?e.details.join(" | "):e.details})]},r))]});var p=t(6868),c=t(82281),u=t(29107),m=t(21110),h=t(49408),f=t(50178),b=t(38716),v=t(94880),g=t(68640),x=t(38603),y=t(31137),A=t(82105);function j(e){return(0,A.Ay)("MuiFormLabel",e)}let P=(0,y.A)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),w=e=>{let{classes:r,color:t,focused:o,disabled:a,error:s,filled:i,required:l}=e,n={root:["root",`color${(0,f.A)(t)}`,a&&"disabled",s&&"error",i&&"filled",o&&"focused",l&&"required"],asterisk:["asterisk",s&&"error"]};return(0,u.A)(n,j,r)},C=(0,b.Ay)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,"secondary"===t.color&&r.colorSecondary,t.filled&&r.filled]}})((0,v.A)(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(e.palette).filter((0,g.A)()).map(([r])=>({props:{color:r},style:{[`&.${P.focused}`]:{color:(e.vars||e).palette[r].main}}})),{props:{},style:{[`&.${P.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${P.error}`]:{color:(e.vars||e).palette.error.main}}}]}))),R=(0,b.Ay)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})((0,v.A)(({theme:e})=>({[`&.${P.error}`]:{color:(e.vars||e).palette.error.main}}))),N=a.forwardRef(function(e,r){let t=(0,x.b)({props:e,name:"MuiFormLabel"}),{children:a,className:s,color:i,component:l="label",disabled:n,error:d,filled:p,focused:u,required:f,...b}=t,v=(0,h.A)(),g=(0,m.A)({props:t,muiFormControl:v,states:["color","required","focused","disabled","error","filled"]}),y={...t,color:g.color||"primary",component:l,disabled:g.disabled,error:g.error,filled:g.filled,focused:g.focused,required:g.required},A=w(y);return(0,o.jsxs)(C,{as:l,ownerState:y,className:(0,c.A)(A.root,s),ref:r,...b,children:[a,g.required&&(0,o.jsxs)(R,{ownerState:y,"aria-hidden":!0,className:A.asterisk,children:[" ","*"]})]})});function S(e){return(0,A.Ay)("MuiFormGroup",e)}(0,y.A)("MuiFormGroup",["root","row","error"]);let k=e=>{let{classes:r,row:t,error:o}=e;return(0,u.A)({root:["root",t&&"row",o&&"error"]},S,r)},M=(0,b.Ay)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.row&&r.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),q=a.forwardRef(function(e,r){let t=(0,x.b)({props:e,name:"MuiFormGroup"}),{className:a,row:s=!1,...i}=t,l=(0,h.A)(),n=(0,m.A)({props:t,muiFormControl:l,states:["error"]}),d={...t,row:s,error:n.error},p=k(d);return(0,o.jsx)(M,{className:(0,c.A)(p.root,a),ownerState:d,ref:r,...i})});function F(e){return(0,A.Ay)("MuiRadioGroup",e)}(0,y.A)("MuiRadioGroup",["root","row","error"]);var $=t(64424),z=t(1264);let E=a.createContext(void 0),B=t(5081).A,D=e=>{let{classes:r,row:t,error:o}=e;return(0,u.A)({root:["root",t&&"row",o&&"error"]},F,r)},L=a.forwardRef(function(e,r){let{actions:t,children:s,className:i,defaultValue:l,name:n,onChange:d,value:p,...u}=e,m=a.useRef(null),h=D(e),[f,b]=(0,z.A)({controlled:p,default:l,name:"RadioGroup"});a.useImperativeHandle(t,()=>({focus:()=>{let e=m.current.querySelector("input:not(:disabled):checked");e||(e=m.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let v=(0,$.A)(r,m),g=B(n),x=a.useMemo(()=>({name:g,onChange(e){b(e.target.value),d&&d(e,e.target.value)},value:f}),[g,d,b,f]);return(0,o.jsx)(E.Provider,{value:x,children:(0,o.jsx)(q,{role:"radiogroup",ref:v,className:(0,c.A)(h.root,i),...u,children:s})})});var T=t(46404);function _(e){return(0,A.Ay)("MuiTypography",e)}(0,y.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);let O={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},H=(0,T.Dg)(),G=e=>{let{align:r,gutterBottom:t,noWrap:o,paragraph:a,variant:s,classes:i}=e,l={root:["root",s,"inherit"!==e.align&&`align${(0,f.A)(r)}`,t&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return(0,u.A)(l,_,i)},I=(0,b.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r[`align${(0,f.A)(t.align)}`],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})((0,v.A)(({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([e,r])=>"inherit"!==e&&r&&"object"==typeof r).map(([e,r])=>({props:{variant:e},style:r})),...Object.entries(e.palette).filter((0,g.A)()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})),...Object.entries(e.palette?.text||{}).filter(([,e])=>"string"==typeof e).map(([r])=>({props:{color:`text${(0,f.A)(r)}`},style:{color:(e.vars||e).palette.text[r]}})),{props:({ownerState:e})=>"inherit"!==e.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]}))),W={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},U=a.forwardRef(function(e,r){let{color:t,...a}=(0,x.b)({props:e,name:"MuiTypography"}),s=!O[t],i=H({...a,...s&&{color:t}}),{align:l="inherit",className:n,component:d,gutterBottom:p=!1,noWrap:u=!1,paragraph:m=!1,variant:h="body1",variantMapping:f=W,...b}=i,v={...i,align:l,color:t,className:n,component:d,gutterBottom:p,noWrap:u,paragraph:m,variant:h,variantMapping:f},g=d||(m?"p":f[h]||W[h])||"span",y=G(v);return(0,o.jsx)(I,{as:g,ref:r,className:(0,c.A)(y.root,n),...b,ownerState:v,style:{..."inherit"!==l&&{"--Typography-textAlign":l},...b.style}})});function X(e){return(0,A.Ay)("MuiFormControlLabel",e)}let Z=(0,y.A)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var K=t(33437);let J=e=>{let{classes:r,disabled:t,labelPlacement:o,error:a,required:s}=e,i={root:["root",t&&"disabled",`labelPlacement${(0,f.A)(o)}`,a&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,u.A)(i,X,r)},Y=(0,b.Ay)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[{[`& .${Z.label}`]:r.label},r.root,r[`labelPlacement${(0,f.A)(t.labelPlacement)}`]]}})((0,v.A)(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Z.disabled}`]:{cursor:"default"},[`& .${Z.label}`]:{[`&.${Z.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:e})=>"start"===e||"top"===e||"bottom"===e,style:{marginLeft:16}}]}))),Q=(0,b.Ay)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})((0,v.A)(({theme:e})=>({[`&.${Z.error}`]:{color:(e.vars||e).palette.error.main}}))),V=a.forwardRef(function(e,r){let t=(0,x.b)({props:e,name:"MuiFormControlLabel"}),{checked:s,className:i,componentsProps:l={},control:n,disabled:d,disableTypography:p,inputRef:u,label:f,labelPlacement:b="end",name:v,onChange:g,required:y,slots:A={},slotProps:j={},value:P,...w}=t,C=(0,h.A)(),R=d??n.props.disabled??C?.disabled,N=y??n.props.required,S={disabled:R,required:N};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===n.props[e]&&void 0!==t[e]&&(S[e]=t[e])});let k=(0,m.A)({props:t,muiFormControl:C,states:["error"]}),M={...t,disabled:R,labelPlacement:b,required:N,error:k.error},q=J(M),F={slots:A,slotProps:{...l,...j}},[$,z]=(0,K.A)("typography",{elementType:U,externalForwardedProps:F,ownerState:M}),E=f;return null==E||E.type===U||p||(E=(0,o.jsx)($,{component:"span",...z,className:(0,c.A)(q.label,z?.className),children:E})),(0,o.jsxs)(Y,{className:(0,c.A)(q.root,i),ownerState:M,ref:r,...w,children:[a.cloneElement(n,S),N?(0,o.jsxs)("div",{children:[E,(0,o.jsxs)(Q,{ownerState:M,"aria-hidden":!0,className:q.asterisk,children:[" ","*"]})]}):E]})});var ee=t(58242),er=t(10226),et=t(40675);function eo(e){return(0,A.Ay)("PrivateSwitchBase",e)}(0,y.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);let ea=e=>{let{classes:r,checked:t,disabled:o,edge:a}=e,s={root:["root",t&&"checked",o&&"disabled",a&&`edge${(0,f.A)(a)}`],input:["input"]};return(0,u.A)(s,eo,r)},es=(0,b.Ay)(et.A)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:r})=>"start"===e&&"small"!==r.size,style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:r})=>"end"===e&&"small"!==r.size,style:{marginRight:-12}}]}),ei=(0,b.Ay)("input",{shouldForwardProp:er.A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),el=a.forwardRef(function(e,r){let{autoFocus:t,checked:a,checkedIcon:s,defaultChecked:i,disabled:l,disableFocusRipple:n=!1,edge:d=!1,icon:p,id:c,inputProps:u,inputRef:m,name:f,onBlur:b,onChange:v,onFocus:g,readOnly:x,required:y=!1,tabIndex:A,type:j,value:P,slots:w={},slotProps:C={},...R}=e,[N,S]=(0,z.A)({controlled:a,default:!!i,name:"SwitchBase",state:"checked"}),k=(0,h.A)(),M=e=>{g&&g(e),k&&k.onFocus&&k.onFocus(e)},q=e=>{b&&b(e),k&&k.onBlur&&k.onBlur(e)},F=e=>{if(e.nativeEvent.defaultPrevented)return;let r=e.target.checked;S(r),v&&v(e,r)},$=l;k&&void 0===$&&($=k.disabled);let E="checkbox"===j||"radio"===j,B={...e,checked:N,disabled:$,disableFocusRipple:n,edge:d},D=ea(B),L={slots:w,slotProps:{input:u,...C}},[T,_]=(0,K.A)("root",{ref:r,elementType:es,className:D.root,shouldForwardComponentProp:!0,externalForwardedProps:{...L,component:"span",...R},getSlotProps:e=>({...e,onFocus:r=>{e.onFocus?.(r),M(r)},onBlur:r=>{e.onBlur?.(r),q(r)}}),ownerState:B,additionalProps:{centerRipple:!0,focusRipple:!n,disabled:$,role:void 0,tabIndex:null}}),[O,H]=(0,K.A)("input",{ref:m,elementType:ei,className:D.input,externalForwardedProps:L,getSlotProps:e=>({onChange:r=>{e.onChange?.(r),F(r)}}),ownerState:B,additionalProps:{autoFocus:t,checked:a,defaultChecked:i,disabled:$,id:E?c:void 0,name:f,readOnly:x,required:y,tabIndex:A,type:j,..."checkbox"===j&&void 0===P?{}:{value:P}}});return(0,o.jsxs)(T,{..._,children:[(0,o.jsx)(O,{...H}),N?s:p]})});var en=t(64445);let ed=(0,en.A)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),ep=(0,en.A)((0,o.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ec=(0,b.Ay)("span",{shouldForwardProp:er.A})({position:"relative",display:"flex"}),eu=(0,b.Ay)(ed)({transform:"scale(1)"}),em=(0,b.Ay)(ep)((0,v.A)(({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]}))),eh=function(e){let{checked:r=!1,classes:t={},fontSize:a}=e,s={...e,checked:r};return(0,o.jsxs)(ec,{className:t.root,ownerState:s,children:[(0,o.jsx)(eu,{fontSize:a,className:t.background,ownerState:s}),(0,o.jsx)(em,{fontSize:a,className:t.dot,ownerState:s})]})},ef=t(67021).A;function eb(e){return(0,A.Ay)("MuiRadio",e)}let ev=(0,y.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),eg=e=>{let{classes:r,color:t,size:o}=e,a={root:["root",`color${(0,f.A)(t)}`,"medium"!==o&&`size${(0,f.A)(o)}`]};return{...r,...(0,u.A)(a,eb,r)}},ex=(0,b.Ay)(el,{shouldForwardProp:e=>(0,er.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,"medium"!==t.size&&r[`size${(0,f.A)(t.size)}`],r[`color${(0,f.A)(t.color)}`]]}})((0,v.A)(({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${ev.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,ee.X4)(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter((0,g.A)()).map(([r])=>({props:{color:r,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,ee.X4)(e.palette[r].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter((0,g.A)()).map(([r])=>({props:{color:r,disabled:!1},style:{[`&.${ev.checked}`]:{color:(e.vars||e).palette[r].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),ey=(0,o.jsx)(eh,{checked:!0}),eA=(0,o.jsx)(eh,{}),ej=a.forwardRef(function(e,r){let t=(0,x.b)({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:i=ey,color:l="primary",icon:n=eA,name:d,onChange:p,size:u="medium",className:m,disabled:f,disableRipple:b=!1,slots:v={},slotProps:g={},...y}=t,A=(0,h.A)(),j=f;A&&void 0===j&&(j=A.disabled),j??=!1;let P={...t,disabled:j,disableRipple:b,color:l,size:u},w=eg(P),C=a.useContext(E),R=s,N=ef(p,C&&C.onChange),S=d;if(C){if(void 0===R){var k,M;k=C.value,R="object"==typeof(M=t.value)&&null!==M?k===M:String(k)===String(M)}void 0===S&&(S=C.name)}let[q,F]=(0,K.A)("root",{ref:r,elementType:ex,className:(0,c.A)(w.root,m),shouldForwardComponentProp:!0,externalForwardedProps:{slots:v,slotProps:g,...y},getSlotProps:e=>({...e,onChange:(r,...t)=>{e.onChange?.(r,...t),N(r,...t)}}),ownerState:P,additionalProps:{type:"radio",icon:a.cloneElement(n,{fontSize:n.props.fontSize??u}),checkedIcon:a.cloneElement(i,{fontSize:i.props.fontSize??u}),disabled:j,name:S,checked:R,slots:v,slotProps:{input:"function"==typeof g.input?g.input(P):g.input}}});return(0,o.jsx)(q,{...F,classes:w})});t(29937);var eP=t(12454),ew=t(85668);let eC=()=>{let{register:e,handleSubmit:r,control:t,formState:{errors:i}}=(0,p.mN)(),[d,c]=(0,a.useState)(n[0]?.value),[u,m]=(0,a.useState)(!1),h=async e=>{m(!0);try{let r=await ew.A.post("/frontend-api/sendEmail",e,{headers:{"Content-Type":"application/json"}});200===r.status?eP.oR.success("Email sent successfully"):eP.oR.error("Failed to send email")}catch(e){console.error("Error sending email:",e),eP.oR.error("Failed to send email")}finally{m(!1)}},f=(e,r)=>{let t=e.target.value;c(t),r(t)};return(0,o.jsxs)("form",{onSubmit:r(h),className:"helpline-form",children:[(0,o.jsx)("div",{className:"form-name-email-inputs",children:l.map((r,t)=>(0,o.jsxs)("div",{className:"form-input-wrapper",children:[(0,o.jsx)(s.default,{src:r.icon,alt:`${r.name} icon`,height:20,width:20}),(0,o.jsx)("span",{className:"input-divider",children:"|"}),(0,o.jsx)("input",{...e(r.name,r.validation||{}),placeholder:r.placeholder,className:"form-input"}),i[r.name]&&(0,o.jsx)("p",{className:"error-message",children:i[r.name].message})]},t))}),(0,o.jsxs)("div",{className:"helpine-subjectSection",children:[(0,o.jsx)(N,{id:"subject-label",children:"Select Subject"}),(0,o.jsx)(p.xI,{name:"subject",control:t,render:({field:e})=>(0,o.jsx)(L,{...e,row:!0,value:d||"",onChange:r=>f(r,e.onChange),className:"helpline-form-subjects",children:n.map((e,r)=>(0,o.jsx)(V,{value:e.value,control:(0,o.jsx)(ej,{color:"default",sx:{"&.Mui-checked":{color:"white"}}}),label:e.label,labelPlacement:"start",className:`helpline-form-subject ${d===e.value?"active":""}`},r))})})]}),(0,o.jsxs)("div",{className:"form-message-input",children:[(0,o.jsx)(s.default,{src:"/mail.png",alt:"message icon",height:20,width:20}),(0,o.jsx)("span",{className:"input-divider",children:"|"}),(0,o.jsx)("input",{...e("message",{required:"Message is required",validate:e=>e.split(" ").filter(Boolean).length>=10||"Message must be at least 10 words"}),placeholder:"Write your Message",className:"form-input"}),i.message&&(0,o.jsx)("p",{className:"error-message",children:i.message.message})]}),(0,o.jsx)("button",{type:"submit",className:"helpline-form-button",disabled:u,children:u?"Submitting...":"Submit"})]})},eR=()=>(0,o.jsxs)("div",{className:"helpline-form-container",children:[(0,o.jsxs)("div",{className:"helpline-details-section",children:[(0,o.jsx)("h2",{className:"helpline-heading",children:"Helpline"}),(0,o.jsx)("span",{className:"helpline-bottomline-1"}),(0,o.jsx)("span",{className:"helpline-bottomline-2"}),(0,o.jsxs)("p",{className:"helpline-para",children:["Get in touch with us! Use the form below to submit your issue, find our contact details and ",(0,o.jsx)("br",{})," address, or view the map of our headquarters for easy navigation."]})]}),(0,o.jsxs)("div",{className:"helpline-form-section",children:[(0,o.jsx)(d,{className:"helpline-information-card"}),(0,o.jsx)(eC,{})]})]})},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},29937:()=>{},31301:(e,r,t)=>{Promise.resolve().then(t.bind(t,46817)),Promise.resolve().then(t.bind(t,95977))},33873:e=>{"use strict";e.exports=require("path")},34397:()=>{},44453:(e,r,t)=>{Promise.resolve().then(t.bind(t,18536)),Promise.resolve().then(t.bind(t,81621))},46817:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});let o=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Project\\\\urido-frontend\\\\src\\\\app\\\\components\\\\helplinePageComponents\\\\helplineFormSection\\\\HelplineFormSection.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Project\\urido-frontend\\src\\app\\components\\helplinePageComponents\\helplineFormSection\\HelplineFormSection.jsx","default")},47517:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var o=t(70260),a=t(28203),s=t(25155),i=t.n(s),l=t(67292),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d={children:["",{children:["help",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,69159)),"D:\\Project\\urido-frontend\\src\\app\\help\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,62804)),"D:\\Project\\urido-frontend\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,18988)),"D:\\Project\\urido-frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}]}.children,p=["D:\\Project\\urido-frontend\\src\\app\\help\\page.js"],c={require:t,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/help/page",pathname:"/help",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},69159:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var o=t(62740);t(76301);var a=t(46817),s=t(95977);let i=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)(a.default,{}),(0,o.jsx)(s.default,{})]})},74075:e=>{"use strict";e.exports=require("zlib")},77122:()=>{},79551:e=>{"use strict";e.exports=require("url")},81621:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});var o=t(45512);t(77122);let a=()=>(0,o.jsxs)("div",{className:"helpline-map-container",children:[(0,o.jsx)("h2",{className:"helpline-map-heading",children:"Find Us Here"}),(0,o.jsx)("p",{className:"helpline-map-para",children:"Easily locate us on the map and stay connected! Whether you have questions, need assistance, or want to visit, our location is just a click away."}),(0,o.jsx)("div",{className:"helpline-map",children:(0,o.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11693.993944003813!2d-0.24801917919235763!3d52.5914851621283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877bc5d04dfd6f9%3A0x321cd775407dbb27!2s282%20Cromwell%20Road%2C%20Peterborough%2C%20England%2C%20PE1%202HR!5e0!3m2!1sen!2s!4v1738633695694!5m2!1sen!2s",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},94735:e=>{"use strict";e.exports=require("events")},95977:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});let o=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Project\\\\urido-frontend\\\\src\\\\app\\\\components\\\\helplinePageComponents\\\\helplineMap\\\\HelplineMap.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Project\\urido-frontend\\src\\app\\components\\helplinePageComponents\\helplineMap\\HelplineMap.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[994,935,224,149],()=>t(47517));module.exports=o})();