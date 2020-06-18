import React, { Component } from 'react';
import Menu from './/MenuComponent'; 

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => { // викликається стан даних з redux store
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

  }
}


class Main extends Component {

// цей конструктор прив'язує статичні дані до цього файлу(App.js) і робить можливим використання даних з цього файлу
    constructor(props) {
        super(props);
    }


    render() {

      const HomePage = () => {
        return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
        );
      }


      const DishWithId = ({match}) => {
        return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}

          />
        );
      }


      const AboutPage = () => {
        return(
          <About leaders={this.props.leaders} />
        );
      }


      return (
        <div className="Main">
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} />
            <Route exact path='/aboutus' component={AboutPage} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      );
    }
}

// цей withRouter конект з'єднує redux store із станами які можна там змінювати із react component
export default withRouter(connect(mapStateToProps)(Main)); 

