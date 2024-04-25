import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Testimonials = ({ testimonials }) => {
    return (
        <>
            <div className="testimonials-cards">
                {
                    testimonials.map(( testimonial, index ) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-rating">
                                Rating <span>
                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <FontAwesomeIcon
                                                key={index}
                                                icon={faStar}
                                                className={index < testimonial.rating ? "secondary-color" : "primary-color"}
                                            />
                                        ))
                                    }
                                </span>
                            </div>
                            <div className="testimonial-info">
                                <img className="testimonial-image" src={testimonial.image} alt="person giving the testimonial" />
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                            </div>
                            <div className="testimonial-text">{testimonial.text}</div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Testimonials;
