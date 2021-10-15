const menu = [
  { 
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//create buttons 
const All = document.createElement('BUTTON')
const Korea =  document.createElement('BUTTON')
const Japan = document.createElement('BUTTON')
const China = document.createElement('BUTTON')

let btnDiv = document.querySelector('.btn-container')
let sectionCenter = document.querySelector('.section-center')
sectionCenter.classList.add('row')


All.addEventListener('click',()=>{
  sectionCenter.innerHTML=''
  menu.forEach(addItem)
})

Korea.addEventListener('click',()=>{
  sectionCenter.innerHTML=''
  menu.filter((value)=>{
    return value.category==`Korea`
  }).forEach(addItem)
})

Japan.addEventListener('click',()=>{
  sectionCenter.innerHTML=''
  menu.filter((value)=>{
    return value.category==`Japan`
  }).forEach(addItem)
})
China.addEventListener('click',()=>{
  sectionCenter.innerHTML=''
  menu.filter((value)=>{
    return value.category==`China`
  }).forEach(addItem)
})



All.innerHTML = 'All'
Korea.innerHTML = 'Korea'
Japan.innerHTML = 'Japan'
China.innerHTML = 'China'

const buttonArray = [All, Korea, Japan, China]



buttonArray.forEach (element => {
  //append each button
  element.classList.add('btn', 'btn-outline-dark', 'btn-item')
  btnDiv.append(element)
})

// create elements & append
const addItem = (element) => {
  // create element for each menu item
  let img = document.createElement('IMG')
  let menuInfoDIV = document.createElement('DIV')
  let menuTitleDIV = document.createElement('DIV')
  let title = document.createElement('H4')
  let price = document.createElement('H4')
  let desc = document.createElement('DIV')
  let menuItems = document.createElement('DIV')
  
  const elementInfo = [img, menuInfoDIV, title, price, desc]
  
  // set attribute
  img.setAttribute('src', `${element.img}`)
  img.setAttribute('alt', `${element.title}`)
  img.setAttribute('class', 'photo')
  title.innerHTML = element.title
  price.innerHTML = element.price
  desc.innerHTML = element.desc
  
  // add class & append each one
  menuItems.classList.add('menu-items', 'col-lg-6', 'col-sm-12')
  menuInfoDIV.classList.add('menu-info')
  menuTitleDIV.classList.add('menu-title')
  price.classList.add('price')
  desc.classList.add('menu-text')
  menuTitleDIV.append(title, price)
  menuInfoDIV.append(menuTitleDIV, desc)
  
  menuItems.append(img, menuInfoDIV)
  sectionCenter.append(menuItems)
}

menu.forEach(addItem)




