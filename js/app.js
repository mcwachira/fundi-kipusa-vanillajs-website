
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

//control the mobile navigation

const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.menu-btn')
const closeMenu = document.querySelector('.close-btn')



const dropDown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')



openMenu.addEventListener('click', () => {
  menu.classList.add('act')
})

closeMenu.addEventListener('click', () => {
  // header.classList.remove('sticky')
  menu.classList.remove('act')
})

dropDown.addEventListener('click', () => {
  dropdownMenu.classList.toggle('display')
})



const submit = document.querySelector('.cta-submit__button')
submit.addEventListener("click", () => {
  let link = 'mailto:mcwachira@outlook.com'
    + "&subject =" + escape("this is my subject")
    + "&body=" + escape(document.getElementById('body').value)
  window.location.href = link;
})
//submenu

// const items = document.querySelectorAll('.item')

// function toggleSubMenu() {
//   if (this.classList.contains('submenu-active')) {
//     this.classList.remove('submenu-active');
//   } else {
//     if (menu.querySelector(".submenu.active")) {
//       menu.querySelector(".submenu-active").classList.remove("submenu-active")
//       this.classList.add('submenu-active')
//     } else {
//       this.classList.add('submenu-active')
//     }

//   }
// }

// // Event listeners

// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener('click', toggleSubMenu, false);
//     item.addEventListener('keypress', toggleSubMenu, false)
//   }
// }





// var all = document.getElementsByTagName("*"), i = 0, rect, docWidth = document.documentElement.offsetWidth;
// for (; i < all.length; i++) {
//   rect = all[i].getBoundingClientRect();
//   if (rect.right > docWidth || rect.left < 0) {
//     console.log(all[i]);
//     all[i].style.borderTop = '1px solid red';
//   }
// }





// let navbar = document.querySelector(".navbar");
// let scrollPos = window.scrollY;
// let allLinks = document.querySelectorAll(".nav-item");
// let mainLinks = document.querySelectorAll(".main-link");
// let button = document.querySelector("#toggleHeight");
// let section = document.querySelector(".home__svg");
// window.addEventListener("scroll", function () {
//   scrollPos = window.scrollY;

//   if (scrollPos >= 50) {
//     navbar.classList.add("affix");
//     // document.querySelectorAll(".main-link").forEach((el) => {
//     //   el.style.color = "white";
//     // });
//   } else if (scrollPos >= 50 && allLinks.length > 0) {
//     allLinks.classList.add("link-style");
//   } else {
//     navbar.classList.remove("affix");
//   }
// });


// button.addEventListener("click", function () {
//   console.log("hellow");
//   section.classList.toggle("HeightAdjust");
// });
// const cryptoPage = document.querySelector(".crypto__data");

// const api = "e64b531caf9cc9eed3502a44e44a949b";
// const cryptoData = async () => {
//   const base =
//     "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,ADA,BNB,USDT,DOGE,AGI,TRX,VET&tsyms=USD";
//   //const query =`?access_key=${api}&target=usd&symbol=BTC,ETH,XRP`;
//   // const query = `?access_key=${api}&target=usd&symbols=BTC,ETH,XRP,ADA,BNB,USDT,DOGE,AGI,TRX,VEN`;
//   const query = `&api_key={api} `;
//   const response = await fetch(base + query);
//   const data = await response.json();
//   //00`
//   console.log(data);
//   //const coinData = data.rates;
//   //Object.keys takes object as argument and returns array containing all the properties in the object.
//   const keys = Object.entries(data);
//   console.log(keys);
//   keys.forEach((key) => {
//     console.log(`${key}: ${key[1].USD}`);
//   });

//   // const value = Object.values(data)
//   //   console.log(value)

//   keys.forEach((key, index) => {
//     // console.log(`${key} : ${coinData[key]}`)
//     const coinName = key[0].toLowerCase();
//     console.log(coinName);
//     switch (coinName) {
//       case "ada":
//         let adaSrc = `../images/svg/cardano-ada-logo.svg`;
//         const ada = document.createElement("div");

//         const adaImg = document.createElement("img");
//         adaImg.classList.add("img-style");
//         adaImg.setAttribute("src", adaSrc);
//         ada.appendChild(adaImg);

