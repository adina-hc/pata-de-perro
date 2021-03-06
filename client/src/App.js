import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import Aboutus from "./pages/Aboutus";
import Profile from "./pages/Profile";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import { Container } from "./components/GlobalElements/Container";
import Activities from "./pages/Activities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import GlobalStyle from "./components/GlobalElements/GlobalStyle";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isOpenMenu,setIsOpenMenu] = useState(false);

  const toggleNav = () =>{
    console.log("AS");
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <Container>
          <StoreProvider>
          <Sidebar isOpenMenu={isOpenMenu} toggleNav={toggleNav}/>
            <Navbar  isOpenMenu={isOpenMenu}  toggleNav={toggleNav}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/activities/:id" component={Detail} />
              <Route exact path="/activity/:id" component={Detail} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/aboutus" component={Aboutus} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
          <Footer/>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
