import React from 'react';
import { SearchForm } from './SearchBar.styles';

const SearchBar = ({ setSearchOption }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    setSearchOption({ [e.target.dropDown.value]: e.target.inputField.value });
  };

  return (
    <SearchForm onSubmit={onSubmitHandler}>
      <select name="dropDown" id="category">
        <option value="name">이름</option>
        <option value="id">아이디</option>
        <option value="address">주소</option>
      </select>
      <input type="text" name="inputField" placeholder="검색어를 입력해주세요." />
      <button type="submit">검색</button>
    </SearchForm>
  );
};

export default SearchBar;
