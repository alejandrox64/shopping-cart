import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mail: "",
  name: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.mail = action.payload.mail;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    unsetUser: (state) => {
      state.mail = "";
      state.name = "";
      state.password = "";
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
