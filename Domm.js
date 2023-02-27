 var itemList = document.querySelector('#items');
// ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentElement.parentElement);

    // parentNode.innerhtml = '<li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li>'
    // parentNode.innerhtml = '<li>Hello world</li>' + parentNode.innerhtml;


// //lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Item 4';

// //lastChild
// console.log(item.List.lastChild);

// // //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 4';

// //firstChild
// console.log(itemList.firstChild);

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// //previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// // createelement
// //create a div
var newDiv = document.createElement('div');

//create a class
newDiv.className = 'hello';

//create a id
newDiv.id = 'hello1';

//create attribute
newDiv.setAttribute('title', 'Hello Div');

//create  textnode
var newDivText = document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
newDiv.style.fontWeight = 'bold';
newDiv.style.color = 'black';

container.insertBefore(newDiv, h1);
 
let item1 = document.getElementById('items');
let list = document.createElement("li");
list.textContent ='Hello world';

let pos = item1.firstElementChild;
item1.insertBefore(list, pos);
list.style.fontSize = '30px';
list.style.fontWeight = 'bold';
list.style.listStyleType = 'none';



