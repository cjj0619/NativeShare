!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["nativeShare.js"]=t():e["nativeShare.js"]=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";function i(){return n.i(o.h)({},l)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.i(o.h)(l,e)}n.d(t,"c",function(){return l}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});var o=n(1),c=document.querySelector("meta[name=description]"),a=document.querySelector("link[rel*=icon]"),u="from https://github.com/fa-ge/NativeShare",s="";c&&(u=c.getAttribute("content")),a&&(s=a.getAttribute("href"));var l={link:location.href,title:document.title,desc:u,icon:s,from:"",success:o.g,fail:o.g,cancel:o.g,trigger:o.g}},function(e,t,n){"use strict";function i(){}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.src=e,r.async=!0,n.parentNode.insertBefore(r,n),r.onload=t}function o(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}n.d(t,"a",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return g}),n.d(t,"f",function(){return p}),n.d(t,"i",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"h",function(){return o});var c=navigator.userAgent,a=/(iPad).*OS\s([\d_]+)/.test(c),u=/(iPod)(.*OS\s([\d_]+))?/.test(c),s=!a&&/(iPhone\sOS)\s([\d_]+)/.test(c),l=a||u||s,f=/(Android);?[\s\/]+([\d.]+)?/.test(c),d=/micromessenger/i.test(c),h=/MQQBrowser/i.test(c)&&!d,g=/UCBrowser/i.test(c),p=/mobile.*baidubrowser/i.test(c)},function(e,t,n){"use strict";function i(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});n.i(o.b)(e),_flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:o.c.title,content:o.c.desc,landurl:o.c.link,imageurl:o.c.icon,shareSource:o.c.from}),"")}function r(){}var o=n(0);t.a={callShare:i,init:r}},function(e,t,n){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};throw n.i(o.b)(t),new Error("the browser do not support share!")}function r(){}var o=n(0);t.a={callShare:i,init:r}},function(e,t,n){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.i(c.b)(t);var i=a[e];browser.app.share({title:c.c.title,description:c.c.desc,url:c.c.link,img_url:c.c.icon,from:c.c.from,to_app:i})}function r(){n.i(o.i)("https://jsapi.qq.com/get?api=app.share")}var o=n(1),c=n(0),a={timeline:8,appMessage:1,qq:4,weiBo:11,qZone:3,copyUrl:10,more:5,generateQRCode:7,defualt:void 0};t.a={callShare:i,init:r}},function(e,t,n){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.i(o.b)(t);var i=c[e];ucweb.startRequest("shell.page_share",[o.c.title,o.c.desc,o.c.link,i,"",o.c.from,o.c.icon])}function r(){}var o=n(0),c={timeline:"WechatTimeline",appMessage:"WechatFriends",qq:"QQ",weiBo:"SinaWeibo",default:""};t.a={callShare:i,init:r}},function(e,t,n){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.i(o.b)(t);var i=c[e];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:o.c.title,content:o.c.desc,sourceUrl:o.c.link,imageUrl:o.c.icon,source:o.c.from,target:i})):ucbrowser.web_share(title,desc,link,i,"",from,"")}function r(){}var o=n(0),c={timeline:"kWeixinFriend",appMessage:"kWeixin",qq:"kQQ",weiBo:"kSinaWeibo",qZone:"kQZone",default:void 0};t.a={callShare:i,init:r}},function(e,t,n){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.i(a.b)(t)}function r(){}function o(e){n.i(c.i)("https://res.wx.qq.com/open/js/jweixin-1.2.0.js",function(){wx.config(n.i(c.h)({debug:!1,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]},e));var t={title:a.c.title,desc:a.c.desc,link:a.c.link,imgUrl:a.c.icon,type:a.c.type,dataUrl:a.c.dataUrl,success:a.c.success,cancel:a.c.cancel,fail:a.c.fail};Object.defineProperty(t,"trigger",{get:function(){return function(){a.c.trigger.apply(a.c,arguments),n.i(c.h)(t,a.c)}},set:function(e){a.c.trigger=e},enumerable:!0}),wx.ready(function(){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareWeibo(t),wx.onMenuShareTimeline(t)})})}var c=n(1),a=n(0);t.a={callShare:i,init:r,setWechatConfig:o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(0),o=n(4),c=n(5),a=n(6),u=n(2),s=n(7),l=n(3),f={};f=i.a?s.a:i.b?o.a:i.c&&i.d?c.a:i.c&&i.e?a.a:i.f&&i.d?u.a:l.a,f.init(),i.a||(f.setWechatConfig=i.g),f.getShareData=r.a,f.setShareData=r.b,window.nativeShare=f,t.default=f}])});