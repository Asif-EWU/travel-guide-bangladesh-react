import React from 'react';
import CarouselImage1 from '../../images/carousel/carousel1.jpg';
import CarouselImage2 from '../../images/carousel/carousel2.jpg';
import CarouselImage3 from '../../images/carousel/carousel3.jpg';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 headtext">
                    <h1>Travel Easy &amp; Safe</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt autem obcaecati unde magnam, sapiente recusandae cupiditate. Fugiat explicabo ratione accusantium itaque assumenda quam placeat sed iusto aliquid corrupti quos aut dolores amet optio dolorum nobis dolor, enim in inventore temporibus nam ut. Odit rerum fugiat assumenda quo. Adipisci perspiciatis reiciendis animi eveniet soluta facere laudantium consectetur est porro veniam architecto suscipit commodi, sequi minus velit perferendis possimus quas dolor quo voluptas! Itaque libero nostrum numquam quasi aliquid error totam? Aliquam non voluptate repellat placeat praesentium ipsam, rerum commodi molestias eaque nemo perspiciatis. Amet illum facilis, cumque nostrum ullam soluta deserunt?
                    </p>
                </div>

                <div className="col-md-7">
                    <div id="carouselExampleControls" className="carousel carousel1 slide orange-bg" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row align-items-center ">

                                    <img src={CarouselImage1} className="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="row align-items-center">

                                    <img src={CarouselImage2} className="d-block w-100" alt="..." />


                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row align-items-center">


                                    <img src={CarouselImage3} className="d-block w-100" style={{width:"500px"}} alt="... " />
                                </div>

                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;