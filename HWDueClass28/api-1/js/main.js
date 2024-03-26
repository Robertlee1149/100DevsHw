//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const characterNum = document.querySelector('input').value
  const apiKey = ''
  const url = `https://anapioficeandfire.com/api/characters/${characterNum}`


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
        document.querySelector('#culture').innerText = data.culture
        document.querySelector('#gender').innerText = data.gender
        document.querySelector('#name').innerText = data.name
        document.querySelector('#titles').innerText = data.titles
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

