import{a as A}from"./chunk-NUBP7XNZ.js";import{a as $}from"./chunk-TUVUCLWJ.js";import{a as q}from"./chunk-XZSWAZ7F.js";import{e as N}from"./chunk-MXARUZT6.js";import{Ia as M,L as a,M as v,N as w,Q as C,S as g,Sa as k,W as S,Wa as j,X as x,ab as T,ba as _,f as m,fb as P,i as l,ja as p,la as d,nb as R,ra as b,s as y,ta as I,tb as D,ub as F,wb as Y}from"./chunk-SSSCJDKS.js";var B={formId:"storycharacter",title:"Storycharacter",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill storycharacter title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill storycharacter description"},{name:"Label",value:"Description"}]}]};function W(e,h){if(e&1&&(p(0),b(1,"date")),e&2){let t=h.$implicit;d(" ",I(1,1,t.birth,"dd/MM/YYY")," ")}}function z(e,h){if(e&1&&p(0),e&2){let t=h.$implicit,r=_();d(" ",r.locationService.doc(t.location).name," ")}}function G(e,h){if(e&1&&p(0),e&2){let t=h.$implicit,r=_();d(" ",r.typeService.doc(t.type).name," ")}}var u=(()=>{class e{constructor(t,r,i,n,f,L,E,U){this.locationService=t,this.typeService=r,this._storycharacterService=i,this._translate=n,this._alert=f,this._form=L,this._core=E,this._router=U,this.story=this._router.url.includes("/characters/")?this._router.url.replace("/characters/",""):"",this.columns=["name","birth","location","type"],this.form=this._form.getForm("storycharacter",B),this.config={paginate:this.setRows.bind(this),perPage:20,setPerPage:this._storycharacterService.setPerPage.bind(this._storycharacterService),allDocs:!1,create:this.story?()=>{this._form.modal(this.form,{label:"Create",click:(o,c)=>m(this,null,function*(){c(),this._preCreate(o),yield l(this._storycharacterService.create(o)),this.setRows()})})}:null,update:o=>{this._form.modal(this.form,[],o).then(c=>{this._core.copy(c,o),this._storycharacterService.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this storycharacter?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>m(this,null,function*(){yield l(this._storycharacterService.delete(o)),this.setRows()})}]})},buttons:[{icon:"arrow_upward",click:o=>{let c=this.rows.findIndex(s=>s._id===o._id);[this.rows[c],this.rows[c-1]]=[this.rows[c-1],this.rows[c]];for(let s=0;s<this.rows.length;s++)this.rows[s].order!==s&&(this.rows[s].order=s,this._storycharacterService.update(this.rows[s]))}},{icon:"cloud_download",click:o=>{this._form.modalUnique("storycharacter","url",o)}}],headerButtons:[this.story?{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"}:null,{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]},this.rows=[],this._page=1,this.setRows()}setRows(t=this._page){this._page=t,this._core.afterWhile(this,()=>{this._storycharacterService.get({page:t}).subscribe(r=>{this.rows.splice(0,this.rows.length),this.rows.push(...r)})},250)}_bulkManagement(t=!0){return()=>{this._form.modalDocs(t?[]:this.rows).then(r=>m(this,null,function*(){if(t)for(let i of r)this._preCreate(i),yield l(this._storycharacterService.create(i));else{for(let i of this.rows)r.find(n=>n._id===i._id)||(yield l(this._storycharacterService.delete(i)));for(let i of r){let n=this.rows.find(f=>f._id===i._id);n?(this._core.copy(i,n),yield l(this._storycharacterService.update(n))):this.story&&(this._preCreate(i),yield l(this._storycharacterService.create(i)))}}this.setRows()}))}}_preCreate(t){delete t.__created,t.story=this.story}static{this.\u0275fac=function(r){return new(r||e)(a($),a(q),a(A),a(R),a(P),a(Y),a(T),a(k))}}static{this.\u0275cmp=v({type:e,selectors:[["ng-component"]],standalone:!1,decls:4,vars:3,consts:[["title","Characters",3,"columns","config","rows"],["cell","birth"],["cell","location"],["cell","type"]],template:function(r,i){r&1&&(S(0,"wtable",0),C(1,W,2,4,"ng-template",1)(2,z,1,1,"ng-template",2)(3,G,1,1,"ng-template",3),x()),r&2&&g("columns",i.columns)("config",i.config)("rows",i.rows)},dependencies:[F,D,M],encapsulation:2})}}return e})();var H=[{path:"",component:u},{path:":story",component:u}],pt=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=w({type:e})}static{this.\u0275inj=y({imports:[j.forChild(H),N]})}}return e})();export{pt as CharactersModule};
