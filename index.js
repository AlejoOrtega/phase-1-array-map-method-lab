const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map(title => transformTitle(title))
  return newTutorials
}

const transformTitle = title => {
  let newTitle="", newWord;
  let words = title.split(" ");
  for(const word of words){
    newWord = word.charAt(0).toUpperCase()+word.slice(1,word.lenght);
    newTitle = newTitle + newWord + " "
  }
  newTitle = newTitle.slice(0, newTitle.length-1)
  return newTitle
}
