import {Component} from "react";
import "../App.css"
class People extends Component {
    constructor(){
        super()
        this.state= {
            people:[],
            person:""
        }
    }
    componentDidMount(){
        this.fetchPeople();
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
            person: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.fetchPeople()
        
    }
     
    
    render() {
        let onePerson = this.state.people.map((person)=>{
            if (person.name=== this.state.person) {
                return (
                <div>
                 <h3>Name:{person.name}</h3>
                 <h3>Age:{person.age}</h3>
                 <h3>Gender:{person.gener}</h3>
                </div>
                )
                
            }
        })
        
      return <people>
      
      <h1>Search for a Person</h1>
           
        <form onSubmit={this.handleSubmit}>
            <input 
            input onChange={this.handleInput}

            name="name" 
            id="name"
            placeholder="Find Your Person"
            
                />
            
            <button id="button" type="Submit" >Submit</button>   
    

        </form>
        {onePerson}
      </people>;
    }
  }
  
  export default People;