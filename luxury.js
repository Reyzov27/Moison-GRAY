/* MAISON GRAY — luxury layer: one-time loader, scroll progress, custom cursor, gentle parallax.
   Loaded last; independent of shop/cart logic. All motion is skipped for prefers-reduced-motion. */
(()=>{
 const rm=matchMedia("(prefers-reduced-motion:reduce)").matches,root=document.documentElement;
 /* loader: shown once per session (head script sets .ld-on) */
 const ld=document.getElementById("ld");
 if(ld&&root.classList.contains("ld-on")){
  setTimeout(()=>{ld.classList.add("out");root.classList.remove("ld-on");try{sessionStorage.setItem("mg-ld","1")}catch(e){}},1900);
  setTimeout(()=>ld.remove(),3000);
 }else if(ld)ld.remove();
 /* scroll progress + parallax (single rAF-throttled passive listener) */
 const pg=document.getElementById("pg");
 const par=[...document.querySelectorAll(".collage .ph,.heroimg>.ph:first-child,#gallery .gal .ph:nth-child(1),#gallery .gal .ph:nth-child(7)")];
 if(!rm)par.forEach(e=>e.classList.add("par"));
 let tick=false;
 const frame=()=>{
  tick=false;
  const max=root.scrollHeight-innerHeight;
  pg.style.transform="scaleX("+(max>0?Math.min(1,scrollY/max):0).toFixed(4)+")";
  if(rm||document.body.dataset.view!=="home")return;
  const vh=innerHeight;
  par.forEach(el=>{
   const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;
   const p=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/(vh/2+r.height/2)));
   el.style.setProperty("--py",(-p*.08*r.height).toFixed(1)+"px");
  });
 };
 const req=()=>{if(!tick){tick=true;requestAnimationFrame(frame)}};
 addEventListener("scroll",req,{passive:true});addEventListener("resize",req);addEventListener("hashchange",()=>setTimeout(req,60));req();
 /* custom cursor: fine pointers only */
 if(!rm&&matchMedia("(hover:hover) and (pointer:fine)").matches){
  const c=document.createElement("div");c.className="cur";c.setAttribute("aria-hidden","true");c.innerHTML="<i></i>";document.body.appendChild(c);
  let x=0,y=0,cx=0,cy=0,raf=0,seen=false;
  const loop=()=>{
   cx+=(x-cx)*.18;cy+=(y-cy)*.18;c.style.transform="translate3d("+cx.toFixed(1)+"px,"+cy.toFixed(1)+"px,0)";
   raf=(Math.abs(x-cx)>.1||Math.abs(y-cy)>.1)?requestAnimationFrame(loop):0;
  };
  addEventListener("pointermove",e=>{
   if(e.pointerType!=="mouse")return;
   x=e.clientX;y=e.clientY;
   if(!seen){seen=true;cx=x;cy=y;c.classList.add("on")}
   if(!raf)raf=requestAnimationFrame(loop);
  },{passive:true});
  document.addEventListener("pointerover",e=>c.classList.toggle("h",!!(e.target.closest&&e.target.closest("a,button,input,select,textarea,label,[data-open],.sw,.opt"))));
  root.addEventListener("mouseleave",()=>c.classList.remove("on"));
  root.addEventListener("mouseenter",()=>seen&&c.classList.add("on"));
 }
})();
