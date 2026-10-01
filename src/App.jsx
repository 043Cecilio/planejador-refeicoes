import { Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material'
import Home from './pages/Home.jsx'
import Planner from './pages/Planner.jsx'

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Planejador de Refeições
          </Typography>
          <Button color="inherit" component={Link} to="/">Receitas</Button>
          <Button color="inherit" component={Link} to="/planejador">Planejador</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planejador" element={<Planner />} />
        </Routes>
      </Container>
    </>
  )
}