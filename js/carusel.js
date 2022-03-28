let heroArr = [{
    name: "Thor: Ragnarok",
    imdb: 7.9,
    summary: "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    link: "https://www.imdb.com/title/tt3501632"
},
{
    name: "Kung Fu Panda 3",
    imdb: 7.1,
    summary: "When Po's long-lost panda father suddenly reappears, the reunited duo travels to a secret panda paradise to meet scores of hilarious new panda characters. But when the supernatural villain Kai begins to sweep across China defeating all the kung fu masters.",
    link: "https://www.imdb.com/title/tt2267968"
},
{
    name: "Smurfs: The Lost Village",
    imdb: 5.9,
    summary: "In this fully animated, all-new take on the Smurfs, a mysterious map sets Smurfette and her best friends Brainy, Clumsy and Hefty on an exciting and thrilling race through the Forbidden Forest filled with magical creatures to find a mysterious lost village before the evil wizard Gargamel does. ",
    link: "https://www.imdb.com/title/tt2398241"
},
{
    name: "Steve Jobs",
    imdb: 7.2,
    summary: "His passion and ingenuity have been the driving force behind the digital age. However his drive to revolutionize technology was sacrificial. Ultimately it affected his family life and possibly his health.",
    link: "https://www.imdb.com/title/tt2080374"
}]


let carList = document.querySelector('.carousel-inner')

heroArr.forEach((item,index)=>{
    let carousel = document.createElement("div")
    carousel.className = `carousel-item carusel-${index}`
    carousel.innerHTML = `<div class="header-box">
        <div class="header container d-flex align-items-center justify-content-between">
          <img src="./imgs/logo.svg" alt="logo" class="header__img">
          <form id="form-search">
            <input type="text" placeholder="What do you want to watch?" id="search">
            <i class="bx bx-search"></i>
          </form>
          <button class="heart-box d-flex align-items-center justify-content-center" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="bx bx-heart"></i>
          </button>
        </div>
      </div>

      <div class="hero">
        <h2 class="hero__title mb-3">${item.name}</h2>
        <div class="hero-film__about d-flex align-items-center mb-3">
          <div class="hero__imdb d-flex"><img src="./imgs/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg" alt=""> <p class="hero__imdb-text">${item.imdb} / 10</p></div>
          <div class="hero__rating d-flex align-items-center"> <i class="bx bx-star"></i><span>95%</span></div>
        </div>
        <p class="hero__summary ">${item.summary}</p>
        <a href="${item.link}" class="hero__link"><i class='bx bx-play-circle' ></i>Watch trailer</a>
      </div>`
    carList.appendChild(carousel)
})