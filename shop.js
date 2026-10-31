/* MAISON GRAY — Online shop: catalogue, filters, favourites, product modal, demo checkout.
   Loaded after cake.js, before script.js. Uses globals from script.js only at runtime:
   lang, cart, save(), render(), toast(), fmt(), IMG(), G, $, $$, t(), cbEsc() */

const SCOL={bread:["#cdbfae","#7a6f63"],croiss:["#e2cfa8","#a08a5e"],cakes:["#e7e5e1","#a2a5a9"],dess:["#ddd3d8","#8f8590"],torty:["#efeee9","#b3aa9c"],coffee:["#a79a8c","#4a4540"]};
const P=(c,price,px,f,pop,n,s,d,i,al)=>({c,price,px,best:f.includes("b"),isNew:f.includes("n"),pop,n,s,d,i,al,a:SCOL[c][0],b:SCOL[c][1]});
/* ids 0–5 are the same products (and photos) as the homepage bestsellers, so the existing cart keeps working.
   P(category, price zł, Pexels id already used on the site, flags b=bestseller n=new, popularity, [name], [short], [description], [ingredients], allergens) */
const SHOP=[
P("croiss",14,40262826,"b",95,["Croissant maślany","Butter croissant"],["Kruchy, z prawdziwym masłem.","Flaky, made with real butter."],["Składany ręcznie przez wiele godzin, z dużą ilością prawdziwego masła. Chrupiący z zewnątrz, miękki i lekki w środku.","Folded by hand over many hours with plenty of real butter. Crisp outside, soft and airy within."],["Mąka pszenna, masło 82%, mleko, cukier, drożdże, sól, jajka.","Wheat flour, 82% butter, milk, sugar, yeast, salt, eggs."],"gme"),
P("croiss",16,6215305,"b",88,["Pain au chocolat","Pain au chocolat"],["Dwa batony ciemnej czekolady.","Two bars of dark chocolate."],["Maślane ciasto francuskie z dwoma batonami ciemnej czekolady. Najlepsze jeszcze ciepłe.","Buttery laminated dough with two bars of dark chocolate. Best enjoyed warm."],["Mąka pszenna, masło, ciemna czekolada, mleko, cukier, drożdże, sól, jajka.","Wheat flour, butter, dark chocolate, milk, sugar, yeast, salt, eggs."],"gmes"),
P("bread",28,1118332,"b",92,["Chleb na zakwasie","Sourdough loaf"],["Dojrzewa 48 godzin.","Rested for 48 hours."],["Dojrzewa 48 godzin na naszym zakwasie, dzięki czemu ma głęboki smak, chrupiącą skórkę i wilgotny miąższ.","Rested for 48 hours on our own starter, which gives it deep flavour, a crisp crust and a moist crumb."],["Mąka pszenna i żytnia, woda, zakwas, sól morska.","Wheat and rye flour, water, sourdough starter, sea salt."],"g"),
P("cakes",19,13749943,"b",85,["Sernik waniliowy","Vanilla cheesecake"],["Kremowy, z laską wanilii.","Creamy, with vanilla bean."],["Kremowy sernik na kruchym spodzie, aromatyzowany prawdziwą wanilią.","A creamy cheesecake on a short base, flavoured with real vanilla."],["Twaróg, śmietanka, jajka, cukier, mąka pszenna, masło, laska wanilii.","Quark cheese, cream, eggs, sugar, wheat flour, butter, vanilla bean."],"gme"),
P("cakes",24,27304295,"",80,["Tarta malinowa","Raspberry tart"],["Kruche ciasto i świeże maliny.","Short pastry and fresh raspberries."],["Kruche maślane ciasto, delikatny krem waniliowy i świeże maliny.","Short buttery pastry, a delicate vanilla cream and fresh raspberries."],["Mąka pszenna, masło, cukier, jajka, mleko, maliny, wanilia.","Wheat flour, butter, sugar, eggs, milk, raspberries, vanilla."],"gme"),
P("torty",96,14945388,"b",90,["Tort czekoladowy","Chocolate cake"],["Gorzka czekolada, aksamitny krem.","Dark chocolate, velvet cream."],["Biszkopt z gorzką czekoladą przełożony aksamitnym kremem czekoladowym. Ok. 8 porcji.","Dark chocolate sponge layered with velvety chocolate cream. About 8 servings."],["Gorzka czekolada, mąka pszenna, jajka, masło, śmietanka, cukier, kakao.","Dark chocolate, wheat flour, eggs, butter, cream, sugar, cocoa."],"gmes"),
P("bread",9,29349524,"",60,["Bagietka tradycyjna","Traditional baguette"],["Cienka, chrupiąca skórka.","Thin, crackling crust."],["Klasyczna bagietka z długim wyrastaniem, z chrupiącą skórką i lekkim, dziurkowanym miąższem.","A classic baguette with a long rise, a crackling crust and a light, open crumb."],["Mąka pszenna, woda, drożdże, sól.","Wheat flour, water, yeast, salt."],"g"),
P("bread",24,2000511,"n",55,["Chleb żytni razowy","Wholemeal rye bread"],["Gęsty, aromatyczny, na zakwasie.","Dense, aromatic, on sourdough."],["Ciemny chleb z razowej mąki żytniej, na zakwasie, z nutą kminku.","A dark loaf of wholemeal rye on sourdough, with a hint of caraway."],["Mąka żytnia razowa, mąka pszenna, woda, zakwas żytni, kminek, sól.","Wholemeal rye flour, wheat flour, water, rye starter, caraway, salt."],"g"),
P("croiss",18,13870808,"n",70,["Croissant migdałowy","Almond croissant"],["Z kremem i płatkami migdałów.","With almond cream and flakes."],["Maślany croissant nasączony syropem, wypełniony kremem migdałowym i posypany płatkami migdałów.","A buttery croissant soaked in syrup, filled with almond cream and topped with almond flakes."],["Mąka pszenna, masło, migdały, jajka, cukier, mleko, drożdże, sól.","Wheat flour, butter, almonds, eggs, sugar, milk, yeast, salt."],"gmen"),
P("croiss",21,10880152,"bn",78,["Croissant pistacjowy","Pistachio croissant"],["Krem pistacjowy w środku.","Pistachio cream inside."],["Chrupiący croissant wypełniony kremem z pistacji i posypany kruszonymi pistacjami.","A crisp croissant filled with pistachio cream and sprinkled with crushed pistachios."],["Mąka pszenna, masło, pistacje, cukier, mleko, jajka, drożdże, sól.","Wheat flour, butter, pistachios, sugar, milk, eggs, yeast, salt."],"gmen"),
P("cakes",16,17712832,"",65,["Szarlotka","Apple pie"],["Domowa, z cynamonem.","Home-style, with cinnamon."],["Kruche ciasto z dużą ilością aromatycznych jabłek i szczyptą cynamonu.","Short pastry packed with fragrant apples and a pinch of cinnamon."],["Jabłka, mąka pszenna, masło, cukier, jajka, cynamon.","Apples, wheat flour, butter, sugar, eggs, cinnamon."],"gme"),
P("dess",36,33038486,"bn",82,["Makaroniki (6 szt.)","Macarons (6 pcs)"],["Zestaw 6 sztuk w pudełku.","A box of 6."],["Sześć delikatnych makaroników w różnych smakach, w eleganckim pudełku. Idealne na prezent.","Six delicate macarons in assorted flavours, in an elegant box. A perfect gift."],["Mąka migdałowa, cukier puder, białka jaj, śmietanka, biała czekolada, naturalne aromaty.","Almond flour, icing sugar, egg whites, cream, white chocolate, natural flavourings."],"men"),
P("dess",14,8774179,"",58,["Eklerek waniliowy","Vanilla éclair"],["Z kremem waniliowym.","With vanilla cream."],["Lekkie ciasto parzone wypełnione kremem waniliowym i pokryte czekoladową polewą.","Light choux pastry filled with vanilla cream and glazed with chocolate."],["Mąka pszenna, masło, jajka, mleko, cukier, wanilia, czekolada.","Wheat flour, butter, eggs, milk, sugar, vanilla, chocolate."],"gmes"),
P("torty",135,30575774,"bn",86,["Tort pistacjowy","Pistachio cake"],["Krem pistacjowy i lekki biszkopt.","Pistachio cream and light sponge."],["Lekki biszkopt przełożony kremem pistacjowym. Ok. 8 porcji.","Light sponge layered with pistachio cream. About 8 servings."],["Pistacje, mąka pszenna, jajka, masło, śmietanka, cukier.","Pistachios, wheat flour, eggs, butter, cream, sugar."],"gmen"),
P("torty",149,29388914,"",72,["Tort elegancki","Elegant cake"],["Wanilia i delikatna dekoracja.","Vanilla and a refined finish."],["Waniliowy tort z lekkim kremem i delikatną dekoracją. Ok. 10 porcji. Chcesz własny projekt? Skorzystaj z kreatora „Twój tort”.","A vanilla cake with light cream and a refined finish. About 10 servings. Want your own design? Try the “Your cake” builder."],["Mąka pszenna, jajka, masło, śmietanka, wanilia, cukier.","Wheat flour, eggs, butter, cream, vanilla, sugar."],"gme"),
P("coffee",9,30922284,"",50,["Espresso","Espresso"],["Intensywne i aksamitne.","Intense and velvety."],["Świeżo palona kawa arabica z gęstą crema.","Freshly roasted arabica with a thick crema."],["Kawa arabica 100%.","100% arabica coffee."],""),
P("coffee",14,29269205,"b",74,["Cappuccino","Cappuccino"],["Espresso i jedwabista pianka.","Espresso with silky foam."],["Espresso, spienione mleko i delikatna pianka. Idealne do croissanta.","Espresso, steamed milk and delicate foam. Perfect with a croissant."],["Kawa arabica, mleko.","Arabica coffee, milk."],"m"),
P("coffee",42,30922284,"n",45,["Kawa ziarnista 250 g","Coffee beans 250 g"],["Świeżo palona mieszanka arabiki.","Freshly roasted arabica blend."],["Mieszanka arabiki palona w małych partiach, do ekspresu i do przelewu.","An arabica blend roasted in small batches, for espresso machines and filter brewing."],["Kawa arabica 100%, palona w małych partiach.","100% arabica coffee, roasted in small batches."],"")
];

