import React from "react";
import { useHistory } from "react-router-dom";//importing useHistory to get the history object from client side
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = (appState) => {

    //redirect to the page when you login
    history.push(appState?.returnTo || window.location.pathname);
  };
//Auth0Provider this is how we giving access to auth0 values to any child component in our app
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/dashboard`}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;