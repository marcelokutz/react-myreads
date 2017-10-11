import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        query: ''
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    render() {
        const { books } = this.props
        const { query } = this.state

        let showingBooks
        if (query) {
            //const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter(book => book.shelf === 'currentlyReading')
        } else {
            //filtra currentlyreading
            //showingBooks = books.filter(book => book.shelf === 'currentlyReading')
            showingBooks = books
        }

        //showingBooks.sort(sortBy('name'))

        return (
            <div className="bookshelf-books">
                {showingBooks.length !== books.length && (
                    <div className='showing-books'>
                        <span>Now showing {showingBooks.length} of {books.length} total</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className='books-grid'>
                    {console.log(books)}
                    {showingBooks.map((book) => (
                        
                        <li key={book.id} className='book-list-item'>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListBooks