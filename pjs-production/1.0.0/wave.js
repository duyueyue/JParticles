+function(e,t){"use strict";function o(e,t){s.createCanvas(e,this)&&(this.set=s.extend({},o.configDefault,t),this.initAttr(),this.createDot(),this.draw(),this.resize())}var s=t.util,i=Math.random,r=Math.sin,f=2*Math.PI,n="undefined",a=Array.isArray;o.defaultConfig={opacity:1,lineColor:[],fillColor:[],num:null,lineWidth:[],offsetLeft:[],offsetTop:[],crest:[],rippleNum:[],speed:[],area:!1,stroke:!0,resize:!0},o.prototype={version:"1.0.0",initAttr:function(){function e(e){var s=c[e];if(a(s)){if("offsetTop"===e||"crest"===e||"offsetLeft"===e)for(var i="offsetLeft"===e?f:l,r=0;r<u;r++)s[r]=typeof s[r]===n?t(e):o(s[r],i);else if(s.length<u)for(var r=0,h=u-s.length;r<h;r++)s.push(t(e))}else if(c[e]=[],"number"==typeof s||"boolean"==typeof s||"string"==typeof s)for(var r=0;r<u;r++)"offsetTop"===e||"crest"===e?s=o(s,l):"offsetLeft"===e?s=o(s,f):"rippleNum"===e&&d.push(f/s),c[e].push(s)}function t(e){switch(e){case"lineColor":case"fillColor":e=h();break;case"lineWidth":e=p(2,.2);break;case"offsetLeft":e=i()*f;break;case"offsetTop":case"crest":e=i()*l;break;case"rippleNum":e=p(f/2,1),d.push(f/e);break;case"speed":e=p(.4,.1);break;case"area":e=!1;break;case"stroke":e=!0}return e}function o(e,t){return e>0&&e<1?e*t:e}var r=this,f=r.cw,l=r.ch,c=r.set,h=s.randomColor,p=s.limitRandom,u=c.num=c.num||p(l/2,1),d=this.rippleLength=[];["lineColor","fillColor","lineWidth","offsetLeft","offsetTop","crest","rippleNum","speed","area","stroke"].forEach(function(t){e(t)})},setOffsetTop:function(e){a(e)?this.set.offsetTop.forEach(function(t,o,s){s[o]=e[o]||t}):(e>0&&e<1&&(e*=this.ch),this.set.offsetTop.forEach(function(t,o,s){s[o]=e}))},createDot:function(){for(var e=this.set,t=this.cw,o=e.num,s=[],i=0;i<o;i++){for(var r=[],n=f/this.rippleLength[i],a=0;a<t;a++)r.push({x:a,y:a*n});s.push(r)}this.dots=s},draw:function(){var e=this.cxt,t=this.cw,o=this.ch,s=this.set;e.clearRect(0,0,t,o),e.globalAlpha=s.opacity,this.dots.forEach(function(i,f){e.save(),e.beginPath();var n=s.crest[f],a=s.offsetLeft[f],l=s.offsetTop[f],c=s.speed[f];i.forEach(function(t,o){e[o?"lineTo":"moveTo"](t.x,n*r(t.y+a)+l),t.y-=c}),s.area[f]&&(e.lineTo(t,o),e.lineTo(0,o),e.closePath(),e.fillStyle=s.fillColor[f],e.fill()),s.stroke[f]&&(e.lineWidth=s.lineWidth[f],e.strokeStyle=s.lineColor[f],e.stroke()),e.restore()}),this.requestAnimationFrame()}},t.extend(o.prototype),t.wave=o.prototype.constructor=o}(window,Particleground);