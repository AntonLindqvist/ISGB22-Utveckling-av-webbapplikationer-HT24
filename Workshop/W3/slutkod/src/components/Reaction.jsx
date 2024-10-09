import { Component  } from "react";

class Reaction extends Component {
  
  render() {
    //Vi skapar upp lokala variabler för våra properties
    let {id, name, image} = this.props;
    //Samma sak som:
      //let id = this.props.id;
      //let name = this.props.name;


    //Skapar upp gränssnittet för varje pokemon i listan
    //OBS. Detta är enbart en pokemon.
    return (
        <div className="pokemon-card">
          <img className="pokemon-card-image" alt="Pokemon" src={image}/>
          <p className="pokemon-card-id"># {id}</p>
          <p className="pokemon-card-name">{name}</p>
          <a href="#" className="pokemon-card-view">View</a>
        </div>
        


    );
  }
}

export default Reaction;