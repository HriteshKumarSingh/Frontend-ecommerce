import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// User CRUD operations
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
                message: "failed to sign up: " + error.message,
                error: true,
            });
        }
    }
);


export const loginUser = createAsyncThunk(
    "user/login",
    async (loginInfo , { rejectWithValue }) => {
        console.log(loginInfo)
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
                message: "failed to login: " + error.message,
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
                message: "failed to update: " + error.message,
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
                message: "failed to delete : " + error.message,
                error: true,
            });
        }
    }
);


export const logoutUser = createAsyncThunk(
    "user/logout",
    async ({ rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/logout", {
                method: "POST",
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
                message: "failed to logout: " + error.message,
                error: true,
            });
        }
    }
);


export const forgetUser = createAsyncThunk(
    "user/forget",
    async (forgetInfo , { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/forget", {
                method: "POST",
                body: JSON.stringify(forgetInfo),
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
                message: "failed to forget: " + error.message,
                error: true,
            });
        }
    }
);


export const otpUser = createAsyncThunk(
    "user/otp",
    async (otpInfo , { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/otp", {
                method: "POST",
                body: JSON.stringify(otpInfo),
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
                message: "failed to verify OTP: " + error.message,
                error: true,
            });
        }
    }
);


export const changePasswordUser = createAsyncThunk(
    "user/change-password",
    async ( passwordInfo , { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/change-password", {
                method: "PATCH",
                body: JSON.stringify(passwordInfo),
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
                message: "failed to change password: " + error.message,
                error: true,
            });
        }
    }
);


export const currentUser = createAsyncThunk(
    "user/current",
    async ({ rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/current", {
                method: "GET",
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
                message: "failed to get current user: " + error.message,
                error: true,
            });
        }
    }
);


export const updatePassword = createAsyncThunk(
    "user/update-password",
    async ( updatePasswordInfo , { rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/update/password", {
                method: "POST",
                body: JSON.stringify(updatePasswordInfo),
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
                message: "failed to update password: " + error.message,
                error: true,
            });
        }
    }
);


// Admin CRUD oprations
export const deleteAdmin = createAsyncThunk(
    "user/delete/admin",
    async (deleteInfo , { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/user/delete/${deleteInfo.id}`, {
                method: "DELETE",
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


export const getUserAdmin = createAsyncThunk(
    "user/all",
    async ({ rejectWithValue }) => {
        try {
            const response = await fetch("/api/user/all", {
                method: "GET",
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


export const getSingleUserAdmin = createAsyncThunk(
    "user/details",
    async ( userInfo , { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/user/details/${userInfo.id}`, {
                method: "GET",
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
    reducers : {
        resetState : (state) => {
            state.error = false
            state.loading = false
            state.success = false
        }
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


            // Logout cases
            .addCase(logoutUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Forget cases
            .addCase(forgetUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(forgetUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(forgetUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // OTP cases
            .addCase(otpUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(otpUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(otpUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Change Password cases
            .addCase(changePasswordUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(changePasswordUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(changePasswordUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Current user cases
            .addCase(currentUser.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Delete user admin cases
            .addCase(deleteAdmin.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(deleteAdmin.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(deleteAdmin.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Update password cases
            .addCase(updatePassword.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Get all user cases
            .addCase(getUserAdmin.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(getUserAdmin.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(getUserAdmin.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })


            // Get single user cases
            .addCase(getSingleUserAdmin.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(getSingleUserAdmin.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload;
                state.success = true
            })
            .addCase(getSingleUserAdmin.rejected, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = action.payload.error
                state.success = false
            })
    }
});

export const { resetState } = userSlice.actions
export default userSlice.reducer;