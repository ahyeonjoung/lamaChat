import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import JoinRoom from "./components/JoinRoom/JoinRoom";
import Chat from "./components/Chat/Chat";
import UploadPage from "./components/pages/upload/UploadPage"
import MainPage from "./components/pages/main/MainPage"
import ChatPage from "./components/pages/chat/ChatPage";

// 1. Router 경로 설정
const App = () => (
  <Router>
    <Switch>
     <Route exact path="/" component={MainPage } />
    <Route path="/chat" component={ChatPage} />
    <Route exact path="/upload" component={UploadPage } />
    </Switch>
  </Router>
);

export default App;
