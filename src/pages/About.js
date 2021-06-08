import React, { useEffect } from 'react';
import './About.css'
import Header from '../components/Header';
import Footer from '../components/Footer';


function About({animation}) {
    useEffect(() => {
        document.title = "Ibrokhim Jalalov | About";
    }, [])
    return (
        <div className="about">
            <Header/>
            <h1 className="about__name">About Ibrokhim</h1>
            <h1 className="about__title">I am the person who is responsible for creating the Interactive User Interface</h1>
            <div className="about__textWrapper">
                <div className="about__textLeft">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nihil libero iure at sapiente maiores deserunt atque minus recusandae perspiciatis quae repudiandae unde nesciunt amet dolores rerum voluptas voluptatum, voluptatem nostrum eveniet. Quis, ad. Dignissimos error a iste ut inventore obcaecati amet voluptas sequi, accusantium provident, et quisquam optio id aut omnis iusto earum consequatur sit, qui corporis suscipit nobis. Fugiat, laborum modi fugit enim eum dignissimos repellendus possimus nihil excepturi soluta reiciendis a labore ea dolorum omnis deleniti error temporibus necessitatibus molestiae aliquam quam, sint ratione voluptatum eligendi. Earum nisi obcaecati hic quas architecto aspernatur quam, eligendi aut.</p>
                </div>
                <div className="about__textRight">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis nihil libero iure at sapiente maiores deserunt atque minus recusandae perspiciatis quae repudiandae unde nesciunt amet dolores rerum voluptas voluptatum, voluptatem nostrum eveniet. Quis, ad. Dignissimos error a iste ut inventore obcaecati amet voluptas sequi, accusantium provident, et quisquam optio id aut omnis iusto earum consequatur sit, qui corporis suscipit nobis. Fugiat, laborum modi fugit enim eum dignissimos repellendus possimus nihil excepturi soluta reiciendis a labore ea dolorum omnis deleniti error temporibus necessitatibus molestiae aliquam quam, sint ratione voluptatum eligendi. Earum nisi obcaecati hic quas architecto aspernatur quam, eligendi aut.</p>
                </div>
                
            </div>
            <Footer scrollAnimation={animation}/>
        </div>
    )
}

export default About
