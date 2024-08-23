import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
    setResult, addQuestionList, setLevel
} from "../question-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  matcher: isAnyOf(setResult, addQuestionList, setLevel),
  // predicate: (action) => {
  //     return action.type === "expenseSlice/addExpenseAction" || action.type === "expenseSlice/setIncomeAction"
  // },
  effect: (action) => {
    console.log("Action", action);
  },
});
