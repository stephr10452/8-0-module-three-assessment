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
                people: data,
            });
        });
    };
    handleSubmit = (event) =>{
        event.preventDefault();
    }
    handleInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount = () =>{
        this.fetchPeople()
    }
     
    
    render() {
        let chosenPerson = this.state.people.map((person)=>{
         return person.name
        })
      return <people>
      
      <h1>Search for a Person</h1>
           
        <form onSubmit={this.handleSubmit}>
            <input  onInput={this.handleInput}
            name="comment" 
            id="comment"
            placeholder="Find Your Person"
            value={chosenPerson} 
                />
            
            <button id="button" type="Submit" >Submit</button>   
    

        </form>
      </people>;
    }
  }
  
  export default People;