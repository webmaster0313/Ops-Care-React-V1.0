import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import PrivateRoute from "./Helper/Auth/privateRoute.js";

// Components
import NavHeader from "./Header.js";

import {
  Messages,
  MessageProvider,
  MessageContext,
} from "./Helper/Message/MessageRenderer";
import { AuthContext, AuthProvider, useAuth } from "./Helper/Auth/auth";
import { useIsAuthenticated } from "@azure/msal-react";

// Pages
import Crane from "./pages/700T/700THome.js";
// import Home from "./pages/Home/Home";
import Login from "./pages/Account/Login.js";
import AssetManagement from "./pages/AssetManagement/Home.js";
import Operation from "./pages/Operation/Home.js";
import {LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,} from 'recharts';

const pdata = [
    {
        name: 'MongoDb',
        fees: 120
    },
    {
        name: 'Javascript',
        fees: 12
    },
    {
        name: 'PHP',
        fees: 60
    },
    {
        name: 'Java',
        fees: 25
    },
    {
        name: 'C#',
        fees: 190
    },
    {
        name: 'C++',
        fees: 20
    },
];

function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <AuthProvider>
      <MessageProvider>
        {/* <Router basename={`/${process.env.REACT_APP_FRONTENDSUBDIR}`}> */}
        <Router>
          <MessageContext.Consumer>
            {({ messages, setMessages }) => {
              return <Messages setMessages={setMessages}></Messages>;
            }}
          </MessageContext.Consumer>
          {isAuthenticated && (
            <>
              <NavHeader />
            </>
          )}
          <main className="main">
            {/* <PrivateRoute path="/" exact component={Home} /> */}
            <PrivateRoute path="/700T" component={Crane} />
            <PrivateRoute path="/login" exact component={Login} />
            <PrivateRoute path="/assetmanagement" component={AssetManagement} />
            <PrivateRoute path="/operation" component={Operation} />
          </main>
        </Router>
      </MessageProvider>
    </AuthProvider>
  );
}

export default App;
