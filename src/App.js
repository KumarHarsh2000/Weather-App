import './App.css';
import React,{Component} from "react";
import Show from "./Show";
const api = {
  key: "cf8aecda4a6f6f1485e0265060b978e3",
  base: "https://api.openweathermap.org/data/2.5/"
}
class App extends Component {
  constructor(props){
      super(props);

      this.state = {
          weather: "" ,
          query: "" ,
          press: "",
          humid: "",
          wind_speed: ""
      };
      this.search= this.search.bind(this);
    }
 search(e){
        fetch(`${api.base}weather?q=${this._inputElement.value}&units=metric&appid=${api.key}`)
          .then(res => res.json())
          .then(result =>{
            console.log(result);
            if(typeof(result.main) !== "undefined")
            {
            this.setState({
              query: this._inputElement.value,
              weather: result.main.temp ,
              press: result.main.pressure,
              humid: result.main.humidity,
              wind_speed: result.wind.speed 
            });
            }
            else
            {
              this.setState({
                query: "",
                weather: result.message
              });
            }
          
          });
          e.preventDefault();
      }
  render() { 
  return (
  <div className="form">
    <form onSubmit ={this.search} >
                    <input  ref={(a) => this._inputElement=a} placeholder="Enter City">
                    </input>
                    <button onClick={this.search}><i class="fa fa-search"></i></button>
    </form>
    <Show query= {this.state.query} weather = {this.state.weather} press = {this.state.press} humid = {this.state.humid} wind_speed = {this.state.wind_speed} />
  </div>
);
}};
export default App;
