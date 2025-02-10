function Book(title, author, pagesNum, isRead) {
  this.title = title;
  this.author = author;
  this.pagesNum = pagesNum;
  this.isRead = isRead;
  this.info = function () {
    // almost always best to return things
    return `${title} by ${author}, ${pagesNum}, ${
      isRead ? "has been read" : "not read yet"
    }`;
  };
}
