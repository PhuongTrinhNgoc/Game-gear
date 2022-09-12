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

$('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  })

  // let myPR =[
  //   {price:1980000}
  // ]

  function innerpr(e){
    let pr = 1980000;
    const inputPR = document.querySelector('.input-qty')
    const newPR = document.querySelector('.price-end');
  //  console.log(inputPR.value)
    newPR.innerHTML = inputPR.value * pr
  }
  // function innerpr1(event){
  //   let pr = 1980000;
  //   const inputPR = document.querySelector('.input-qty')
  //   const newPR = document.querySelector('.price-end');
  //  console.log(inputPR.value)
  //   newPR.innerHTML = inputPR.value
  // }