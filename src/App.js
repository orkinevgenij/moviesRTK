import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Homepage/Home'
import MoviesList from './components/MoviesList/MoviesList'
import SerialsList from './components/SerialsList/SerialsList'
import FavoritesList from './components/FavoritesList/FavoritesList'
import NotFoundPage from './components/Notfoundpage/NotFoundPage'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Form from './components/Form/Form'
import Login from './components/Form/Login/Login'
import Registration from './components/Form/Registration/Registration'
import SerialDetails from './components/SerialDetails/SerialDetails'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<MoviesList/>}/>
        <Route path="movies/:id" element={<MovieDetails/>}/>
        <Route path="serials" element={<SerialsList/>}/>
        <Route path="serials/:id" element={<SerialDetails/>}/>
        <Route path="favorites" element={<FavoritesList/>}/>
        <Route path="form" element={<Form/>}>
          <Route index element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route/>
      </Route>
    </Routes>
  )
}

export default App