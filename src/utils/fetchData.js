export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "727aadeb36mshf7ff172a00362fap1c4021jsnf2f49c7e0616",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}