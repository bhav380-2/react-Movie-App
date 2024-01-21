
function MovieCard(props) {

    // const {movies:data} = props;  // we can name movies to data and then we can use data

    const { title, plot, price, rating, stars, fav, cart } = props.movies;
    const { movies, addStars, decStars, toggleFav, toggleCart } = props;
    return (

        <div className="main">
            <div className="movie-card">
                <div className="left">

                    <img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" />

                </div>

                <div className="right">

                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">

                            <img onClick={() => decStars(movies)} className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" />

                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />

                            <img className="str-btn" alt="increase"
                                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                onClick={() => addStars(movies)} />

                            <span className="starCount">{stars}</span>

                        </div>
                        {/* {fav?<button onClick={handleFav} className="unfavourite-btn">Un-Favourite</button>: <button onClick={handleFav} className="favourite-btn">Favourite</button>} */}
                        <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={() => toggleFav(movies)}>{fav ? "unfavourite" : "favourite"}</button>
                        <button className={cart ? "remove-cart-btn" : "cart-btn"} onClick={() => toggleCart(movies)}>{cart ? "Remove from cart" : "Add to cart"}</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCard;