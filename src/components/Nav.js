import { Component } from "react";
import "../App.css"
import {Link} from "react-router-dom"

class Nav extends Component{
    render (){
      return <div className="Nav">

          <Link to="/">
              
              <img 
              className="logo"
               src="https://i.pinimg.com/originals/ce/03/c9/ce03c9ababca7546626d6abefa1b5e24.gif?fbclid=IwAR14IEcFq0XRCVnMDvhocObzY8FGfneNejC6KF4WpGN_npJgf8L1M3n8u94"
               alt="movie logo"
             />
             

          </Link>
          <Link to="/movies" >Movies</Link>
          <Link to="/people">People</Link>
          <Link to="locations">Locations</Link>

      </div>
    }
}
export default Nav