var massiv = ["li-1", "li-2", "li-3", "li-4", "li-5", "li-6", "li-7"];
var arr = [
  "production-right_1",
  "production-right_2",
  "production-right_3",
  "production-right_4",
  "production-right_5",
  "production-right_6",
  "production-right_7",
];
var arr_1 = [
  "yellow-dot_1",
  "yellow-dot_2",
  "yellow-dot_3",
  "yellow-dot_4",
  "yellow-dot_5",
  "yellow-dot_6",
  "yellow-dot_7",
];
let bool = true;
var text = "production-right_1";
var text_1 = "yellow-dot_1";
var ClassName_1 = "yellow-dot";
const z = document.querySelectorAll("production-list_li");
var text_2 = document.querySelectorAll("production-list_li");
const headerWidthExpand = document.querySelector(".contain");
const headerBigImgAnimation = document.querySelector(".header_img");
const headerMenuFirst = document.querySelector(".header_ul-li");
const productionSelect = document.querySelector(".production-select");
const productionSelectUl = document.querySelector(".production-select-menu");
const productinInnerTitle = document.querySelector(".select-title");
const productionSelectTitleRotate = document.querySelector(".rotate");
const mobileHeaderButton = document.querySelector(".button-mobile");
const menuHeaderMobile = document.querySelector(".open-menu");
const lineMenu_1 = document.querySelector(".line-menu-1");
const lineMenu_2 = document.querySelector(".line-menu-2");
const lineMenu_3 = document.querySelector(".line-menu-3");
const buttonMobileTitle = document.querySelector(".button-mobile-title");
const MainContent = document.querySelector(".contain");
const openMenuElemList = document.querySelector(".open-menu-elem-list");
const openMenuElem = document.querySelectorAll(".open-menu-elem")[0];
const buttonMobile = document.querySelector(".button-mobile");
var privs = 0;
let previus = 1;
const MenuTop = document.querySelector(".header_under-menu");
document.addEventListener("click", function (e) {
  var exam = massiv.indexOf(e.target.id);
  if (exam != -1) {
    if (arr[exam] != text) {
      document.getElementsByClassName(text)[0].style.display = "none";
      document.getElementsByClassName(arr[exam])[0].style.display = "block";
      document.getElementsByClassName(text_1)[0].style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.getElementsByClassName(arr_1[exam])[0].style.backgroundColor =
        "yellow ";
      document
        .getElementsByClassName("production-list_li")
        [privs].classList.remove("production-li_active");
      document
        .getElementsByClassName("production-list_li")
        [exam].classList.add("production-li_active");
      console.log(z.classList);
      text_1 = arr_1[exam];
      text = arr[exam];
      privs = exam;
    }
  }
});
headerMenuFirst.addEventListener("click", function (e) {
  MenuTop.classList.toggle("header_under-menu-anim");
  headerWidthExpand.classList.toggle("contain-anim");
  headerBigImgAnimation.classList.toggle("opacity-anim");
});
productionSelect.addEventListener("click", function (e) {
  productionSelect.classList.toggle("production-select-anim");
  productionSelectUl.classList.toggle("production-select-menu-anim");
  productionSelectTitleRotate.classList.toggle("rotate-anim");
});
function productionModileInner(textForReplace, b) {
  productinInnerTitle.innerText = textForReplace;
  document.querySelector(`.production-right_${previus}`).style.display = "none";
  document.querySelector(`.production-right_${b}`).style.display = "block";
  previus = b;
  productionSelectUl.classList.remove("production-select-menu-anim");
}
function mobileMenuAnimation() {
  menuHeaderMobile.classList.toggle("open-menu_true");
  lineMenu_1.classList.toggle("line-menu-1-anim");
  lineMenu_2.classList.toggle("line-menu-2-anim");
  lineMenu_3.classList.toggle("line-menu-3-anim");
  buttonMobileTitle.classList.toggle("button-title-anim");
  // MainContent.classList.toggle('ds-none');
  buttonMobile.classList.toggle("fixed-position");
}
function OpenMenuList(a) {
  openMenuElemList.classList.toggle("open-menu-list-anim");
}
