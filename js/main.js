const elMovieList = document.querySelector('.movie__list')
const elCartoonList = document.querySelector('.cartoon__list')
let n=Math.floor( Math.random()*movies.length-60)+1
console.log(n);
for (let i = n; i < n+30; i+=2) {
                let li = document.createElement("li");
                li.className = 'movie__items'
                li.innerHTML = `<div class="movie__img-wrapper">
                      <img src="${movies[i].youtubePoster}" alt="" class="movie__img">
                      <button><i class="bx bxs-heart"></i></button>

                    </div>
                    <h2 class="movie__name">${movies[i].title}</h2>
                    <div class="movie__about d-flex">
                      <p class="movie__star"><i class="bx bx-star"></i> ${movies[i].imdbRating}</p>
                      <p class="movie__year"><i class='bx bxs-calendar'></i> ${movies[i].year}</p>
                      <p class="movie__time"><i class="bx bxs-watch"></i> ${movies[i].runtime} min</p>
                    </div>
                    <p class="movie__categ">${movies[i].categories}</p>
`
                    elMovieList.appendChild(li)
        }
        let NeWArr = []
movies.forEach((item)=>{
  for (let i = 0; i < item.categories.length; i++) {
    if (item.categories[i] == "Animation") {
        NeWArr.push(item)

    }
  }
})
let p = Math.floor(Math.random() * NeWArr.length - 60) + 1

for (let k = p; k < p+30; k++) {
  let li = document.createElement("li");
  li.className = 'movie__items'
  li.innerHTML = `<div class="movie__img-wrapper">
                      <img src="${NeWArr[k].youtubePoster}" alt="" class="movie__img">
                      <button id="addWish"><i class="bx bxs-heart"></i></button>

                    </div>
                    <h2 class="movie__name">${NeWArr[k].title}</h2>
                    <div class="movie__about d-flex">
                      <p class="movie__star"><i class="bx bx-star"></i> ${NeWArr[k].imdbRating}</p>
                      <p class="movie__year"><i class='bx bxs-calendar'></i> ${NeWArr[k].year}</p>
                      <p class="movie__time"><i class="bx bxs-watch"></i> ${NeWArr[k].runtime} min</p>
                    </div>
                    <p class="movie__categ">${NeWArr[k].categories}</p>
`
  elCartoonList.appendChild(li)
}

let imgs = document.getElementById('imgs');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');


let img = document.querySelectorAll('#imgs li');

let idx = 0;

function changeImg() {
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1
  }
  imgs.style.transform = `translateX(${-idx * 330}px)`
}

rightBtn.addEventListener('click', function change() {
  idx++;
  resetInter();
  changeImg()
})
leftBtn.addEventListener('click', function change() {
  idx--;
  resetInter();
  changeImg()
})

let interval = setInterval(run, 10000);

function run() {
    idx++;

    changeImg();
}

function resetInter() {
    clearInterval(interval);

     interval = setInterval(run, 10000);

}



//--------------------------------
let cartoon = document.getElementById('cartoon');
let leftcartBtn = document.getElementById('left-cart');
let rightCartBtn = document.getElementById('right-cart');


let cart = document.querySelectorAll('#cartoon li');

let idxen = 0;

function changecart() {
  if (idxen > cart.length - 1) {
    idxen = 0
  } else if (idxen < 0) {
    idxen = cart.length - 1
  }
  cartoon.style.transform = `translateX(${-idxen * 330}px)`
}

rightCartBtn.addEventListener('click', function change() {
  idxen++;
  resetInten();
  changecart()
})
leftcartBtn.addEventListener('click', function change() {
  idxen--;
  resetInten();
  changecart()
})

let intenval = setInterval(run, 10000);

function run() {
  idxen++;

  changecart();
}

function resetInten() {
  clearInterval(intenval);

  intenval = setInterval(run, 10000);

}

const elModal = document.querySelectorAll('.movie__items');
let elMovie = document.querySelector('.modal-movie') ;



elModal.forEach((item)=>{
  item.addEventListener('click', ()=>{
    let offcan = []
   let num = item.children
   movies.forEach((it)=>{
     if (it.title==num[1].textContent)  {
        elMovie.innerHTML = `<div class="modal-movie__box">
      <div class="modal__header">
        <button class="modal__close" id="close"><i class="bx bx-x"></i></button>
      </div>
      <div class="modal__items d-flex">
        <a href="${it.imdbPage}" class="modal__video"><img src="${it.youtubePoster}" alt="img"></a>
        <div class="modal__wrapper">
          <div class="movie__about d-flex modal-about">
                      <p class="movie__star"><i class="bx bx-star"></i>${it.imdbRating}</p>
                      <p class="movie__year"><i class='bx bxs-calendar'></i>${it.year}</p>
                      <p class="movie__time"><i class="bx bxs-watch"></i> ${it.runtime} min</p>
                    </div>
                    <div class="modal__summary">
                      <p class="modal__text">${it.summary}</p>
                    </div>
                    <button id="adWish" >Wishlist</button>        
        </div>
      </div>
    </div>`
        elMovie.classList.add('top-m')
        const aLLaddWish = document.querySelector("#adWish")
        let offbody = document.querySelector(".offcanvas-body")
        let btnAdd = document.querySelector("#addWish")
        aLLaddWish.addEventListener('click',()=>{
          offcan.push(it)
          offcan.forEach((el)=>{
            let dil = document.createElement('div')
            dil.className ='offcan-movie offcan'
            dil.innerHTML =`<div class="offcan__img-wrapper">
          <img src="${el.youtubePoster}" alt="" class="offcan__img">
        </div>
        <div class="offcan__inner">
          <h2 class="movie__name">${el.title}</h2>
                    <div class="movie__about d-flex">
                      <p class="movie__star"><i class="bx bx-star"></i>${el.imdbRating}</p>
                      <p class="movie__year"><i class='bx bxs-calendar'></i>${el.year}</p>
                      <p class="movie__time"><i class="bx bxs-watch"></i>${el.runtime} min</p>
                    </div>
                    <p class="movie__categ">${el.categories}</p>
        </div>`
        offbody.appendChild(dil)
        btnAdd.classList.add("hovep")

          })
        })
      }
    })
    const btnClose = document.getElementById('close')
    btnClose.addEventListener('click',()=>{
      elMovie.classList.remove('top-m')
    })
  })
  
})




