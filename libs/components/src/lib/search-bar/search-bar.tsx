import React from 'react';

export const SearchBar: React.FC<any> = (props) => {
  const [state, setState] = React.useState({ term: '' });

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    props.searchSubmit(state.term);
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
          />
        </div>
      </form>
    </div>
  );
};
