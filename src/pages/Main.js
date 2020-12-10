import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import ArtistInfo from '../components/ArtistInfo';

function Main (props) {
    const [artist, setArtist] = useState("")

    useEffect(()=>{
        const token = props.location.hash.split(/=|&/)[1]
        localStorage.setItem("token", token)
    },[])

  return (
    <Container className="card mt-5 justify-content-center">
        <SearchForm setArtist={setArtist}/>
        <ArtistInfo artist={artist}/>
    </Container>
  );
}

export default Main ;