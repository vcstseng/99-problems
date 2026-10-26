const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
function getProblem(id){ return (window.PROBLEMS||[]).find(p=>p.ID===id); }

(function(){
  const script=[...document.scripts].find(s=>/\/assets\/js\/site\.js(?:\?.*)?$/.test(s.src));
  if(!script) return;
  const here=new URL(location.href);
  const scriptUrl=new URL(script.src);
  const assetRoot=new URL('../../', scriptUrl);
  const isEnglish=assetRoot.pathname.replace(/\/+$/,'').endsWith('/en');
  const siteRoot=isEnglish ? new URL('../', assetRoot) : assetRoot;
  let rel=here.pathname.startsWith(siteRoot.pathname) ? here.pathname.slice(siteRoot.pathname.length) : '';
  rel=rel.replace(/^\/+/,'');
  const targetRel=isEnglish ? rel.replace(/^en\//,'') : 'en/'+rel;
  $$('[data-lang-toggle]').forEach(el=>el.addEventListener('click',e=>{
    e.preventDefault();
    const target=new URL(targetRel || (isEnglish?'index.html':'en/index.html'), siteRoot);
    const currentUrl=new URL(location.href);
    target.search=currentUrl.search;
    target.hash=currentUrl.hash;
    location.href=target.href;
  }));
})();
