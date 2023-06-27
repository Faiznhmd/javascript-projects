let quote = document.getElementById("quote");
let author = document.getElementById("author");
let writer = document.getElementById("writer");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
      writer.innerText = item.authorSlug;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
