(self.webpackChunk=self.webpackChunk||[]).push([["mode/soy"],{6975:(t,e,a)=>{!function(t){"use strict";var e={noEndTag:!0,soyState:"param-def"},a={alias:{noEndTag:!0},delpackage:{noEndTag:!0},namespace:{noEndTag:!0,soyState:"namespace-def"},"@attribute":e,"@attribute?":e,"@param":e,"@param?":e,"@inject":e,"@inject?":e,"@state":e,template:{soyState:"templ-def",variableScope:!0},literal:{},msg:{},fallbackmsg:{noEndTag:!0,reduceIndent:!0},select:{},plural:{},let:{soyState:"var-def"},if:{},elseif:{noEndTag:!0,reduceIndent:!0},else:{noEndTag:!0,reduceIndent:!0},switch:{},case:{noEndTag:!0,reduceIndent:!0},default:{noEndTag:!0,reduceIndent:!0},foreach:{variableScope:!0,soyState:"for-loop"},ifempty:{noEndTag:!0,reduceIndent:!0},for:{variableScope:!0,soyState:"for-loop"},call:{soyState:"templ-ref"},param:{soyState:"param-ref"},print:{noEndTag:!0},deltemplate:{soyState:"templ-def",variableScope:!0},delcall:{soyState:"templ-ref"},log:{},element:{variableScope:!0}},n=Object.keys(a).filter((function(t){return!a[t].noEndTag||a[t].reduceIndent}));t.defineMode("soy",(function(e){var r=t.getMode(e,"text/plain"),o={html:t.getMode(e,{name:"text/html",multilineTagIndentFactor:2,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),attributes:r,text:r,uri:r,trusted_resource_uri:r,css:t.getMode(e,"text/css"),js:t.getMode(e,{name:"text/javascript",statementIndent:2*e.indentUnit})};function s(t){return t[t.length-1]}function l(t,e,a){if(t.sol()){for(var n=0;n<e.indent&&t.eat(/\s/);n++);if(n)return null}var r=t.string,o=a.exec(r.substr(t.pos));o&&(t.string=r.substr(0,t.pos+o.index));var l=t.hideFirstChars(e.indent,(function(){var a=s(e.localStates);return a.mode.token(t,a.state)}));return t.string=r,l}function i(t,e){return{element:e,next:t}}function p(t){t.context&&(t.context.scope&&(t.variables=t.context.scope),t.context=t.context.previousContext)}function c(t,e,a){return function(t,e){for(;t;){if(t.element===e)return!0;t=t.next}return!1}(t,e)?"variable-2":a?"variable":"variable-2 error"}function u(t,e,a){this.previousContext=t,this.tag=e,this.kind=null,this.scope=a}function m(t,e){var a;return t.match(/[[]/)?(e.soyState.push("list-literal"),e.context=new u(e.context,"list-literal",e.variables),e.lookupVariables=!1,null):t.match(/map\b/)?(e.soyState.push("map-literal"),"keyword"):t.match(/record\b/)?(e.soyState.push("record-literal"),"keyword"):t.match(/([\w]+)(?=\()/)?"variable callee":(a=t.match(/^["']/))?(e.soyState.push("string"),e.quoteKind=a[0],"string"):t.match(/^[(]/)?(e.soyState.push("open-parentheses"),null):t.match(/(null|true|false)(?!\w)/)||t.match(/0x([0-9a-fA-F]{2,})/)||t.match(/-?([0-9]*[.])?[0-9]+(e[0-9]*)?/)?"atom":t.match(/(\||[+\-*\/%]|[=!]=|\?:|[<>]=?)/)?"operator":(a=t.match(/^\$([\w]+)/))?c(e.variables,a[1],!e.lookupVariables):(a=t.match(/^\w+/))?/^(?:as|and|or|not|in|if)$/.test(a[0])?"keyword":null:(t.next(),null)}return{startState:function(){return{soyState:[],variables:i(null,"ij"),scopes:null,indent:0,quoteKind:null,context:null,lookupVariables:!0,localStates:[{mode:o.html,state:t.startState(o.html)}]}},copyState:function(e){return{tag:e.tag,soyState:e.soyState.concat([]),variables:e.variables,context:e.context,indent:e.indent,quoteKind:e.quoteKind,lookupVariables:e.lookupVariables,localStates:e.localStates.map((function(e){return{mode:e.mode,state:t.copyState(e.mode,e.state)}}))}},token:function(r,d){switch(s(d.soyState)){case"comment":if(r.match(/^.*?\*\//)?d.soyState.pop():r.skipToEnd(),!d.context||!d.context.scope)for(var y=/@param\??\s+(\S+)/g,h=r.current();S=y.exec(h);)d.variables=i(d.variables,S[1]);return"comment";case"string":var S;return(S=r.match(/^.*?(["']|\\[\s\S])/))?S[1]==d.quoteKind&&(d.quoteKind=null,d.soyState.pop()):r.skipToEnd(),"string"}if(!d.soyState.length||"literal"!=s(d.soyState)){if(r.match(/^\/\*/))return d.soyState.push("comment"),"comment";if(r.match(r.sol()?/^\s*\/\/.*/:/^\s+\/\/.*/))return"comment"}switch(s(d.soyState)){case"templ-def":return(S=r.match(/^\.?([\w]+(?!\.[\w]+)*)/))?(d.soyState.pop(),"def"):(r.next(),null);case"templ-ref":return(S=r.match(/(\.?[a-zA-Z_][a-zA-Z_0-9]+)+/))?(d.soyState.pop(),"."==S[0][0]?"variable-2":"variable"):(S=r.match(/^\$([\w]+)/))?(d.soyState.pop(),c(d.variables,S[1],!d.lookupVariables)):(r.next(),null);case"namespace-def":return(S=r.match(/^\.?([\w\.]+)/))?(d.soyState.pop(),"variable"):(r.next(),null);case"param-def":return(S=r.match(/^\*/))?(d.soyState.pop(),d.soyState.push("param-type"),"type"):(S=r.match(/^\w+/))?(d.variables=i(d.variables,S[0]),d.soyState.pop(),d.soyState.push("param-type"),"def"):(r.next(),null);case"param-ref":return(S=r.match(/^\w+/))?(d.soyState.pop(),"property"):(r.next(),null);case"open-parentheses":return r.match(/[)]/)?(d.soyState.pop(),null):m(r,d);case"param-type":var f=r.peek();return-1!="}]=>,".indexOf(f)?(d.soyState.pop(),null):"["==f?(d.soyState.push("param-type-record"),null):"("==f?(d.soyState.push("param-type-template"),null):"<"==f?(d.soyState.push("param-type-parameter"),null):(S=r.match(/^([\w]+|[?])/))?"type":(r.next(),null);case"param-type-record":return"]"==(f=r.peek())?(d.soyState.pop(),null):r.match(/^\w+/)?(d.soyState.push("param-type"),"property"):(r.next(),null);case"param-type-parameter":return r.match(/^[>]/)?(d.soyState.pop(),null):r.match(/^[<,]/)?(d.soyState.push("param-type"),null):(r.next(),null);case"param-type-template":return r.match(/[>]/)?(d.soyState.pop(),d.soyState.push("param-type"),null):r.match(/^\w+/)?(d.soyState.push("param-type"),"def"):(r.next(),null);case"var-def":return(S=r.match(/^\$([\w]+)/))?(d.variables=i(d.variables,S[1]),d.soyState.pop(),"def"):(r.next(),null);case"for-loop":return r.match(/\bin\b/)?(d.soyState.pop(),"keyword"):"$"==r.peek()?(d.soyState.push("var-def"),null):(r.next(),null);case"record-literal":return r.match(/^[)]/)?(d.soyState.pop(),null):r.match(/[(,]/)?(d.soyState.push("map-value"),d.soyState.push("record-key"),null):(r.next(),null);case"map-literal":return r.match(/^[)]/)?(d.soyState.pop(),null):r.match(/[(,]/)?(d.soyState.push("map-value"),d.soyState.push("map-value"),null):(r.next(),null);case"list-literal":return r.match("]")?(d.soyState.pop(),d.lookupVariables=!0,p(d),null):r.match(/\bfor\b/)?(d.lookupVariables=!0,d.soyState.push("for-loop"),"keyword"):m(r,d);case"record-key":return r.match(/[\w]+/)?"property":r.match(/^[:]/)?(d.soyState.pop(),null):(r.next(),null);case"map-value":return")"==r.peek()||","==r.peek()||r.match(/^[:)]/)?(d.soyState.pop(),null):m(r,d);case"import":return r.eat(";")?(d.soyState.pop(),d.indent-=2*e.indentUnit,null):r.match(/\w+(?=\s+as)/)?"variable":(S=r.match(/\w+/))?/(from|as)/.test(S[0])?"keyword":"def":(S=r.match(/^["']/))?(d.soyState.push("string"),d.quoteKind=S[0],"string"):(r.next(),null);case"tag":void 0===d.tag?(w=!0,E=""):E=(w="/"==d.tag[0])?d.tag.substring(1):d.tag;var g=a[E];if(r.match(/^\/?}/)){var b="/}"==r.current();return b&&!w&&p(d),"/template"==d.tag||"/deltemplate"==d.tag?(d.variables=i(null,"ij"),d.indent=0):d.indent-=e.indentUnit*(b||-1==n.indexOf(d.tag)?2:1),d.soyState.pop(),"keyword"}if(r.match(/^([\w?]+)(?==)/)){if(d.context&&d.context.tag==E&&"kind"==r.current()&&(S=r.match(/^="([^"]+)/,!1))){var v=S[1];d.context.kind=v;var x=o[v]||o.html;(U=s(d.localStates)).mode.indent&&(d.indent+=U.mode.indent(U.state,"","")),d.localStates.push({mode:x,state:t.startState(x)})}return"attribute"}return m(r,d);case"template-call-expression":return r.match(/^([\w-?]+)(?==)/)?"attribute":r.eat(">")||r.eat("/>")?(d.soyState.pop(),"keyword"):m(r,d);case"literal":return r.match("{/literal}",!1)?(d.soyState.pop(),this.token(r,d)):l(r,d,/\{\/literal}/)}if(r.match("{literal}"))return d.indent+=e.indentUnit,d.soyState.push("literal"),d.context=new u(d.context,"literal",d.variables),"keyword";if(S=r.match(/^\{([/@\\]?\w+\??)(?=$|[\s}]|\/[/*])/)){var k=d.tag;d.tag=S[1];var w="/"==d.tag[0],T=!!a[d.tag],E=w?d.tag.substring(1):d.tag;g=a[E],"/switch"!=d.tag&&(d.indent+=((w||g&&g.reduceIndent)&&"switch"!=k?1:2)*e.indentUnit),d.soyState.push("tag");var I=!1;if(g)if(w||g.soyState&&d.soyState.push(g.soyState),g.noEndTag||!T&&w){if(w)if(d.context&&d.context.tag==E){if(d.context){var U;d.context.kind&&(d.localStates.pop(),(U=s(d.localStates)).mode.indent&&(d.indent-=U.mode.indent(U.state,"",""))),p(d)}}else I=!0}else d.context=new u(d.context,d.tag,g.variableScope?d.variables:null);else w&&(I=!0);return(I?"error ":"")+"keyword"}return r.eat("{")?(d.tag="print",d.indent+=2*e.indentUnit,d.soyState.push("tag"),"keyword"):!d.context&&r.match(/\bimport\b/)?(d.soyState.push("import"),d.indent+=2*e.indentUnit,"keyword"):(S=r.match("<{"))?(d.soyState.push("template-call-expression"),d.indent+=2*e.indentUnit,d.soyState.push("tag"),"keyword"):(S=r.match("</>"))?(d.indent-=1*e.indentUnit,"keyword"):l(r,d,/\{|\s+\/\/|\/\*/)},indent:function(a,n,r){var o=a.indent,l=s(a.soyState);if("comment"==l)return t.Pass;if("literal"==l)/^\{\/literal}/.test(n)&&(o-=e.indentUnit);else{if(/^\s*\{\/(template|deltemplate)\b/.test(n))return 0;/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(n)&&(o-=e.indentUnit),"switch"!=a.tag&&/^\{(case|default)\b/.test(n)&&(o-=e.indentUnit),/^\{\/switch\b/.test(n)&&(o-=e.indentUnit)}var i=s(a.localStates);return o&&i.mode.indent&&(o+=i.mode.indent(i.state,n,r)),o},innerMode:function(t){return t.soyState.length&&"literal"!=s(t.soyState)?null:s(t.localStates)},electricInput:/^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",useInnerComments:!1,fold:"indent"}}),"htmlmixed"),t.registerHelper("wordChars","soy",/[\w$]/),t.registerHelper("hintWords","soy",Object.keys(a).concat(["css","debugger"])),t.defineMIME("text/x-soy","soy")}(a(7750),a(1809))}}]);
//# sourceMappingURL=soy.js.map