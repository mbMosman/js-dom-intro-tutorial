let favoritesList = ['Raindrops on roses', 'Whiskers', 'Copper Kettles', 'Woolen mittens'];

// Select the ul element to add items to
let ul = document.getElementById('favorite-things');

// Add the favorites
for (let favorite of favoritesList){
  let newListItem = document.createElement('li');
  newListItem.innerText = favorite;
  ul.appendChild(newListItem);
}

// Remove the extra item
let listItems = ul.children;
let kettles = listItems[2];
ul.removeChild(kettles);

// Update an item
let whiskers = listItems[1];
whiskers.innerText = 'Kitten whiskers';