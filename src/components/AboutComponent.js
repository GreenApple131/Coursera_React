import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import {Fade,Stagger } from 'react-animation-components';


var imgStyle = {
  minWidth: "128px",
};


function RenderLeader({leaders, item}) {

        return(
            <Media className='row'>
                <Media className='col-md-3 push-md-3 ml-auto col-lg-2 push-lg-1'>
                    <Media style={imgStyle} object src={baseUrl + leaders.image} alt={leaders.image} />
                </Media>
                <Media body className='col-md-12 push-md-3 ml-auto col-lg-12 push-lg-1'>
                    <Media heading>
                        {leaders.name}
                        <br />
                    </Media>
                    <Media small> 
                        {leaders.designation}
                        <br />
                    </Media>
                    <br />
                    {leaders.description}
                    <Media className='mb-4' />
                </Media>
            </Media>
        );

}


function About(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <div>
                <Fade in> <RenderLeader leaders={leader} /> </Fade>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="container row row-content">
                <div className="col-12 row">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12 row">
                    <Media list>
                        <Stagger in>
                            <br />
                            {leaders}
                        </Stagger>                        
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    