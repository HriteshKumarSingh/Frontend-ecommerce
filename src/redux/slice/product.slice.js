// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// // Product CRUD operations
// export const signupuser = createAsyncThunk(
//     "user/signup",
//     async (signUpInfo , { rejectWithValue }) => {
//         try {
//             const response = await fetch("/api/user/signup", {
//                 method: "POST",
//                 body: JSON.stringify(signUpInfo),
//                 credentials: "include",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 const errorInfo = await response.text();
//                 const errorString = errorInfo.match(/Error:\s*(.*?)(<br>|$)/)?.[1]?.trim() || "An error occurred";

//                 return rejectWithValue({
//                     success: false,
//                     data: null,
//                     statusCode: response.status,
//                     message: errorString,
//                     error: true,
//                 });
//             }

//             const result = await response.json();
//             return result;

//         } catch (error) {
//             return rejectWithValue({
//                 success: false,
//                 data: null,
//                 message: "failed to sign up: " + error.message,
//                 error: true,
//             });
//         }
//     }
// );



// const productSlice = createSlice({
//     name: "users",
//     initialState: {
//         product: {},
//         loading: false,
//         error: false,
//         success : false
//     },
//     extraReducers: (builder) => {
//         builder


//             // SignUp cases
//             .addCase(signupUser.pending, (state) => {
//                 state.loading = true
//                 state.error = false
//                 state.success = false
//             })
//             .addCase(signupUser.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.user = action.payload
//                 state.success = true
//             })
//             .addCase(signupUser.rejected, (state, action) => {
//                 state.loading = false
//                 state.user = action.payload
//                 state.error = action.payload.error
//                 state.success = false
//             })
//     }
// })