const CATS=["all","bread","croiss","cakes","dess","torty","coffee"];
const DELIV=12,FREE=150;
const ST={
pl:{shopH:"Sklep online",shopL:"Wypieki, torty i kawa Maison Gray. Zamów online i odbierz w piekarni albo poproś o dostawę.",
 cats:["Wszystkie produkty","Pieczywo","Croissanty","Ciasta","Desery","Torty","Kawa"],search:"Szukaj po nazwie…",sort:"Sortuj",sPop:"Popularność",sAsc:"Cena: od najniższej",sDesc:"Cena: od najwyższej",sName:"Nazwa A–Z",
 best:"Bestseller",news:"Nowości",bestB:"Bestseller",newB:"Nowość",count:"Produkty",none:"Brak produktów spełniających kryteria.",reset:"Wyczyść filtry",
 promoT:"Marzysz o torcie na miarę?",promoB:"Stwórz swój tort",ing:"Skład i składniki",alg:"Alergeny",noAl:"Brak głównych alergenów",qty:"Ilość",addQ:"Dodaj do koszyka",
 al:{g:"Gluten",m:"Mleko",e:"Jajka",n:"Orzechy",s:"Soja"},favH:"Ulubione",favL:"Produkty, które polubiłeś(-aś). Lista zapisuje się na tym urządzeniu.",favEmpty:"Nie masz jeszcze ulubionych produktów.",goShop:"Przejdź do sklepu",
 favAdd:"Dodaj do ulubionych",favRm:"Usuń z ulubionych",favOn:"Dodano do ulubionych",favOff:"Usunięto z ulubionych",close:"Zamknij",
 coH:"Zamówienie",fn:"Imię i nazwisko",fe:"Email",fp:"Numer telefonu",fm:"Sposób odbioru",pick:"Odbiór osobisty",pickS:"ul. Przykładowa 12, Łódź · bezpłatnie",deliv:"Dostawa",delivS:"12,00 zł · gratis od 150,00 zł",
 fa:"Adres dostawy",faPh:"Ulica, numer, kod pocztowy, miasto",fi:"Dodatkowe informacje",fiPh:"Godzina odbioru, alergie, uwagi…",sub:"Produkty",ship:"Dostawa",free:"gratis",total:"Razem do zapłaty",place:"Złóż zamówienie (demo)",
 eN:"Podaj imię i nazwisko.",eE:"Podaj poprawny adres e-mail.",eP:"Podaj poprawny numer telefonu.",eA:"Podaj adres dostawy.",
 demo:"Wersja demonstracyjna: zamówienie nie jest nigdzie wysyłane, a płatność nie jest podłączona.",
 okH:"Dziękujemy za zamówienie!",okL:"zamówienie demonstracyjne zostało przyjęte.",okNo:"Numer zamówienia",okBack:"Wróć do sklepu",items:"szt."},
en:{shopH:"Online shop",shopL:"Maison Gray bakes, cakes and coffee. Order online and collect in our bakery, or ask for delivery.",
 cats:["All products","Bread","Croissants","Cakes","Desserts","Celebration cakes","Coffee"],search:"Search by name…",sort:"Sort",sPop:"Popularity",sAsc:"Price: low to high",sDesc:"Price: high to low",sName:"Name A–Z",
 best:"Bestseller",news:"New arrivals",bestB:"Bestseller",newB:"New",count:"Products",none:"No products match your criteria.",reset:"Clear filters",
 promoT:"Dreaming of a custom cake?",promoB:"Create your own cake",ing:"Ingredients",alg:"Allergens",noAl:"No major allergens",qty:"Quantity",addQ:"Add to cart",
 al:{g:"Gluten",m:"Milk",e:"Eggs",n:"Nuts",s:"Soy"},favH:"Favourites",favL:"Products you love. The list is saved on this device.",favEmpty:"You have no favourite products yet.",goShop:"Go to the shop",
 favAdd:"Add to favourites",favRm:"Remove from favourites",favOn:"Added to favourites",favOff:"Removed from favourites",close:"Close",
 coH:"Checkout",fn:"Full name",fe:"Email",fp:"Phone number",fm:"Collection method",pick:"Pick-up",pickS:"ul. Przykładowa 12, Łódź · free",deliv:"Delivery",delivS:"12,00 zł · free over 150,00 zł",
 fa:"Delivery address",faPh:"Street, number, postcode, city",fi:"Additional information",fiPh:"Pick-up time, allergies, notes…",sub:"Products",ship:"Delivery",free:"free",total:"Total to pay",place:"Place order (demo)",
 eN:"Please enter your full name.",eE:"Please enter a valid email address.",eP:"Please enter a valid phone number.",eA:"Please enter a delivery address.",
 demo:"Demo version: the order is not sent anywhere and no payment is connected.",
 okH:"Thank you for your order!",okL:"your demo order has been received.",okNo:"Order number",okBack:"Back to the shop",items:"pcs"}};
