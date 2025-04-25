$(document).ready(function() {
  // An array of quotes and authors
  const quotes = [
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    // Add more quotes here
  ];

  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Display random quote on page load
  function displayQuote() {
    const quote = getRandomQuote();
    $("#text").text(`"${quote.text}"`);
    $("#author").text(`- ${quote.author}`);

    // Update tweet link
    $("#tweet-quote").attr(
      "href",
      `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`
    );
  }

  // Event listener for new quote button
  $("#new-quote").click(function() {
    displayQuote();
  });

  // Initial call to display a quote
  displayQuote();
});
