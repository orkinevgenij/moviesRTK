import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../slice/moviesSlice'
import serialsSlice from '../slice/serialsSlice'
import upcomingMoviesSlice from '../slice/AnticipatedMoviesSlice'

export const store = configureStore({
  reducer: {
    moviesList: moviesSlice,
    serialsList: serialsSlice,
    anticipatedMoviesList: upcomingMoviesSlice,
  }
})