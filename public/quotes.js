document
  .querySelector(".request-quote")
  .addEventListener("click", function() {
    fetch("/quote")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".quote").innerText = data.quote;
      })
      .catch(function(err) {
        console.error(err);
      });
  });