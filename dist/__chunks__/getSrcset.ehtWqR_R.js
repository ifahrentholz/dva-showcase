const a=(e,n)=>{const r=new URL(e);return r.searchParams.has("width")?n.map(s=>{const t=new URL(r.href);return t.searchParams.set("width",s.toString()),`${t.href} ${s}w`}).join(", "):""};export{a as g};
//# sourceMappingURL=getSrcset.ehtWqR_R.js.map
