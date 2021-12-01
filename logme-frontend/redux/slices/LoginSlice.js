import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: "",
    token: ""
}

const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const {
    setUsername,
    setPassword,
    setToken
} = LoginSlice.actions

export default LoginSlice.reducer