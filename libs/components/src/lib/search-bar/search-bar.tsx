import React from 'react';

import scryfall from 'scryfall-client';

export const SearchBar: React.FC<any> = (props) => {
  const [state, setState] = React.useState({ term: '' });

  const [suggestion, setSuggestion] = React.useState([]);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    props.searchSubmit(state.term);
  };

  const handleKeyUp = (e) => {
    const q = e.target.value;
    scryfall
      .autocomplete(q)
      .then((res) => {
        console.log('-- res', res);
        setSuggestion(res);
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Card Search</label>
          <input
            type="text"
            value={state.term}
            onChange={(e) => setState({ term: e.target.value })}
            onKeyUp={(e) => handleKeyUp(e)}
          />
          <div>
            {suggestion.map((cardName) => (
              <p>{cardName}</p>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
