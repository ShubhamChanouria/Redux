import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUSer(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action){}
  },
});
console.log(userSlice.actions);
export default userSlice;

