(function(A){A.fn.kxbdSuperMarquee=function(C){var B=A.extend({},A.fn.kxbdSuperMarquee.defaults,C);return this.each(function(){var V=A(this);var a=V.get(0);var Z=V.width();var K=V.height();var L=V.children();var X=L.children();var J=0;var f=(B.direction=="left"||B.direction=="right")?1:0;var o,M,P,h;var F,N,O,S,T;var g,R;var H,Q;var U=[];var G=0;var D=0;var l=0;L.css(f?"width":"height",10000);var Y="<ul>";if(B.isEqual){g=X[f?"outerWidth":"outerHeight"]();R=X.length;J=g*R;for(var j=0;j<R;j++){U.push(j*g);Y+="<li>"+(j+1)+"</li>"}}else{X.each(function(b){U.push(J);J+=A(this)[f?"outerWidth":"outerHeight"]();Y+="<li>"+(b+1)+"</li>"})}Y+="</ul>";if(J<(f?Z:K)){return}L.append(X.clone()).css(f?"width":"height",J*2);if(B.navId){H=A(B.navId).append(Y).hover(k,n);Q=A("li",H);Q.each(function(b){A(this).bind(B.eventNav,function(){if(P){return}if(G==b){return}m(U[b]);Q.eq(G).removeClass("navOn");G=b;A(this).addClass("navOn")})});Q.eq(G).addClass("navOn")}if(B.direction=="right"||B.direction=="down"){a[f?"scrollLeft":"scrollTop"]=J}else{a[f?"scrollLeft":"scrollTop"]=0}if(B.isMarquee){h=setTimeout(I,B.scrollDelay);V.hover(function(){clearInterval(h)},function(){clearInterval(h);h=setTimeout(I,B.scrollDelay)});if(B.controlBtn){A.each(B.controlBtn,function(b,c){A(c).bind(B.eventA,function(){B.direction=b;B.oldAmount=B.scrollAmount;B.scrollAmount=B.newAmount}).bind(B.eventB,function(){B.scrollAmount=B.oldAmount})})}}else{if(B.isAuto){n();V.hover(k,n)}if(B.btnGo){A.each(B.btnGo,function(b,c){A(c).bind(B.eventGo,function(){if(P==true){return}B.direction=b;m();if(B.isAuto){k();n()}})})}}function I(){var b=(B.direction=="left"||B.direction=="right")?"scrollLeft":"scrollTop";if(B.isMarquee){if(B.loop>0){l+=B.scrollAmount;if(l>J*B.loop){a[b]=0;return clearInterval(h)}}var c=a[b]+(B.direction=="left"||B.direction=="up"?1:-1)*B.scrollAmount}else{if(B.duration){if(F++<S){P=true;var c=Math.ceil(W(F,N,O,S));if(F==S){c=T}}else{c=T;clearInterval(o);P=false;return}}else{var c=T;clearInterval(o)}}if(B.direction=="left"||B.direction=="up"){if(c>=J){c-=J}}else{if(c<=0){c+=J}}a[b]=c;if(B.isMarquee){h=setTimeout(I,B.scrollDelay)}else{if(F<S){if(o){clearTimeout(o)}o=setTimeout(I,B.scrollDelay)}else{P=false}}}function m(d){P=true;var b=(B.direction=="left"||B.direction=="right")?"scrollLeft":"scrollTop";var c=B.direction=="left"||B.direction=="up"?1:-1;D=D+c;if(d==undefined&&B.navId){Q.eq(G).removeClass("navOn");G+=c;if(G>=R){G=0}else{if(G<0){G=R-1}}Q.eq(G).addClass("navOn");D=G}var e=D<0?J:0;F=0;N=a[b];T=(d!=undefined)?d:e+(B.distance*D)%J;if(c==1){if(T>N){O=T-N}else{O=T+J-N}}else{if(T>N){O=T-J-N}else{O=T-N}}S=B.duration;if(o){clearTimeout(o)}o=setTimeout(I,B.scrollDelay)}function n(){M=setInterval(function(){m()},B.time*1000)}function k(){clearInterval(M)}function W(p,i,q,e){return -q*(p/=e)*(p-2)+i}function E(p,i,q,e){return q*((p=p/e-1)*p*p*p*p+1)+i}})};A.fn.kxbdSuperMarquee.defaults={isMarquee:false,isEqual:true,loop:0,newAmount:3,eventA:"mousedown",eventB:"mouseup",isAuto:true,time:5,duration:50,eventGo:"click",direction:"left",scrollAmount:1,scrollDelay:10,eventNav:"click"};A.fn.kxbdSuperMarquee.setDefaults=function(B){A.extend(A.fn.kxbdSuperMarquee.defaults,B)}})(jQuery);