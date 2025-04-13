// Calculator Script Start => 

const wordsChangeInt = document.getElementById('box-inner');
const totalNumber = document.querySelector('#totalNumber')
const btnAc = document.querySelector('.btn-ac')
const btnDe = document.querySelector('.btn-de')
const btnPercentage = document.querySelector('.btn-percent')
const btnSlash = document.querySelector('.btn-slash')
const btnSeven = document.querySelector('.btn-seven')
const btnEight = document.querySelector('.btn-eight')
const btnNine = document.querySelector('.btn-nine')
const btnMultiply = document.querySelector('.btn-multiply')
const btnFour = document.querySelector('.btn-four')
const btnFive = document.querySelector('.btn-five')
const btnSix = document.querySelector('.btn-six')
const btnSubtract = document.querySelector('.btn-subtract')
const btnOne = document.querySelector('.btn-one')
const btnTwo = document.querySelector('.btn-two')
const btnThree = document.querySelector('.btn-three')
const btnAdd = document.querySelector('.btn-add')
const btnDoubleZero = document.querySelector('.btn-doubleZero')
const btnZero = document.querySelector('.btn-zero')
const btnDot = document.querySelector('.btn-dot')
const btnOutput = document.querySelector('.btn-equalto')


btnAc.addEventListener('click', function () {
    totalNumber.value = "";
})

btnDe.addEventListener('click', function () {
    totalNumber.value = totalNumber.value.slice(0, -1);
})



btnPercentage.addEventListener('click' , function() {
    totalNumber.value += "%"
})

btnSlash.addEventListener('click' , function() {
    totalNumber.value += "/"
})

//////////////////////////////////////////////////

btnSeven.addEventListener('click' , function() {
    totalNumber.value += "7"
})

btnEight.addEventListener('click' , function() {
    totalNumber.value += "8"
})

btnNine.addEventListener('click' , function() {
    totalNumber.value += "9"
})

btnMultiply.addEventListener('click' , function() {
    totalNumber.value += "*"
})

///////////////////////////////////////////////////

btnFour.addEventListener('click' , function() {
    totalNumber.value += "4"
})

btnFive.addEventListener('click' , function() {
    totalNumber.value += "5"
})

btnSix.addEventListener('click' , function() {
    totalNumber.value += "6"
})

btnSubtract.addEventListener('click' , function() {
    totalNumber.value += "-"
})

////////////////////////////////////////////////////

btnOne.addEventListener('click' , function() {
    totalNumber.value += "1"
})

btnTwo.addEventListener('click' , function() {
    totalNumber.value += "2"
})

btnThree.addEventListener('click' , function() {
    totalNumber.value += "3"
})

btnAdd.addEventListener('click' , function() {
    totalNumber.value += "+"
})

////////////////////////////////////////////////////


btnDoubleZero.addEventListener('click' , function() {
    totalNumber.value += "00"
})

btnZero.addEventListener('click' , function() {
    totalNumber.value += "0"
})

btnDot.addEventListener('click' , function() {
    totalNumber.value += "."
})


// Total input
btnOutput.addEventListener('click', function() {
    totalNumber.value = eval(totalNumber.value)
})








// mouse move animation js start 

// const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");

// window.addEventListener("mousemove", function (e) {
//     const posX = e.clientX;
//     const posY = e.clientY;

//     cursorDot.style.left = `${posX}px`;
//     cursorOutline.style.top = `${posY}px`;

//    cursorOutline.animate({
//     left: `${posX}px`,
//     top: `${posY}px`
//    }, {duration: 500, fill: "forwards"})
// })

// mouse move animation js end
