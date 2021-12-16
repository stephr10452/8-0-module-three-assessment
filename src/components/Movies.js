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
      return <div className="Movies">
      
      <h1>Select a Movie</h1>

      <select>
          <option></option>
          {dropDown}
      </select>
      </div>
    }
  }
  
  export default Movies;