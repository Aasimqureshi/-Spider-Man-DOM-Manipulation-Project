// DOM Selection Methods

// 1: getElementById --

let imgObj = document.getElementById("mainImg");
//for printing the image element
console.log(imgObj); // for printing the image element in a html format
console.dir(imgObj); // for printing the image element in a object format

// printing the src attribute of the image element
console.dir(imgObj.src); // for printing the src attribute of the image element
// printing the tag name of the image element
console.dir(imgObj.tagName); // for printing the tag name of the image element
// changing the tag name of the image element
imgObj.tagName = "ph"; 
console.dir(imgObj.tagName); // for printing the tag name of the image element after changing it to p

// 2: getElementByClassName --

let smallImg = document.getElementsByClassName("oldImg"); // Here there is three img with the same class Name "oldImg" 
// so it will return an HTML collection of all the three images in a object format

console.dir(smallImg); // for printing the HTML collection of all the three images in a object format
// for accessing the individual image element we can use the index of the HTML collection
console.dir(smallImg[0]); // for printing the first image element in a object format

// for printing all the image elements in a html format we can use a for loop
for (let i = 0; i < smallImg.length; i++) {
    console.dir(smallImg[i]); // for printing the image element in a html format
}
 // If we want to print src attribute of all the image elements we can use a for loop with src attribute
for (let i = 0; i < smallImg.length; i++) {
    console.dir(smallImg[i].src); // for printing the src attribute of the image element in a html format
}

// if we want to change the src attribute of all the image elements we can use a for loop 
// with src attribute with the new src value
for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].src = "https://www.pngall.com/wp-content/uploads/5/Spiderman-Face-PNG-Picture.png"; // for changing the src attribute of the image element in
    console.dir(smallImg[i].src); // for printing the src attribute of the image element in a html format after changing it
}

// 3: getElementByTagName --

let AllTags = document.getElementsByTagName("p"); // Here there is three p tags in the html file so it will return an HTML collection of all the three p tags in a object format 
console.dir(AllTags); // for printing the HTML collection of all the three p tags in a object format

// @ Query Selectors

console.dir(document.querySelector("p")); // for printing the first p tag in a html format

console.dir(document.querySelector("h1")); // for printing the first h1 tag in a html format

console.dir(document.querySelector("#description")); // for printing the element with id "description" in a html format

console.dir(document.querySelector(".oldImg")); // for printing the first element with class "oldImg" in a html format

// Nested Selecotors : - Selecting the first <a> tag inside the div 
console.dir(document.querySelector("div a")); // for printing the first a tag inside the div in a html format

// Selecting all the <a> tags inside the div
console.dir(document.querySelectorAll("div a")); // for printing all the <a> tags inside the div in a html format

// Selecting all the <p> tags without nesting
console.dir(document.querySelectorAll("p")); // for printing all the <p> tags in a html format

// - Manipulation of the DOM Elements :- 1 textContent, 2 innerHTML, 3 innerText

console.dir(document.querySelector("p").textContent); // for printing the text content of the p tag in a html format
console.dir(document.querySelector("p").innerHTML); // for printing the inner HTML of the p tag in a html format
console.dir(document.querySelector("p").innerText); // for printing the inner text of the p tag in a html format

// Manipulating the inner text of the p tag
let para = document.querySelector("p");
para.innerText = "Hi, I am Peter Parker";
console.dir(para.innerText); // for printing the new inner text of the p tag in a html format
// if we try to add some boldness with the inner text it will not work 
// because innerText only takes the text content of the element and ignores the HTML tags
para.innerText = "Hi, I am <b>Peter Parker</b>";
console.dir(para.innerText); // Hi, I am <b>Peter Parker</b> 

// Manipulating the inner HTML of the p tag
para.innerHTML = "Hi, I am <b> Peter Parker </b>";
console.dir(para.innerHTML); // for printing the new inner HTML of the p tag in a html format

// If we want to add a underline to the our main headline Spiderman 
let headline = document.querySelector("h1");
console.dir(headline.innerHTML); // for printing the inner HTML of the h1 tag in a html format before changing it
headline.innerHTML = "<u> Spiderman </u>";
console.dir(headline.innerHTML); // for printing the inner HTML of the h1 tag in a html format after changing it


// - Manipulation on the Attributes
// Manipulating the attributes of the DOM elements : - 1 getAttribute, 2 setAttribute

let Iimg = document.querySelector("img");
console.dir(Iimg); // for printing the image element in a html format - mainImg

//using getAttribute method to get the value of the id attribute of the image element
console.dir(Iimg.getAttribute("id")); // for printing the value of the id attribute of the image element in a html format
// id = mainImg
// using setAttribute method to change the value of the id attribute of the image element
Iimg.setAttribute("id", "newImg"); // for changing the value of the id attribute of the image element to newImg
console.dir(Iimg.getAttribute("id")); // for printing the new value of the id attribute of the image element in a html format
// id = newImg

// - Using Style property to manipulate the CSS styles of the DOM elements :- 1 obj.style.property = value

let heading = document.querySelector("h1");
console.dir(heading); // for printing the h1 element in a html format
// changing the color of the h1 element to red
heading.style.color = "red"; // for changing the color of the h1 element to red
//Changing the background color of the h1 element to black
heading.style.backgroundColor = "blue"; // for changing the background color of the h1 element to black