//         const adaText = document.createElement("h2");
//         adaText.innerHTML = "cardano";
//         ada.appendChild(adaText);
//         const adaPrice = document.createElement("h3");
//         adaPrice.innerHTML = `${key[1].USD}`;
//         ada.appendChild(adaPrice);
//         cryptoPage.appendChild(ada);

//         console.log(`${key[1].USD}`);
//         break;
//       case "bnb":
//         let bnbSrc = `../images/svg/binance-coin-bnb-logo.svg`;
//         const bnb = document.createElement("div");
//         const bnbImg = document.createElement("img");
//         bnbImg.classList.add("img-style");
//         bnbImg.setAttribute("src", bnbSrc);
//         bnb.appendChild(bnbImg);

//         const bnbText = document.createElement("h2");
//         bnbText.innerHTML = "Binance coin";
//         bnb.appendChild(bnbText);

//         const bnbPrice = document.createElement("h3");
//         bnbPrice.innerHTML = `${key[1].USD}`;
//         bnb.appendChild(bnbPrice);
//         cryptoPage.appendChild(bnb);
//         //console.log(`${coinData[key]}`);
//         break;
//       case "btc":
//         let btcSrc = `../images/svg/bitcoin-btc-logo.svg`;
//         const btc = document.createElement("div");
//         const btcImg = document.createElement("img");
//         btcImg.classList.add("img-style");
//         btcImg.setAttribute("src", btcSrc);
//         btc.appendChild(btcImg);

//         const btcText = document.createElement("h2");
//         btcText.innerHTML = "Bitcoin";
//         btc.appendChild(btcText);

//         const btcPrice = document.createElement("h3");
//         btcPrice.innerHTML = `${key[1].USD}`;
//         btc.appendChild(btcPrice);
//         cryptoPage.appendChild(btc);
//         // console.log(value);
//         // console.log(`${coinData[key]}`);
//         break;

//       case "doge":
//         let dogeSrc = `../images/svg/dogecoin-doge-logo.svg`;
//         const doge = document.createElement("div");
//         const dogeImg = document.createElement("img");
//         dogeImg.classList.add("img-style");
//         dogeImg.setAttribute("src", dogeSrc);
//         doge.appendChild(dogeImg);

//         const dogeText = document.createElement("h2");
//         dogeText.innerHTML = "Doge";
//         doge.appendChild(dogeText);

//         const dogePrice = document.createElement("h3");
//         dogePrice.innerHTML = `${key[1].USD}`;
//         doge.appendChild(dogePrice);
//         cryptoPage.appendChild(doge);
//         //console.log(`${coinData[key]}`);
//         break;
//       case "eth":
//         let ethSrc = `../images/svg/ethereum-eth-logo.svg`;
//         const eth = document.createElement("div");
//         const ethImg = document.createElement("img");
//         ethImg.classList.add("img-style");
//         ethImg.setAttribute("src", ethSrc);
//         eth.appendChild(ethImg);

//         const ethText = document.createElement("h2");
//         ethText.innerHTML = "Etherium";
//         eth.appendChild(ethText);
//         const ethPrice = document.createElement("h3");
//         ethPrice.innerHTML = `${key[1].USD}`;
//         eth.appendChild(ethPrice);
//         cryptoPage.appendChild(eth);
//         //console.log(`${coinData[key]}`);
//         break;
//       case "usdt":
//         let usdtSrc = `../images/svg/tether-usdt-logo.svg`;
//         const usdt = document.createElement("div");
//         const usdtImg = document.createElement("img");
//         usdtImg.classList.add("img-style");
//         usdtImg.setAttribute("src", usdtSrc);
//         usdt.appendChild(usdtImg);

//         const usdtText = document.createElement("h2");
//         usdtText.innerHTML = "Tether";
//         usdt.appendChild(usdtText);
//         const usdtPrice = document.createElement("h3");
//         usdtPrice.innerHTML = `${key[1].USD}.00`;
//         usdt.appendChild(usdtPrice);
//         cryptoPage.appendChild(usdt);
//         //console.log(`${coinData[key]}`);
//         break;
//       //
//       case "xrp":
//         let xrpSrc = `../images/svg/xrp-xrp-logo.svg`;
//         const xrp = document.createElement("div");
//         const xrpImg = document.createElement("img");
//         xrpImg.classList.add("img-style");
//         xrpImg.setAttribute("src", xrpSrc);
//         xrp.appendChild(xrpImg);

