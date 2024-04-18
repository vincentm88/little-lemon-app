import saladImage from "../images/greek salad.jpg";
import bruchettaImage from "../images/bruchetta.svg";
import lemonDesertImage from "../images/lemon dessert.jpg";
import testimonial1Image from "../images/testimonial1.jpg";
import testimonial2Image from "../images/testimonial2.jpg";
import testimonial3Image from "../images/testimonial3.jpg";
import testimonial4Image from "../images/testimonial4.jpg";
import chefImage from "../images/restaurant chef B.jpg";
import "./Main.css";
import "./Cards.css";

function Main() {
    const testimonials = [
        {
            name: "Sophia Mccoy",
            image: testimonial1Image,
            text: "I've been looking for a hand-made lemonade recipe that incorporates ingredients from around the world. This is one of my favorites!",
            rating: 5
        },
        {
            name: "Tamara Larson",
            image: testimonial2Image,
            text: "Exceptional Greek-Mediterranean flavors! The moussaka is a must-try—a delectable blend of eggplant, ground beef, and creamy béchamel. Five stars!",
            rating: 5
        },
        {
            name: "Hunter Gomez",
            image: testimonial3Image,
            text: "Outstanding Greek-Mediterranean cuisine! Don't miss the spanakopita—flaky pastry filled with savory spinach and feta. Five-star dining at its finest!",
            rating: 5
        },
        {
            name: "Gabriella Pena",
            image: testimonial4Image,
            text: "Culinary delight! The gyro platter is outstanding—tender, flavorful meat with creamy tzatziki and warm pita. A true taste of Greece. Five-star dining experience!",
            rating: 5
        }
    ]

    const specials = [
        {
            title: "Greek salad",
            price: "$12.99",
            image: saladImage,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with dried oregano and rosemary",
            link: "#",
        },
        {
            title: "Bruchetta",
            price: "$5.99",
            image: bruchettaImage,
            description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            link: "#",
        },
        {
            title: "Lemon Dessert",
            price: "$5.00",
            image: lemonDesertImage,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            link: "#",
        }
    ]
    return (
        <main>
            <div className="container">
                <section className="specials">
                    <div className="specials-header">
                        <h2>This weeks specials!</h2>
                        <button>Online Menu</button>
                    </div>
                    <div className="cards">
                        {
                            specials.map((special) => (
                                <div className="card">
                                    <img src={special.image} alt="salad" height={200} />
                                    <div className="card-info">
                                        <div className="card-title-row">
                                            <h3 className="card-title">{special.title}</h3>
                                            <p className="card-price">{special.price}</p>
                                        </div>
                                        <p className="card-text">{special.description}</p>
                                    </div>
                                    <button className="card-button">Order a delivery</button>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
            <div className="container testimonials">
                <section className="testimonials">
                    <h2 className="testimonials-header">Testimonials</h2>
                    <div className="testimonials-cards">
                        {
                            testimonials.map((testimonial) => (
                                <div className="testimonial-card">

                                    <div className="testimonial-rating">Rating <span>{testimonial.rating}</span></div>
                                    <div className="testimonial-info">
                                        <img className="testimonial-image" src={testimonial.image} alt="person giving the testimonial" />
                                        <h3 className="testimonial-name">{testimonial.name}</h3>
                                    </div>
                                    <div className="testimonial-text">{testimonial.text}</div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="about">
                    <div className="about-text">
                        <h1 className="about-title">Little Lemon</h1>
                        <h2 className="about-subtitle">Chicago</h2>
                        <p className="about-description">
                            Nestled in the heart of Chicago, our family-owned Mediterranean restaurant
                            brings a taste of tradition with a modern flair. With a passion for culinary
                            heritage, we infuse classic recipes with contemporary creativity, offering an
                            unforgettable dining experience. From savory moussaka to succulent kebabs, each
                            dish reflects our commitment to authenticity and innovation. Join us for a journey
                            through the vibrant flavors of the Mediterranean, right here in the Windy City.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={chefImage} alt="Chef in the kitchen" />
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Main;