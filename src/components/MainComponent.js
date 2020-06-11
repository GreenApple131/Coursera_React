import React, { Component } from 'react';
import Menu from './/MenuComponent'; 

import { DISHES } from '../shared/dishes'; // дані про страви(назва, ціна, опис...)
import { Switch, Route, Redirect } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


class Main extends Component {

// цей конструктор прив'язує статичні дані до цього файлу(App.js) і робить можливим використання даних з цього файлу
    constructor(props) {
        super(props);

        this.state = { 
          dishes: DISHES,
          comments: COMMENTS,
          leaders: LEADERS,
          promotions: PROMOTIONS
         };
    }

    render() {

      const HomePage = () => {
        return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
        );
      }


      const DishWithId = ({match}) => {
        return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comments) => comment.dishId === parseInt(match.params.dishId,10))}
          />
        );
      }


      return (
        <div className="Main">
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      );
    }
}

export default Main;
