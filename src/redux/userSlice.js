import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      return userData;
    } catch (error) {
      console.log("userSlice line 21 ",error);
      throw error;
    }
  }
);

const initialState = {
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload.toLowerCase();
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    // setLogin: (state) => {
    //   if (
    //     state.email === state.users.userEmail &&
    //     state.password === state.users.userpassword
    //   ) {
    //     console.log(true);
    //     state.isAuth = true;
    //   } else {
    //     console.log(false);
    //     state.isAuth = false;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        (state.isAuth = false), (state.isLoading = true);
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.isAuth = true),
          (state.isLoading = false),
          (state.user = action.payload.user),
          (state.token = action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        (state.isAuth = false),
          (state.isLoading = false),
          (state.error = action.error.message);
      });
  },
});

export const { setEmail, setPassword, setIsLoading } =
  userSlice.actions;
export default userSlice.reducer;
