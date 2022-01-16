import{m as e}from"./index.fbd7cfbb.js";import"./useVisualData.f39fefa0.js";import"./index.38904951.js";import"./preload-helper.09768911.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./useAnimate.aa72e511.js";import"./editorWorker.bbb816fa.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o={};t(o,"__esModule",{value:!0}),((e,o,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let s of r(o))i.call(e,s)||"default"===s||t(e,s,{get:()=>o[s],enumerable:!(a=n(o,s))||a.enumerable})})(o,e);var a,s,u,c,d,g,l,h,f,p,v,m,_,w,b,k,y,x,C,E,I,A,S,T,R,M,j,P,D,L,O,F,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee;(s=a||(a={})).MIN_VALUE=-2147483648,s.MAX_VALUE=2147483647,(c=u||(u={})).MIN_VALUE=0,c.MAX_VALUE=2147483647,(g=d||(d={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=u.MAX_VALUE),t===Number.MAX_VALUE&&(t=u.MAX_VALUE),{line:e,character:t}},g.is=function(e){var t=e;return et.objectLiteral(t)&&et.uinteger(t.line)&&et.uinteger(t.character)},(h=l||(l={})).create=function(e,t,n,r){if(et.uinteger(e)&&et.uinteger(t)&&et.uinteger(n)&&et.uinteger(r))return{start:d.create(e,t),end:d.create(n,r)};if(d.is(e)&&d.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},h.is=function(e){var t=e;return et.objectLiteral(t)&&d.is(t.start)&&d.is(t.end)},(p=f||(f={})).create=function(e,t){return{uri:e,range:t}},p.is=function(e){var t=e;return et.defined(t)&&l.is(t.range)&&(et.string(t.uri)||et.undefined(t.uri))},(m=v||(v={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},m.is=function(e){var t=e;return et.defined(t)&&l.is(t.targetRange)&&et.string(t.targetUri)&&(l.is(t.targetSelectionRange)||et.undefined(t.targetSelectionRange))&&(l.is(t.originSelectionRange)||et.undefined(t.originSelectionRange))},(w=_||(_={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},w.is=function(e){var t=e;return et.numberRange(t.red,0,1)&&et.numberRange(t.green,0,1)&&et.numberRange(t.blue,0,1)&&et.numberRange(t.alpha,0,1)},(k=b||(b={})).create=function(e,t){return{range:e,color:t}},k.is=function(e){var t=e;return l.is(t.range)&&_.is(t.color)},(x=y||(y={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},x.is=function(e){var t=e;return et.string(t.label)&&(et.undefined(t.textEdit)||U.is(t))&&(et.undefined(t.additionalTextEdits)||et.typedArray(t.additionalTextEdits,U.is))},(E=C||(C={})).Comment="comment",E.Imports="imports",E.Region="region",(A=I||(I={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return et.defined(n)&&(o.startCharacter=n),et.defined(r)&&(o.endCharacter=r),et.defined(i)&&(o.kind=i),o},A.is=function(e){var t=e;return et.uinteger(t.startLine)&&et.uinteger(t.startLine)&&(et.undefined(t.startCharacter)||et.uinteger(t.startCharacter))&&(et.undefined(t.endCharacter)||et.uinteger(t.endCharacter))&&(et.undefined(t.kind)||et.string(t.kind))},(T=S||(S={})).create=function(e,t){return{location:e,message:t}},T.is=function(e){var t=e;return et.defined(t)&&f.is(t.location)&&et.string(t.message)},(M=R||(R={})).Error=1,M.Warning=2,M.Information=3,M.Hint=4,(P=j||(j={})).Unnecessary=1,P.Deprecated=2,(D||(D={})).is=function(e){var t=e;return null!=t&&et.string(t.href)},(O=L||(L={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return et.defined(n)&&(a.severity=n),et.defined(r)&&(a.code=r),et.defined(i)&&(a.source=i),et.defined(o)&&(a.relatedInformation=o),a},O.is=function(e){var t,n=e;return et.defined(n)&&l.is(n.range)&&et.string(n.message)&&(et.number(n.severity)||et.undefined(n.severity))&&(et.integer(n.code)||et.string(n.code)||et.undefined(n.code))&&(et.undefined(n.codeDescription)||et.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(et.string(n.source)||et.undefined(n.source))&&(et.undefined(n.relatedInformation)||et.typedArray(n.relatedInformation,S.is))},(N=F||(F={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return et.defined(n)&&n.length>0&&(i.arguments=n),i},N.is=function(e){var t=e;return et.defined(t)&&et.string(t.title)&&et.string(t.command)},(W=U||(U={})).replace=function(e,t){return{range:e,newText:t}},W.insert=function(e,t){return{range:{start:e,end:e},newText:t}},W.del=function(e){return{range:e,newText:""}},W.is=function(e){var t=e;return et.objectLiteral(t)&&et.string(t.newText)&&l.is(t.range)},(H=V||(V={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},H.is=function(e){var t=e;return void 0!==t&&et.objectLiteral(t)&&et.string(t.label)&&(et.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(et.string(t.description)||void 0===t.description)},(K||(K={})).is=function(e){return"string"==typeof e},(X=z||(z={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},X.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},X.del=function(e,t){return{range:e,newText:"",annotationId:t}},X.is=function(e){var t=e;return U.is(t)&&(V.is(t.annotationId)||K.is(t.annotationId))},($=B||(B={})).create=function(e,t){return{textDocument:e,edits:t}},$.is=function(e){var t=e;return et.defined(t)&&oe.is(t.textDocument)&&Array.isArray(t.edits)},(Q=q||(q={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Q.is=function(e){var t=e;return t&&"create"===t.kind&&et.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||et.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||et.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||K.is(t.annotationId))},(J=G||(G={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},J.is=function(e){var t=e;return t&&"rename"===t.kind&&et.string(t.oldUri)&&et.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||et.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||et.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||K.is(t.annotationId))},(Z=Y||(Y={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Z.is=function(e){var t=e;return t&&"delete"===t.kind&&et.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||et.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||et.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||K.is(t.annotationId))},(ee||(ee={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return et.string(e.kind)?q.is(e)||G.is(e)||Y.is(e):B.is(e)})))};var te,ne,re,ie,oe,ae,se,ue,ce,de,ge,le,he,fe,pe,ve,me,_e,we,be,ke,ye,xe,Ce,Ee,Ie,Ae,Se,Te,Re,Me,je,Pe,De,Le,Oe,Fe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=U.insert(e,t):K.is(n)?(i=n,r=z.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=z.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=U.replace(e,t):K.is(n)?(i=n,r=z.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=z.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=U.del(e):K.is(t)?(r=t,n=z.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=z.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),Ze=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(K.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Ze(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(B.is(e)){var n=new Ye(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new Ye(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(oe.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new Ye(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new Ye(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new Ze,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(V.is(t)||K.is(t)?r=t:n=t,void 0===r?i=q.create(e,n):(o=K.is(r)?r:this._changeAnnotations.manage(r),i=q.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(V.is(n)||K.is(n)?i=n:r=n,void 0===i?o=G.create(e,t,r):(a=K.is(i)?i:this._changeAnnotations.manage(i),o=G.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(V.is(t)||K.is(t)?r=t:n=t,void 0===r?i=Y.create(e,n):(o=K.is(r)?r:this._changeAnnotations.manage(r),i=Y.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(ne=te||(te={})).create=function(e){return{uri:e}},ne.is=function(e){var t=e;return et.defined(t)&&et.string(t.uri)},(ie=re||(re={})).create=function(e,t){return{uri:e,version:t}},ie.is=function(e){var t=e;return et.defined(t)&&et.string(t.uri)&&et.integer(t.version)},(ae=oe||(oe={})).create=function(e,t){return{uri:e,version:t}},ae.is=function(e){var t=e;return et.defined(t)&&et.string(t.uri)&&(null===t.version||et.integer(t.version))},(ue=se||(se={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},ue.is=function(e){var t=e;return et.defined(t)&&et.string(t.uri)&&et.string(t.languageId)&&et.integer(t.version)&&et.string(t.text)},(de=ce||(ce={})).PlainText="plaintext",de.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(ce||(ce={})),(ge||(ge={})).is=function(e){var t=e;return et.objectLiteral(e)&&ce.is(t.kind)&&et.string(t.value)},(he=le||(le={})).Text=1,he.Method=2,he.Function=3,he.Constructor=4,he.Field=5,he.Variable=6,he.Class=7,he.Interface=8,he.Module=9,he.Property=10,he.Unit=11,he.Value=12,he.Enum=13,he.Keyword=14,he.Snippet=15,he.Color=16,he.File=17,he.Reference=18,he.Folder=19,he.EnumMember=20,he.Constant=21,he.Struct=22,he.Event=23,he.Operator=24,he.TypeParameter=25,(pe=fe||(fe={})).PlainText=1,pe.Snippet=2,(ve||(ve={})).Deprecated=1,(_e=me||(me={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},_e.is=function(e){var t=e;return t&&et.string(t.newText)&&l.is(t.insert)&&l.is(t.replace)},(be=we||(we={})).asIs=1,be.adjustIndentation=2,(ke||(ke={})).create=function(e){return{label:e}},(ye||(ye={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Ce=xe||(xe={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ce.is=function(e){var t=e;return et.string(t)||et.objectLiteral(t)&&et.string(t.language)&&et.string(t.value)},(Ee||(Ee={})).is=function(e){var t=e;return!!t&&et.objectLiteral(t)&&(ge.is(t.contents)||xe.is(t.contents)||et.typedArray(t.contents,xe.is))&&(void 0===e.range||l.is(e.range))},(Ie||(Ie={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Ae||(Ae={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return et.defined(t)&&(i.documentation=t),et.defined(n)?i.parameters=n:i.parameters=[],i},(Te=Se||(Se={})).Text=1,Te.Read=2,Te.Write=3,(Re||(Re={})).create=function(e,t){var n={range:e};return et.number(t)&&(n.kind=t),n},(je=Me||(Me={})).File=1,je.Module=2,je.Namespace=3,je.Package=4,je.Class=5,je.Method=6,je.Property=7,je.Field=8,je.Constructor=9,je.Enum=10,je.Interface=11,je.Function=12,je.Variable=13,je.Constant=14,je.String=15,je.Number=16,je.Boolean=17,je.Array=18,je.Object=19,je.Key=20,je.Null=21,je.EnumMember=22,je.Struct=23,je.Event=24,je.Operator=25,je.TypeParameter=26,(Pe||(Pe={})).Deprecated=1,(De||(De={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Oe=Le||(Le={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Oe.is=function(e){var t=e;return t&&et.string(t.name)&&et.number(t.kind)&&l.is(t.range)&&l.is(t.selectionRange)&&(void 0===t.detail||et.string(t.detail))&&(void 0===t.deprecated||et.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Ne=Fe||(Fe={})).Empty="",Ne.QuickFix="quickfix",Ne.Refactor="refactor",Ne.RefactorExtract="refactor.extract",Ne.RefactorInline="refactor.inline",Ne.RefactorRewrite="refactor.rewrite",Ne.Source="source",Ne.SourceOrganizeImports="source.organizeImports",Ne.SourceFixAll="source.fixAll",(We=Ue||(Ue={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},We.is=function(e){var t=e;return et.defined(t)&&et.typedArray(t.diagnostics,L.is)&&(void 0===t.only||et.typedArray(t.only,et.string))},(He=Ve||(Ve={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):F.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},He.is=function(e){var t=e;return t&&et.string(t.title)&&(void 0===t.diagnostics||et.typedArray(t.diagnostics,L.is))&&(void 0===t.kind||et.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||F.is(t.command))&&(void 0===t.isPreferred||et.boolean(t.isPreferred))&&(void 0===t.edit||ee.is(t.edit))},(ze=Ke||(Ke={})).create=function(e,t){var n={range:e};return et.defined(t)&&(n.data=t),n},ze.is=function(e){var t=e;return et.defined(t)&&l.is(t.range)&&(et.undefined(t.command)||F.is(t.command))},(Be=Xe||(Xe={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Be.is=function(e){var t=e;return et.defined(t)&&et.uinteger(t.tabSize)&&et.boolean(t.insertSpaces)},(qe=$e||($e={})).create=function(e,t,n){return{range:e,target:t,data:n}},qe.is=function(e){var t=e;return et.defined(t)&&l.is(t.range)&&(et.undefined(t.target)||et.string(t.target))},(Ge=Qe||(Qe={})).create=function(e,t){return{range:e,parent:t}},Ge.is=function(e){var t=e;return void 0!==t&&l.is(t.range)&&(void 0===t.parent||Ge.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new rt(e,t,n,r)},e.is=function(e){var t=e;return!!(et.defined(t)&&et.string(t.uri)&&(et.undefined(t.languageId)||et.string(t.languageId))&&et.uinteger(t.lineCount)&&et.func(t.getText)&&et.func(t.positionAt)&&et.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(Je||(Je={}));var et,tt,nt,rt=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return d.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return d.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();tt=et||(et={}),nt=Object.prototype.toString,tt.defined=function(e){return void 0!==e},tt.undefined=function(e){return void 0===e},tt.boolean=function(e){return!0===e||!1===e},tt.string=function(e){return"[object String]"===nt.call(e)},tt.number=function(e){return"[object Number]"===nt.call(e)},tt.numberRange=function(e,t,n){return"[object Number]"===nt.call(e)&&t<=e&&e<=n},tt.integer=function(e){return"[object Number]"===nt.call(e)&&-2147483648<=e&&e<=2147483647},tt.uinteger=function(e){return"[object Number]"===nt.call(e)&&0<=e&&e<=2147483647},tt.func=function(e){return"[object Function]"===nt.call(e)},tt.objectLiteral=function(e){return null!==e&&"object"==typeof e},tt.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};function it(e){switch(e){case R.Error:return o.MarkerSeverity.Error;case R.Warning:return o.MarkerSeverity.Warning;case R.Information:return o.MarkerSeverity.Info;case R.Hint:return o.MarkerSeverity.Hint;default:return o.MarkerSeverity.Info}}function ot(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function at(e){if(e)return new o.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function st(e){const t=o.languages.CompletionItemKind;switch(e){case le.Text:return t.Text;case le.Method:return t.Method;case le.Function:return t.Function;case le.Constructor:return t.Constructor;case le.Field:return t.Field;case le.Variable:return t.Variable;case le.Class:return t.Class;case le.Interface:return t.Interface;case le.Module:return t.Module;case le.Property:return t.Property;case le.Unit:return t.Unit;case le.Value:return t.Value;case le.Enum:return t.Enum;case le.Keyword:return t.Keyword;case le.Snippet:return t.Snippet;case le.Color:return t.Color;case le.File:return t.File;case le.Reference:return t.Reference}return t.Property}function ut(e){if(e)return{range:at(e.range),text:e.newText}}function ct(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function dt(e){if(e)return Array.isArray(e)?e.map(ct):[ct(e)]}function gt(e){switch(e){case Se.Read:return o.languages.DocumentHighlightKind.Read;case Se.Write:return o.languages.DocumentHighlightKind.Write;case Se.Text:return o.languages.DocumentHighlightKind.Text}return o.languages.DocumentHighlightKind.Text}function lt(e){return{uri:o.Uri.parse(e.uri),range:at(e.range)}}function ht(e){let t=o.languages.SymbolKind;switch(e){case Me.File:return t.Array;case Me.Module:return t.Module;case Me.Namespace:return t.Namespace;case Me.Package:return t.Package;case Me.Class:return t.Class;case Me.Method:return t.Method;case Me.Property:return t.Property;case Me.Field:return t.Field;case Me.Constructor:return t.Constructor;case Me.Enum:return t.Enum;case Me.Interface:return t.Interface;case Me.Function:return t.Function;case Me.Variable:return t.Variable;case Me.Constant:return t.Constant;case Me.String:return t.String;case Me.Number:return t.Number;case Me.Boolean:return t.Boolean;case Me.Array:return t.Array}return t.Function}function ft(e){const t=[],n=[],r=new class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=o.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}}(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;vt(n),r.completionItems&&n.push(o.languages.registerCompletionItemProvider(t,new class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),ot(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new o.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),a=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:st(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:at(e.textEdit.insert),replace:at(e.textEdit.replace)}:t.range=at(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ut)),e.insertTextFormat===fe.Snippet&&(t.insertTextRules=o.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:a}}))}}(i,["/","-",":"]))),r.hovers&&n.push(o.languages.registerHoverProvider(t,new class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),ot(t)))).then((e=>{if(e)return{range:at(e.range),contents:dt(e.contents)}}))}}(i))),r.documentHighlights&&n.push(o.languages.registerDocumentHighlightProvider(t,new class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),ot(t)))).then((e=>{if(e)return e.map((e=>({range:at(e.range),kind:gt(e.kind)})))}))}}(i))),r.definitions&&n.push(o.languages.registerDefinitionProvider(t,new class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),ot(t)))).then((e=>{if(e)return[lt(e)]}))}}(i))),r.references&&n.push(o.languages.registerReferenceProvider(t,new class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),ot(t)))).then((e=>{if(e)return e.map(lt)}))}}(i))),r.documentSymbols&&n.push(o.languages.registerDocumentSymbolProvider(t,new class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:ht(e.kind),range:at(e.location.range),selectionRange:at(e.location.range),tags:[]})))}))}}(i))),r.rename&&n.push(o.languages.registerRenameProvider(t,new class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),ot(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=o.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:at(i.range),text:i.newText}})}return{edits:t}}(e)))}}(i))),r.colors&&n.push(o.languages.registerColorProvider(t,new class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:at(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=ut(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ut)),t}))}))}}(i))),r.foldingRanges&&n.push(o.languages.registerFoldingRangeProvider(t,new class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case C.Comment:return o.languages.FoldingRangeKind.Comment;case C.Imports:return o.languages.FoldingRangeKind.Imports;case C.Region:return o.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}}(i))),r.diagnostics&&n.push(new class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{o.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(o.editor.onDidCreateModel(r)),this._disposables.push(o.editor.onWillDisposeModel(i)),this._disposables.push(o.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{o.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{o.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),o.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:it(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=o.editor.getModel(e);i&&i.getLanguageId()===t&&o.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{}))}}(t,i,e.onDidChange)),r.selectionRanges&&n.push(o.languages.registerSelectionRangeProvider(t,new class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(ot)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:at(e.range)}),e=e.parent;return t}))}))}}(i)))}(),t.push(pt(n)),pt(t)}function pt(e){return{dispose:()=>vt(e)}}function vt(e){for(;e.length;)e.pop().dispose()}export{ft as setupMode};