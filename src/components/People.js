import {Component} from "react";
import "../App.css"
class People extends Component {
    constructor(){
        super()
        this.state= {
            people:[]
        }
    }

    fetchPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                people: data
                
            });
        });
    };
   
    handleInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.fetchPeople()
        
    }
     
    
    render() {
        
      return <people>
      
      <h1>Search for a Person</h1>
           
        <form onSubmit={this.handleSubmit}>
            <input 
             onInput={this.handleInput}
            name="name" 
            id="name"
            placeholder="Find Your Person"
            
                />
            
            <button id="button" type="Submit" >Submit</button>   
    

        </form>
      </people>;
    }
  }
  
  export default People;