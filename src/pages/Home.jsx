import { useEffect, useState } from 'react'
import { Box, TextField, Button, CircularProgress, Alert } from '@mui/material'
import { searchMeals } from '../services/api.js'
import MealCard from '../components/MealCard.jsx'

export default function Home() {
  const [input, setInput] = useState('')
  const [term, setTerm] = useState('chicken')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const result = await searchMeals(term)
        if (!ignore) setMeals(result)
      } catch (err) {
        if (!ignore) setError(err.message)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    load()
    return () => { ignore = true }
  }, [term])

  function handleSubmit(event) {
    event.preventDefault()
    if (input.trim()) setTerm(input.trim())
  }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Buscar receita (em inglês)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained">Buscar</Button>
      </Box>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && meals.length === 0 && (
        <Alert severity="info">Nenhuma receita encontrada.</Alert>
      )}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 2,
        }}
      >
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </Box>
    </>
  )
}