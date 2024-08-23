import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";
import Home from "./home/Home";
import SignIn from "./__auth/SignIn";
import LevelTest from "./tests";
import Test from "./tests/LevelTest.jsx";
import WordChecker from "./tests/WordChecker.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import ScoreView from "./tests/ScoreView.jsx";
import FirstPage from "./pages/Pages-beginners/FirstPage.jsx";
import TenseTest from "./pages/Pages-beginners/activities/TenseTest.jsx";
import Topics from "./pages/Pages-beginners/Topics.jsx";
import PuzzleGame from "./pages/Pages-beginners/activities/PuzzleGame.jsx";
import SecondPage from "./pages/Pages-beginners/SecondPage.jsx";
import SecondActivity from "./pages/Pages-beginners/activities/SecondActivity.jsx";
import ThirdActivty from "./pages/Pages-beginners/activities/ThirdActivty.jsx";
import ThirdPage from "./pages/Pages-beginners/ThirdPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/level-test" element={<LevelTest />} />
              <Route path="/test-one" element={<Test />} />
              <Route path="/test" element={<WordChecker />} />
              <Route path="/score" element={<ScoreView />} />
              {/* begginers */}
              <Route path="/topics-first-book" element={<Topics />} />
              <Route path="/firstpage-firstbook" element={<FirstPage />} />
              <Route path="/secondpage-firstbook" element={<SecondPage />} />
              <Route path="/thirdpage-firstbook" element={<ThirdPage />} />
              <Route path="/tensetest-firstbook" element={<TenseTest />} />
             {/* activities */}
              <Route path="/PuzzleGame-firstbook" element={<PuzzleGame />} />
              <Route path="/SecondActivity-firstbook" element={<SecondActivity />} />
              <Route path="/ThirdActivty-firstbook" element={<ThirdActivty />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
