/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import parseQueryParams from '../../utils/parseQueryParams';
import SearchBarUI from './presenter';

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
  }, []);

  return (
    <SearchBarUI
      onSubmitHandler={onSubmitHandler}
      inputValue={inputValue}
      inputHandler={inputHandler}
    />
  );
};

export default SearchBar;
