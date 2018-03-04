export function selectBook(book) {
	// SelectBook is an ActionCreator, it needs to renturn an action
	// an object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}