const elsu = document.getElementById("navbar");
var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener("wheel", checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    elsu.style.top = "0";
  } else {
    elsu.style.top = "-71px";
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
    price: "1.850.000đ",
    sold:102
},
  {
    id: 2,
    name: "Máy Chơi Game PlayStation®4",
    img: "./img-gamegear/item-2.png",
    price: "1.600.000đ",
    sold:89
},
  {
    id: 3,
    name: "Máy Chơi Game PlayStation®3",
    img: "./img-gamegear/item-3.png",
    price: "1.750.000đ",
    sold:42
},
  {
    id: 4,
    name: "Tay Cầm Chơi Game Bluetooth iPega PG-9076 Dành Cho PS3,",
    img: "./img-gamegear/item-4.png",
    price: "800.000đ",
    sold:37
},
  {
    id: 5,
    name: "Tay cầm chơi game console không dây Logitech F710",
    img: "./img-gamegear/item6.png",
    price: "950.000đ",
    sold:24
},
  {
    id: 6,
    name: "Tay Cầm Chơi Game Xbox 360 - Trắng",
    img: "./img-gamegear/item7.png",
    price: "1.120.000đ",
    sold:41
},

  {
    id: 7,
    name: "Gamepad chơi game Không dây Bluetooth Xbox One S",
    img: "./img-gamegear/item8.png",
    price: "1.500.000đ",
    sold:44
},
  {
    id: 8,
    name: "Máy chơi game cầm tay RS-8 2,5 inch tích hợp",
    img: "./img-gamegear/item9.png",
    price: "500.000đ",
    sold:55
},
  {
    id: 9,
    name: "Máy game huyền thoại cầm tay Brick Game - màu giao ngẫu nhiên",
    img: "./img-gamegear/item10.png",
    price: "200.000đ",
    sold:88
},
  {
    id: 10,
    name: "Gamepad X360 USB cho máy tính",
    img: "./img-gamegear/item11.png",
    price: "250.000đ",
    sold:188
},
  {
    id: 11,
    name: "Máy chơi game tích hợp 600 trò chơi cổ điển",
    img: "./img-gamegear/item12.png",
    price: "336.000đ",
    sold:12
},
  {
    id: 12,
    name: "Gamepad khônd dây wireless + OTG cho máy tính - Android - Smart TV",
    img: "./img-gamegear/sale-1.png",
    price: "190.000đ",
    sold:107
},

  {
    id: 13,
    name: "Quạt Tản Nhiệt MT-7",
    img: "./img-gamegear/hot.png",
    price: "430.000đ",
    sold:19
},
  {
    id: 14,
    name: "Chuột G-black",
    img: "./img-gamegear/hot1.png",
    price: "360.000đ",
    sold:102
},
  {
    id: 15,
    name: "Chuột LX-17",
    img: "./img-gamegear/hot2.png",
    price: "700.000đ",
    sold:12
},

  {
    id: 16,
    name: "Tai Nghe GT-1",
    img: "./img-gamegear/hot3.png",
    price: "1.300.000đ",
    sold:10
},
  {
    id: 17,
    name: "Bộ Điều Khiển Đua Xe",
    img: "./img-gamegear/hot6.png",
    price: "1.300.000đ",
    sold:17
},
  {
    id: 18,
    name: "Ổ Cứng 1T",
    img: "./img-gamegear/hot7.png",
    price: "1.900.000đ",
    sold:12
},
  {
    id: 19,
    name: "Bộ SẠc PS",
    img: "./img-gamegear/hot9.png",
    price: "400.000đ",
    sold:10
},
  {
    id: 20,
    name: "Màn Hình GamingGaming G-sync",
    img: "./img-gamegear/hot10.png",
    price: "7.400.000đ",
    sold:13
},
  {
    id: 21,
    name: "Bộ Điều Khiển Cho Điện Thoại",
    img: "./img-gamegear/hot11.png",
    price: "300.000đ",
    sold:2
},
  {
    id: 22,
    name: "Bộ Điều Khiển Cho Điện Thoại",
    img: "./img-gamegear/hot.png",
    price: "300.000đ",
    sold:102
},
  {
    id: 23,
    name: "camera MS-7",
    img: "./img-gamegear/fix-1.png",
    price: "1.650.000đ",
    sold:102
},
  {
    id: 24,
    name: "Phụ Kiện conso-8",
    img: "./img-gamegear/fix-2.png",
    price: "550.000đ",
    sold:15
},
];

const mainRender = document.querySelector("#main-search-1");

function render() {
  let outPut = "";
  outPut += myItem
    .map(
      (a) =>
        `
    
        <a href="chi-tiet-sp.html" class=" col-xl-3 col-6 col-md-3 main-item-class main-item-class${a.id}">
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
            <h6 class="h6-price">${a.price}đ</h6>

            
        </div>
    </a>
    `
    )
    .join(",")
    .replaceAll(/,/g, "");
  mainRender.innerHTML = outPut;
}
render();


let rearch;

function showModaItem(event) {
  
  const noneDiv = document.querySelector('.rs-show')
  const showDiv = document.querySelector('.reserach')
  const textS = document.querySelector('.text-s')
  const elShow = document.querySelector('.soluong');
  const inPut = document.querySelector(".form-control");
  const filter = myItem.filter((a) =>
    a.name.toLocaleLowerCase().includes(inPut.value.toLocaleLowerCase())
  );

  document.querySelector("#main-search-1").innerHTML = filter.map((a) =>
        `
        <a href="./chi-tiet-sp.html" class=" col-xl-3 col-6 col-md-3 main-item-class main-item-class${a.id}">
        <div class="tem-s">
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
            <h6 class="h6-price">${a.price}đ</h6>

            
        </div>
    </a>
    `
    )
    .join(",")
    .replaceAll(/,/g, "");
    rearch = filter.length;
    elShow.textContent = `${filter.length}`
    textS.innerHTML = inPut.value
    showDiv.style.display = 'block';
    noneDiv.style.display = 'none'
    document.querySelector("#tab-list").style = 'display: none';
}
