import React from 'react';
import { Container, Form, Button, Col, Spinner } from 'react-bootstrap';
import {Formik} from "formik";
import * as Yup from "yup";
import { Search } from 'react-bootstrap-icons';
import Axios from 'axios';
import swal from 'sweetalert'


const formSchema = Yup.object().shape({
    artist: Yup.string().required("Required Field")   
  })


function SearchForm ({setArtist}) {

    const handleSubmit = (values, actions) => {
        Axios({
            method:"GET",
            url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${values.artist}`,
          }).then(data =>{
            console.log(data.data.data[0])
            setArtist(data.data.data[0])
            actions.setSubmitting(false)
          }).catch(err =>{
            swal("error", `${err.response.data}`, "error")
            actions.setSubmitting(false)
          })
    }
  return (
        <Formik
            className="mt-5"
            initialValues={{artist: ""}}
            validationSchema = {formSchema}
            onSubmit = {handleSubmit}>
                {({handleSubmit, handleChange, values, isSubmitting, touched, isValid, errors})=>(
                <Form onSubmit={handleSubmit}>
                    <Form.Row sm={10} lg={8} className="p-3 ml-2 mr-2">
                        <Form.Group as={Col}>
                            <Form.Label style={{color:"white"}}>Search Artist</Form.Label>
                            <Form.Control name="artist" onChange={handleChange} value={values.artist} className={touched.artist && errors.artist ? "is-invalid" : null} type="text" placeholder="Enter the name of your favourite artist" />
                            {touched.artist && errors.artist ? (
                                        <div style={{color:"white"}} className="error-message">{errors.artist}</div>
                                    ): null}
                            <Form.Text className="text-muted">
                            we are going to bring the information about your artist.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-primary" size="md" type="submit">
                            {isSubmitting ? <Spinner animation="border" variant="primary" size="sm" /> : <Search/>}
                        </Button>
                    </Form.Row>
                </Form>
            )}
        </Formik>
  )
}

export default SearchForm ;