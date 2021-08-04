const parseQueryParams = query => {
  let parsedParam = query.slice(1).split('=');

  return { [parsedParam[0]]: parsedParam[1] };
};

export default parseQueryParams;
