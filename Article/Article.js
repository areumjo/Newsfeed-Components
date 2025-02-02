// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // console.log(this.domElement);

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // console.log(this.expandButton);

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // console.log('click works?')

    this.domElement.classList.toggle('article-open');

    // add functionality to change text on the button
    if (this.expandButton.innerHTML === "Click to Close") {
      this.expandButton.innerHTML = "Click to Expand";
      //console.log(this.expandButton)
    } else {
      this.expandButton.innerHTML = "Click to Close";
    }

  }
}

/* START HERE: */

// - Select all classes named ".article" and assign that value to the articles variable.  
let articles = document.querySelectorAll('.article');

// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
articles.forEach( (article) => new Article(article));
// console.log(articles);