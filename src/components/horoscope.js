import React, { Component } from 'react';
import axios from 'axios';



class Horoscope extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            today: '',
            yesterday: '',
            tommorow: '',
         }
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

                        <div className="bd-example">
                                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
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
                                                    <p> Range: { yesterday.date_range }</p>
                                                    <p> Mood: { yesterday.mood }</p>
                                                    <p> Lucky Time :{ yesterday.lucky_time }</p>
                                                    <p> Color :{ yesterday.color }</p>
                                                    <p> Current Date :{ yesterday.current_date }</p>
                                                    <p> Current Date :{ yesterday.compatibility }</p>
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
                                                    <p> Range: { today.date_range }</p>
                                                    <p> Mood: { today.mood }</p>
                                                    <p> Lucky Time :{ today.lucky_time }</p>
                                                    <p> Color :{ today.color }</p>
                                                    <p> Current Date :{ today.current_date }</p>
                                                    <p> Current Date :{ today.compatibility }</p>
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
                                                    <p> Range: { tommorow.date_range }</p>
                                                    <p> Mood: { tommorow.mood }</p>
                                                    <p> Lucky Time :{ tommorow.lucky_time }</p>
                                                    <p> Color :{ tommorow.color }</p>
                                                    <p> Current Date :{ tommorow.current_date }</p>
                                                    <p> Current Date :{ tommorow.compatibility }</p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.TodaysHoroscope();
        this.YesterdaysHoroscope();
        this.TommorowsHoroscope();
    }

    // Yesterdays Horoscope

    YesterdaysHoroscope(){
         axios.post("https://aztro.sameerkumar.website/?sign=aries&day=yesterday")
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

    TodaysHoroscope(){
        axios.post("https://aztro.sameerkumar.website/?sign=aries&day=today")
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
    TommorowsHoroscope(){
        axios.post("https://aztro.sameerkumar.website/?sign=aries&day=tomorrow ")
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