
import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validateProps.js';

const searchBarSchema = Joi.object({
  search: Joi.function().required(),
  defaultKeyword: Joi.string().optional(),
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    validateProps(searchBarSchema, props, 'SearchBar');

    this.state = {
      keyword: props.defaultKeyword || '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.search(this.state.keyword);
  }

  onKeywordChangeHandler(event) {
    const { value } = event.target;

    this.setState(() => ({
      keyword: value,
    }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="search movie by title"
          value={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;