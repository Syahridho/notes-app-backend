const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  deleteBookByIdHandler,
  editBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookid}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookid}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookid}',
    handler: deleteBookByIdHandler,
  },

];

module.exports = routes;
