import React from 'react';
import { Card, Image } from 'react-bootstrap';


function ArtistInfo({artist}) {

  return (
        <Card style={{color: "white"}} className="card justify-content-center">
            <Card.Header>Your Artist is:</Card.Header>
            <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Image variant="top" src={artist.picture_medium} />
                <Card.Text>
                Listen to the best tracks on <a href={artist.link}>Deezer</a>
                </Card.Text>
            </Card.Body>
        </Card>
  );
}

export default ArtistInfo;