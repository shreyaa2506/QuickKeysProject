

const mix = (array) => {
  let curind = array.length,
    ranind;

  
  while (curind !== 0) {
    // Pick a remaining element...
    ranind = Math.floor(Math.random() * curind);
    curind--;

    // And swap it with the current element.
    [array[curind], array[ranind]] = [
      array[ranind],
      array[curind],
    ];
  }

  return array;
};

export default mix;
