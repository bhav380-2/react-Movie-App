import {Component} from "react";

class MovieCard extends Component{
    
    render(){
        return (

            <div className="main">
                <div className="movie-card">
                    <div className="left">

                        <img alt="Poster" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Fm%2Fmarvels_the_avengers&psig=AOvVaw3gkB4itVVIite1oNk4D0z7&ust=1705811114643000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCG-d6P64MDFQAAAAAdAAAAABAH"/>

                    </div>

                    <div className="right">

                        <div className="title">The Avengers</div>
                        <div className="plot">Supernatural jdjdjdj</div>
                        <div className="price">Rs. 3883</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">star</div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default MovieCard;