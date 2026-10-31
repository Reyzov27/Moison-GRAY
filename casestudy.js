/* MAISON GRAY — concept layer: "what the site can do" + Case study. Loaded before script.js.
   Uses at runtime: lang, IMG(), observe(), $, $$. Frames are live copies of this site (?frame=1). */
const CS_FRAME=/frame=1/.test(location.search);
if(CS_FRAME){document.documentElement.classList.add("frm");addEventListener("load",()=>{const h=location.hash.slice(1),el=h&&document.getElementById(h),hv=$("#hv");if(el&&hv&&!hv.hidden)setTimeout(()=>el.scrollIntoView({behavior:"instant"}),350)})}
const CSD={
pl:{fH:"Co potrafi ta strona",fL:"Siedem funkcji, które możesz sprawdzić na żywo. Kliknij kafelek, aby przejść do prawdziwej części projektu.",
 f:[["Nowoczesny, premium design","Grafit, perła i szampańskie złoto. Duża typografia, spokojne animacje.","Do góry"],["Pełny katalog produktów","Sześć kategorii oferty i bestsellery z opisami oraz cenami.","Zobacz menu"],["Sklep internetowy","Wyszukiwarka, filtry, sortowanie, ulubione i karta produktu.","Przejdź do sklepu"],["Koszyk i zamówienie demo","Koszyk zapamiętuje wybór. Formularz pokazuje cały proces, ale płatność nie jest podłączona.","Otwórz koszyk"],["Konstruktor tortów","Rozmiar, smak, dekoracja i napis. Projekt rysuje się na żywo, a cena liczy się sama.","Stwórz tort"],["Wersja mobilna","Układ dopasowuje się do telefonu, tabletu i komputera.","Zobacz na telefonie"],["Polski i angielski","Jedno kliknięcie zmienia język całej strony, także koszyka i zamówienia.","Zmień język"]],
 cH:"Case study",cL:"Koncepcja, funkcje i technologie projektu Maison Gray. To projekt demonstracyjny, nie istnieje realna firma.",
 meta:[["Projekt","Maison Gray, piekarnia i cukiernia"],["Typ","Strona koncepcyjna z demonstracyjnym sklepem"],["Zakres","Projekt wizualny, układ, front-end"],["Rok","2026"]],
 big:"Francuska elegancja w polskiej piekarni.",
 kH:"Koncepcja i kierunek",kP:"Spokojna paleta grafitu, perły i szampańskiego złota, szeryfowe nagłówki i duże, oddychające kompozycje. Zdjęcia grają pierwsze skrzypce, interfejs im nie przeszkadza.",
 aH:"Odbiorcy (założenia projektowe)",aP:"Mieszkańcy miasta, którzy kupują codzienne pieczywo, zamawiają tort na uroczystość albo szukają prezentu. Strona ma być czytelna na telefonie i prowadzić do zamówienia w kilku kliknięciach.",
 rH:"Zrealizowane funkcje",r:["Katalog sześciu kategorii i bestsellery","Sklep: wyszukiwanie, filtry, sortowanie, ulubione","Karta produktu w oknie dialogowym","Koszyk zapisywany w przeglądarce","Zamówienie demo z dostawą lub odbiorem","Konstruktor tortu z podglądem SVG i wyceną","Wersje PL i EN","Animacje wejścia, pasek postępu, delikatny paralaks. Wyłączane przy ograniczonym ruchu."],
 tH:"Technologie",tN:"Bez backendu i bez frameworków. Dane, zamówienia i płatności są demonstracyjne.",
 pal:"Paleta",pn:["Grafit","Perła","Srebro","Szampan"],ty:"Typografia",
 dH:"Przykłady stron",mH:"Wersja mobilna",fr:["Strona główna","Sklep","Konstruktor tortów"],foot:"CASE STUDY"},
en:{fH:"What this site can do",fL:"Seven features you can try live. Click a tile to jump to the real part of the project.",
 f:[["Modern premium design","Graphite, pearl and champagne gold. Large type, calm motion.","Back to top"],["Full product catalogue","Six categories and bestsellers with descriptions and prices.","See the menu"],["Online shop","Search, filters, sorting, favourites and a product card.","Open the shop"],["Cart and demo checkout","The cart remembers your choice. The form shows the full flow, but no payment is connected.","Open the cart"],["Cake builder","Size, flavour, decoration and inscription. The design draws itself and the price updates.","Design a cake"],["Mobile version","The layout adapts to phone, tablet and desktop.","See it on a phone"],["Polish and English","One click switches the whole site, including the cart and checkout.","Switch language"]],
 cH:"Case study",cL:"The concept, features and technology behind Maison Gray. A demo project: there is no real company.",
 meta:[["Project","Maison Gray, bakery and patisserie"],["Type","Concept website with a demo shop"],["Scope","Visual design, layout, front-end"],["Year","2026"]],
 big:"French elegance in a Polish bakery.",
 kH:"Concept and direction",kP:"A calm palette of graphite, pearl and champagne gold, serif headlines and large, airy compositions. The photography leads, the interface stays out of its way.",
 aH:"Audience (design assumptions)",aP:"Locals who buy daily bread, order a cake for an occasion or look for a gift. The site should read well on a phone and lead to an order in a few clicks.",
 rH:"Implemented features",r:["Catalogue of six categories and bestsellers","Shop: search, filters, sorting, favourites","Product card in a dialog","Cart saved in the browser","Demo checkout with delivery or pick-up","Cake builder with SVG preview and pricing","PL and EN versions","Entrance animations, progress bar, gentle parallax. Disabled for reduced motion."],
 tH:"Technology",tN:"No backend and no frameworks. Data, orders and payments are demo only.",
 pal:"Palette",pn:["Graphite","Pearl","Silver","Champagne"],ty:"Typography",
 dH:"Page examples",mH:"Mobile version",fr:["Home page","Shop","Cake builder"],foot:"CASE STUDY"}};
