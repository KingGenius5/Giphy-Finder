const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', submitSearch)
const container = document.getElementById('container')

function submitSearch(e) {
  // The form was submitted!
}


function submitSearch(e) {
  // Get the value input in the search input
  const query = inputSearch.value

}


function fetchData(search = 'cats') {
  const api = 'VvMbcgq39wsajqj1whGnvnrVhJGC423X'
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}

  fetch(path)
  .then(function(res) { return res.json() })
  .then(function(json) { handleData(json) })
  .catch(function(err) { console.log(err.message) })

}

function handleData(json) {
  const data = json.data
  let htmlStr = ''
  for (let i = 0; i < data.length; i += 1) {
    const image = data[i].images.fixed_height_small
    const src = image.url
    const width = image.width
    const height = image.height
    htmlStr += `<img src="${src}" width="${width}" height="${height}">`
  }

  // Set the innHTML of #container
  container.innerHTML = htmlStr
}
