import React,{Component} from "react";
class Show extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let query = this.props.query;
        // let deletes=this.props.delete;
        let weather = this.props.weather;
        let press = this.props.press;
        let humid = this.props.humid;
        let wind_speed = this.props.wind_speed;
        if(query!=="")
        {
            return (

            <div className="Final">
            <h3>Temperature : {weather} </h3>
            <h3>Pressure : {press}</h3>
            <h3>Humidity : {humid}</h3>
            <h3>Wind Speed : {wind_speed}</h3>
            </div>
            );
        }
        else
        {
            return (
            <div className="Error">
                <h3>{weather}</h3>
            </div>
            );
        }
        
    }
};
export default Show;