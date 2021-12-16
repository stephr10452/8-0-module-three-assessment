import {Component} from "react";
import "../App.css"
class Locations extends Component {
    constructor(){
        super();
        this.state={
            locations:[],
            locationDisplay:false

        }
    }
    fetchLocation = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                locations: data,
            });
        });
    };
    componentDidMount(){
        this.fetchLocation();
    }
    handleLocationDisplay=()=>{
        this.setState({
            locationDisplay:true
        })
    }

    render() {
        let allLocations = this.state.locations.map((location)=>{
            return <div>
            <h3>Name:{location.name}</h3>
            <h3>Climate:{location.climate}</h3>
            <h3>Terrain:{location.terrain}</h3>

            </div>
          })
      return <locations>
      
      <h1>List of Locations</h1>
      <button onClick={this.handleLocationDisplay}>Show Locations</button>
      <aside className="location-list" style={{display:this.state.locationDisplay? "block":"none"}}>
      {allLocations}
      </aside>
       
      
      </locations>
    }
  }
  
  export default Locations;