// const select = document.getElementsByTagName("img");
// console.log(select);
// select[2].src= "https://cdn.pixabay.com/photo/2022/12/16/12/59/christmas-7659606_640.jpg";
// console.log(select);

// const cssImg = document.getElementsByClassName("css-img");
// cssImg.src ="https://cdn.pixabay.com/photo/2021/12/19/15/25/christmas-balls-6881386__340.jpg";

// const idImg = document.getElementById("cssId");
// console.log(idImg);

// This is how you can select a attribute in js with the help of querySelector
// const cssId = document.querySelector('[alt="html-css-javascript"]');
// cssId.src="https://cdn.pixabay.com/photo/2020/12/26/13/19/christmas-background-5861438__340.jpg"
// console.log(cssId);

// const ulid = document.querySelectorAll('ul li');

// const allImg = document.querySelectorAll("img");

// const allUrls = [
//   "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//   "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFNTfIwpgAz_3wKK_h1V36toE_1X40QtnOsh-3jg8FzojOszQkPlR7gfmyhnaLm5kGos&usqp=CAU",
// ];
// console.log(allImg.length);
// allImg[0].src = allUrls[0];
// for (let i = 0; i < allImg.length; i++) {
//   allImg[i].src = allUrls[i];
// }

// allImg.forEach((image, i) => {
//     image.src = allUrls[i];
// });

// let allImages = [...document.images] //This is how you can change a img collection into an array with the help of spread operator
// allImages.forEach((image, i )=> {
//     image.src = allUrls[i];
// });
// let img = document.querySelectorAll('[alt="html-css-javascript"]')

// const para = document.querySelector('p');

// TODO: getset attribute in js
// const selectAttribute = document.querySelectorAll('[style="background-color: green"]')
// console.log(selectAttribute);

// const customAttribute = document.querySelector('[coder]')
// console.log(customAttribute);

// ocument.querySelector('[coder]').attributes.coder.value
// document.querySelector('[coder]').getAttribute('coder');

// document.querySelector('h1').setAttribute('title','Hello World');  //This is how you can create a attribute in a class which is already defined in the document

// document.querySelector('h1').setAttribute('title','Hello World'); get the attributes

// Style in Dom
// const header = document.querySelector('h1');
// header.style.backgroundColor='red';
// console.log(header);

// const allLinks = document.querySelectorAll("a");
// console.log(allLinks);
// allLinks[0].style.color="red";
// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color="green";

// }

// for (const link of allLinks) {
  // link.style.color="skyblue"
  // link.style.textDecoration='none';

  // link.style.cssText = `
  // color:red;
  // background-color:skyblue;
  // `
//   link.className = 'green-link';
// link.setAttribute('class','green-link')

// link.classList.toggle('green-link');
 
// }


// TODO: Access parent sibling and children in js 
const header = document.querySelector('h1');
// console.log(header.childNodes);
// console.log(header.parentElement);
// console.log([...header.childNodes]);
// console.log(header.nextElementSibling);
// console.log(header.nextElementSibling);
// console.log(header.parentElement);
