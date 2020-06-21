import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading><h4>{dish.name} - ${dish.price}</h4></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {
        var commentList = comments.map(comment => {
            return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    <br /><br />
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                    <CommentForm />
                </ul>
            </div>
        );
    }


    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>     
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />    
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


//          CommentForm
// кнопка Comments яка викликається в RenderComments і видає modal форму для заповнення коментаря для страви

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len); // <= - less than ..
    const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
   
    constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    handleOnChange = value => {
        console.log(value);
        this.setState({ raiting: value }, () => {
            console.log(this.state.raiting);
        });
    };

    handleSubmit(values) {
        console.log('Currnet State is: ' + JSON.stringify(values));
        alert('Currnet State is: ' + JSON.stringify(values));
    }


  render() {
    return (
      <div>
        <Button className="btn" onClick={this.toggle}><i class="fa fa-pencil"></i> Submit Comment</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.className}>
                <ModalHeader toggle={this.toggle} close={this.closeBtn}>Submit Comment</ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-9'>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            
                            <Row className='form-group'>
                                  <Label htmlFor='raiting' md={8}> Raiting</Label>
                                  <Control.select model=".raiting" name="raiting" className='form-control'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                            </Row>
                            <Row className='form-group'   //Цей тег FormGroup дозволяє використовувати bootstrap grid всередині себе>
                            >
                                    <Label htmlFor='firstname' md={12}>Your Name</Label>
                                    <Control.text model='.firstname' type='text' id='firstname' name='firstname' 
                                        placeholder='First Name' 
                                        className='form-control' 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors 
                                        className='text-danger'
                                        model='.firstname'
                                        show='touched'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters!',
                                            maxLength: 'Must be less or equal than 15 characters!'
                                        }}
                                    />
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="message" md={8}>Your Comment</Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="5"
                                        className='form-control' />
                            </Row>
                            <ModalFooter className='form-group text-left'>
                                    <Button type="submit" color="primary">Submit Comment</Button>
                            </ModalFooter>
                        </LocalForm>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
      </div>
    );
  }
}



export default DishDetail;