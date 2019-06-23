const parseBooks = book => {
  const { volumeInfo, saleInfo, selfLink } = book;
  return {
    id: book.id,
    title: volumeInfo.title,
    available: saleInfo.saleability === 'FOR_SALE',
    price: saleInfo.listPrice ? saleInfo.listPrice.amount * 100 : null,
    salePrice: saleInfo.retailPrice ? saleInfo.retailPrice.amount * 100 : null,
    link: selfLink,
    authors: volumeInfo.authors || [],
    description: volumeInfo.description,
    image: volumeInfo.imageLinks
      ? volumeInfo.imageLinks.thumbnail
      : 'http://i.imgur.com/sJ3CT4V.gif',
    pages: volumeInfo.pageCount,
    publishedDate: volumeInfo.publishedDate,
    publisher: volumeInfo.publisher,
    rating: volumeInfo.averageRating
  };
};

export function getList(state) {
  return state.books.list.map(parseBooks);
}
