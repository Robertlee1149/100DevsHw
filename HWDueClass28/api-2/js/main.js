//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const number = Number(document.querySelector('#number').value)
  const url = `https://www.swapi.tech/api/people/${number}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("#name").innerText = data.result.properties.name
        document.querySelector("#gender").innerText = data.result.properties.gender
        document.querySelector("#height").innerText = data.result.properties.height
        document.querySelector("#birth").innerText = data.result.properties.birth_year
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

