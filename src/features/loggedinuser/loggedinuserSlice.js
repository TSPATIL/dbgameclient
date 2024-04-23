import { createSlice } from '@reduxjs/toolkit'

export const loggedinuserSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'user',
        email: 'null',
        photourl: ''
    },
    reducers: {
        setUserDetails: (state, action) => {
            const { name, email, photourl } = action.payload;
            state.name = name;
            state.email = email;
            state.photourl = photourl;
        },
        setUserEmail: (state, action) => {
            const { email } = action.payload;
            state.email = email;
        },
        clearUserDetails: (state) => {
          state.name = '';
          state.email = '';
          state.photourl = ''
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserDetails, clearUserDetails, setUserEmail } = loggedinuserSlice.actions

export default loggedinuserSlice.reducer;