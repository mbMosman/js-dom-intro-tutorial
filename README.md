# DOM Tutorial

The DOM is a hierarchical, tree-like structure of parent & child elements. 

## Explore the DOM

Let's explore this by looking at the structure of the starter `index.html` file. Open the file in the browser and open the developer tools. 

By using the Elements view, you can use the arrowheads to expand & collapse the tree structure to explore the parent & child relationships. 

![Dev Tools - Elements View](/images/dev-tools-elements-expand-collapse.gif)

You can see that the root `html` node has two child nodes `head` and `body`. Just like in a family tree, these are *sibling* nodes. Similarly by expanding the `body` element, you can see that it also has two child nodes `header` and `main`.

Expand the `header` node and you can see it has a single child `h1`. Expand the `main` node and you can see that it has three child nodes: `h2`, `p`, and `ul`. The `ul` also has a single child node, a comment.

![Dev Tools - Elements View - All Expanded](/images/dev-tools-elements-all-expanded.png)

Understanding this parent and child structure of the DOM is useful when interacting with the DOM using JavaScript.

## Using JavaScript to Update the DOM

We'll use JavaScript to add our favorite things to the page dynamically. Open the `script.js` file. Notice that it contains an array of the favorite things to add.

Before we can add our favorite things, we need a way to interact with the DOM. We'll do this using the built-in `document` variable. 

Next we need to get the target location on the DOM where we want to put our new elements. Earlier we saw the `ul` element is setup in the `index.html` file to hold our favorite things. 

```
    <ul id="favorite-things">
      <!-- We will add things here with JavaScript -->
    </ul>
```

Notice that it has an `id` attribute. The most direct way to access an element is with the `getElementById` function. 

```
let ul = document.getElementById('favorite-things');
```

Now that we have a reference to the location to add our favorite things, the next step is to create new elements and add them to the DOM.


### Adding Elements

To add each of our favorite things to the DOM, we first need to create a new `li` element containing the text to add. 

```
let newListItem = document.createElement('li');
newListItem.innerText = 'Raindrops on roses';
```

When we create an element, it is not visible in the browser until we add it to the DOM. There are many ways to add an element to the DOM, but one of the most straight forward ways is to use the `appendChild` method. This method is called on the *parent* element where the new *child* element will be added. In this case, that is the `ul`.

```
ul.appendChild(newListItem);
```

![DOM Updated](/images/dom-updated-new-li.png)

We've got one item added, but we need to add three. There's already an array of favorite things , so instead of repeating this code multiple times, we can use a loop to iterate over the array.

First, add a `for...of` loop to iterate over the `favoritesList` array:
```
for (let favorite of favoritesList){
  // We'll move our earlier code here
}
```

Next, move the 3 lines of code from earlier inside the loop, changing the string literal `Raindrops on roses` to the loop variable `favorite`.
```
for (let favorite of favoritesList) {
  let newListItem = document.createElement('li');
  newListItem.innerText = favorite;
  ul.appendChild(newListItem);
}
```

![Favorite Things on DOM](images/dom-updated-favorites-added.png)

### Removing Elements

That list says it is the top 3 items. It looks like we have one too many.

We can fix that by removing one. We can remove an element by using the `removeChild` method. This method must be called on the parent element whose child will be removed. However we must pass in the specific child element to remove, so we will need to find that first.

Let's remove the 'Copper Kettles' from the list. We can first get that element by getting an array of the `ul` children. The item we want to remove is the 3rd one, or the one at index 2. Once we have the specific child element, we can remove it.

```
let listItems = ul.children;
let kettles = listItems[2];
ul.removeChild(kettles);
```

![Copper Kettles Removed](/images/extra-favorite-removed.png)

### Editing Elements

In the same way that we were able to set an element's text content when we created the element, we can use the same code to update or change that text. 

Let's change the 'Whiskers' item to 'Kitten whiskers'. 

Again, we'll need to get the element to change first. We already have the child elements of the ul in the `listItems` array. The element we want is at index 1.

```
let whiskers = listItems[1];
whiskers.innerText = 'Kitten whiskers';
```

![Whiskers Updated](/images/favorite-item-updated.png)