const S=k=>ST[lang][k],SL=a=>a[lang==="en"?1:0];
const unitPrice=c=>c.cake?c.price:SHOP[c.id].price;
const nz=s=>s.toLowerCase().replace(/ł/g,"l").normalize("NFD").replace(/[\u0300-\u036f]/g,"");

const SS={q:"",cat:"all",sort:"pop",best:false,nw:false};
let fav=[];try{fav=JSON.parse(localStorage.getItem("mg-fav")||"[]")}catch(e){}
fav=Array.isArray(fav)?fav.filter(i=>Number.isInteger(i)&&SHOP[i]).filter((i,k,a)=>a.indexOf(i)===k):[];
const M={t:null,id:0,qty:1,order:null,prev:null};
const ckD={n:"",e:"",p:"",m:"pick",a:"",i:""};

/* ---------- list ---------- */
function shopList(){
 const q=nz(SS.q.trim());
 const l=SHOP.map((p,i)=>({p,i})).filter(({p})=>(SS.cat==="all"||p.c===SS.cat)&&(!q||nz(SL(p.n)).includes(q))&&(!SS.best||p.best)&&(!SS.nw||p.isNew));
 const f={pop:(a,b)=>b.p.pop-a.p.pop,asc:(a,b)=>a.p.price-b.p.price||b.p.pop-a.p.pop,desc:(a,b)=>b.p.price-a.p.price||b.p.pop-a.p.pop,name:(a,b)=>SL(a.p.n).localeCompare(SL(b.p.n),lang)};
 return l.sort(f[SS.sort]||f.pop);
}
const HEART='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5S4.5 16 4.5 9.8A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5c0 6.200-7.500 10.700-7.500 10.700z"/></svg>';
const heart=(i,on)=>`<button type="button" class="fv${on?" on":""}" data-fav="${i}" aria-pressed="${on}" aria-label="${S(on?"favRm":"favAdd")}">${HEART}</button>`;
const badges=p=>(p.best||p.isNew)?`<div class="bd">${p.best?`<span>${S("bestB")}</span>`:""}${p.isNew?`<span class="nw">${S("newB")}</span>`:""}</div>`:"";
function card({p,i},k){
 return `<article class="sc" style="--d:${Math.min(k,11)*45}ms" data-open="${i}"><div class="sc-img ph" style="--a:${p.a};--b:${p.b}">${IMG(p.n[0],20,p.px)}${G}${badges(p)}${heart(i,fav.includes(i))}</div>`+
 `<div class="sc-b"><h3><button type="button" class="lnk" data-open="${i}">${SL(p.n)}</button></h3><p>${SL(p.s)}</p><div class="row"><span class="price">${fmt(p.price)}</span></div><button type="button" class="btn" data-add="${i}">${t("add")}</button></div></article>`;
}
function shopDraw(){
 $$("#sCats .chip").forEach(b=>{const on=b.dataset.cat===SS.cat;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
 [["#sBest",SS.best],["#sNew",SS.nw]].forEach(([s,v])=>{$(s).classList.toggle("on",v);$(s).setAttribute("aria-pressed",v)});
 const l=shopList();
 $("#sCnt").textContent=S("count")+": "+l.length;
 $("#sReset").hidden=!(SS.q||SS.cat!=="all"||SS.best||SS.nw||SS.sort!=="pop");
 $("#sGrid").innerHTML=l.length?l.map(card).join(""):`<div class="s-empty"><p>${S("none")}</p><button type="button" class="btn" data-sreset>${S("reset")}</button></div>`;
 $("#sPromo").hidden=SS.cat!=="torty";
}
function shopReset(){Object.assign(SS,{q:"",cat:"all",sort:"pop",best:false,nw:false});$("#sQ").value="";$("#sSort").value="pop";shopDraw()}
function favDraw(){
 $("#fGrid").innerHTML=fav.length?fav.map((i,k)=>card({p:SHOP[i],i},k)).join(""):`<div class="s-empty"><p>${S("favEmpty")}</p><a class="btn" href="#shop">${S("goShop")}</a></div>`;
}
function favUI(){
 $("#favcnt").textContent=fav.length;
 $$("[data-fav]").forEach(b=>{const on=fav.includes(+b.dataset.fav);b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);b.setAttribute("aria-label",S(on?"favRm":"favAdd"))});
}
function favToggle(i){
 const k=fav.indexOf(i);k<0?fav.push(i):fav.splice(k,1);
 try{localStorage.setItem("mg-fav",JSON.stringify(fav))}catch(e){}
 toast(S(k<0?"favOn":"favOff"));favUI();
 if(document.body.dataset.view==="fav")favDraw();
}
function addItem(id,q){
 const f=cart.find(c=>c.key==="p"+id);f?f.q+=q:cart.push({key:"p"+id,id,q});
 save();render();toast(t("added")+(q>1?" (×"+q+")":""));
 const b=$("#cartbtn");b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump");
}

/* ---------- modal (product / checkout / confirmation) ---------- */
function mdShow(){const m=$("#md");m.hidden=false;document.body.classList.add("lock");$("#mdBox").scrollTop=0;$("#mdBox").focus({preventScroll:true})}
function mdClose(){$("#md").hidden=true;document.body.classList.remove("lock");const p=M.prev;M.t=null;M.prev=null;if(p&&document.contains(p))p.focus({preventScroll:true})}
function mqUpd(){const p=SHOP[M.id];$("#mq").textContent=M.qty;$("#mAdd").textContent=S("addQ")+" · "+fmt(p.price*M.qty)}
function mdOpenProduct(i,trigger){M.t="p";M.id=i;M.qty=1;M.prev=trigger||null;mdShow();mdDraw()}
function openCheckout(){
 $("#cart").classList.remove("on");$("#shade").classList.remove("on");
 M.t="c";M.prev=$("#co");mdShow();mdDraw();
}
function mdDraw(){
 const b=$("#mdBody"),box=$("#mdBox");
 box.classList.toggle("nar",M.t!=="p");
 if(M.t==="p"){
  const p=SHOP[M.id];
  const al=p.al?[...p.al].map(k=>`<span>${S("al")[k]}</span>`).join(""):`<span>${S("noAl")}</span>`;
  b.innerHTML=`<div class="pm"><div class="pm-img ph" style="--a:${p.a};--b:${p.b}">${IMG(p.n[0],0,p.px,1)}${G}</div><div class="pm-i">${badges(p)}<h2 id="mdT">${SL(p.n)}</h2><div class="price pm-p">${fmt(p.price)}</div><p>${SL(p.d)}</p>`+
   `<h4>${S("ing")}</h4><p>${SL(p.i)}</p><h4>${S("alg")}</h4><div class="al">${al}</div>`+
   `<div class="pm-buy"><span class="mut">${S("qty")}</span><div class="qty"><button type="button" data-mq="-1" aria-label="−">−</button><span id="mq" aria-live="polite"></span><button type="button" data-mq="1" aria-label="+">+</button></div><button type="button" class="btn fill" data-madd id="mAdd"></button>${heart(M.id,fav.includes(M.id))}</div></div></div>`;
  mqUpd();
 }else if(M.t==="c"){
  const fld=(id,lab,type,ac,val)=>`<div class="fld"><label for="ck-${id}">${lab}</label><input id="ck-${id}" type="${type}" autocomplete="${ac}" value="${cbEsc(val)}" aria-describedby="ck-${id}-e"><small class="err" id="ck-${id}-e"></small></div>`;
  b.innerHTML=`<h2 id="mdT">${S("coH")}</h2><form id="ckf" novalidate>`+
   fld("n",S("fn"),"text","name",ckD.n)+fld("e",S("fe"),"email","email",ckD.e)+fld("p",S("fp"),"tel","tel",ckD.p)+
   `<fieldset class="ship"><legend>${S("fm")}</legend>`+
   `<label class="rad"><input type="radio" name="ship" value="pick"${ckD.m==="pick"?" checked":""}><span><b>${S("pick")}</b><small>${S("pickS")}</small></span></label>`+
   `<label class="rad"><input type="radio" name="ship" value="deliv"${ckD.m==="deliv"?" checked":""}><span><b>${S("deliv")}</b><small>${S("delivS")}</small></span></label></fieldset>`+
   `<div id="ck-a">`+fld("a",S("fa"),"text","street-address",ckD.a).replace('autocomplete="street-address"',`autocomplete="street-address" placeholder="${cbEsc(S("faPh"))}"`)+`</div>`+
   `<div class="fld"><label for="ck-i">${S("fi")}</label><textarea id="ck-i" rows="3" maxlength="300" placeholder="${cbEsc(S("fiPh"))}">${cbEsc(ckD.i)}</textarea></div>`+
   `<div class="ck-sum" id="ckS"></div><p class="cb-disc">${S("demo")}</p><button type="submit" class="btn fill cb-add">${S("place")}</button></form>`;
  ckUpd();
 }else if(M.t==="ok"){
  const o=M.order;
  b.innerHTML=`<div class="ok"><svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="31"/><path d="M22 37l10 10 18-21"/></svg><h2 id="mdT">${S("okH")}</h2><p>${cbEsc(o.name)}, ${S("okL")}</p><div class="mut">${S("okNo")}</div><div class="no">${o.no}</div>`+
   `<div class="ck-sum"><div><span>${S("fm")}</span><span>${S(o.m==="deliv"?"deliv":"pick")}</span></div><div><span>${S("fe")}</span><span>${cbEsc(o.email)}</span></div><div class="t"><span>${S("total")}</span><span>${fmt(o.total)}</span></div></div>`+
   `<p class="cb-disc">${S("demo")}</p><a class="btn fill" href="#shop" data-mclose>${S("okBack")}</a></div>`;
 }
}
function ckRead(){
 if(!$("#ckf"))return;
 ckD.n=$("#ck-n").value;ckD.e=$("#ck-e").value;ckD.p=$("#ck-p").value;ckD.a=$("#ck-a input").value;ckD.i=$("#ck-i").value;
 ckD.m=$("#ckf input[name=ship]:checked").value;
}
function ckTot(){const sub=cart.reduce((s,c)=>s+unitPrice(c)*c.q,0),sh=ckD.m==="deliv"?(sub>=FREE?0:DELIV):0;return{sub,sh,tot:sub+sh}}
function ckUpd(){
 $("#ck-a").hidden=ckD.m!=="deliv";
 const x=ckTot();
 $("#ckS").innerHTML=`<div><span>${S("sub")}</span><span>${fmt(x.sub)}</span></div>`+(ckD.m==="deliv"?`<div><span>${S("ship")}</span><span>${x.sh?fmt(x.sh):S("free")}</span></div>`:"")+`<div class="t"><span>${S("total")}</span><span>${fmt(x.tot)}</span></div>`;
}
function ckSubmit(){
 ckRead();
 if(!cart.length){toast(t("empty"));return}
 const E={};
 if(ckD.n.trim().split(/\s+/).filter(Boolean).length<2)E.n=S("eN");
 if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(ckD.e.trim()))E.e=S("eE");
 if(!/^\+?[\d\s()-]{9,20}$/.test(ckD.p.trim())||ckD.p.replace(/\D/g,"").length<9)E.p=S("eP");
 if(ckD.m==="deliv"&&ckD.a.trim().length<6)E.a=S("eA");
 ["n","e","p","a"].forEach(k=>{$("#ck-"+k).setAttribute("aria-invalid",String(!!E[k]));$("#ck-"+k+"-e").textContent=E[k]||""});
 const bad=["n","e","p","a"].find(k=>E[k]);
 if(bad){$("#ck-"+bad).focus();return}
 const d=new Date(),pad=n=>String(n).padStart(2,"0"),x=ckTot();
 M.order={no:"MG-"+d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+"-"+Math.floor(1000+Math.random()*9000),name:ckD.n.trim().split(/\s+/)[0],email:ckD.e.trim(),m:ckD.m,total:x.tot};
 cart=[];save();render();
 Object.assign(ckD,{n:"",e:"",p:"",m:"pick",a:"",i:""});
 M.t="ok";mdDraw();$("#mdBox").scrollTop=0;
}

