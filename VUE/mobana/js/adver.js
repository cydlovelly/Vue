var timespan=navigator.userAgent.indexOf("Firefox")>0?15:10;var AdConfig=false;function addEvent(F,E,D){if(F.addEventListener){F.addEventListener(E,D,false)}else{if(F.attachEvent){F.attachEvent("on"+E,D)}}}function AdConfigInit(){AdConfig=new Object();AdConfig.Left=0;AdConfig.Top=0;AdConfig.Width=0;AdConfig.Height=0;AdConfig.Scroll=function(){if(document.documentElement&&document.documentElement.scrollLeft){AdConfig.Left=document.documentElement.scrollLeft}else{if(document.body){AdConfig.Left=document.body.scrollLeft}}if(document.documentElement&&document.documentElement.scrollTop){AdConfig.Top=document.documentElement.scrollTop}else{if(document.body){AdConfig.Top=document.body.scrollTop}}};AdConfig.Resize=function(){if(document.documentElement&&document.documentElement.clientHeight&&document.body&&document.body.clientHeight){AdConfig.Width=(document.documentElement.clientWidth>document.body.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;AdConfig.Height=(document.documentElement.clientHeight>document.body.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight}else{if(document.documentElement&&document.documentElement.clientHeight){AdConfig.Width=document.documentElement.clientWidth;AdConfig.Height=document.documentElement.clientHeight}else{if(document.body){AdConfig.Width=document.body.clientWidth;AdConfig.Height=document.body.clientHeight}}}};AdConfig.Scroll();AdConfig.Resize();addEvent(window,"scroll",AdConfig.Scroll);addEvent(window,"resize",AdConfig.Resize)}function AdPopup(R,O,K,M,L,Q,J,P){var N=window.open("","win"+R,"width="+M+", height="+L+", top="+Q+", left="+J);N.document.write("<html><head><title>");N.document.write(O);N.document.write("</title><body style='margin:0;cursor:pointer;overflow:hidden;'");if(P){N.document.write(" onclick='window.close();'")}N.document.write(">");N.document.write(K);N.document.write("</body></html>")}function AdFloat(N,V,M,P,T,L,U,R){var O=1;var Q=1;N.Move=function(){if(L+M>=AdConfig.Left+AdConfig.Width){L=AdConfig.Left+AdConfig.Width-M;O=-1}else{if(L<=AdConfig.Left){L=AdConfig.Left;O=1}}if(T+P>=AdConfig.Top+AdConfig.Height){T=AdConfig.Top+AdConfig.Height-P;Q=-1}else{if(T<=AdConfig.Top){T=AdConfig.Top;Q=1}}L+=O;T+=Q;N.style.left=L+"px";N.style.top=T+"px"};var S=window.setInterval(N.Move,timespan);N.onmouseover=function(){window.clearInterval(S)};N.onmouseout=function(){S=window.setInterval(N.Move,timespan)};if(U=="True"){N.onclick=function(){window.clearInterval(S);N.style.display="none"}}if(R){V.onclick=function(){window.clearInterval(S);N.style.display="none"}}}function AdHangLeft(J,L,I,G,H){J.Move=function(){var A=parseInt(J.style.top,10);if(A+5<AdConfig.Top+I){J.style.top=(A+5)+"px"}else{if(A-5>AdConfig.Top+I){J.style.top=(A-5)+"px"}}};var K=window.setInterval(J.Move,timespan);if(G=="True"){J.onclick=function(){window.clearInterval(K);J.style.display="none"}}if(H){L.onclick=function(){window.clearInterval(K);J.style.display="none"}}}function AdHangRight(J,L,I,G,H){J.Move=function(){var A=parseInt(J.style.top,10);if(A+5<AdConfig.Top+I){J.style.top=(A+5)+"px"}else{if(A-5>AdConfig.Top+I){J.style.top=(A-5)+"px"}}};var K=window.setInterval(J.Move,timespan);if(G=="True"){J.onclick=function(){window.clearInterval(K);J.style.display="none"}}if(H){L.onclick=function(){window.clearInterval(K);J.style.display="none"}}}function AdHangBottom(H,J,F,G,I){if(G=="True"){H.onclick=function(){H.style.display="none"}}if(I){J.onclick=function(){H.style.display="none"}}}function AdPrepare(d,c,U,T,b,P,X,Z,S,W,a){if(!AdConfig){AdConfigInit()}var R=AdContent(U,b,P,X);if(T=="popup"){AdPopup(d,c,R,P,X,Z,S,W);return}var Q="";if(T=="hangB"){Q="<span id='adver_"+d+"' class='adver' >";if(a==1){Q=Q+"<span id='shut_"+d+"' class='adver_close'><img src='/Scripts/adver/closed.gif' /></span>"}if(a==2){Q=Q+"<span id='shut_"+d+"' class='adver_close'><img src='/Scripts/adver/closed.jpg' /></span>"}}else{Q="<span id='adver_"+d+"' style='width:"+P+"px; height:"+X+"px; top:"+Z+"px; "+(T=="hangR"?"right":"left")+":"+S+"px; cursor:pointer; position:absolute; z-index:999999999; overflow:hidden;'>";if(a==1){Q=Q+"<span id='shut_"+d+"' style='position:absolute; top:0; right:0;'><img src='/Scripts/adver/closed.gif' /></span>"}else{if(a==2){Q=Q+"<span id='shut_"+d+"' style='position:absolute; top:0; right:0;'><img src='/Scripts/adver/closed.jpg' /></span>"}}}Q=Q+R+"</span>";document.writeln(Q);var Y=document.getElementById("adver_"+d);var V=document.getElementById("shut_"+d);switch(T){case"float":AdFloat(Y,V,P,X,Z,S,W,a);break;case"hangL":AdHangLeft(Y,V,Z,W,a);break;case"hangR":AdHangRight(Y,V,Z,W,a);break;case"hangB":AdHangBottom(Y,V,Z,W,a);break}}function AdContent(J,H,I,L){var G=H.substr(H.lastIndexOf(".")+1).toLowerCase();var K;if(G=="swf"){K="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+I+"' height='"+L+"'><param name='movie' value='"+H+"'><param name='quality' value='high'><param name='wmode' value='transparent'><embed src='"+H+"' width='"+I+"' height='"+L+"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' wmode='transparent'></embed></object>";if(J!=""){K="<span style='z-index:1;position:absolute;'><a href='"+J+"' target='_blank'><img src='/Scripts/adver/blank.gif' width='"+I+"' height='"+L+"' /></a></span>"+K}else{K="<span style='z-index:1;position:absolute;'><img src='/Scripts/adver/blank.gif' width='"+I+"' height='"+L+"' /></span>"+K}}else{K="<img src='"+H+"' width='"+I+"' height='"+L+"' border='0' />";if(J!=""){K="<a href='"+J+"' target='_blank'>"+K+"</a></span>"}}return K};