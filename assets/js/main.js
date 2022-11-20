
const webSite = document.getElementById("webSite");
const perfilGH = document.getElementById("perfilGH");

const bar = document.getElementById("bar");

const options = {
  strings: [
      'My name is Luis Alberto Gutierrez Anicama',
      'You can call me LAGA'
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

webSite.onclick = ()=>{irA("./me");};
perfilGH.onclick = ()=>{irA("https://github.com/LAGAxyz");};

const irA = (url)=>{
  location.href = url;
};
