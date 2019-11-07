class Book {
    constructor(title, author, isbn) {
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}

class UI {
    addBookToList(book) {
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

    showAlert(message, className) {
        // Create a Div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get a parent
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);

        // Timeout After 3 Secs
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }
}

// Event Listeners

// Event Listener for Adding Book
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get Form Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Instantiate new Book
    const book = new Book(title, author, isbn);

    // Instantiate new UI Object
    const ui = new UI()

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {

        // Add book to list
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Book added', 'success');

        // Clear Fields
        ui.clearFields();
    }

});

// Event Listener for Delete Book
document.getElementById('book-list').addEventListener('click', function (e) {
    e.preventDefault();

    const ui = new UI();

    ui.deleteBook(e.target);

    // Show alert for deleted book
    ui.showAlert('Successfully deleted', 'success');
})