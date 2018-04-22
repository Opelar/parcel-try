const createDOMFromString = domString => {
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div;
};

export default createDOMFromString;