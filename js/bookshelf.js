const apiKey = `key=AIzaSyD4eV-YGkcC3F8g46in5UezAOJgC6RdOmU`;
const userId = "115863563018885293588";
const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/3/volumes?${apiKey}`;

async function getBooks() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    console.log(json.items);
    const books = json.items;
    const bookshelf = document.querySelector(".bookshelf");
    for (let i = 0; i < books.length; i++) {
      bookshelf.innerHTML += `
      <div class="bookshelf__book">
      <a class="" href="${books[i].volumeInfo.infoLink}"><img src="${books[i].volumeInfo.imageLinks.smallThumbnail}" alt="Cover of ${books[i].volumeInfo.title}"/></a>
      <h3> ${books[i].volumeInfo.title} </h3>
      <p>By: ${books[i].volumeInfo.authors} </p>
      </div>
      
      
      `;
    }
  } catch (error) {
    console.log("There was an" + error);
  }
}

getBooks();
