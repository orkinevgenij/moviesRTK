import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { URL_MOVIES } from '../../api/api'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, rejectedWithValue) => {

    try {
      const response = await fetch(URL_MOVIES)
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      return data.results
    } catch (error) {
      return rejectedWithValue(error.message)
    }

  }
)

export const moviesSlice = createSlice({

  name: 'movies',
  initialState: {
    movies: [],
    favoritesMovies: [],
    favStatus: false,
    status: null,
    error: null,
  },
  reducers: {
    addFavoritesMovies: (state, action) => {
      const filteredMovies = state.movies.filter((movie) => {
        return movie.id === action.payload
      })
      state.favoritesMovies.push(...filteredMovies)
      state.favoritesMovies = [
        ...new Map(state.favoritesMovies.map((movie) => [movie['original_title'], movie])).values(),
      ]
    },

    delFavoritesMovies: (state, action) => {
      state.favoritesMovies = state.favoritesMovies.filter(favorites => favorites.id !== action.payload)
    },
  },

  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = 'Pending'
    },
    [fetchMovies.fulfilled]: (state, action) => {

      state.status = 'Fulfilled'
      state.movies = action.payload
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'Rejected'
      state.error = action.payload
    }

  }
})

export const { addFavoritesMovies, delFavoritesMovies, toggleStatusFavorites } = moviesSlice.actions
export default moviesSlice.reducer