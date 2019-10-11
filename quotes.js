const quoteTag = document.querySelector("h1")
const randomTag = document.querySelector("footer img")
const authorTag = document.querySelector("p")

let data = []

//lets load in real data

fetch("https://api.superhi.com/api/test/quotes/")
.then(response => response.json())
.then(jsonData => {
 data = jsonData
 getQuote()
})


const getQuote = function(){
  if (data.length > 0) {
  //gets a random quote
  const randomNumber = Math.floor(Math.random()* data.length)
  const randomQuote = data[randomNumber]
  
  //and puts it on the website
  quoteTag.innerHTML = "&ldquo;" + randomQuote.quote + "&rdquo;"
  authorTag.innerHTML = "&mdash; " + randomQuote.author
   
	}
}  

//run getQuote on page load
getQuote()

//run getQuote on click of random.svg
randomTag.addEventListener("click", function(){
  getQuote()
})