import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import parseQueryParams from '../../utils/parseQueryParams';

const SearchBar = ({ setSearchOption }) => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
  const onSubmitHandler = e => {
    e.preventDefault();
    setSearchOption({ [e.target.dropDown.value]: e.target.inputField.value });
    history.push(`/admin?${e.target.dropDown.value}=${e.target.inputField.value}`);
    setInputValue('');
  };

  const inputHandler = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const params = parseQueryParams(window.location.search);
    setSearchOption(params);
    //setInputValue(params);
  }, []);

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="category">검색창</label>
      <select name="dropDown" id="category">
        <option value="name">username</option>
        <option value="id">id</option>
        <option value="address">address</option>
      </select>
      <input
        type="text"
        name="inputField"
        value={inputValue}
        onChange={inputHandler}
        placeholder="검색어를 입력하세요"
      />
      <input type="submit" value="검색" />
    </form>
  );
};

export default SearchBar;
