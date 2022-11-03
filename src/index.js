import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InviteCode from "./pages/InviteCode";
import MakeGroup from "./pages/MakeGroup";
import Oauth from "./pages/ouath";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  RecoilRoot,
  atom,
  selector,
  userRecoilState,
  useRecoilValue,
} from "recoil";
import { Detail } from "./pages/detail";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import GroupSetting from "./component/GroupSetting";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={window.location.pathname}
          classNames="pageSlider"
          timeout={500}
        >
          <Routes>
            <Route path="/oauth" element={<Oauth />}></Route>
            <Route path="/" element={<App />}>
              <Route path="/InviteCode" element={<InviteCode />} />
              <Route path="/MakeGroup" element={<MakeGroup />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/GroupSetting/:id" element={<GroupSetting />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
reportWebVitals();
