+function(t,e){"use strict";function o(t,e){i.createCanvas(t,this)&&(this.set=i.extend({},o.configDefault,e),this.dots=[],this.createDot(),this.draw(),this.resize())}var i=e.util,r=Math.random,s=2*Math.PI;o.defaultConfig={opacity:1,color:["#fff"],max:6.5,min:.4,speed:.4,resize:!0},o.prototype={version:"1.0.0",snowShape:function(){var t=this,e=t.cw,o=t.set,s=o.speed,a=i.limitRandom(o.max,o.min);return{x:r()*e,y:-a,r:a,vx:r()||.4,vy:a*s,color:t.color()}},createDot:function(){for(var t=6*r(),e=this.dots,o=0;o<t;o++)e.push(this.snowShape())},draw:function(){var t=this,e=t.set,o=t.cxt,i=t.cw,a=t.ch,n=t.dots;o.clearRect(0,0,i,a),o.globalAlpha=e.opacity,n.forEach(function(e,c){var h=e.x,l=e.y,p=e.r;o.save(),o.beginPath(),o.arc(h,l,p,0,s),o.fillStyle=e.color,o.fill(),o.restore(),e.x+=e.vx,e.y+=e.vy,r()>.99&&r()>.5&&(e.vx*=-1),h<0||h-p>i?(n.splice(c,1),n.push(t.snowShape())):l-p>=a&&n.splice(c,1)}),r()>.9&&t.createDot(),this.requestAnimationFrame()}},e.extend(o.prototype),e.snow=o.prototype.constructor=o}(window,Particleground);