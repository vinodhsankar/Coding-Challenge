function ReplaceWithAlphabetPosition(text) {

  let char = "";
  let arr = [];
  let arr2 = [];
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');
  let val = text.split('');

  val.forEach(value => {
    char = value.toLowerCase();
    if (alphabets.indexOf(char) > -1) {

      arr.push(alphabets.indexOf(char) + 1);
      arr2 = arr.join(" ");
    }
  });

  return arr2;
}

//console.log(ReplaceWithAlphabetPosition("abcdefghijklmnopqrstuvwxyz."));

console.log(ReplaceWithAlphabetPosition("The sunset sets at twelve o' clock."));