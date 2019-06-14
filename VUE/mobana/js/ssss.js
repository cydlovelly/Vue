function getViewSizeWithoutScrollbar(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}function getViewSizeWithScrollbar(){return window.innerWidth?{width:window.innerWidth,height:window.innerHeight}:document.documentElement.offsetWidth==document.documentElement.clientWidth?{width:document.documentElement.offsetWidth,height:document.documentElement.offsetHeight}:{width:document.documentElement.clientWidth+getScrollWith(),height:document.documentElement.clientHeight+getScrollWith()}}function getScrollWith(){var n=setAttributes(document.createElement("div"),{style:{width:"200px",height:"200px",overflow:"auto",position:"absolute",visibility:"hidden"}}),t=setAttributes(document.createElement("div"),{style:{width:"100px",height:"2000px"}}),i;return document.body.appendChild(n),n.appendChild(t),i=n.offsetWidth-n.clientWidth,document.body.removeChild(n),n=null,t=null,i}function setAttributes(n,t){for(var i in t)typeof t[i]=="string"?n[i]=t[i]:(n[i]||(n[i]={}),setAttributes(n[i],t[i]));return n}function getEvent(){var t,n;if(window.event)return window.event;for(t=getEvent.caller;t!=null;){if(n=t.arguments[0],n&&(n.constructor==Event||n.constructor==MouseEvent||typeof n=="object"&&n.preventDefault&&n.stopPropagation))return n;t=t.caller}return null}function getElement(n){if(n)return n.target||n.srcElement;throw"Event is undefined!";}function stopPropagation(n){n&&n.stopPropagation?n.stopPropagation():window.event.cancelBubble=!0}function preventDefault(n){return n&&n.preventDefault?n.preventDefault():window.event.returnValue=!1,!1}function requestFullScreen(){var n=document.documentElement;n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullScreen&&n.webkitRequestFullScreen()}function cancelFullscreen(){var n=document;n.exitFullscreen?n.exitFullscreen():n.mozCancelFullScreen?n.mozCancelFullScreen():n.webkitCancelFullScreen&&n.webkitCancelFullScreen()}function obj$(n){return document.getElementById(n)}function val$(n){var t=document.getElementById(n);return t!==null?t.value:null}$(function(){$("a[id^=changeskin]").on("click",function(n){var r=$(this),t,i;n.preventDefault();n.stopPropagation();t=r.attr("id");i=t.match(/\d+/)[0];$.post("/PageSetting/set_pageskin_cookie",{skinNum:i},function(){top.document.location.reload()}).error(function(n){alert(n)})});var n=new RegExp("^/|([a-z]+:)|#","i");$("a").each(function(){$(this).attr("href")&&!n.test($(this).attr("href"))&&window.console&&window.console.log&&console.log($(this).get(0))})}),function(n){n.extend({format:function(n){var t,r,u,i,f;if(arguments.length>1){if(t=arguments[0],arguments.length==2&&typeof arguments[0]=="string"&&typeof arguments[1]=="object"){r=arguments[1];for(u in r)r[u]!=undefined&&(f=new RegExp("({ *"+u+" *})","g"),t=t.replace(f,r[u]))}else for(i=1;i<arguments.length;i++)arguments[i]!=undefined&&(f=new RegExp("({ *["+(i-1)+"] *})","g"),t=t.replace(f,arguments[i]));return t}return n},startWith:function(n){n=n.replace(/([\(\)\[\]\{\}\.\+\*\^\$])/g,"\\$1");var t=new RegExp("^"+n);return t.test(this)},genaralGuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gi,function(n){var t=Math.random()*16|0,i=n=="x"?t:t&3|8;return i.toString(16)})},convertGB2312ToUnicode:{toUnicode:function(n){return escape(n).toLocaleLowerCase().replace(/%u/gi,"\\u")},toGB2312:function(n){return unescape(n.replace(/\\u/gi,"%u"))}}});n.fn.newGuid=function(){var t=n.genaralGuid();return arguments[0]&&(t=t.toUpperCase()),this.val(t),this};n.fn.goTop=function(){var t=this,i=function(){(document.documentElement.scrollTop||document.body.scrollTop)>0?(n(".g-hd").css("opacity",".95"),t.show()):(n(".g-hd").css("opacity","1"),t.hide())};return this&&(window.onscroll=function(){i()},window.onresize=function(){i()}),this.click(function(t){t.preventDefault();var i=document.body.scrollTop||300;i>300&&(i=300);n("body,html").animate({scrollTop:0},2*i)}),this}}(jQuery),function(n){n.fn.helptips=function(){return this.each(function(){var i,n,t;$(this).find("img").length==0&&$(this).append($('<img src="/Images/icons/question-tip.png"/>'));$(this).find(".tips-cinfo-show").length==0&&$(this).append($('<div class="tips-cinfo-show"><\/div>'));i=$(this).find("img").get(0);n=$(this).find(".tips-cinfo-show");n.html($(this).attr("title"));$(this).removeAttr("title");t=i.getBoundingClientRect();typeof $(this).attr("width")!="undefined"&&(n.css("width",parseInt($(this).attr("width"))+"px"),$(this).removeAttr("width"));var r=parseInt(n.css("width")),f=parseInt(n.css("left")),u=document.documentElement.clientWidth,e=document.documentElement.clientHeight;$(this).find(".tips-cinfo-show").css("text-align","left");$(this).find(".tips-cinfo-show").css("z-index","9999");t.right+r>u&&$(this).find(".tips-cinfo-show").css("left",u-(t.right+r+f)-17+"px");t.bottom+n.get(0).scrollHeight>e&&$(this).find(".tips-cinfo-show").css("top",-4-n.get(0).scrollHeight+"px")})}}(jQuery);$(function(){$(".tips-cinfo").helptips()});String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")};String.prototype.ltrim=function(){return this.replace(/^\s*/g,"")};String.prototype.rtrim=function(){return this.replace(/\s*$/,"")};String.prototype.isEmpty=function(){return this!=null&&this.length>0?!0:!1};String.prototype.equals=function(n){return this==n?!0:!1};String.prototype.equalsIgnoreCase=function(n){return this==n||this.toUpperCase()==n.toUpperCase()?!0:!1};String.prototype.isChinese=function(){var n=this.trim();return/^[\u4E00-\uFA29]*$/.test(n)?!0:!1};String.prototype.isEmail=function(){return/^[\w-_]+(\.[\w-_]+)*@[\w-_]+(\.[\w-_]+)+$/.test(this)?!0:!1};String.prototype.isImg=function(){var n=new RegExp("[.]+(jpg|jpeg|swf|gif)$","gi");return n.test(this)?!0:!1};String.prototype.isInteger=function(){return/^-?\d+$/.test(this)?!0:!1};String.prototype.isFloat=function(){return/^(-?\d+)(\.\d+)?$/.test(this)?!0:!1};String.prototype.isPost=function(){return/^\d{1,6}$/.test(this)?!0:!1};String.prototype.isMobile=function(){return/^1[34578]\d{9}/.test(this)?!0:!1};String.prototype.isPhone=function(){return/^(0[1-9]\d{1,2}-)\d{7,8}(-\d{1,8})?/.test(this)?!0:!1};String.prototype.isQQ=function(){return/^\d{5,12}$/.test(this)?!0:!1};String.prototype.isIPv4=function(){return/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/.test(this)?!0:!1};String.prototype.isDate=function(){return/^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/.test(this)?!0:!1};String.prototype.isIdCardNo=function(){var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],n=[],r=0,t,u,f;if(idNumber.length!=15&&idNumber.length!=18)return!1;for(i=0;i<idNumber.length;i++){if(n[i]=idNumber.charAt(i),(n[i]<"0"||n[i]>"9")&&i!=17)return!1;i<17&&(n[i]=n[i]*e[i])}if(idNumber.length==18){if(u=idNumber.substring(6,14),checkDate(u)==!1)return!1;for(i=0;i<17;i++)r=r+n[i];t=12-r%11;switch(t){case 10:t="X";break;case 11:t=0;break;case 12:t=1}if(n[17].toUpperCase()!=t)return!1}else if(f=idNumber.substring(6,12),checkDate(f)==!1)return!1;return!0};String.prototype.ToCharArray=function(){return this.split("")};String.prototype.Reverse=function(){return this.split("").reverse().join("")};String.prototype.IsContains=function(n){return this.indexOf(n)>-1};String.prototype.IsEmpty=function(){return this==""};String.prototype.IsNumeric=function(){var n=parseFloat(this),t;return isNaN(n)?!1:(t=this.length-n.toString().length,n+"0".GetSame(t)==this)};String.prototype.IsInt=function(){return this=="NaN"?!1:this==parseInt(this).toString()};String.prototype.resetBlank=function(){return this.replace(/\s+/g,"")};String.prototype.getNum=function(){return this.replace(/[^\d]/g,"")};String.prototype.getEn=function(){return this.replace(/[^A-Za-z]/g,"")};String.prototype.getCn=function(){return this.replace(/[^\u4e00-\u9fa5\uf900-\ufa2d]/g,"")};String.prototype.ByteLength=function(){return this.replace(/[^\x00-\xff]/g,"aa").length};String.prototype.left=function(n){return this.slice(0,n)};String.prototype.right=function(n){return this.slice(this.length-n)};String.prototype.HTMLEncode=function(){for(var t=this,i=[/\x26/g,/\x3C/g,/\x3E/g,/\x20/g],r=["&","<",">"," "],n=0;n<i.length;n++)t=t.replace(i[n],r[n]);return t};String.prototype.Unicode=function(){for(var t=[],n=0;n<this.length;n++)t.push("&#"+this.charCodeAt(n)+";");return t.join("")};String.prototype.Insert=function(n,t){return this.substring(0,n)+t+this.substr(n)};String.prototype.Copy=function(){window.clipboardData&&window.clipboardData.setData("text",this.toString())};String.prototype.AppendFormat=function(n){var t=arguments;return n=n.replace(/\{(\d+)\}/g,function(n,i){return t[parseInt(i)+1]?t[parseInt(i)+1]:n}),this+n}