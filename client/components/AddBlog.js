import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      auther: "",
      description: "",
      date: "",
      formdata: [],
      blogcomment: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      date: this.state.date
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
      //alert("form submitted");
    }
    event.preventDefault();
  }

  addComments(event) {
    this.setState({ comment: "" });
    const comments = { comment: this.state.comment };
    this.setState(prevState => ({
      blogcomment: prevState.blogcomment.concat(comments)
    }));
    //  alert("comment submitted");
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={3}>
                  Title
                </Col>
                <Col md={10}>
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
                <Col md={10}>
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
                <Col md={10}>
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
                <Col md={10}>
                  <FormControl
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col mdOffset={2} md={10}>
                  <Button type="submit">Save</Button>
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
                    <FormGroup>
                      <Col componentClass={ControlLabel} md={12}>
                        Add Comment
                      </Col>
                      <Col md={12}>
                        <FormControl
                          componentClass="textarea"
                          style={{ height: 100 }}
                          placeholder="Comment"
                          name="comment"
                          value={this.state.comment}
                          onChange={this.handleChange}
                        />
                      </Col>
                    </FormGroup>

                    <Button
                      bsStyle="primary"
                      onClick={e => this.addComments(e, i)}
                    >
                      Add Comment
                    </Button>

                    {this.state.blogcomment.map((items, i) => (
                      <div key={i}>
                        <Col md={12}>
                          <p>{items.comment}</p>
                        </Col>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AddBlog;