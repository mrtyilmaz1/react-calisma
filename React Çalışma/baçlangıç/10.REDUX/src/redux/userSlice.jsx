import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    users: [],
    loading: false
}

export const getAllUsers = createAsyncThunk("users,", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // HTTP isteği olmaz ise kullanılır.

    },
    extraReducers: (builder) => {
        // HTTP isteklerinde kullanılır.
        builder.addCase(getAllUsers.fulfilled, (state, action/*return ile dönen değer action'a gelir.*/) => {
            state.users = action.payload;
        })
    }
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
