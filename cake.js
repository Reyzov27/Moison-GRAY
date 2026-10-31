/* MAISON GRAY — "Stwórz swój tort" / "Create your own cake"
   Loaded before script.js. Uses globals from script.js only at runtime:
   lang, cart, save(), render(), toast(), fmt(), IMG() */

const CB_SIZES=[["s",120,1],["m",180,1.5],["l",280,2.2]];                 // key, base price (zł), multiplier for extras
const CB_FLAV=[["choc",0,"#6b4a3a"],["van",0,"#efdca8"],["straw",10,"#e7a3a8"],["rasp",10,"#d0707f"],["pist",25,"#b9c98b"],["caram",10,"#c9955a"]];
const CB_FILL=[["van",0,"#f5ecd2"],["choc",5,"#5b3c30"],["rasp",10,"#c0475d"],["pist",20,"#a9bb74"]];
const CB_DECOR=[["min",0],["ele",30],["flo",50],["cho",40],["gold",90]];
const CB_COL=[["grey","#b9bcc0"],["ivory","#efe8dc"],["blush","#e3c4c1"],["sage","#b8c4b2"],["graphite","#555a5f"],["champ","#d8c3a0"]];
const CB_INSCR=15;                                                        // surcharge for an inscription
const CB_PHOTO={pist:30575774,choc:14945388,fancy:29388914,def:17712832}; // photos already used on the site (Pexels IDs)

const CBT={
pl:{h:"Stwórz swój tort",l:"Wybierz rozmiar, smak i dekorację. Pokażemy Ci projekt na bieżąco, a gotowy tort dodasz do koszyka.",
 size:"Rozmiar",flavor:"Smak",fill:"Nadzienie",decor:"Dekoracja",color:"Kolor wykończenia",text:"Napis na torcie",textPh:"np. Wszystkiego najlepszego, Anno!",note:"Życzenia i uwagi",notePh:"Alergie, termin odbioru, inspiracje…",
 sizes:{s:["Small","6–8 porcji"],m:["Medium","10–12 porcji"],l:["Large","16–20 porcji"]},from:"od",
 flav:{choc:"Czekoladowy",van:"Waniliowy",straw:"Truskawkowy",rasp:"Malinowy",pist:"Pistacjowy",caram:"Karmelowy"},
 fills:{van:"Krem waniliowy",choc:"Krem czekoladowy",rasp:"Mus malinowy",pist:"Krem pistacjowy"},
 decors:{min:"Minimalistyczny",ele:"Elegancki",flo:"Kwiatowy",cho:"Czekoladowy",gold:"Premium Gold"},
 cols:{grey:"Szary",ivory:"Kość słoniowa",blush:"Pudrowy róż",sage:"Szałwiowy",graphite:"Grafitowy",champ:"Szampański"},
 tabD:"Projekt",tabP:"Inspiracja",photoNote:"Zdjęcie poglądowe z naszej oferty. Twój tort wykonamy ręcznie według wybranych parametrów.",sec:"Przekrój",
 sum:"Twój tort",none:"brak",est:"Orientacyjna cena",add:"Dodaj do koszyka",
 disc:"Wizualizacja i cena są poglądowe. To funkcja demonstracyjna: zamówienie nie jest wysyłane, a płatność nie jest podłączona.",
 title:"Tort na miarę",inscr:"Napis",wish:"Uwagi",added:"Tort dodany do koszyka",q:["„","”"],view:"Podgląd projektu tortu"},
en:{h:"Create your own cake",l:"Choose the size, flavour and decoration. You see the design as you go, then add your cake to the cart.",
 size:"Size",flavor:"Flavour",fill:"Filling",decor:"Decoration",color:"Finish colour",text:"Cake inscription",textPh:"e.g. Happy birthday, Anna!",note:"Wishes and notes",notePh:"Allergies, pick-up date, inspiration…",
 sizes:{s:["Small","6–8 servings"],m:["Medium","10–12 servings"],l:["Large","16–20 servings"]},from:"from",
 flav:{choc:"Chocolate",van:"Vanilla",straw:"Strawberry",rasp:"Raspberry",pist:"Pistachio",caram:"Caramel"},
 fills:{van:"Vanilla cream",choc:"Chocolate cream",rasp:"Raspberry mousse",pist:"Pistachio cream"},
 decors:{min:"Minimalist",ele:"Elegant",flo:"Floral",cho:"Chocolate",gold:"Premium Gold"},
 cols:{grey:"Grey",ivory:"Ivory",blush:"Blush",sage:"Sage",graphite:"Graphite",champ:"Champagne"},
 tabD:"Design",tabP:"Inspiration",photoNote:"Illustrative photo from our range. Your cake will be handmade to the options you chose.",sec:"Cross-section",
 sum:"Your cake",none:"none",est:"Estimated price",add:"Add to cart",
 disc:"The preview and price are illustrative. This is a demo feature: no order is sent and no payment is connected.",
 title:"Custom cake",inscr:"Inscription",wish:"Notes",added:"Cake added to cart",q:["“","”"],view:"Cake design preview"}};

