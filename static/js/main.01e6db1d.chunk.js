(this["webpackJsonpground-reflections-and-video-textures"]=this["webpackJsonpground-reflections-and-video-textures"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(31),r=c(7),a=c(9),i=c(15),o=c(8),s=c(0),j=c(12),u=c(47),b=c(48),l=c(46),O=c(49),d=c(11);function f(e){var t=e.ready,c=e.clicked,n=e.setClicked;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"fullscreen bg ".concat(t?"ready":"notready"," ").concat(c&&"clicked"),children:Object(d.jsx)("div",{onClick:function(){return t&&n(!0)},children:t?"click to continue":"loading"})})})}var p=["clicked"];function x(e){var t=Object(u.a)("carla-draco.glb").scene;return Object(d.jsx)("primitive",Object(o.a)({object:t},e))}function g(e){var t=e.clicked,c=Object(i.a)(e,p),n=Object(r.useState)((function(){return Object.assign(document.createElement("video"),{src:"eddie.mp4",crossOrigin:"Anonymous",loop:!0})})),j=Object(a.a)(n,1)[0];return Object(r.useEffect)((function(){t&&j.play()}),[j,t]),Object(d.jsxs)(b.a,Object(o.a)(Object(o.a)({font:"/Inter-Bold.woff",fontSize:3,letterSpacing:-.06},c),{},{children:["eddie",Object(d.jsx)("meshBasicMaterial",{toneMapped:!1,children:Object(d.jsx)("videoTexture",{attach:"map",args:[j],encoding:s.sRGBEncoding})})]}))}function m(){var e=Object(l.a)(["SurfaceImperfections003_1K_var1.jpg","SurfaceImperfections003_1K_Normal.jpg"]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)(O.a,{blur:[400,100],resolution:512,args:[10,10],mirror:.5,mixBlur:6,mixStrength:1.5,rotation:[-Math.PI/2,0,Math.PI/2],children:function(e,t){return Object(d.jsx)(e,Object(o.a)({color:"#a0a0a0",metalness:.4,roughnessMap:c,normalMap:n,normalScale:[2,2]},t))}})}function h(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(!1),s=Object(a.a)(i,2),u=s[0],b=s[1],l={clicked:c,setClicked:n,ready:u,setReady:b};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(j.a,{concurrent:!0,gl:{alpha:!1},pixelRatio:[1,1.5],camera:{position:[0,3,100],fov:15},children:[Object(d.jsx)("color",{attach:"background",args:["black"]}),Object(d.jsx)("fog",{attach:"fog",args:["black",15,20]}),Object(d.jsxs)(r.Suspense,{fallback:null,children:[Object(d.jsxs)("group",{position:[0,-1,0],children:[Object(d.jsx)(x,{rotation:[0,Math.PI-.4,0],position:[-1.2,0,.6],scale:[.26,.26,.26]}),Object(d.jsx)(g,Object(o.a)(Object(o.a)({},l),{},{position:[0,1.3,-2]})),Object(d.jsx)(m,{})]}),Object(d.jsx)("ambientLight",{intensity:.5}),Object(d.jsx)("spotLight",{position:[0,10,0],intensity:.3}),Object(d.jsx)("directionalLight",{position:[-20,0,-10],intensity:.7}),Object(d.jsx)(v,{start:u&&c,set:b})]})]}),Object(d.jsx)(f,Object(o.a)({},l))]})}function v(e){var t=e.start,c=e.set,n=Object(r.useState)((function(){return new s.Vector3})),i=Object(a.a)(n,1)[0];return Object(r.useEffect)((function(){return setTimeout((function(){return c(!0)}),500)}),[]),Object(j.c)((function(e){t&&(e.camera.position.lerp(i.set(5*e.mouse.x,3+2*e.mouse.y,14),.05),e.camera.lookAt(0,0,0))}))}c(42);Object(n.render)(Object(d.jsx)(h,{}),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.01e6db1d.chunk.js.map