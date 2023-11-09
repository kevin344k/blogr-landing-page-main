const ico_menu=document.querySelector(".ico_hamburger")
const menu_list=document.querySelector(".nav-list")

const items_product=document.querySelector(".list-product--product-head")
const ul_product=document.querySelector(".ul-product")
const arrow_product=document.querySelector(".arrow-product")

const items_company=document.querySelector(".list-company--company-head")
const ul_company=document.querySelector(".ul-company")
const arrow_company=document.querySelector(".arrow-company")

const items_connect=document.querySelector(".list-connect--connect-head")
const ul_connect=document.querySelector(".ul-connect")
const arrow_connect=document.querySelector(".arrow-connect")



ico_menu.addEventListener("click",()=>{
    ico_menu.classList.toggle("close-hamburger")
    menu_list.classList.toggle("show");
    menu_list.classList.add("animate__animated","animate__fadeInDown")
})
items_product.addEventListener("click",()=>{
    ul_product.classList.toggle("show");
    arrow_product.classList.toggle("arrow-click")
    ul_company.classList.remove("show");
    ul_connect.classList.remove("show");
})

items_company.addEventListener("click",()=>{
    ul_company.classList.toggle("show");
    arrow_company.classList.toggle("arrow-click")
    ul_product.classList.remove("show");
    ul_connect.classList.remove("show");


})
items_connect.addEventListener("click",()=>{
    ul_connect.classList.toggle("show");
    arrow_connect.classList.toggle("arrow-click")

    ul_product.classList.remove("show");
    ul_company.classList.remove("show");
})