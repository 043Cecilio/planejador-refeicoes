const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

async function request(path) {
  const response = await fetch(`${BASE_URL}${path}`)
  if (!response.ok) {
    throw new Error('Não foi possível buscar os dados da API.')
  }
  return response.json()
}

export async function searchMeals(name) {
  const data = await request(`/search.php?s=${encodeURIComponent(name)}`)
  // quando não encontra nada, a API devolve meals: null
  return data.meals ?? []
}

export async function getMealById(id) {
  const data = await request(`/lookup.php?i=${id}`)
  return data.meals ? data.meals[0] : null
}