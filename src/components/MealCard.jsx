import { Card, CardMedia, CardContent, Typography } from '@mui/material'

export default function MealCard({ meal }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <CardContent>
        <Typography variant="h6">{meal.strMeal}</Typography>
        <Typography variant="body2" color="text.secondary">
          {meal.strCategory} • {meal.strArea}
        </Typography>
      </CardContent>
    </Card>
  )
}