var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].style.backgroundColor = 'green';
items[2].style.display = 'none';

//QUERYSELECTORALL
var item = document.querySelectorAll('.list-group-item');
item[1].style.color = 'lightgreen';
item[1].style.fontWeight = 'bold';
var titles = document.querySelectorAll('.title');
console.log(titles);
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = 'green';
    


}