// Lucas Aurelio

// ADD NEW ITEM TO END OF LIST
const groceryList = document.querySelector('ul');
const creamItem = document.createElement('li');
creamItem.textContent = 'cream';
groceryList.appendChild(creamItem);

// ADD NEW ITEM TO START OF LIST
const kaleItem = document.createElement('li');
kaleItem.textContent = 'kale';
groceryList.insertBefore(kaleItem, groceryList.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
const allListItems = groceryList.querySelectorAll('li');
allListItems.forEach(item => {
    item.classList.add('cool');
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
const header = document.querySelector('h2');
const numberOfItems = allListItems.length;
header.innerHTML += ` <span>${numberOfItems}</span>`;