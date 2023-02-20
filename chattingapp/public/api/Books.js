let books;

$.ajax({
  url: 'Books.class',
  type: 'post',
  success: function (data) {
    if (data) {
      books = JSON.parse(data);
    } else {
      alert('Book Not Added !! Error Occurs!!');
    }
  },
  error: function () {
    alert('error');
  },
});

export default books;