/* ---------- routing: #shop / #favorites are views, everything else is the homepage ---------- */
function route(){
 const h=decodeURIComponent(location.hash.slice(1)),v=h==="shop"?"shop":h==="favorites"?"fav":"home",prev=document.body.dataset.view;
 document.body.dataset.view=v;
 $("#hv").hidden=v!=="home";$("#shopview").hidden=v!=="shop";$("#favview").hidden=v!=="fav";
 $("#hd").classList.toggle("solid",v!=="home"||scrollY>40);
 $$("#nav a").forEach(a=>a.classList.toggle("cur",a.getAttribute("href")==="#"+h&&v==="shop"));
 if(v!=="home")scrollTo({top:0,behavior:"instant"});
 else if(prev!=="home"){const el=h&&document.getElementById(h);el?el.scrollIntoView({behavior:"instant"}):scrollTo({top:0,behavior:"instant"})}
 if(v==="shop")shopDraw();
 if(v==="fav")favDraw();
 $("#nav").classList.remove("on");
}

/* translated static parts — called on load and on PL/EN switch */
function shopText(){
 $("#sH").textContent=S("shopH");$("#sL").textContent=S("shopL");
 $("#sQ").placeholder=S("search");$("#sQ").setAttribute("aria-label",S("search"));$("#sSort").setAttribute("aria-label",S("sort"));
 $("#sSort").innerHTML=[["pop","sPop"],["asc","sAsc"],["desc","sDesc"],["name","sName"]].map(([v,k])=>`<option value="${v}"${SS.sort===v?" selected":""}>${S(k)}</option>`).join("");
 $("#sBest").textContent=S("best");$("#sNew").textContent=S("news");
 $("#sCats").innerHTML=CATS.map((k,i)=>`<button type="button" class="chip" data-cat="${k}">${S("cats")[i]}</button>`).join("");
 $("#sReset").textContent=S("reset");$("#pT").textContent=S("promoT");$("#pB").textContent=S("promoB");
 $("#fH").textContent=S("favH");$("#fL").textContent=S("favL");
 $("#favbtn").setAttribute("aria-label",S("favH"));$("#mdX").setAttribute("aria-label",S("close"));
 shopDraw();favDraw();favUI();
 if(M.t)mdDraw();
}

