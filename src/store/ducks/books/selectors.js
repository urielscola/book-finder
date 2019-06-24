export const parseBooks = book => {
  if (!book || !book.volumeInfo) return book;
  const { volumeInfo, saleInfo } = book;
  return {
    id: book.id,
    title: volumeInfo.title,
    available: saleInfo.saleability === 'FOR_SALE',
    price: saleInfo.listPrice ? saleInfo.listPrice.amount * 100 : null,
    salePrice: saleInfo.retailPrice ? saleInfo.retailPrice.amount * 100 : null,
    link: volumeInfo.infoLink,
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

export function getDetail(state) {
  return parseBooks(state.books.detail);
}
