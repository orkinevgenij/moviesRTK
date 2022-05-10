import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { URL_SERIALS, URL_TOPSERIALS } from '../../api/api'

export const fetchSerials = createAsyncThunk(
  'serials/fetchSerials',
  async (_, rejectWithValue) => {
    try {
      const response = await fetch(URL_TOPSERIALS)
      if (!response.ok) {
        throw new Error('Server Error')
      }
      const data = await response.json()
      return data.results
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const serialsSlice = createSlice({
  name: 'serials',
  initialState: {
    serials: [],
    favoritesSerials: [],
    status: null,
    error: null,
  },
  reducers: {
    addFavoritesSerials: (state, action) => {
      const filteredSerials = state.serials.filter((serial) => {
        return serial.id === action.payload
      })
      state.favoritesSerials.push(...filteredSerials)
      state.favoritesSerials = [
        ...new Map(state.favoritesSerials.map((serial) => [serial['original_name'], serial])).values(),
      ]
    },
    delFavoritesSerial: (state, action) => {
      state.favoritesSerials = state.favoritesSerials.filter(serial => serial.id !== action.payload)
    }
  },
  extraReducers: {
    [fetchSerials.pending]: (state) => {
      state.status = 'Pending'
    },
    [fetchSerials.fulfilled]: (state, action) => {
      state.status = 'FulFilled'
      state.serials = action.payload
    },
    [fetchSerials.rejected]: (state, action) => {
      state.status = 'Rejected'
      state.error = action.payload
    }

  }
})
export const { addFavoritesSerials, delFavoritesSerial } = serialsSlice.actions
export default serialsSlice.reducer