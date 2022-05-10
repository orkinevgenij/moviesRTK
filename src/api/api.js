import { API_KEY } from './api_key'

export const URL_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru&page=1`
export const URL_TOPSERIALS = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ru&page=1`
export const IMG_PATH = `https://image.tmdb.org/t/p/w500`