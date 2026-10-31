/* MAISON GRAY — Brand Experience page (#brand) + packaging illustrations + gift-voucher art.
   Loaded after shop.js, before script.js. Uses at runtime: lang, T, IMG, observe(), SS, $ */
const BK={ink:"#2f3134",gr:"#3f4246",pearl:"#f4f4f2",champ:"#c9b8a0",silver:"#b9bcc0",mute:"#9a9da1"};
const U=(x,y,s,c)=>`<use href="#mk" x="${x}" y="${y}" width="${s}" height="${s}" style="color:${c};fill:none;stroke:currentColor;stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round"/>`;
const TX=(x,y,s,t,c,o="",f="Cormorant Garamond,Georgia,serif")=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="${f}" font-size="${s}" fill="${c}" ${o}>${t}</text>`;
const JS_="Jost,Arial,sans-serif",SH='<ellipse cx="120" cy="182" rx="92" ry="7" fill="#000" opacity=".12"/>';
const svgW=(b,vb="0 0 240 200",l="")=>`<svg class="art pkv" viewBox="${vb}" role="img" aria-label="${l}" xmlns="http://www.w3.org/2000/svg">${b}</svg>`;
const PKART={
cake:l=>svgW(SH+`<rect x="44" y="96" width="152" height="78" fill="${BK.gr}"/><rect x="36" y="66" width="168" height="38" fill="${BK.ink}"/><path d="M36 104h168M44 152h152" stroke="${BK.champ}" stroke-width=".8"/><rect x="113" y="66" width="14" height="108" fill="${BK.pearl}" opacity=".92"/><path d="M120 66c-20-18-30-2-15 5zM120 66c20-18 30-2 15 5z" fill="${BK.pearl}"/><circle cx="120" cy="67" r="3.2" fill="${BK.champ}"/>`+U(56,73,24,BK.champ)+TX(163,88,6.5,"MAISON GRAY",BK.champ,'letter-spacing="2.2"',JS_),"0 0 240 200",l),
pastry:l=>svgW(SH+`<rect x="30" y="92" width="180" height="82" fill="${BK.pearl}" stroke="${BK.silver}"/><path d="M30 92l16-26h148l16 26z" fill="#e8e6e2" stroke="${BK.silver}"/><rect x="58" y="102" width="124" height="44" fill="#d9cdbb"/><g stroke="#4a4d52" fill="none" stroke-width=".9" transform="translate(86 94) scale(1.4)"><path d="M6 32c4-14 12-20 18-20s14 6 18 20c-6-4-10-4-18-4s-12 0-18 4z"/><path d="M16 17l4 11M32 17l-4 11M24 12v16"/></g>`+U(111,149,18,BK.ink)+`<rect x="30" y="170" width="180" height="2" fill="${BK.champ}"/>`,"0 0 240 200",l),
bag:l=>svgW(SH+`<path d="M98 72c0-32 44-32 44 0" fill="none" stroke="#4a4d52" stroke-width="2.4"/><path d="M72 72h96l8 104H64z" fill="#e8e6e2" stroke="${BK.silver}"/><path d="M72 72h96l.8 14H71.2z" fill="#d9dadb"/><path d="M168 72l8 104h-8z" fill="#000" opacity=".06"/>`+U(101,93,38,BK.ink)+TX(120,152,8,"MAISON GRAY",BK.ink,'letter-spacing="3"',JS_),"0 0 240 200",l),
wrap:l=>svgW(`<defs><pattern id="wpat" width="36" height="36" patternUnits="userSpaceOnUse">${U(9,9,18,BK.champ)}</pattern></defs><rect x="26" y="34" width="188" height="132" fill="#3a3d41"/><rect x="26" y="34" width="188" height="132" fill="url(#wpat)" opacity=".7"/><path d="M214 166h-52l52-52z" fill="${BK.pearl}"/><path d="M162 166l52-52" stroke="${BK.silver}" stroke-width=".6"/>`,"0 0 240 200",l),
sticker:l=>svgW(`<circle cx="70" cy="100" r="40" fill="${BK.ink}"/><circle cx="70" cy="100" r="34" fill="none" stroke="${BK.champ}" stroke-width=".8"/>`+U(52,82,36,BK.champ)+`<circle cx="160" cy="68" r="28" fill="${BK.champ}"/>`+TX(160,76,22,"MG",BK.ink,'font-style="italic"')+`<rect x="116" y="124" width="92" height="30" rx="15" fill="${BK.pearl}" stroke="${BK.silver}"/>`+TX(162,142,7.5,"MAISON GRAY",BK.ink,'letter-spacing="3"',JS_),"0 0 240 200",l),
ribbon:l=>svgW(`<rect x="36" y="26" width="34" height="148" fill="${BK.champ}"/><path d="M36 174h34v-12l-17 12-17-12z" fill="#e6e7e8"/><g transform="rotate(-90 53 100)">${TX(53,103,7,"MAISON GRAY · MAISON GRAY",BK.ink,'letter-spacing="3"',JS_)}</g><g transform="rotate(4 156 100)"><rect x="96" y="40" width="120" height="116" fill="${BK.pearl}" stroke="${BK.silver}"/><rect x="102" y="46" width="108" height="104" fill="none" stroke="${BK.champ}" stroke-width=".6"/>${U(142,52,28,BK.ink)}${TX(156,110,30,"Merci",BK.ink,'font-style="italic"')}<path d="M126 122h60" stroke="${BK.champ}" stroke-width=".8"/>${TX(156,136,6,"DE LA PART DE MAISON GRAY",BK.mute,'letter-spacing="1.5"',JS_)}</g>`,"0 0 240 200",l),
cert:(l,amt=250)=>{const d=(x,y)=>`<path d="M${x} ${y-4}l3 4-3 4-3-4z" fill="${BK.champ}"/>`;return svgW(`<rect x="16" y="52" width="208" height="136" fill="${BK.ink}"/><rect x="24" y="60" width="192" height="120" fill="none" stroke="${BK.champ}" stroke-width=".8"/>`+d(24,60)+d(216,60)+d(24,180)+d(216,180)+U(106,68,28,BK.champ)+TX(120,116,10.5,"BON CADEAU",BK.champ,'letter-spacing="5"',JS_)+TX(120,152,34,amt+" zł",BK.pearl,'font-style="italic"')+TX(120,171,6,"MAISON GRAY · PIEKARNIA &amp; CUKIERNIA",BK.mute,'letter-spacing="2"',JS_),"0 0 240 240",l)}
};
const giftArt=(k,amt)=>PKART[k]?PKART[k](lang==="en"?"Gift voucher":"Bon podarunkowy",amt):"";

const BT={
pl:{bH:"Brand Experience",bL:"Francuska elegancja w polskiej piekarni. Tożsamość, opakowania i filozofia Maison Gray.",
 e:["01 · Historia","02 · Filozofia","03 · Tożsamość","04 · Opakowania","05 · Materiały"],
 q:"Dobry chleb potrzebuje czasu. Dobry gość — uwagi.",p3:"Dziś ta sama zasada prowadzi każdy szczegół: od mąki z małych młynów po wstążkę na pudełku.",
 vals:[["Cierpliwość","Ciasto dojrzewa tyle, ile potrzebuje."],["Rzemiosło","Każdy wyrób formują ręce piekarza."],["Prostota","Naturalne składniki, bez skrótów."],["Gościnność","Każdy gość wychodzi z pięknie zapakowanym uśmiechem."]],
 hFil:"Filozofia i wartości",hId:"Tożsamość wizualna",lg:["Logo główne","Wersja pionowa","Monogram MG","Znak"],
 hPal:"Paleta barw",pal:["Grafit","Perła","Srebro","Szampan","Róż pudrowy","Szałwia"],
 hTy:"Typografia",ty:[["Cormorant Garamond","Nagłówki i napisy ozdobne"],["Jost","Teksty, przyciski, opisy"]],
 hOr:"Elementy ozdobne",or:["Linia z rombem","Ramka narożna","Wzór monogramu"],
 hRu:"Zasady użycia logo",ru:["Jasne tło: logo w kolorze grafitu, romb w szampańskim złocie.","Ciemne tło: logo w kolorze perły, romb w szampańskim złocie.","Wolna przestrzeń wokół logo równa się wysokości litery M.","Minimum 20 px na ekranie i 8 mm w druku. Nie rozciągaj, nie obracaj, nie zmieniaj kolorów."],
 hPk:"Opakowania Maison Gray",pkL:"Jeden język: grafit, perła i szampańskie złoto.",
 pk:[["Pudełko na tort","Sztywny grafitowy karton, złocony monogram i perłowa wstążka."],["Pudełko na wypieki","Perłowy karton z oknem, które pokazuje zawartość."],["Papierowa torba","Papier z recyklingu, sznurkowe uchwyty, nadruk znaku."],["Papier pakowy","Wzór z monogramem w wersji grafitowej i perłowej."],["Naklejki","Trzy pieczęcie: znak, monogram i nazwa."],["Wstążka i kartka","Szampańska wstążka oraz kartka z podziękowaniem."],["Bon podarunkowy","Karta z nominałem, ozdobną ramką i numerem."]],
 hMa:"Materiały firmowe",ma:[["Papier","Matowy karton i papier z recyklingu w kolorze grafitu i perły."],["Wykończenie","Tłoczenie na gorąco w szampańskim złocie. Tylko znak i romb."],["Druk","Farby na bazie wody. Minimum koloru, maksimum światła."]],
 ctaT:"Pomyśl o prezencie",ctaL:"Zestawy prezentowe i bony podarunkowe czekają w sklepie.",ctaB:"Zobacz prezenty",demo:"Projekt koncepcyjny: materiały demonstracyjne."},
en:{bH:"Brand Experience",bL:"French elegance in a Polish bakery. The identity, packaging and philosophy of Maison Gray.",
 e:["01 · Story","02 · Philosophy","03 · Identity","04 · Packaging","05 · Materials"],
 q:"Good bread needs time. A good guest needs attention.",p3:"Today the same principle guides every detail: from flour from small mills to the ribbon on the box.",
 vals:[["Patience","Dough rests as long as it needs."],["Craft","Every item is shaped by a baker’s hands."],["Simplicity","Natural ingredients, no shortcuts."],["Hospitality","Every guest leaves with a beautifully wrapped smile."]],
 hFil:"Philosophy and values",hId:"Visual identity",lg:["Primary logo","Stacked logo","MG monogram","Emblem"],
 hPal:"Colour palette",pal:["Graphite","Pearl","Silver","Champagne","Blush","Sage"],
 hTy:"Typography",ty:[["Cormorant Garamond","Headlines and display lettering"],["Jost","Text, buttons, captions"]],
 hOr:"Decorative elements",or:["Diamond rule","Corner frame","Monogram pattern"],
 hRu:"Logo usage",ru:["Light background: graphite logo, champagne-gold diamond.","Dark background: pearl logo, champagne-gold diamond.","Clear space around the logo equals the height of the letter M.","Minimum 20 px on screen and 8 mm in print. Never stretch, rotate or recolour."],
 hPk:"Maison Gray packaging",pkL:"One language: graphite, pearl and champagne gold.",
 pk:[["Cake box","Rigid graphite board, gilded monogram and a pearl ribbon."],["Pastry box","Pearl board with a window that shows what is inside."],["Paper bag","Recycled paper, rope handles, printed emblem."],["Wrapping paper","A monogram pattern in graphite and pearl."],["Stickers","Three seals: emblem, monogram and name."],["Ribbon and card","A champagne ribbon and a thank-you card."],["Gift voucher","A card with amount, ornate frame and number."]],
 hMa:"Brand materials",ma:[["Paper","Matt board and recycled paper in graphite and pearl."],["Finish","Hot-foil stamping in champagne gold. Emblem and diamond only."],["Print","Water-based inks. Minimum colour, maximum light."]],
 ctaT:"Think of a gift",ctaL:"Gift sets and vouchers are waiting in the shop.",ctaB:"See gifts",demo:"Concept project: demo materials."}};
const PAL=["#2b2d30","#f4f4f2","#b9bcc0","#c9b8a0","#e3c4c1","#b8c4b2"];
const mk=()=>`<svg class="mark" viewBox="0 0 40 40" aria-hidden="true"><use href="#mk"/></svg>`;
function brandText(){
 const root=$("#bBody");if(!root)return;
 const B=BT[lang],E=B.e;
 $("#bH").textContent=B.bH;$("#bL").textContent=B.bL;
 const eb=i=>`<div class="eyb">${E[i]}</div>`;
 const lgs=[`<div class="lg lg-l"><span class="logo">${mk()}<span class="lt">MAISON GRAY<small>PIEKARNIA &amp; CUKIERNIA</small></span></span></div>`,
  `<div class="lg lg-d"><span class="stk">${mk()}<b>MAISON GRAY</b><small>PIEKARNIA &amp; CUKIERNIA</small></span></div>`,
  `<div class="lg lg-l"><span class="mono">MG</span></div>`,
  `<div class="lg lg-d"><svg class="mark big" viewBox="0 0 40 40" aria-hidden="true"><use href="#mk"/></svg></div>`];
 const orn=[`<svg viewBox="0 0 200 20" class="orn"><path d="M0 10h86M114 10h86" /><path d="M100 4l6 6-6 6-6-6z" style="fill:${BK.champ};stroke:none"/></svg>`,
  `<svg viewBox="0 0 120 80" class="orn"><path d="M6 30V6h24M114 50v24H90"/><path d="M12 12l4 4-4 4-4-4z" style="fill:${BK.champ};stroke:none"/></svg>`,
  `<svg viewBox="0 0 120 80" class="orn"><defs><pattern id="opat" width="30" height="30" patternUnits="userSpaceOnUse">${U(6,6,18,"currentColor")}</pattern></defs><rect width="120" height="80" fill="url(#opat)" stroke="none"/></svg>`];
 const pkOrder=["cake","pastry","bag","wrap","sticker","ribbon","cert"],span=[3,3,2,2,2,3,3];
 root.innerHTML=
 `<div class="b-sec b-story">`+
  `<div class="b-col rv"><div class="eyb">${E[0]}</div><blockquote>${B.q}</blockquote><p>${T[lang].s1}</p><p>${T[lang].s2}</p><p>${B.p3}</p></div>`+
  `<div class="collage rv"><div class="ph" style="--a:#d9cdbb;--b:#7e8186">${IMG("Maison Gray",3,2000511)}</div><div class="ph" style="--a:#e6e7e8;--b:#9a9da1">${IMG("Maison Gray",4,34587985)}</div></div></div>`+
 `<div class="b-sec rv">${eb(1)}<h3>${B.hFil}</h3><div class="vals4">${B.vals.map((v,i)=>`<div><span>0${i+1}</span><h4>${v[0]}</h4><p>${v[1]}</p></div>`).join("")}</div></div>`+
 `<div class="b-sec rv">${eb(2)}<h3>${B.hId}</h3><div class="lgs">${lgs.map((l,i)=>l.replace('class="lg ','data-c="'+B.lg[i]+'" class="lg ')).join("")}</div>`+
  `<div class="b-two"><div><h4 class="sub">${B.hPal}</h4><div class="pal">${PAL.map((c,i)=>`<div><i style="background:${c}"></i><b>${B.pal[i]}</b><small>${c.toUpperCase()}</small></div>`).join("")}</div></div>`+
  `<div><h4 class="sub">${B.hTy}</h4><div class="typ"><div><span style="font-family:var(--serif);font-size:64px;line-height:1">Aa</span><b>${B.ty[0][0]}</b><small>${B.ty[0][1]}</small></div><div><span style="font-family:var(--sans);font-weight:300;font-size:56px;line-height:1">Aa</span><b>${B.ty[1][0]}</b><small>${B.ty[1][1]}</small></div></div></div></div>`+
  `<div class="b-two"><div><h4 class="sub">${B.hOr}</h4><div class="ors">${orn.map((o,i)=>`<figure>${o}<figcaption>${B.or[i]}</figcaption></figure>`).join("")}</div></div>`+
  `<div><h4 class="sub">${B.hRu}</h4><ol class="rules">${B.ru.map(r=>`<li>${r}</li>`).join("")}</ol></div></div></div>`+
 `<div class="b-sec">${eb(3)}<h3 class="rv">${B.hPk}</h3><p class="lead rv">${B.pkL}</p><div class="pk-grid">`+
  pkOrder.map((k,i)=>`<figure class="pk rv" style="grid-column:span ${span[i]}"><div class="pk-art">${k==="cert"?PKART.cert(B.pk[i][0],250):PKART[k](B.pk[i][0])}</div><figcaption><b>${B.pk[i][0]}</b><span>${B.pk[i][1]}</span></figcaption></figure>`).join("")+`</div></div>`+
 `<div class="b-sec rv">${eb(4)}<h3>${B.hMa}</h3><div class="mats">${B.ma.map(m=>`<div><h4>${m[0]}</h4><p>${m[1]}</p></div>`).join("")}</div></div>`+
 `<div class="b-cta rv"><div><h3>${B.ctaT}</h3><p>${B.ctaL}</p></div><button type="button" class="btn fill" data-gift>${B.ctaB}</button></div><p class="cb-disc">${B.demo}</p>`;
 observe();
}
function brandInit(){
 document.addEventListener("click",e=>{if(e.target.closest("[data-gift]")){SS.cat="gift";SS.q="";SS.best=false;SS.nw=false;const q=$("#sQ");if(q)q.value="";location.hash==="#shop"?shopDraw():location.hash="#shop"}});
}
