import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Movies from './pages/Movies/Movies'
import Genres from './pages/Genres/Genres'
import EditMovie from './pages/EditMovie/EditMovie'
import ManageCatalogue from './pages/ManageCatalogue/ManageCatalogue'
import Graphql from './pages/Graphql/Graphql'
import Login from './pages/Login/Login'
import MovieCard from './components/MovieCard/MovieCard'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieCard />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/admin/movie/0" element={<EditMovie />} />
        <Route path="/manage-catalogue" element={<ManageCatalogue />} />
        <Route path="/graphql" element={<Graphql />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<>page not found</>}/>
      </Route>
    </Routes>
  )
}

export default App
