let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"If I invade Lakonia you will be destroyed, never to rise again. Spartan Reply: IF”"`,
    person: "Spartan Quote"
  },
  {
    quote: `"I am so clever that sometimes I don't understand a single word of what I am saying."`,
    person: "Oscar Wilde"
  },
  {
    quote: `"Only as a warrior can one survive the path of knowledge."`,
    person: "Don Juan Matus"
  },
  {
    quote: `"Heroes die in silence"`,
    person: "Unknown"
  },
  {
    quote: `"If you want to talk to God, learn to be silent"`,
    person: "Unknown"
  },
  { quote: `"Life is a game for those who play"`, person: "Unknown" },
  {
    quote: `"A pawn will never know what the king has to endure."`,
    person: "Unknown"
  },
  {
    quote: `"Love your enemy to win."`,
    person: "Unknown"
  },
  {
    quote: `"I know you’re tired but come, this is the way."`,
    person: "Rumi"
  },
  {
    quote: `"If you get pleasure from any obstacle, it will be solved."`,
    person: "Unknown"
  },
  {
    quote: `"What hurts you, blesses you. Darkness is your candle."`,
    person: "Rumi"
  },
  {
    quote: `"If you want to become God, love everyone and everything."`,
    person: "Unknown"
  },
  {
    quote: `"What we think, we become."`,
    person: "Buddha"
  },
  {
    quote: `"Do what you fear the most."`,
    person: "Anonymous"
  },
  {
    quote: `"They Tried to Bury Us, They Didn’t Know We Were Seeds."`,
    person: "Mexican Proverb"
  },
  {
    quote: `"Suffering is a chance to see."`,
    person: "Unknown"
  },{
    quote: `"Patience is the key to joy."`,
    person: "Rumi"
  }
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
