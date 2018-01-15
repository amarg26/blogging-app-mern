//client/components/Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();

this.state = {
        title: '',
        auther: '',
        description: '',
        date: '',
        comments: '',
        messageFromServer: '',
        formdata:[],
        blogcomment:[],
        formComments:[],
        modalIsOpen: false
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentsSubmit=this.handleCommentsSubmit.bind(this);
    this.insertComments=this.insertComments.bind(this);
    this.onClick = this.onClick.bind(this);
    this.insertNewBlog = this.insertNewBlog.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addComments=this.addComments.bind(this);
    }
    componentWillMount() {
    Modal.setAppElement('body');
 }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        title: '',
        auther: '',
        description: '',
        date: '',
        comments: '',
        messageFromServer: ''
      });
    }

onClick(e) {
      this.insertNewBlog(this);
    }
insertNewBlog(e) {
      axios.post('/insert',
        querystring.stringify({
          title: e.state.title,
          auther: e.state.auther,
          description: e.state.description,
          date: e.state.date
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((response)=> {
        e.setState({
          messageFromServer: response.data
        });
      });
    }

insertComments =() => {
      axios.post('/insert',
        querystring.stringify({
         comments:this.state.comments
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((response)=> {
        this.setState({
          messageFromServer: response.data
        });
      });
    }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const formItem = {
      title: this.state.title,
      auther: this.state.auther,
      description: this.state.description,
      date: this.state.date,
      comments:this.state.comments
    };

    if (
      this.state.title === "" ||
      this.state.auther === "" ||
      this.state.description === ""
    ) {
      alert("Please fill mandatory filed");
    } else {
      this.setState(prevState => ({
        formdata: prevState.formdata.concat(formItem)
      }));
      alert("form submitted");
    }
    event.preventDefault();
  }

  handleCommentsSubmit(event) {
         const commentItems = {comments:this.state.comments};
         this.setState(prevState => ({
        formComments: prevState.formComments.concat(commentItems)
      }));
    }


 addComments(event) {
    this.setState({ comments: "" });
    const comments = { comments: this.state.comments };
     this.setState(prevState => ({
      comments: prevState.comments.concat(comments)
    }), () => {
        this.insertComments();
    })
  }

render() {
{   
      return (
       

      <Grid> 
        <Row>
               <Grid> 
                <Row>
                  <Col md={12} >
                  <h2 className="textCenter">Blogging Application</h2>
                  </Col>
                </Row>
                </Grid>
          <Col md={6}>
            <Form horizontal onSubmit={this.handleSubmit} >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={3}>
                  Title
                </Col>
                <Col md={6}>
                  <FormControl
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={3}>
                  Auther
                </Col>
                <Col md={6}>
                  <FormControl
                    type="textarea"
                    placeholder="Auther"
                    name="auther"
                    value={this.state.auther}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} md={3}>
                  Description
                </Col>
                <Col md={6}>
                  <FormControl
                    componentClass="textarea"
                    style={{ height: 200 }}
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} md={3} name="ControlLabel">
                  Date
                </Col>
                <Col md={6}>
                  <FormControl
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col mdOffset={5} md={6}>
                  <Button type="submit" onClick={this.onClick}>Save</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col md={6}>
            <div>
              {this.state.formdata.map((item, i) => (
                <div key={i}>
                  <div>
                    <h2>{item.title}</h2>
                  </div>
                  <div>
                    <h4>{item.auther}</h4>
                  </div>
                  <div>{item.description}</div>
                  <div>
                    <strong>Date Published:</strong>
                    {item.date}
                  </div>
                  <div>

                  <Form  onSubmit={this.handleCommentSubmit}>
                    <FormGroup>
                      
                      <Col md={12}>
                        <FormControl
                          componentClass="textarea"
                          style={{ height: 50 }}
                          placeholder="Comment"
                          name="comment"
                          value={this.state.comment}
                          onChange={this.handleChange}
                         
                        />
                      </Col>
                    </FormGroup>
             
                    <FormGroup>
                <Col mdOffset={5} md={6}>
                  <Button
                      
                      onClick={e => this.addComments(e, i)}
                      style={{ marginTop: 50 }}
                    >
                       Add Comment
                     </Button>
                </Col>
              </FormGroup>


                  </Form>
                    {this.state.blogcomment.map((items, i) => (
                      <Row key={i}>
                        <Col md={12}>
                          <p>{items.comment}</p>
                        </Col>
                      </Row>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Grid>
 )
   }

   }
}
export default Add;