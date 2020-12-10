import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import ArtistInfo from '../components/ArtistInfo';
import Comments from '../components/Comments';

function Main (props) {
    const [artist, setArtist] = useState("")

    useEffect(()=>{
        const token = props.location.hash.split(/=|&/)[1]
        localStorage.setItem("token", token)
    },[])

  return (
    <Container className="card mt-5 justify-content-center">
        <SearchForm setArtist={setArtist}/>
        {
          artist !== "" 
            && 
          <Row className="justify-content-center">
            <Col md={10} lg={5}>
              <ArtistInfo artist={artist}/>
            </Col>
            <Col md={10} lg={7}>
              <Comments artist={artist}/>
            </Col>
          </Row>
        }
    </Container>
  );
}

export default Main ;