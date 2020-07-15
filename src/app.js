import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer,Loading } from "./components";
import { Home, Profile, ExternalApi, HomePageView } from "./views";

import "./app.css";

const App = () => {
//needs to add loading logic to our app component that states wait to render anything untill our SDKs finished loading
  const {isLoading} =useAuth0();

  if(isLoading){
    return <Loading/>
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="/dashboard" component={HomePageView}/>
        
        </Switch>
        
      </Container>
      <Footer />
    </div>
  );
};

export default App;
