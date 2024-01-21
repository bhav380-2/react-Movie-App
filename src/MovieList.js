import {Component} from "react";
import MovieCard from "./Moviecard"

class MovieList extends Component{

    constructor(){
        super();
        this.state= {

            movies:[
                {
                    id:1,
                    title: "The Avengers",
                    poster: "",
                    plot:"Supernatural powers shown in the movie",
                    price : 199,
                    rating: 8.9,
                    stars:0,
                    fav: false,
                    cart:false
                },
                {
                    id:2,
                    title: "Spiderman",
                    poster:"",
                    plot:"powers shown in the movie",
                    price : 229,
                    rating: 9.1,
                    stars:0,
                    fav: false,
                    cart:false
                },
                {
                    id:3,
                    title: "Batman",
                    poster: "",
                    plot:"djdjd in the movie",
                    price : 209,
                    rating: 9.9,
                    stars:0,
                    fav: false,
                    cart:false
                }
            ]
        }
        // this.addStars = this.addStars.bind(this);
    }


    handleIncStar = (movie)=>{

        const {movies} = this.state;

        const mid = this.state.movies.indexOf(movie);

        if(movies[mid].stars>=5){
            return;
        }

        movies[mid].stars  +=0.5;

        this.setState({
            movies:movies
        })
    }

    handleDecStar = (movie)=>{

        const{movies} = this.state;

        const mid = movies.indexOf(movie);

        if(movies[mid].stars<=0){

            return;
        }

        movies[mid].stars -=0.5;

        this.setState({
            movies:movies
        })
    }


    handleToggleFav = (movie)=>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;

        this.setState({
            movies:movies
        })
    }

    handleToggleCart = (movie)=>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].cart = !movies[mid].cart;

        this.setState({
            movies:movies
        })
    }

    render(){
        // const {title,plot,price,rating,stars,fav,cart,poster} = this.state.movies;
        const {movies} = this.state;
    
        return (
            <>
                {movies.map((movie)=> <MovieCard movies = {movie} 
                                     addStars = {this.handleIncStar}
                                     decStars = {this.handleDecStar}
                                     toggleFav = {this.handleToggleFav}
                                     toggleCart = {this.handleToggleCart}
                                     key = {movie.id}
                                     />)}
            </>
        )
    }
}

export default MovieList;