const cbS={size:"m",flavor:"choc",fill:"van",decor:"ele",color:"grey",text:"",note:""};
let cbTab="d",cbPhotoId=0;
const cbT=()=>CBT[lang];
const cbEsc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cbHash=s=>{let h=0;for(const ch of s)h=(h*31+ch.codePointAt(0))|0;return(h>>>0).toString(36)};
const cbMix=(h,w,a)=>{const n=parseInt(h.slice(1),16),c=parseInt(w.slice(1),16);const m=(x,y)=>Math.round(x+(y-x)*a);return"#"+[m(n>>16,c>>16),m(n>>8&255,c>>8&255),m(n&255,c&255)].map(v=>v.toString(16).padStart(2,"0")).join("")};
const cbLum=h=>{const n=parseInt(h.slice(1),16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255};
const cbFind=(arr,k)=>arr.find(x=>x[0]===k)||arr[0];

/* price in zł: base by size + extras scaled by size + inscription */
function cakePrice(s){
 const sz=cbFind(CB_SIZES,s.size);
 const extras=cbFind(CB_FLAV,s.flavor)[1]+cbFind(CB_FILL,s.fill)[1]+cbFind(CB_DECOR,s.decor)[1];
 return Math.round(sz[1]+extras*sz[2]+((s.text||"").trim()?CB_INSCR:0));
}

/* translated one-line description (used in the cart) */
function cakeTitle(){return cbT().title}
function cakeDetail(s){
 const T=cbT(),sz=T.sizes[s.size];
 const parts=[sz[0]+" ("+sz[1]+")",T.flav[s.flavor],T.fills[s.fill],T.decors[s.decor],T.cols[s.color]];
 if(s.text)parts.push(T.inscr+": "+T.q[0]+s.text+T.q[1]);
 if(s.note)parts.push(T.wish+": "+(s.note.length>60?s.note.slice(0,57)+"…":s.note));
 return parts.map(cbEsc).join(" · ");
}

/* illustrative SVG of the cake; mini=true → no inscription / cross-section (cart thumbnail) */
function cakeSVG(s,mini){
 const col=cbFind(CB_COL,s.color)[1],fl=cbFind(CB_FLAV,s.flavor)[2],fi=cbFind(CB_FILL,s.fill)[2],p=mini?"m":"p";
 const tiers=s.size==="s"?[[230,120]]:s.size==="m"?[[270,78],[190,78]]:[[300,66],[225,66],[150,66]];
 const lite=cbMix(col,"#ffffff",.38),shade=cbMix(col,"#000000",.12),ink=cbLum(col)>.6?"#3b3d40":"#f4f4f2";
 const base=302;let y=base,o="";
 o+=`<defs><linearGradient id="${p}sh" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient><linearGradient id="${p}gd" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f3dc92"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#a97f2c"/></linearGradient></defs>`;
 const pw=tiers[0][0]/2+30;
 o+=`<ellipse cx="200" cy="${base+22}" rx="${pw-30}" ry="7" fill="#000" opacity=".12"/><rect x="190" y="${base+8}" width="20" height="14" fill="#d9dbdd"/><ellipse cx="200" cy="${base+6}" rx="${pw}" ry="15" fill="#f6f6f4" stroke="#c4c7ca"/>`;
 tiers.forEach(([w,h],i)=>{
  const x=200-w/2,yt=y-h,r=w/2,top=i===tiers.length-1;
  o+=`<path d="M${x} ${yt}V${y}A${r} 10 0 0 0 ${x+w} ${y}V${yt}Z" fill="${col}"/><path d="M${x} ${yt}V${y}A${r} 10 0 0 0 ${x+w} ${y}V${yt}Z" fill="url(#${p}sh)"/>`;
  o+=`<ellipse cx="200" cy="${yt}" rx="${r}" ry="10" fill="${lite}"/>`;
  if(s.decor==="ele"){
   const n=Math.round(w/15);
   for(let k=0;k<=n;k++){const cx=x+6+k*(w-12)/n,ey=y+10*Math.sqrt(Math.max(0,1-Math.pow((cx-200)/r,2)))-5;o+=`<circle cx="${cx.toFixed(1)}" cy="${ey.toFixed(1)}" r="3.4" fill="#fff" stroke="${shade}" stroke-width=".6"/>`}
   o+=`<path d="M${x+6} ${yt+16}Q200 ${yt+h*.55} ${x+w-6} ${yt+16}" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2"/>`;
  }else if(s.decor==="cho"){
   const n=Math.max(4,Math.round(w/30));
   o+=`<ellipse cx="200" cy="${yt}" rx="${r-1}" ry="9.5" fill="#4a3027"/><path d="M${x+2} ${yt}A${r-2} 10 0 0 0 ${x+w-2} ${yt}" fill="none" stroke="#4a3027" stroke-width="9"/>`;
   for(let k=0;k<n;k++){const cx=x+(k+.5)*w/n,ey=yt+10*Math.sqrt(Math.max(0,1-Math.pow((cx-200)/r,2))),len=8+((k*37+i*11)%4)*5;o+=`<path d="M${cx.toFixed(1)} ${ey.toFixed(1)}v${len}" stroke="#4a3027" stroke-width="11" stroke-linecap="round"/>`}
  }else if(s.decor==="gold"){
   const ym=yt+h*.32;
   o+=`<path d="M${x} ${ym}A${r} 10 0 0 0 ${x+w} ${ym}V${ym+9}A${r} 10 0 0 1 ${x} ${ym+9}Z" fill="url(#${p}gd)"/>`;
   if(!(i===0&&!mini&&s.text))for(let k=0;k<4;k++){const fx=x+w*(.18+.2*k)+((k*13)%7),fy=yt+h*(.62+.12*((k*5)%3));o+=`<path d="M${fx.toFixed(1)} ${fy.toFixed(1)}l4 -3 4 3 -4 3z" fill="url(#${p}gd)" opacity=".9"/>`}
   if(top)o+=`<path d="M200 ${yt-4}V${yt-18}" stroke="#c9a24b" stroke-width="1.5"/><circle cx="200" cy="${yt-22}" r="7" fill="url(#${p}gd)"/>`;
  }else if(s.decor==="flo"){
   const fl2=(cx,cy,rr,c)=>{let g="";for(let a=0;a<5;a++){const an=a*72*Math.PI/180;g+=`<circle cx="${(cx+Math.cos(an)*rr*.62).toFixed(1)}" cy="${(cy+Math.sin(an)*rr*.62).toFixed(1)}" r="${(rr*.5).toFixed(1)}" fill="${c}"/>`}return g+`<circle cx="${cx}" cy="${cy}" r="${(rr*.3).toFixed(1)}" fill="#e2c46f"/>`};
   const leaf=(cx,cy,rot)=>`<ellipse cx="${cx}" cy="${cy}" rx="13" ry="5" fill="#9fb095" transform="rotate(${rot} ${cx} ${cy})"/>`;
   if(top){o+=leaf(166,yt-2,-25)+leaf(236,yt,28)+leaf(200,yt-9,-80)+fl2(184,yt-6,11,"#f2d3d3")+fl2(212,yt-10,13,"#ffffff")+fl2(228,yt-1,9,"#e8b5b8")}
   else{o+=leaf(x+12,yt+2,-20)+fl2(x+24,yt+1,10,"#e8b5b8")+leaf(x+w-12,yt+3,22)+fl2(x+w-26,yt+2,10,"#ffffff")}
  }
  if(!mini&&i===0&&s.text){
   const fs=Math.max(12,Math.min(s.decor==="cho"?18:26,(w-40)/(s.text.length*.46+1))),by=y-(h>100?36:(s.decor==="cho"?9:13));
   o+=`<text x="200" y="${by}" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-style="italic" font-size="${fs.toFixed(1)}" fill="${ink}">${cbEsc(s.text)}</text>`;
  }
  y=yt;
 });
 if(!mini){
  const T=cbT();
  o+=`<g><rect x="296" y="14" width="88" height="62" rx="4" fill="#fff" opacity=".85"/><rect x="302" y="22" width="76" height="9" rx="2" fill="${col}"/><rect x="302" y="31" width="76" height="9" fill="${fl}"/><rect x="302" y="40" width="76" height="4" fill="${fi}"/><rect x="302" y="44" width="76" height="9" fill="${fl}"/><rect x="302" y="53" width="76" height="4" fill="${fi}"/><rect x="302" y="57" width="76" height="9" fill="${fl}"/><text x="340" y="73" text-anchor="middle" font-family="Jost,Arial,sans-serif" font-size="8" fill="#6d7074">${cbEsc(T.sec)}</text></g>`;
 }
 return `<svg viewBox="0 0 400 ${mini?340:350}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${cbEsc(cbT().view)}">${o}</svg>`;
}

/* ---------- UI ---------- */
const cbQ=s=>document.querySelector(s);
function cakeInit(){
 const root=cbQ("#cb");if(!root)return;
 root.addEventListener("click",e=>{
  const b=e.target.closest("[data-g]");
  if(b){cbS[b.dataset.g]=b.dataset.v;cakeUpdate();return}
  const tb=e.target.closest("[data-tab]");
  if(tb){cbTab=tb.dataset.tab;cakeUpdate();return}
  if(e.target.closest("#cbAdd"))cakeAdd();
 });
 root.addEventListener("input",e=>{
  if(e.target.id==="cbText"){cbS.text=e.target.value.slice(0,30);cakeUpdate(true)}
  if(e.target.id==="cbNote"){cbS.note=e.target.value.slice(0,200);cakeUpdate(true)}
 });
}

/* (re)builds all translated markup — called on load and on PL/EN switch */
function cakeText(){
 const root=cbQ("#cb");if(!root)return;
 const T=cbT();
 cbQ("#cbH").textContent=T.h;cbQ("#cbL").textContent=T.l;
 const grp=(title,body,extra="")=>`<div class="grp"><h3>${title}${extra}</h3>${body}</div>`;
 const opt=(g,v,name,sub)=>`<button type="button" class="opt" data-g="${g}" data-v="${v}" aria-pressed="false"><b>${name}</b>${sub?`<small>${sub}</small>`:""}</button>`;
 root.innerHTML=
 `<div class="cb-opts">`+
  grp(T.size,`<div class="opts sz">`+CB_SIZES.map(z=>opt("size",z[0],T.sizes[z[0]][0],T.sizes[z[0]][1]+" · "+T.from+" "+fmt(z[1]).replace(",00",""))).join("")+`</div>`)+
  grp(T.flavor,`<div class="opts">`+CB_FLAV.map(f=>opt("flavor",f[0],T.flav[f[0]])).join("")+`</div>`)+
  grp(T.fill,`<div class="opts">`+CB_FILL.map(f=>opt("fill",f[0],T.fills[f[0]])).join("")+`</div>`)+
  grp(T.decor,`<div class="opts">`+CB_DECOR.map(f=>opt("decor",f[0],T.decors[f[0]])).join("")+`</div>`)+
  grp(T.color,`<div class="opts sws">`+CB_COL.map(c=>`<button type="button" class="sw" data-g="color" data-v="${c[0]}" style="--c:${c[1]}" aria-pressed="false" aria-label="${T.cols[c[0]]}" title="${T.cols[c[0]]}"></button>`).join("")+`</div>`,` <span class="cname" id="cbCol"></span>`)+
  grp(T.text,`<input id="cbText" type="text" maxlength="30" autocomplete="off" placeholder="${cbEsc(T.textPh)}" value="${cbEsc(cbS.text)}" aria-label="${cbEsc(T.text)}">`,` <span class="cname">+${fmt(CB_INSCR).replace(",00","")}</span>`)+
  grp(T.note,`<textarea id="cbNote" rows="3" maxlength="200" placeholder="${cbEsc(T.notePh)}" aria-label="${cbEsc(T.note)}">${cbEsc(cbS.note)}</textarea>`)+
 `</div><div class="cb-side"><div class="cb-card">`+
  `<div class="tabs" role="tablist"><button type="button" data-tab="d" role="tab">${T.tabD}</button><button type="button" data-tab="p" role="tab">${T.tabP}</button></div>`+
  `<div class="cb-view" id="cbView"></div><div class="cb-view cb-photo" id="cbPhoto" hidden></div>`+
  `<p class="cb-note" id="cbPNote" hidden>${T.photoNote}</p>`+
  `<h3 class="cb-sum-h">${T.sum}</h3><dl class="cb-sum" id="cbSum"></dl>`+
  `<div class="cb-est"><span>${T.est}</span><span class="price" id="cbPrice"></span></div>`+
  `<button type="button" class="btn fill cb-add" id="cbAdd">${T.add}</button>`+
  `<p class="cb-disc">${T.disc}</p>`+
 `</div></div>`;
 cbPhotoId=0;
 cakeUpdate();
}

function cakeUpdate(typing){
 const root=cbQ("#cb");if(!root||!cbQ("#cbView"))return;
 const T=cbT(),s=cbS;
 // selectors
 root.querySelectorAll("[data-g]").forEach(b=>b.setAttribute("aria-pressed",String(cbS[b.dataset.g]===b.dataset.v)));
 root.querySelectorAll("[data-tab]").forEach(b=>{const on=b.dataset.tab===cbTab;b.setAttribute("aria-selected",String(on));b.classList.toggle("on",on)});
 cbQ("#cbCol").textContent=T.cols[s.color];
 // preview
 const v=cbQ("#cbView"),ph=cbQ("#cbPhoto");
 v.innerHTML=cakeSVG(s);v.hidden=cbTab!=="d";ph.hidden=cbTab!=="p";cbQ("#cbPNote").hidden=cbTab!=="p";
 const pid=s.flavor==="pist"?CB_PHOTO.pist:s.flavor==="choc"&&s.decor==="cho"?CB_PHOTO.choc:(s.decor==="flo"||s.decor==="gold"||s.decor==="ele")?CB_PHOTO.fancy:CB_PHOTO.def;
 if(pid!==cbPhotoId||!ph.firstChild){cbPhotoId=pid;ph.innerHTML=IMG(T.photoNote,40,pid)}
 if(!typing){v.classList.remove("upd");void v.offsetWidth;v.classList.add("upd")}
 // summary
 const sz=T.sizes[s.size],row=(k,val)=>`<dt>${k}</dt><dd>${val}</dd>`;
 cbQ("#cbSum").innerHTML=
  row(T.size,`${sz[0]} <span class="mut">${sz[1]}</span>`)+row(T.flavor,T.flav[s.flavor])+row(T.fill,T.fills[s.fill])+row(T.decor,T.decors[s.decor])+
  row(T.color,`<i class="dot" style="background:${cbFind(CB_COL,s.color)[1]}"></i>${T.cols[s.color]}`)+
  row(T.inscr,s.text.trim()?`${T.q[0]}${cbEsc(s.text.trim())}${T.q[1]}`:`<span class="mut">${T.none}</span>`)+
  (s.note.trim()?row(T.wish,cbEsc(s.note.trim().length>80?s.note.trim().slice(0,77)+"…":s.note.trim())):"");
 const pe=cbQ("#cbPrice");pe.textContent=fmt(cakePrice(s));
 if(!typing){pe.classList.remove("pop");void pe.offsetWidth;pe.classList.add("pop")}
}

function cakeAdd(){
 const s={...cbS,text:cbS.text.trim(),note:cbS.note.trim()};
 const key="c"+cbHash(JSON.stringify([s.size,s.flavor,s.fill,s.decor,s.color,s.text,s.note]));
 const f=cart.find(c=>c.key===key);
 f?f.q++:cart.push({key,cake:s,price:cakePrice(s),q:1});
 save();render();toast(cbT().added);
 const b=cbQ("#cartbtn");b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump");
}
