!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";(function(e){function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=0,o={editors:{},create:function(e,t){try{!function(e){if("undefined"==typeof tinymce)throw Error("PageBuilder: Didn't find tinymce. Please connect tinymce.");if(void 0===e||0===e.length)throw Error("PageBuilder: Didn't find selector");if(e.length>1)throw Error("PageBuilder: Please use individual selector, not more.\n        You use "+e.length+" selectors")}(e)}catch(e){return console.error(e.message),!1}var n=new l(e,t);return n._init(),this.editors[n.className+"_"+s]=n,s+=s,n},getContent:function(e){if(this.editors[e])return this.editors[e]._getContent();console.error("Didn't find plugin with id '".concat(e,"'"))},rebuild:function(e){this.editors[e]._rebuild()}},a={height:"500px",rowClasses:"first, sec, third",colClasses:"full",edit:!0,draggable:!0,tinymceSettings:function(e){tinymce.init({menubar:!1,selector:e,height:400,plugins:"link table lists paste",toolbar:"formatselect | table",setup:function(e){e.ui.registry.addContextToolbar("textselection",{predicate:function(t){return!e.selection.isCollapsed()},items:"bold italic underline | bullist numlist | alignleft aligncenter alignright",position:"selection",scope:"node"})}})},setTinymceContent:function(e,t){tinymce.get(e.id).setContent(t)},getTinymceContent:function(e){return tinymce.get(e.id).getContent()}},l=function(){function e(i,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=i.length>0?i[0]:i,this.className="pgBld",this.textareaEditor=this.className+"-editor-textarea";var o=s||{};this.options=function(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?t(s,!0).forEach(function(t){n(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},a,{},o)}var l,u,h;return l=e,(u=[{key:"_init",value:function(){this._changeSelector(),this._createInterface(),this._createBody(),this.options.edit&&this._createMenu(),this._createEditor(),this._createRow(),this._clickDoc()}},{key:"_changeSelector",value:function(){var e=this;this.value=void 0!==this.selector.value?this.selector.value:this.selector.innerHTML,this.selector.style.display="none";var t={rowclasses:"rowClasses",colclasses:"colClasses"};c(this.selector.dataset,function(n,i){t[n]?e.options[t[n]]=i:e.options[n]=i})}},{key:"_createInterface",value:function(){this.wrapBlock=this._createEl("div",{id:this.className+"_"+s,class:this.className}),this.selector.parentNode.insertBefore(this.wrapBlock,this.selector),this.wrapBlock.style.height=this.options.height}},{key:"_createMenu",value:function(){var e=this;this.menu=this._createEl("div",{class:this.className+"-menu"}),this.menuItem={add:this._createEl("button",{class:this.className+"-menu-item-add",type:"button"},'<i class="svg"></i> <span>Add block</span>')},this.wrapBlock.appendChild(this.menu),c(this.menuItem,function(t,n){e.menu.appendChild(n)})}},{key:"_createBody",value:function(){this.body=this._createEl("div",{class:this.className+"-body"},this.value),this.wrapBlock.appendChild(this.body)}},{key:"_createEditor",value:function(){var e=this,t=e.className+"-editor";e.editor=e._createEl("div",{class:t});var n=[e._createEl("div",{class:t+"-block"}),e._createEl("div",{class:t+"-footer"}),e._createEl("h3",{class:t+"-h3"},"Edit content"),e._createEl("button",{class:t+"-close",title:"Close",type:"button"},'<i class="svg"></i> <span>Exit (without saving changes)</span>'),e._createEl("button",{class:t+"-save",title:"Save",type:"button"},'<i class="svg"></i> <span>Save changes</span>'),e._createEl("div",{class:e.textareaEditor})],i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5];function u(){var t=e.wrapBlock.querySelector("div."+e.className+"-content.changing");return e.editor.classList.remove("show"),t.classList.remove("changing"),t}e.editor.appendChild(i),s.appendChild(a),s.appendChild(l),r([o,c,s],function(e){i.appendChild(e)}),e.wrapBlock.appendChild(e.editor),e._addTiny("div."+this.textareaEditor),d(a,"click",function(){u()}),d(l,"click",function(){u().innerHTML=e.options.getTinymceContent(i.querySelector("div."+e.textareaEditor))})}},{key:"_createRowSettings",value:function(e){var t=this,n=this,i=n.className+"-settings",s=n._createEl("div",{class:i}),o=[n._createEl("div",{class:i+"-bgRow"}),n._createEl("div",{class:i+"-column"}),n._createEl("div",{class:i+"-footer"}),n._createEl("select",{class:i+"-bgCol"}),n._createEl("button",{class:i+"-close",title:"Close",type:"button"},'<i class="svg"></i> <span>Exit (without saving changes)</span>'),n._createEl("button",{class:i+"-save",title:"Save",type:"button"},'<i class="svg"></i> <span>Save changes</span>'),n._createEl("h3",{class:i+"-h3"},"Row class"),n._createEl("h3",{class:i+"-h3"},"Number of columns in a row")],a=o[0],l=o[1],c=o[2],u=o[3],h=o[4],v=o[5],p=o[6],m=o[7];a.appendChild(p),a.appendChild(u),l.appendChild(m),c.appendChild(h),c.appendChild(v),r(("def, "+n.options.rowClasses).split(", "),function(e){var t=n._createEl("option",{value:e},e);"def"===e&&(t.innerText="none"),u.appendChild(t)}),r([a,l,c],function(e){s.appendChild(e)});for(var f=function(e){var n=t._createEl("div",{"data-col":e},'<i class="svg"></i> <span>'.concat(e,"</span>"));d(n,"click",function(){var e;(e=l.querySelector(".active"))&&e.classList.remove("active"),n.classList.add("active")}),l.appendChild(n)},g=1;g<=6;g++)f(g);function y(){var e=n.wrapBlock.querySelector("div."+n.className+"-row.changing");return e.classList.remove("changing"),e.removeAttribute("data-action"),n.body.classList.remove("editing"),e}e.appendChild(s),d(h,"click",function(){var e=y(),t=e.querySelector("div."+i+"-bgCol.active"),n=e.querySelector("div[data-col].active");t&&t.classList.remove("active"),n&&n.classList.remove("active")}),d(v,"click",function(){var e=y(),t=u.value,i=l.querySelector(".active");e.className=n.className+"-row","def"!==t&&e.classList.add(t),i&&(e.dataset.setCol=i.dataset.col)})}},{key:"_createRowMenu",value:function(e){var t=this.className+"-row-menu";this.rowMenu=this._createEl("div",{class:t});var n=this._createEl("button",{class:t+"-settings",title:"Settings for row","data-role":"settingRow",type:"button"},'<i class="svg"></i> <span>Settings</span>'),i={block:this._createEl("div",{class:t+"-block"}),buttons:{edit:this._createEl("button",{title:"Edit row style","data-role":"editRow",type:"button"},'<i class="svg"></i> <span>Edit</span>'),column:this._createEl("button",{title:"Add column","data-role":"addCol",type:"button"},'<i class="svg"></i> <span>Add column</span>'),delete:this._createEl("button",{title:"Remove this row","data-role":"delRow",type:"button"},'<i class="svg"></i> <span>Remove</span>')}};c(i.buttons,function(e,n){n.classList=t+"-"+e,i.block.appendChild(n)}),this.rowMenu.appendChild(i.block),this.rowMenu.appendChild(n),e.firstChild?e.insertBefore(this.rowMenu,e.firstChild):e.appendChild(this.rowMenu)}},{key:"_createRow",value:function(){var e=this;this.rows=this.body.querySelectorAll("div."+this.className+"-row");var t=!1;if(this.rows.length<1){t=!0,this.body.innerHTML="";var n=this._createEl("div",{class:this.className+"-row","data-col":0});this._createCol(n,!0,this.value),this.body.appendChild(n),this.rows=this.body.querySelectorAll("div."+this.className+"-row")}r(this.rows,function(n){e.options.edit&&(e._createRowMenu(n),e._connectMenuFunc(n),e._createRowSettings(n)),e.options.draggable&&e._drag(n,"."+e.className+"-row","changing","."+e.className+"-col"),n.dataset.col<1?e._createCol(n,!0):t||r(n.querySelectorAll("div."+e.className+"-col"),function(t){e._addColFunc(t)})}),this.options.edit&&d(this.menuItem.add,"click",function(){var t=e._createEl("div",{class:e.className+"-row","data-col":0});e.body.appendChild(t),e._createRowMenu(t),e._createRowSettings(t),e._connectMenuFunc(t),e.options.draggable&&e._drag(t,"."+e.className+"-row","changing","."+e.className+"-col"),e._createCol(t),e.rows=e.body.querySelectorAll("div."+e.className+"-row")})}},{key:"_drag",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,s=this;function o(o){var c=e.cloneNode(!0),r=l(e),u=o.clientX-r.left,h=o.clientY-r.top,v=s.className+"-move",p=!(o.target.closest(i)||e.classList.contains(n)||o.target.closest("button")||s.body.classList.contains("editing")),m=t.replace(".",""),f=e.closest("."+s.className+"-row"),g=!1;function y(n){!function(n){c.style.left=n.clientX-u+"px",c.style.top=n.clientY-h+"px",e.classList.add(v);var i=a(c,n.clientX,n.clientY),s=i?i.closest(t):null;if(s&&!s.classList.contains(v)){var o=l(s),r=s.scrollHeight,d=o.top+r/2;n.clientY>d?s.nextElementSibling&&s.nextElementSibling.classList.contains(m)?s.parentNode.insertBefore(e,s.nextElementSibling):s.parentNode.appendChild(e):(!s.previousElementSibling||s.previousElementSibling&&!s.previousElementSibling.classList.contains(v))&&s.parentNode.insertBefore(e,s)}}(n),g||(g=!0,document.body.appendChild(c)),d(c,"mouseup",b),d(c,"touchend",b)}function b(n){if(document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",y),g){var i=a(c,n.clientX,n.clientY),o=i?i.closest(t):null,l=o?o.closest("."+s.className+"-row"):null;e.classList.contains(s.className+"-col")&&l&&f&&l!==f&&(s._updateColCount(f),s._updateColCount(l)),document.body.removeChild(c)}g=!1,c.removeEventListener("mouseup",b),c.removeEventListener("touchend",b),e.removeEventListener("mouseup",b),e.removeEventListener("touchend",b),e.classList.remove(v)}p&&(c.style.width=e.scrollWidth+"px",c.style.height=e.scrollHeight+"px",c.classList.add(s.className+"-clone"),d(document,"mousemove",y),d(document,"touchmove",y),d(e,"mouseup",b),d(e,"touchend",b))}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=e.className;e.className+=" ".concat(s.className,"-hide");var o=document.elementFromPoint(t,n);return e.className=i,o}function l(e){var t=e.getBoundingClientRect();return{top:t.top,left:t.left}}d(e,"mousedown",o),d(e,"touchstart",o)}},{key:"_connectMenuFunc",value:function(e){var t=this;r(e.querySelectorAll("div."+this.className+"-row-menu button"),function(n){"delRow"===n.dataset.role?t._removeRow(n,e):"addCol"===n.dataset.role?t._addCol(n,e):"editRow"===n.dataset.role?t._editRow(n,e):"settingRow"===n.dataset.role&&t._openSetting(n,e)})}},{key:"_openSetting",value:function(e,t){var n=this;d(e,"click",function(){n.body.classList.add("editing"),r(n.rows,function(e){e.classList.remove("changing")}),t.classList.add("changing")})}},{key:"_editRow",value:function(e,t){var n=this;d(e,"click",function(){t.dataset.action="edit";var e=t.querySelector("div."+n.className+"-settings"),i=t.dataset.setCol?t.dataset.setCol:t.dataset.col,s=e.querySelector("select."+n.className+"-settings-bgCol"),o=!1;r(e.querySelectorAll("div."+n.className+"-settings-bgCol, div[data-col]"),function(e){e.classList.remove("active")}),r(t.classList,function(e){n.options.rowClasses.includes(e)&&(s.value=e,o=!0)}),o||(s.value="def"),e.querySelector('div[data-col = "'+i+'"]').classList.add("active")})}},{key:"_createCol",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=this._createEl("div",{class:this.className+"-col"});this._addColFunc(i);var s=t&&e.querySelector("div."+this.className+"-content")?e.querySelector("div."+this.className+"-content"):this._createEl("div",{class:this.className+"-content"},n);i.appendChild(s),e.appendChild(i),this._updateColCount(e)}},{key:"_updateColCount",value:function(e){var t=e.querySelectorAll("."+this.className+"-col").length;t>0?e.dataset.col=t<7?t:6:e.parentNode.removeChild(e)}},{key:"_addColFunc",value:function(e){var t=this._createEl("button",{class:this.className+"-col-edit",title:"Edit column",type:"button"},'<i class="svg"></i>');if(e.appendChild(t),this._editContent(t,e),this.options.edit){var n=this._createEl("button",{class:this.className+"-col-del",title:"Remove column",type:"button"},'<i class="svg"></i>');e.appendChild(n),this._removeCol(n,e);var i=this._createEl("button",{class:this.className+"-col-settings",title:"Settings",type:"button"},'<i class="svg"></i>');e.appendChild(i),this._openColSetting(i,e),this._createColSettings(e),this.options.draggable&&this._drag(e,"."+this.className+"-col","changingCol")}}},{key:"_addCol",value:function(e,t){var n=this;d(e,"click",function(){n._createCol(t)})}},{key:"_removeRow",value:function(e,t){var n=this;d(e,"click",function(){n.body.classList.remove("editing"),t.parentElement.removeChild(t)})}},{key:"_removeCol",value:function(e,t){var n=this;d(e,"click",function(){var e=t.parentElement;e.removeChild(t),n._updateColCount(e)})}},{key:"_createColSettings",value:function(e){var t=this.className+"-colSettings",n=this,i=[n._createEl("div",{class:t}),n._createEl("div",{class:t+"-classes"}),n._createEl("div",{class:t+"-footer"}),n._createEl("h3",{class:t+"-h3"},"Col class"),n._createEl("select",{class:t+"-select"}),n._createEl("button",{class:t+"-close",title:"Close",type:"button"},'<i class="svg"></i> <span>Exit</span>'),n._createEl("button",{class:t+"-save",title:"Save",type:"button"},'<i class="svg"></i> <span>Save changes</span>')],s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6];r(("def, "+n.options.colClasses).split(", "),function(e){var t=n._createEl("option",{value:e},e);"def"===e&&(t.innerText="none"),c.appendChild(t)}),o.appendChild(l),o.appendChild(c),a.appendChild(u),a.appendChild(h),s.appendChild(o),s.appendChild(a),e.appendChild(s),d(u,"click",function(){e.classList.remove("changingCol")}),d(h,"click",function(){var t=c.value;e.classList="def"===t?n.className+"-col":n.className+"-col "+t})}},{key:"_openColSetting",value:function(e,t){var n=this;d(e,"click",function(){var e=n.body.querySelectorAll(".changingCol"),i=t.querySelector("."+n.className+"-colSettings-select");r(e,function(e){e.classList.remove("changingCol")}),t.classList.add("changingCol");var s=!1;r(t.classList,function(e){n.options.colClasses.includes(e)&&(i.value=e,s=!0)}),s||(i.value="def")})}},{key:"_editContent",value:function(e,t){var n=this;d(e,"click",function(){n.editor.classList.add("show");var e=t.querySelector("div."+n.className+"-content"),i=n.editor.querySelector("div."+n.textareaEditor);i.innerHTML=e.innerHTML,n.options.setTinymceContent(i,e.innerHTML),e.classList.add("changing")})}},{key:"_clickDoc",value:function(){var e=this;d(document,"mouseup",function(t){var n=e.wrapBlock.querySelector(".editing"),i=e.body.querySelector(".changingCol");if(n){var s=e.body.querySelector(".changing");s&&!s.contains(t.target)&&(s.classList.remove("changing"),s.removeAttribute("data-action"),n.classList.remove("editing"))}i&&!i.contains(t.target)&&i.classList.remove("changingCol")})}},{key:"_createEl",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=document.createElement(e);return c(t,function(e,t){i.setAttribute(e,t)}),i.innerHTML=n,i}},{key:"_getContent",value:function(){var e=this,t=this.body.cloneNode(!0);function n(e,t){r(t,function(t){e.removeAttribute(t)})}return r(t.querySelectorAll("div."+this.className+"-row"),function(t){var i=t.querySelector("div."+e.className+"-row-menu"),s=t.querySelector("div."+e.className+"-settings");i&&t.removeChild(i),s&&t.removeChild(s);var o=t.querySelectorAll("div."+e.className+"-col");if(o.length>1)r(o,function(t){var i=t.querySelector("."+e.className+"-col-del"),s=t.querySelector("."+e.className+"-col-edit"),o=t.querySelector("."+e.className+"-content"),a=t.querySelector("."+e.className+"-col-settings"),l=t.querySelector("."+e.className+"-colSettings");n(o,["id","style","aria-hidden"]),i&&t.removeChild(i),s&&t.removeChild(s),a&&t.removeChild(a),l&&t.removeChild(l)});else if(1===o.length){var a=(o=o[0]).querySelector("div."+e.className+"-content");n(a,["id","style","aria-hidden"]),o.parentNode.dataset.col=0,o.parentNode.insertBefore(a,o),o.parentNode.removeChild(o)}else t.parentNode.removeChild(t)}),t.innerHTML}},{key:"_addTiny",value:function(e){this.options.tinymceSettings(e)}},{key:"_rebuild",value:function(){this.wrapBlock.parentElement&&(this.wrapBlock.parentElement.removeChild(this.wrapBlock),o.create(this.selector,this.options))}}])&&i(l.prototype,u),h&&i(l,h),e}();function c(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function r(e,t){for(var n=0;n<e.length;n++)t(e[n],e)}function d(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)}"undefined"==typeof window?e.pageBuilder=o:window.pageBuilder=o,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";n.r(t);n(0);pageBuilder.create(document.querySelector(".textarea"),{height:"auto"}),$(".clicker").on("click",function(){console.dir(pageBuilder.getContent("pgBld_0"))})}]);