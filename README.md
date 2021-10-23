# Installation

Clone the project repository and then run "npm install" to include all of the project's node modules in your local repository. Then, run "npm start" and open localhost:3000 in your browser.


# What it is

This is a book list app. The home page shows three different shelves: "Currently Reading," "Want to Read," and "Read." The user may navigate to a search page in order to add books to one of his home page's shelves. Furthermore, the user may change the status of any of the books in his shelves in order to move them to any other shelf. 

# How it works

To search for books, you can either click the "Explore new books" button to navigate to a search page, or just type in the "/search" path on your browser. 

To change the status of the book, for example from "wantToRead" to "read," just use the three dots drop down menu available at the bottom of each card. 

## Caveats 

When searching for books, sometimes the you'll see duplicate books. Since duplicate books have their own unique ids, their status might differ. So, don't be surprised if you encounter duplicate results that each have a different status. 

For example, when searching for a book already on one of the shelves you might encounter duplicate results. One result will reflect the status from the shelves, but the other might no. 

Again, this happens because duplicate search results have unique ids, thus one particular duplicate's status might not match the status of the particular book on your shelves. 