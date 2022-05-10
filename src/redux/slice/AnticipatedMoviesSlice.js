import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { URL_UPCOMING } from '../../api/api'

export const fetchedUpcomingMovies = createAsyncThunk(
  'upcomingMovies/fetchedUpcomingMovies',
  async (_, rejectedWithValue) => {
    try {
      const response = await fetch(URL_UPCOMING)

      if (!response) {
        throw new Error('Server Error!')``
      }
      const data = await response.json()
      return data.results

    } catch (error) {
      return rejectedWithValue(error.message)
    }
  }
)

export const anticipatedMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState: {
    movies: [],
    status: null,
    error: null
  },
  reducers: {},

  extraReducers: {
    [fetchedUpcomingMovies.pending]: (state) => {
      state.status = 'Pending'
    },
    [fetchedUpcomingMovies.fulfilled]: (state, action) => {
      state.status = 'Fulfilled'
      state.movies = action.payload
    },
    [fetchedUpcomingMovies.rejected]: (state, action) => {
      state.status = 'Rejected'
      state.error = action.payload
    }
  }
})
export default anticipatedMoviesSlice.reducer