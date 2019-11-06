// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert calls
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`
    
    list.appendChild(row);
}

// UI Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get Form Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Instantiate new Book
    const book = new Book(title, author, isbn);

    // Instantiate new UI Object
    const ui = new UI()

    // Add book to list
    ui.addBookToList(book);

    // Clear Fields
    ui.clearFields();

});