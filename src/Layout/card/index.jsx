import React from 'react';
import pik1 from '../../Assets/Images/Card/book.jpeg'
import pik2 from '../../Assets/Images/Card/geoBox.jpg'
import pik3 from '../../Assets/Images/Card/waterbottle.jpg'
import pik4 from '../../Assets/Images/Card/pen.jpg'

const CardLayout = () => {
    return (
        <>
            <section id='card'>
                <div className="card-body">
                    <div className="cardItems">
                        <div className="cardHeading"> School Items</div>
                        <div className="cardProducts">
                            <div className="product">
                                <div className="product-pic">
                                    <img src={pik1} alt="" />
                                </div>
                                <div className="product-info">
                                    <p>This is a Book</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-pic">
                                    <img src={pik2} alt="" />
                                </div>
                                <div className="product-info">
                                    <p>This is a Geomatri box</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-pic">
                                    <img src={pik3} alt="" />
                                </div>
                                <div className="product-info">
                                    <p>This is a Water Bottle</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-pic">
                                    <img src={pik4} alt="" />
                                </div>
                                <div className="product-info">
                                    <p>This is a Pen</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default CardLayout;