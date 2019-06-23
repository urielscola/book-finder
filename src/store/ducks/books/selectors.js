const parseBooks = book => {
  console.log({ book });
  const { volumeInfo, saleInfo, selfLink } = book;
  return {
    id: book.id,
    title: volumeInfo.title,
    unavailable: saleInfo.saleability === 'NOT_FOR_SALE',
    link: selfLink,
    authors: volumeInfo.authors,
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
