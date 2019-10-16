import React, { Component } from 'react';
import axios from 'axios';
import MaterialReactIcon from 'react-materials-icon'



class Horoscope extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            today: '',
            yesterday: '',
            tommorow: '',

            value: 'Aries'
            
         };

    this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});

        this.YesterdaysHoroscope(event.target.value);
        this.TodaysHoroscope(event.target.value);
        this.TommorowsHoroscope(event.target.value);
    }



    render() { 
        const today = this.state.today;
        const tommorow = this.state.tommorow;
        const yesterday = this.state.yesterday;

        return ( 
            <div>
    
               <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="d-inline-block"> <span className="text-warning">{this.state.value}</span> </h3>
       
                            <label className="d-block">Pick your Zodiac:  </label>
                            <select className="form-control mb-3" value={this.state.value} onChange={this.handleChange}>
                                <option value="Aries">Aries</option>
                                <option value="Aquarius">Aquarius</option>
                                <option value="Pisces">Pisces</option>
                                <option value="Taurus">Taurus</option>
                                <option value="Gemini">Gemini</option>
                                <option value="Cancer">Cancer</option>
                                <option value="leo">leo</option>
                                <option value="Virgo">Virgo</option>
                                <option value="Libra">Libra</option>
                                <option value="Scorpio">Scorpio</option>
                                <option value="Sagittarius">Sagittarius</option>
                                <option value="Capricorn">Capricorn</option>
                            </select>
                        
                        <div className="w-100 d-flex justify-content-around mb-3">
                            <div>
                                <button className="btn btn-primary" data-target="#carouselExampleCaptions" data-slide-to="0">Yesterday</button>
                                <button className="btn btn-primary" data-target="#carouselExampleCaptions" data-slide-to="1">Today</button>
                                <button className="btn btn-primary" data-target="#carouselExampleCaptions" data-slide-to="2">Tommorow</button>
                            </div>
                        </div>
                        <div className="bd-example">
                            <div id="carouselExampleCaptions" className="carousel slide"  data-interval="false" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item ">
                                            {/* yesterday horoscope slide */}
                                            <div className="card border-info text-info ">
                                            <div className="card-header d-flex justify-content-between">
                                                <span>Yesterdays Horoscope</span>
                                                <span>{ yesterday.current_date }</span>
                                            </div>
                                            <div className="card-body">
                                                <h5> {yesterday.description}</h5>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Mood:</div>
                                                        <div  className="d-inline-block"><span>{ yesterday.mood }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Lucky Time:</div>
                                                        <div  className="d-inline-block"><span>{ yesterday.lucky_time }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Color :</div>
                                                        <div  className="d-inline-block"><span>{ yesterday.color }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Compatibility :</div>
                                                        <div  className="d-inline-block"><span>{ yesterday.compatibility }</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="carousel-item active">
                                            {/* today's horoscope slide */}
                                            <div className="card border-primary text-primary ">
                                            <div className="card-header d-flex justify-content-between">
                                                <span>Today's Horoscope</span>
                                                <span>{ today.current_date }</span>
                                            </div>
                                            <div className="card-body">
                                                <h5> {today.description}</h5>

                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Mood:</div>
                                                        <div  className="d-inline-block"><span>{ today.mood }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Lucky Time:</div>
                                                        <div  className="d-inline-block"><span>{ today.lucky_time }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Color :</div>
                                                        <div  className="d-inline-block"><span>{ today.color }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Compatibility :</div>
                                                        <div  className="d-inline-block"><span>{ today.compatibility }</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="carousel-item">
                                        {/* Tommorow horoscope slide */}
                                        <div className="card border-warning text-warning ">
                                            <div className="card-header d-flex justify-content-between">
                                                <span>Tommorows Horoscope</span>
                                                <span> { tommorow.current_date }</span>
                                            </div>
                                            <div className="card-body">
                                                <h5> {tommorow.description}</h5>

                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block ">
                                                             Mood:</div>
                                                        <div  className="d-inline-block"><span>{ tommorow.mood }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Lucky Time:</div>
                                                        <div  className="d-inline-block"><span>{ tommorow.lucky_time }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Color :</div>
                                                        <div  className="d-inline-block"><span>{ tommorow.color }</span></div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="w-50 d-inline-block "> Compatibility :</div>
                                                        <div  className="d-inline-block"><span>{ tommorow.compatibility }</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.TodaysHoroscope(this.state.value);
        this.YesterdaysHoroscope(this.state.value);
        this.TommorowsHoroscope(this.state.value);
    }

    // Yesterdays Horoscope

    YesterdaysHoroscope(zodiac){
        console.log(zodiac);
        const sign = zodiac;
         axios.post("https://aztro.sameerkumar.website/?sign="+sign+"&day=yesterday")
         .then(res =>{
             console.log(res)
             this.setState({
                 yesterday : res.data
             })
         })
         .catch( err =>{
             console.log(err);
         })
    }
    
    // Todays Horoscope

    TodaysHoroscope(zodiac){
        console.log(zodiac);
        const sign = zodiac;
        axios.post("https://aztro.sameerkumar.website/?sign="+sign+"&day=today")
        .then(res =>{
            console.log(res)
            this.setState({
                today : res.data
            })
        })
        .catch( err =>{
            console.log(err);
        })
    }

    // Tommorows Horoscope
    TommorowsHoroscope(zodiac){
        console.log(zodiac);
        const sign = zodiac;
        axios.post("https://aztro.sameerkumar.website/?sign="+sign+"&day=tomorrow ")
        .then(res =>{
            console.log(res)
            this.setState({
                tommorow : res.data
            })
        })
        .catch( err =>{
            console.log(err);
        })
    }

}
 
export default Horoscope;