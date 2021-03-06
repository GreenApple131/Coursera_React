import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


    function RenderDish({dish}) {
        return (
            <FadeTransform in 
                transformProps={{ exitTransform: 'scale(0.5)translateY(-50%)' }} >
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading><h4>{dish.name} - ${dish.price}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }

    function RenderComments({ comments, postComment, dishId }) {
        var commentList = comments.map(comment => {
            return (
                <Fade in>
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
                </Fade>
            );
        });
        return (
            <Stagger in>
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                        <CommentForm dishId={dishId} postComment={postComment} />
                    </ul>
                </div>
            </Stagger>
        );
    }


    const DishDetail = (props,{comments, postComment, dishId}) => {
        if (props.isLoading) {
            return(
                <div className='container'>
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if  (props.errMess) {
            return(
                <div className='container'>
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }

        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} 
                                postComment={props.postComment} 
                                dishId={props.dish.id} />
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


  handleSubmit(values) {
    this.toggle();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
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
                                    <Label htmlFor='author' md={12}>Your Name</Label>
                                    <Control.text model='.author' type='text' id='firstname' name='firstname' 
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
                                <Label htmlFor="comment" md={8}>Your Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="5"
                                        className='form-control'
                                        validators={{ required }} />
                                    <Errors className="text-danger" model=".comment" 
                                        show="touched" 
                                        messages={{ required: 'Required'}} />
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