//         const xrpText = document.createElement("h2");
//         xrpText.innerHTML = "Ripple";
//         xrp.appendChild(xrpText);
//         const xrpPrice = document.createElement("h3");
//         xrpPrice.innerHTML = `${key[1].USD}`;
//         xrp.appendChild(xrpPrice);
//         cryptoPage.appendChild(xrp);
//         //console.log(`${coinData[key]}`);
//         break;

//       case "trx":
//         let trxSrc = `../images/svg/tron-trx-logo.svg`;
//         const trx = document.createElement("div");
//         const trxImg = document.createElement("img");
//         trxImg.classList.add("img-style");
//         trxImg.setAttribute("src", trxSrc);
//         trx.appendChild(trxImg);

//         const trxText = document.createElement("h2");
//         trxText.innerHTML = "Tron";
//         trx.appendChild(trxText);

//         const trxPrice = document.createElement("h3");
//         trxPrice.innerHTML = `${key[1].USD}`;
//         trx.appendChild(trxPrice);
//         cryptoPage.appendChild(trx);
//         // console.log(`${coinData[key]}`);
//         break;

//       case "vet":
//         let vetSrc = `../images/svg/vechain-vet-logo.svg`;
//         const vet = document.createElement("div");
//         const vetImg = document.createElement("img");
//         vetImg.classList.add("img-style");
//         vetImg.setAttribute("src", vetSrc);
//         vet.appendChild(vetImg);

//         const vetText = document.createElement("h2");
//         vetText.innerHTML = "veChain";
//         vet.appendChild(vetText);
//         const vetPrice = document.createElement("h3");
//         vetPrice.innerHTML = `${key[1].USD}`;
//         vet.appendChild(vetPrice);
//         cryptoPage.appendChild(vet);
//         //console.log(`${coinData[key]}`);
//         break;
//       default:
//         console.log("this is a coin");
//     }
//   });
// Object.values(coinData).forEach(coin => console.log(coin))
// for(const [key, value] of Object.entries(coinData)){
//      let key  =`${key}`;
//         console.log(`${key}`);
//         // const key = `${key}`;
//         // console.log(key)
//     }
// };
// const coinData = data.rates;
// const keys = Object.entries(coinData);
// console.log(keys)
// const display = keys.forEach(([key value]) =>  {
//     console.log(`${key} :${key[value]}`)
// });

// const coinData = data.rates;
// looping over object using for ..in
// for(const key in coinData){
//     console.log(`${key} :${coinData[key]}`)
// }

//Object.keys takes object as argument and returns array containing all the properties in the object.
// const keys = Object.keys(coinData);
// console.log(keys)
//     keys.forEach((key, index) =>  {
//     console.log(`${key} : ${coinData[key]}`)
//     })

//Object.Values takes an Object  and returns array containing the values of all the properties in the object.
// const keys = Object.values(coinData).forEach(coin => console.log(coin));
// console.log(keys)
//Object.entries takes an Object traverses over it and produces an array fo an array .
// each inner array contain two elements Object and value;.
// const keys = Object.entries(coinData);
// console.log(keys);

// for(const [key, value] of Object.entries(coinData)){
//     console.log(`${key} : ${coinData[key]}`);
// }

// const cryptoNames = [];
// const cryptoPrices =[]
// Object.entries(coinData).forEach(([key,value]) =>   {
//     // console.log(`${key} : ${coinData[key]}`);
//     const names= `${key}`;
//     const price= `${value}`;
//     cryptoNames.push(names);
//     cryptoPrices.push(price);
//
// })
// console.log(cryptoNames);
// console.log(cryptoPrices);

// cryptoData();

// cryptoData().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// });

// import cryptoData from "/api";
//
// const cyptoSpace = document.querySelector('.crypto__data');
// const data = cryptoData()
// data.then(data  => {
//     console.log(data)
// } );