function shopInit(){
 $("#sQ").addEventListener("input",e=>{SS.q=e.target.value;shopDraw()});
 $("#sSort").addEventListener("change",e=>{SS.sort=e.target.value;shopDraw()});
 $("#sBest").onclick=()=>{SS.best=!SS.best;shopDraw()};
 $("#sNew").onclick=()=>{SS.nw=!SS.nw;shopDraw()};
 $("#sCats").addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(b){SS.cat=b.dataset.cat;shopDraw()}});
 $("#sReset").onclick=shopReset;
 document.addEventListener("click",e=>{
  const fv=e.target.closest("[data-fav]");
  if(fv){e.preventDefault();favToggle(+fv.dataset.fav);return}
  if(e.target.closest("[data-sreset]")){shopReset();return}
  if(e.target.closest("[data-add]"))return;
  const o=e.target.closest("[data-open]");
  if(o)mdOpenProduct(+o.dataset.open,o.querySelector(".lnk")||o);
 });
 const md=$("#md");
 md.addEventListener("click",e=>{
  if(e.target.id==="md"||e.target.closest("[data-mclose]")){mdClose();return}
  const q=e.target.closest("[data-mq]");
  if(q){M.qty=Math.min(20,Math.max(1,M.qty+ +q.dataset.mq));mqUpd();return}
  if(e.target.closest("[data-madd]")){addItem(M.id,M.qty);mdClose()}
 });
 md.addEventListener("input",ckRead);
 md.addEventListener("change",e=>{if(e.target.name==="ship"){ckRead();ckUpd()}});
 md.addEventListener("submit",e=>{e.preventDefault();ckSubmit()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&M.t)mdClose()});
 addEventListener("hashchange",route);
 route();
}
