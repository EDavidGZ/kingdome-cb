import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
    name: 'questionSlices',
    initialState: {
        result: 1,
        questionList: [],
        level: "beginner"
    },
    reducers: {
        setResult: (state, action) =>{
            state.result = action.payload.result;
        },

        addQuestionList: (state, action) => {
            state.questionList.push(action.payload);
        },

        setLevel: (currenteSlice, action) => {
            currenteSlice.level = action.payload.level;
        }

    }
})
export const  questionReducer = questionSlice.reducer
export const {setResult, addQuestionList, setLevel} = questionSlice.actions
// export default questionSlice
