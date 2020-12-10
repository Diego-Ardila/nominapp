import React, {useState} from 'react';
import { Form, Button, Card, Spinner, Row, Col } from 'react-bootstrap';
import { Formik } from "formik";
import { Trash } from 'react-bootstrap-icons';
import * as Yup from "yup";
import Axios from 'axios';
import swal from 'sweetalert'


const formSchema = Yup.object().shape({
    comment: Yup.string().required("Required Field")   
  })


function Comments ({artist}) {
    const [comments, setComments] = useState([])
    const token = localStorage.getItem("token")

    const handleSubmit = (values, actions) => {
        Axios({
            method:"POST",
            url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artist.id}/comments?access_token=${token}&comment=${values.comment}`,
          }).then(data =>{
            const newComment = {
                text: values.comment,
                id: data.data.id
            }
            setComments(prevComments =>{
                return prevComments.concat(newComment)
            } )
            actions.setSubmitting(false)
          }).catch(err =>{
            swal("error", `${err}`, "error")
            actions.setSubmitting(false)
          })
    }

    const handleDelete = (id) => {
        return () => {
            Axios({
                method:"DELETE",
                url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/comment/${id}?access_token=${token}`,
            }).then(data =>{
                console.log(data)
                const newComments = comments.filter(comment => {
                    return comment.id !== id
                })
                setComments(newComments)
            }).catch(err => {
                swal("error", `${err}`, "error")
            })
        }
    }
  return (
        <Card>
            <Card.Body  style={{color:"white", height: '16rem', overflow:"auto" }}>
                {
                    comments.map( (comment) =>{
                    return (
                    <Row key={comment.id} className="comment mt-3 p-2">
                        <Col lg={8} className="text-left">{comment.text}</Col>
                        <Col lg={4} className="justify-content-rigth"><Button onClick={handleDelete(comment.id)} variant="outline-primary"><Trash/></Button></Col>
                    </Row>
                    )})
                }
            </Card.Body>
            <Card.Footer>
            <Formik
                initialValues={{comment: ""}}
                validationSchema = {formSchema}
                onSubmit = {handleSubmit}>
                    {({handleSubmit, handleChange, values, isSubmitting, touched, isValid, errors})=>(
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label style={{color:"white"}}>Leave your comment</Form.Label>
                            <Form.Control name="comment" onChange={handleChange} value={values.comment} className={touched.comment && errors.comment ? "is-invalid" : null} type="text" placeholder="Enter the name of your favourite comment" />
                            {touched.comment && errors.comment ? (
                                        <div style={{color:"white"}} className="error-message">{errors.comment}</div>
                                    ): null}
                            <Form.Text className="text-muted">
                            Your comment is going to be saved in your Deezer account.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">
                            {isSubmitting ? <Spinner animation="border" variant="primary" size="sm" /> : "Send"}
                        </Button>
                    </Form>
                )}
            </Formik>
            </Card.Footer>
        </Card>
  )
}

export default Comments ;