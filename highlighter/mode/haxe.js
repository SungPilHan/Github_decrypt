(self.webpackChunk=self.webpackChunk||[]).push([["mode/haxe"],{821:(e,t,n)=>{!function(e){"use strict";e.defineMode("haxe",(function(e,t){var n=e.indentUnit;function r(e){return{type:e,style:"keyword"}}var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(e,t,n){return t.tokenize=n,n(e,t)}function v(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!0;r=!r&&"\\"==n}}function b(e,t,n){return s=e,a=n,t}function h(e,t){var n,r=e.next();if('"'==r||"'"==r)return m(e,t,(n=r,function(e,t){return v(e,n)&&(t.tokenize=h),b("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(r))return b(r);if("0"==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),b("number","number");if(/\d/.test(r)||"-"==r&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),b("number","number");if(t.reAllowed&&"~"==r&&e.eat(/\//))return v(e,"/"),e.eatWhile(/[gimsu]/),b("regexp","string-2");if("/"==r)return e.eat("*")?m(e,t,x):e.eat("/")?(e.skipToEnd(),b("comment","comment")):(e.eatWhile(p),b("operator",null,e.current()));if("#"==r)return e.skipToEnd(),b("conditional","meta");if("@"==r)return e.eat(/:/),e.eatWhile(/[\w_]/),b("metadata","meta");if(p.test(r))return e.eatWhile(p),b("operator",null,e.current());if(/[A-Z]/.test(r))return e.eatWhile(/[\w_<>]/),b("type","variable-3",a=e.current());e.eatWhile(/[\w_]/);var a=e.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&t.kwAllowed?b(i.type,i.style,a):b("variable","variable",a)}function x(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=h;break}r="*"==n}return b("comment","comment")}var y={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function k(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function g(e,t){if(/[a-z]/.test(t.charAt(0)))return!1;for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function V(e){for(var t=A.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return;t.importedtypes={name:e,next:t.importedtypes}}var A={state:null,column:null,marked:null,cc:null};function S(){for(var e=arguments.length-1;e>=0;e--)A.cc.push(arguments[e])}function E(){return S.apply(null,arguments),!0}function W(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function z(e){var t=A.state;if(t.context){if(A.marked="def",W(e,t.localVars))return;t.localVars={name:e,next:t.localVars}}else if(t.globalVars){if(W(e,t.globalVars))return;t.globalVars={name:e,next:t.globalVars}}}var C={name:"this",next:null};function M(){A.state.context||(A.state.localVars=C),A.state.context={prev:A.state.context,vars:A.state.localVars}}function T(){A.state.localVars=A.state.context.vars,A.state.context=A.state.context.prev}function Z(e,t){var n=function(){var n=A.state;n.lexical=new k(n.indented,A.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function I(){var e=A.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function O(e){return function t(n){return n==e?E():";"==e?S():E(t)}}function P(e){return"@"==e?E(F):"var"==e?E(Z("vardef"),N,O(";"),I):"keyword a"==e?E(Z("form"),_,P,I):"keyword b"==e?E(Z("form"),P,I):"{"==e?E(Z("}"),M,L,I,T):";"==e?E():"attribute"==e?E(B):"function"==e?E(Y):"for"==e?E(Z("form"),O("("),Z(")"),R,O(")"),I,P,I):"variable"==e?E(Z("stat"),G):"switch"==e?E(Z("form"),_,Z("}","switch"),O("{"),L,I,I):"case"==e?E(_,O(":")):"default"==e?E(O(":")):"catch"==e?E(Z("form"),M,O("("),re,O(")"),P,I,T):"import"==e?E($,O(";")):"typedef"==e?E(q):S(Z("stat"),_,O(";"),I)}function _(e){return y.hasOwnProperty(e)||"type"==e?E(j):"function"==e?E(Y):"keyword c"==e?E(D):"("==e?E(Z(")"),D,O(")"),I,j):"operator"==e?E(_):"["==e?E(Z("]"),K(D,"]"),I,j):"{"==e?E(Z("}"),K(J,"}"),I,j):E()}function D(e){return e.match(/[;\}\)\],]/)?S():S(_)}function j(e,t){return"operator"==e&&/\+\+|--/.test(t)?E(j):"operator"==e||":"==e?E(_):";"!=e?"("==e?E(Z(")"),K(_,")"),I,j):"."==e?E(H,j):"["==e?E(Z("]"),_,O("]"),I,j):void 0:void 0}function B(e){return"attribute"==e?E(B):"function"==e?E(Y):"var"==e?E(N):void 0}function F(e){return":"==e||"variable"==e?E(F):"("==e?E(Z(")"),K(U,")"),I,P):void 0}function U(e){if("variable"==e)return E()}function $(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(V(t),E()):"variable"==e||"property"==e||"."==e||"*"==t?E($):void 0}function q(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(V(t),E()):"type"==e&&/[A-Z]/.test(t.charAt(0))?E():void 0}function G(e){return":"==e?E(I,P):S(j,O(";"),I)}function H(e){if("variable"==e)return A.marked="property",E()}function J(e){if("variable"==e&&(A.marked="property"),y.hasOwnProperty(e))return E(O(":"),_)}function K(e,t){function n(r){return","==r?E(e,n):r==t?E():E(O(t))}return function(r){return r==t?E():S(e,n)}}function L(e){return"}"==e?E():S(P,L)}function N(e,t){return"variable"==e?(z(t),E(ee,Q)):E()}function Q(e,t){return"="==t?E(_,Q):","==e?E(N):void 0}function R(e,t){return"variable"==e?(z(t),E(X,_)):S()}function X(e,t){if("in"==t)return E()}function Y(e,t){return"variable"==e||"type"==e?(z(t),E(Y)):"new"==t?E(Y):"("==e?E(Z(")"),M,K(re,")"),I,ee,P,T):void 0}function ee(e){if(":"==e)return E(te)}function te(e){return"type"==e||"variable"==e?E():"{"==e?E(Z("}"),K(ne,"}"),I):void 0}function ne(e){if("variable"==e)return E(ee)}function re(e,t){if("variable"==e)return z(t),E(ee)}return T.lex=!0,I.lex=!0,{startState:function(e){var r={tokenize:h,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new k((e||0)-n,0,"block",!1),localVars:t.localVars,importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:t.localVars&&{vars:t.localVars},indented:0};return t.globalVars&&"object"==typeof t.globalVars&&(r.globalVars=t.globalVars),r},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==s?n:(t.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=s,function(e,t,n,r,a){var i=e.cc;for(A.state=e,A.stream=a,A.marked=null,A.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():P)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return A.marked?A.marked:"variable"==n&&w(e,r)?"variable-2":"variable"==n&&g(e,r)?"variable-3":t}}(t,n,s,a,e))},indent:function(e,t){if(e.tokenize!=h)return 0;var r=t&&t.charAt(0),a=e.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n):a.indented+(/^(?:case|default)\b/.test(t)?n:2*n)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}})),e.defineMIME("text/x-haxe","haxe"),e.defineMode("hxml",(function(){return{startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol();if("#"==n)return e.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),a="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),a="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),a}return n=e.peek(),0==t.inString&&"'"==n&&(t.inString=!0,e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},lineComment:"#"}})),e.defineMIME("text/x-hxml","hxml")}(n(7750))}}]);
//# sourceMappingURL=haxe.js.map