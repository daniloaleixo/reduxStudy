import React from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/**
 * Containers has direct access to data (redux) 
 */
class BookList extends React.Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title}
				onClick={ () => this.props.selectBook(book) } 
				className="list-group-item">
					{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// Whatever is retruned will show up as props inside BookList
	return {
		books: state.books
	}
}

// Anything returned from this function will end up as props of BookList
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called it should be passed to all ours reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);