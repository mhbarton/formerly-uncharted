const apiKey = process.env.REACT_APP_API_KEY

const fetchImage = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => {
          if(!response.ok){
              throw new Error ('Oops, looks like there was an error!')
          } else {
              return response.json()
          }
      })
      .catch(error => console.log(error))
      }
  
  export { fetchImage }


