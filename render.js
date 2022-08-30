const elsu = document.getElementById('navbar');
var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    elsu.style.top = "0"
  } else {
    elsu.style.top = "-71px"
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

const myItem = [
  {
    id: 1,
    name: "Máy Chơi Game PlayStation®5",
    img: "./img-gamegear/item-1.png",
    price: "1.850.000",
    sold:102
},
  {
    id: 2,
    name: "áy Chơi 2,ame PlayStation®4",
    img: "./img-gamegear/item-2.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 3,
    name: "máy Chơi3,Game PlayStation®5",
    img: "./img-gamegear/item-3.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 4,
    name: "console14",
    img: "./img-gamegear/item-4.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 5,
    name: "console15",
    img: "./img-gamegear/item6.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 6,
    name: "console16",
    img: "./img-gamegear/item7.png",
    price: "1.900.000",
    sold:102
},

  {
    id: 7,
    name: "console17",
    img: "./img-gamegear/item8.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 8,
    name: "console18",
    img: "./img-gamegear/item9.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 9,
    name: "console19",
    img: "./img-gamegear/item10.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 10,
    name: "console10",
    img: "./img-gamegear/item11.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 11,
    name: "console11",
    img: "./img-gamegear/item12.png",
    price: "1.900.000",
    sold:102
},
  {
    id: 12,
    name: "console12",
    img: "./img-gamegear/sale-1.png",
    price: "1.900.000",
    sold:102
},
  
];

const myItem2 = [
    {
        id: 13,
        name: "console13",
        img: "./img-gamegear/hot.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 14,
        name: "console14",
        img: "./img-gamegear/hot1.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 15,
        name: "console15",
        img: "./img-gamegear/hot2.png",
        price: "1.900.000",
        sold:102
    },
    
      {
        id: 16,
        name: "máy chơi game1",
        img: "./img-gamegear/hot3.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 17,
        name: "console17",
        img: "./img-gamegear/hot6.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 18,
        name: "console18",
        img: "./img-gamegear/hot7.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 19,
        name: "máy chơi game",
        img: "./img-gamegear/hot9.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 20,
        name: "console20",
        img: "./img-gamegear/hot10.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 21,
        name: "console21",
        img: "./img-gamegear/hot11.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 22,
        name: "console22",
        img: "./img-gamegear/hot.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 23,
        name: "console23",
        img: "./img-gamegear/hot.png",
        price: "1.900.000",
        sold:102
    },
      {
        id: 24,
        name: "console24",
        img: "./img-gamegear/hot.png",
        price: "1.900.000",
        sold:102
    },
]


const mainRender = document.querySelector("#main-item");

function render() {
  let outPut = "";
  outPut += myItem
    .map(
      (a) =>
        `
    
        <a href="./chi-tiet-sp.html"  class=" col-xl-2 col-sm-4 col-6 col-md-3 main-item-class main-item-class${a.id}">
        <div class=">
tem-s">
                <div class="main-img">
            <img class="img-item" src="${a.img}">
            </div>
            <div class="p-name"> ${a.name}</div>
            <div class="main-dow">
                <div class="all-star"
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>


                  </div>
            <p class="sold-cl">(${a.sold})</p>

            </div>
            <div class="block">
            <div id="item">
              <div id="highlight"></div>
              <h6>${a.price}</h6>
            </div>
          </div>
            
        </div>
    </a>
    `
    )
    .join(",")
    .replaceAll(/,/g, "");
  mainRender.innerHTML = outPut;
}
render();



function showModaItem(event){
    const inPut = document.querySelector(".form-control") 
    const filter = myItem.filter(a=>a.name.toLocaleLowerCase().includes(inPut.value.toLocaleLowerCase()))
  
    document.querySelector("#main-item").innerHTML = filter.map(
      (a) =>
        `
    
        <a href="./chi-tiet-sp.html"  class=" col-xl-2 col-sm-4 col-6 col-md-3 main-item-class main-item-class${a.id}">
        <div class=">
tem-s">
                <div class="main-img">
            <img class="img-item" src="${a.img}">
            </div>
            <div class="p-name"> ${a.name}</div>
            <div class="main-dow">
                <div class="all-star"
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>


                  </div>
            <p class="sold-cl">(${a.sold})</p>

            </div>
            <div class="block">
            <div id="item">
              <div id="highlight"></div>
              <h6>${a.price}</h6>
            </div>
          </div>
            
        </div>
    </a>
    `
    )
    .join(",")
    .replaceAll(/,/g, "")
    // console.log(filter)
}


const mainRender2 = document.querySelector("#main-item-2");

function render2() {
  let outPut = "";
  outPut += myItem2
    .map(
      (a) =>
        `
    
        <a href="./chi-tiet-sp.html"  class=" col-xl-2 col-sm-4 col-6 col-md-3 main-item-class main-item-class${a.id}">
        <div class=">
tem-s">
                <div class="main-img">
            <img class="img-item" src="${a.img}">
            </div>
            <div class="p-name"> ${a.name}</div>
            <div class="main-dow">
                <div class="all-star"
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>


                  </div>
            <p class="sold-cl">(${a.sold})</p>

            </div>
            <div class="block">
            <div id="item">
              <div id="highlight"></div>
              <h6>${a.price}</h6>
            </div>
          </div>
            
        </div>
    </a>
    `
    )
    .join(",")
    .replaceAll(/,/g, "");
  mainRender2.innerHTML = outPut;
}
render2();



function showModaItem2(event){
    const inPut = document.querySelector(".form-control") 
    const filter = myItem2.filter(a=>a.name.toLocaleLowerCase().includes(inPut.value.toLocaleLowerCase()))
  
    document.querySelector("#main-item").innerHTML = filter.map(
      (a) =>
        `
    
        <div href="./chi-tiet-sp.html"  class=" col-xl-2 col-6 col-md-3 main-item-class main-item-class${a.id}">
        <a class=">
tem-s">
                <div class="main-img">
            <img class="img-item" src="${a.img}">
            </div>
            <div class="p-name"> ${a.name}</div>
            <div class="main-dow">
                <div class="all-star"
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>


                  </div>
            <p class="sold-cl">(${a.sold})</p>

            <div class="block">
            <div id="item">
              <div id="highlight"></div>
              <h6>${a.price}</h6>
            </div>
          </div>
            
        </a>
    </div>
    `
    )
    .join(",")
    .replaceAll(/,/g, "")
    document.querySelector("#main-item").innerHTML = filter.map(
      (a) =>
        `
    
        <div href="./chi-tiet-sp.html"  class=" col-xl-2 col-6 col-md-3 main-item-class main-item-class${a.id}">
        <a class=">
tem-s">
                <div class="main-img">
            <img class="img-item" src="${a.img}">
            </div>
            <div class="p-name"> ${a.name}</div>
            <div class="main-dow">
                <div class="all-star"
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>
                <i class="fa-solid fa-star all-icon-star"></i>


                  </div>
            <p class="sold-cl">(${a.sold})</p>

            <div class="block">
            <div id="item">
              <div id="highlight"></div>
              <h6>${a.price}</h6>
            </div>
          </div>
            
        </a>
    </div>
    `
    )
    .join(",")
    .replaceAll(/,/g, "")
    
}