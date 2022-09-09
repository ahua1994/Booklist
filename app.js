const submit = document.getElementById("addbook");

submit.addEventListener("click", addBook);

document.addEventListener("click", removeBook);

function removeBook(e) {
    if (e.target.classList[0] == "delete") {
        const td = e.target.parentElement;
        td.parentElement.remove();
        removed();
    }
}

function addBook(e) {
    e.preventDefault();

    const titleField = document.getElementById("title");
    const authorField = document.getElementById("author");
    const isbnField = document.getElementById("ISBN#");

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("ISBN#").value.trim();

    if (!title || !author || !isbn) return failure();

    const book = document.createElement("tr");
    book.classList.add("book");
    book.innerHTML = `<td>${title}</td>
                      <td>${author}</td>
                      <td>${isbn}</td> 
                      <td>
                        <a href="#" class="delete">X</a>
                      </td>`;
    const bookList = document.getElementById("book-list");
    bookList.appendChild(book);
    success();

    titleField.value = "";
    authorField.value = "";
    isbnField.value = "";
}

function removed() {
    let remove = document.getElementById("removed");
    remove.style.display = "block";
    setTimeout(function () {
        remove.style.display = "none";
    }, 6000);
}

function failure() {
    let fail = document.getElementById("failure");
    fail.style.display = "block";
    setTimeout(function () {
        fail.style.display = "none";
    }, 6000);
}

function success() {
    let successful = document.getElementById("success");
    successful.style.display = "block";
    setTimeout(function () {
        successful.style.display = "none";
    }, 6000);
}
