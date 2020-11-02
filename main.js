
const webSite = document.getElementById("webSSite");
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
