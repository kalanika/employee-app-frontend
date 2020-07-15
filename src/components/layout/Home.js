import React,{useContext} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import { Button } from 'reactstrap';


const Home=()=>{
   
    const {loginWithRedirect}=useAuth0();
    

    return(
        <Button onClick={loginWithRedirect}>Login</Button>
    );

}

export default Home;