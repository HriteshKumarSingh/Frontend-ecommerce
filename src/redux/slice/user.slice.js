import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
    "user/signup",
    async (signUpInfo , { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/signup", {
                method: "POST",
                body: JSON.stringify(signUpInfo),
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorInfo = await response.text();
                const errorString = errorInfo.match(/Error:\s*(.*?)(<br>|$)/)?.[1]?.trim() || "An error occurred";

                return rejectWithValue({
                    success: false,
                    data: null,
                    statusCode: response.status,
                    message: errorString,
                    error: true,
                });
            }

            const result = await response.json();
            return result;

        } catch (error) {
            return rejectWithValue({
                success: false,
                data: null,
                message: "Failed to sign up: " + error.message,
                error: true,
            });
        }
    }
);


export const loginUser = createAsyncThunk(
    "user/login",
    async (loginInfo , { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                body: JSON.stringify(loginInfo),
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorInfo = await response.text();
                const errorString = errorInfo.match(/Error:\s*(.*?)(<br>|$)/)?.[1]?.trim() || "An error occurred";

                return rejectWithValue({
                    success: false,
                    data: null,
                    statusCode: response.status,
                    message: errorString,
                    error: true,
                });
            }

            const result = await response.json();
            return result;

        } catch (error) {
            return rejectWithValue({
                success: false,
                data: null,
                message: "failed to sign up: " + error.message,
                error: true,
            });
        }
    }
);


export const updateUser = createAsyncThunk(
    "user/update",
    async (updateInfo, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/update", {
                method: "PUT",
                body: JSON.stringify(updateInfo),
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorInfo = await response.text();
                const errorString = errorInfo.match(/Error:\s*(.*?)(<br>|$)/)?.[1]?.trim() || "An error occurred";

                return rejectWithValue({
                    success: false,
                    data: null,
                    statusCode: response.status,
                    message: errorString,
                    error: true,
                });
            }

            const result = await response.json();
            return result;

        } catch (error) {
            return rejectWithValue({
                success: false,
                data: null,
                message: "failed to sign up: " + error.message,
                error: true,
            });
        }
    }
);


export const deleteUser = createAsyncThunk(
    "user/delete",
    async ( deleteInfo, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/delete", {
                method: "DELETE",
                body: JSON.stringify(deleteInfo),
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorInfo = await response.text();
                const errorString = errorInfo.match(/Error:\s*(.*?)(<br>|$)/)?.[1]?.trim() || "An error occurred";

                return rejectWithValue({
                    success: false,
                    data: null,
                    statusCode: response.status,
                    message: errorString,
                    error: true,
                });
            }

            const result = await response.json();
            return result;

        } catch (error) {
            return rejectWithValue({
                success: false,
                data: null,
                message: "failed to sign up: " + error.message,
                error: true,
            });
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        user: {},
        loading: false,
        error: false,
        success : false
    },
    extraReducers: (builder) => {
        builder
            // SignUp cases
            .addCase(signupUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.success = true
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })

            // Login cases
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
            })

            // Update cases
            .addCase(updateUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })

            // Delete cases
            .addCase(deleteUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })
    }
});

export default userSlice.reducer;