const CS_TECH=["HTML5","CSS3 (custom properties, grid, flex, dark mode)","JavaScript (vanilla)","SVG","localStorage / sessionStorage","IntersectionObserver","Google Fonts","Pexels"];
const CS_FT=[[7,7541732,"#home"],[5,29349524,"#menu"],[4,6215305,"#shop"],[4,1118332,"cart"],[4,29388914,"#cake"],[6,8957093,""],[6,0,"lang"]];
const CS_FR=[["#home","1"],["#shop","2"],["#cake","3"]];
let csLang="";
function csFrame(h,mob,cap){const w=mob?390:1280,ht=mob?780:800;
 return `<figure class="cs-fr ${mob?"cs-m":"cs-d"} rv">${mob?"":'<div class="cs-bar"><i></i><i></i><i></i></div>'}<div class="cs-vp" data-w="${w}" style="aspect-ratio:${w}/${ht}"><iframe src="?frame=1${h}" width="${w}" height="${ht}" loading="lazy" title="${cap}" tabindex="-1" aria-hidden="true"></iframe></div><figcaption>${cap}</figcaption></figure>`}
function csScale(){$$(".cs-vp").forEach(v=>{const f=v.firstElementChild;if(f&&v.clientWidth)f.style.transform="scale("+(v.clientWidth/+v.dataset.w).toFixed(4)+")"})}
function csText(){
 const F=$("#features");if(!F)return;
 if(CS_FRAME){F.remove();return}
 const D=CSD[lang];
 $("#ftH").textContent=D.fH;$("#ftL").textContent=D.fL;
 $("#ftGrid").innerHTML=CS_FT.map((x,i)=>{const [s,id,a]=x,hrefA=a[0]==="#",tag=a===""?"div":hrefA?`a href="${a}"`:`button type="button" data-cs="${a}"`,end=a===""?"div":hrefA?"a":"button";
  const vis=a==="lang"?`<div class="cs-dev"><span class="cs-pl">PL <em>/</em> EN</span></div>`:i===5?`<div class="cs-dev"><div class="cs-phone"><div class="cs-ph" style="--a:#e4e5e6;--b:#8c9096">${IMG(D.f[i][0],60+i,id)}</div></div></div>`:`<div class="cs-ph" style="--a:#d9cdbb;--b:#7e8186">${IMG(D.f[i][0],60+i,id)}</div>`;
  return `<${tag} class="ft-i s${s} rv">${vis}<h3>${D.f[i][0]}</h3><p>${D.f[i][1]}</p>${a===""?"":`<span class="ft-go">${D.f[i][2]}</span>`}</${end}>`}).join("");
 observe();
}
(()=>{if(CS_FRAME)return;
 document.addEventListener("click",e=>{const b=e.target.closest("[data-cs]");if(!b)return;b.dataset.cs==="cart"?$("#cartbtn").click():$("#lang").click()});
})();
