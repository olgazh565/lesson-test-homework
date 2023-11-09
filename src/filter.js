const filter = (arr, key, val) => {

  return arr.filter(el => el[key] === val);
};

export default filter;
