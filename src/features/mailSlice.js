import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        selectedMail: null,
        sendMessageisOpen: false,

    },
    reducers: {
        selectmail: (state, action) => {
            state.selectedMail = action.payload;


        },
        openSendMessage: (state) => {

            state.sendMessageisOpen = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageisOpen = false;
        },

    },

});

export const { selectmail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail
export const selectsendMessageisOpen = (state) => state.mail.sendMessageisOpen;



export default mailSlice.reducer;
