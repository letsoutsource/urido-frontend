(()=>{var e={};e.id=632,e.ids=[632],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14985:e=>{"use strict";e.exports=require("dns")},21820:e=>{"use strict";e.exports=require("os")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>l,serverHooks:()=>x,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>u});var o={};r.r(o),r.d(o,{POST:()=>a});var i=r(42706),s=r(28203),n=r(45994),p=r(98721);async function a(e){try{let{phone:t,subject:r,bookingDetails:o,userEmail:i,userName:s}=await e.json(),n=p.createTransport({host:"premium145.web-hosting.com",port:465,secure:!0,auth:{user:"info@urido.co.uk",pass:"RO8maT9C2uZx"}}),a={from:`"${s}" <info@urido.co.uk>`,to:"support@urido.co.uk",subject:r,html:`
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05); background: #ffffff;">
        <!-- Header Section -->
        <div style="background: linear-gradient(135deg, #1e88e5, #1565c0); padding: 25px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-weight: 600; letter-spacing: 0.5px;">New Booking Request</h2>
        </div>
        
        <!-- Contact Information Section -->
        <div style="padding: 25px 30px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
          <h3 style="color: #424242; margin-top: 0; font-size: 18px; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; width: 160px;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #e3f2fd; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                    <span style="color: #1e88e5; font-size: 14px;">📞</span>
                  </span>
                  <span style="color: #757575; font-weight: 500;">Contact Number:</span>
                </div>
              </td>
              <td style="padding: 10px 0;"><span style="color: #424242; font-weight: 400;">${t}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #e3f2fd; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                    <span style="color: #1e88e5; font-size: 14px;">📧</span>
                  </span>
                  <span style="color: #757575; font-weight: 500;">Email:</span>
                </div>
              </td>
              <td style="padding: 10px 0;"><span style="color: #424242; font-weight: 400;">${i}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #e3f2fd; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                    <span style="color: #1e88e5; font-size: 14px;">🏷️</span>
                  </span>
                  <span style="color: #757575; font-weight: 500;">Subject:</span>
                </div>
              </td>
              <td style="padding: 10px 0;"><span style="color: #424242; font-weight: 400;">${r}</span></td>
            </tr>
          </table>
        </div>
        
        <!-- Booking Details Section -->
        <div style="padding: 25px 30px;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #424242; margin-top: 0; font-size: 18px; display: flex; align-items: center;">
              <span style="background: #e3f2fd; border-radius: 50%; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                <span style="color: #1e88e5; font-size: 16px;">📝</span>
              </span>
              Booking Details
            </h3>
          </div>
          
          ${function(e){if(!e||"object"!=typeof e)return"<p>No booking details provided.</p>";let t=Object.entries(e).map(([e,t])=>{var r;return Array.isArray(t)?`
          <tr>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #f8f9fa; width: 180px; color: #757575; font-weight: 500;">${d(e)}</td>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; color: #424242;">${t.join(", ")}</td>
          </tr>
        `:"object"==typeof t?`
          <tr>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #f8f9fa; width: 180px; color: #757575; font-weight: 500;">${d(e)}</td>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; color: #424242;">${r=t,Object.entries(r).map(([e,t])=>`<div style="margin-bottom: 5px;"><span style="color: #757575; font-weight: 500;">${d(e)}:</span> <span style="color: #424242;">${t}</span></div>`).join("")}</td>
          </tr>
        `:`
        <tr>
          <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #f8f9fa; width: 180px; color: #757575; font-weight: 500;">${d(e)}</td>
          <td style="padding: 12px 15px; border: 1px solid #e0e0e0; color: #424242;">${t}</td>
        </tr>
      `}).join("");return`
    <table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 0 0 1px #e0e0e0;">
      <tbody>
        ${t}
      </tbody>
    </table>
  `}(o)}
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="color: #757575; margin: 0; font-size: 14px;">Thank you for your booking request!</p>
        </div>
      </div>
      `,replyTo:i};return await n.sendMail(a),new Response(JSON.stringify({message:"Booking email sent successfully"}),{status:200})}catch(e){return console.error("Error sending booking email:",e),new Response(JSON.stringify({error:"Failed to send booking email"}),{status:500})}}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}let l=new i.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/frontend-api/sendBookingEmail/route",pathname:"/frontend-api/sendBookingEmail",filename:"route",bundlePath:"app/frontend-api/sendBookingEmail/route"},resolvedPagePath:"D:\\Project\\urido-frontend\\src\\app\\frontend-api\\sendBookingEmail\\route.js",nextConfigOutput:"",userland:o}),{workAsyncStorage:c,workUnitAsyncStorage:u,serverHooks:x}=l;function g(){return(0,n.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:u})}},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},79646:e=>{"use strict";e.exports=require("child_process")},81630:e=>{"use strict";e.exports=require("http")},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[994,458],()=>r(66125));module.exports=o})();