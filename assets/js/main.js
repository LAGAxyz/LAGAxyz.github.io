
const webSite = document.getElementById("webSite");
const perfilGH = document.getElementById("perfilGH");

const iconFB = document.getElementById("iconFB");
const iconIG = document.getElementById("iconIG");
const iconLI = document.getElementById("iconLI");
const iconYT = document.getElementById("iconYT");
const iconWA = document.getElementById("iconWA");
const iconGH = document.getElementById("iconGH");

const bar = document.getElementById("bar");

const options = {
  strings: [
      'My name is Luis Alberto Gutierrez Anicama',
      'You can call me LAGA',
      'This is Luis Alberto Gutierrez Anicama'
    ],
  typeSpeed: 60,
  backSpeed: 45,
  backDelay: 800,
  loop: true,
};

const typed = new Typed('.typedJS', options);

setInterval(() => {
  bar.value === 100 ? bar.value = 0 : bar.value += 1;
}, 1000);

iconFB.onclick = ()=>{irA("https://www.facebook.com/gutierrezanicamaluisalberto/");};
iconIG.onclick = ()=>{irA("https://www.instagram.com/lagaxyz/");};
iconLI.onclick = ()=>{irA("https://www.linkedin.com/in/lagaxyz/");};
iconYT.onclick = ()=>{irA("https://www.youtube.com/channel/UCa73fp-v3eZJBZtDBNklFPg");};
iconWA.onclick = ()=>{irA("https://wa.me/51977513393");};
iconGH.onclick = ()=>{irA("https://github.com/LAGAxyz");};

webSite.onclick = ()=>{irA("https://www.laga.xyz/me");};
perfilGH.onclick = ()=>{irA("https://github.com/LAGAxyz");};

const irA = (url)=>{
  location.href = url;
};
