const searchBar = document.getElementById("search-bar")
const searchBtn = document.getElementById("google-search")

searchBtn.addEventListener("click", function() {
   window.location.href = `https://www.google.com/search?q=${searchBar.value}`
})