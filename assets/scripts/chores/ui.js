'use strict';

const showBooksTemplate = require('../templates/book-listing.handlebars');

const getBooksSuccess = (data) => {
  console.log(data);
  let showBooksHtml = showBooksTemplate({ books: data.books });

  $('.content').append(showBooksHtml);

  $("button").on("click", function (e) {
    e.preventDefault();
    $(e.target).parent().parent().remove();
  });
};

const clearBooks = () => {
  $('.content').empty();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure,
};
