import {Component} from "react";
import "../App.css"
class Movies extends Component {
    constructor(){
        super()
        this.state ={
            movies:[],
            movieselected:null

        }
    }

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                movies: data,
            });
        });
    };

    componentDidMount = () => {
      this.fetchMovies()
    }
    handleDropDown = (event) =>{
        this.setState({
            movieselected:event.target.value
        })
    }

    
    render() {
        let dropDown = this.state.movies.map((movie)=>{
            return <option>{movie.title}</option>;
        })
        let currentMovie = this.state.movies.find((movie)=>{
            return movie.title === this.state.movieselected
        })
      return <movies>
      
       <h1>Select a Movie</h1>

       <select onChange={this.handleDropDown}>
          <option></option>
          {dropDown}
       </select>
      <h3> Title:{currentMovie ? currentMovie.title : null} </h3>
        <h3>Release Date:{currentMovie ? currentMovie.release_date : null} </h3>
       <h3> Description:{currentMovie ? currentMovie.description : null} </h3>
      </movies >
    }
  }
  
  export default Movies;