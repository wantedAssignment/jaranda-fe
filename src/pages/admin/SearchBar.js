import React from 'react';

const SearchBar = ({ setSearchOption }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    setSearchOption({ [e.target.dropDown.value]: e.target.inputField.value });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="category">검색창</label>
      <select name="dropDown" id="category">
        <option value="name">username</option>
        <option value="id">id</option>
        <option value="address">address</option>
      </select>
      <input type="text" name="inputField" placeholder="검색어를 입력하세요" />
      <input type="submit" value="검색" />
    </form>
  );
};

export default SearchBar;
