import '../styles/App.css';
import seventeen from './apolloClient'
import {ApolloProvider} from "@apollo/client";
import Seven from "./member/seven";
import{useState}from 'react';
import Album from "./album/album";

const App = () => {
    const [member,setAlbum]=useState(true);

    const goMember=()=>{
        setAlbum(true)
    }
    const goAlbum=()=>{
        setAlbum(false)
    }


    return (
        <ApolloProvider client={seventeen}>
            <h1 className="main-title">Using-GraphQL</h1>
            <h2 className="sub-title" onClick={goMember}>Member</h2>
            <h2 className="sub-title" onClick={goAlbum}>Album</h2>
            {member?
                <Seven/>
            :
                <Album/>
            }
        </ApolloProvider>
    )
}

export default App;