//Changing the colors of the all <a>  tags of box class inside the div to yellow
let links = document.querySelectorAll("div.box a"); // for selecting all the <a> tags of box class inside the div in a html format
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "yellow"; // for changing the color of the <a> tags to yellow
}
// Using for of loop to change the color of <a> tags to purple
for (let link of links) {
    link.style.color = "purple"; // for changing the color of the <a> tags to purple 
}

// - Manipulating the CSS classes of the DOM elements :- 2 Obj.classList

// checking the classes of h1 element
let heading1 = document.querySelector("h1");
console.dir(heading); // for printing the h1 element in a html format
console.dir(heading1.classList);

//checking the classes of img element
let image = document.querySelector("img");
console.dir(image); // for printing the img element in a html format

// 1 Obj.classList.add("className") -- for adding a new class to the element
// adding a new class to the h1 element

heading1.classList.add("green"); // for adding a new class "green" to the h1 element
console.dir(heading1.classList); // for printing the classes of h1 element after adding the new class in a html format
// adding a new class to the h1 element
heading1.classList.add("underline"); // for adding a new class "underline" to the h1 element
console.dir(heading1.classList); // for printing the classes of h1 element after adding the new class in a html format

// 2 Obj.classList.remove("className") -- for removing a class from the element
// removing the class "green" from the h1 element

heading1.classList.remove("green"); // for removing the class "green" from the h1 element
console.dir(heading1.classList); // for printing the classes of h1 element after removing the class in a html format

// 3 Obj.classList.contains("className") -- for checking if the element contains a class or not

console.dir(heading1.classList.contains("green")); // for checking if the h1 element contains the class "green" or not in a html format
console.dir(heading1.classList.contains("underline")); // for checking if the h1 element contains the class "underline" or not in a html format

// we can also add a class to the element BY Using the setAttribute method 
// but it will override the existing classes of the element

// 4 Obj.classList.toggle("className") -- for toggling a class from the element

heading1.classList.toggle("green"); // for toggling the class "green" from the h1 element
console.dir(heading1.classList); // for printing the classes of h1 element after toggling the class in a html format

heading1.classList.toggle("underline"); // for toggling the class "underline" from the h1 element
console.dir(heading1.classList); // for printing the classes of h1 element after toggling the class in a html format

// We are going to set a styling class yellowbg to our div element class of box with yellowbg
let box = document.querySelector(".box");
console.dir(box); // for printing the div element with class box before adding in a html format
box.classList.add("yellowbg"); // for adding a new class "yellowbg" to the div element with class box
console.dir(box); // for printing the div element with class box after adding in a html format

// - Navigation_on_Page_Properties

// 1. ParentElement Property

//Example
let heading4 = document.querySelector("h4");
console.log("Parent of Heading 4 is: ");
console.dir(heading4.parentElement);

// 2. Children Property

//Example
let boxN = document.querySelector(".box");
console.dir(boxN.children);

// ChildElementCount
console.dir(boxN.childElementCount);

// 3. nextElementSibling

let nextE = document.querySelector("h1");
console.dir(nextE.nextElementSibling);

//4. previousElementSibling

let prevE = document.querySelector("img");
console.dir(prevE.previousElementSibling);

// - Adding the element to the page or document

// Step 1 
// Create a new element 

let newP = document.createElement("p");
newP.innerText = "Hi, I am newP: ";
// now this newP is created but not added to the document

// Step 2
// Add it with a tag - 

// - a. appendChild(element)
// adding any newtext/ string/ element on the child element

let body1 = document.querySelector("body");
console.dir(body1.appendChild(newP));

// If we want to this newP inside the div Box
let box1 = document.querySelector(".box");
console.dir(box1.appendChild(newP));

// - b. append(element)
// adding any newtext/ string/ element on the same element

newP.append("this is new text");
// Adding a btn with the newP

let btn = document.createElement("button");
btn.innerText = "Click me!";
newP.append(btn);

// - c. prepend(element)

let newh = document.createElement("p");
newh.innerText = "This is new Heading";
console.dir(box1.prepend(newh));


// - d. insertAdjacent(where, element) where/position

// 1, beforebegin

let btn2 = document.createElement("button");
btn2.innerText = "About me!";

let para1 = document.querySelector("p");
para1.insertAdjacentElement("beforebegin", btn2);

// 2, afterbegin

let btn3 = document.createElement("button");
btn3.innerText = "Start with me in paragraph!";

let para2 = document.querySelector("p");
para2.insertAdjacentElement("afterbegin", btn3);

// 3, beforeend

let btn4 = document.createElement("button");
btn4.innerText = "end with me in paragraph!";

let para3 = document.querySelector("p");
para3.insertAdjacentElement("beforeend", btn4);

// 4, afterend

let btn5 = document.createElement("button");
btn5.innerText = "end with me after paragraph!";

let para4 = document.querySelector("p");
para4.insertAdjacentElement("afterend", btn5);


// - Removing elements from the page

// 1, removeChild(element)
let btn6 = document.createElement("button");
btn6.innerText = "Extra button with paragraph parent to remove as child!";

let para5 = document.querySelector("p");
para5.insertAdjacentElement("afterend", btn6);

//removing this button
console.dir(body1.removeChild(btn6));

// 2, remove(element)
// directly removing the button without refrencing to the parent element

let btn7 = document.createElement("button");
btn7.innerText = "Extra button to be directly remove !";

let para6 = document.querySelector("p");
para6.insertAdjacentElement("afterend", btn7);

//removing this button
console.dir(btn7.remove());

