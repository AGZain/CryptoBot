


import React, { Component } from 'react';
import PriceCard from './PriceCard';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import RTChart from 'react-rt-chart';
import { Line } from 'react-chartjs-2';
import $ from 'jquery';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
 


class Body extends Component {
  constructor() {
    super()
    let d = new Date()
      this.state = {
      currprice:0,
      lineChartData: {
            labels: [],
            datasets: [
              {
                type: "line",
                label: "BTC-USD",
                borderWidth: "2",
                lineTension: 0.45,
                data: []
              }
            ]
        },
        lineChartOptions: {
          scales: {
            type: 'time',
            xAxes: [{
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 20
              }
          }]
          }
        },
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      }
    this.countingSecond = this.countingSecond.bind(this)
  }
  doJob(thePrice){
    
  }
  countingSecond() {
    // var obj = $.getJSON( 'https://api.coindesk.com/v1/bpi/currentprice.json' );
    // console.log(JSON.stringify(obj['time']));
    var price = 0;
    //var Done = $.getJSON( "https://api.coindesk.com/v1/bpi/currentprice.json")
    //, function( json ) {
    //  console.log( "JSON Data: " + json.bpi.USD.rate_float);
    //  //console.log(this.state.price);
    //  doJob(json.bpi.USD.rate_float);
    // });

    $.ajax({
      async: false,
      url: "https://api.coindesk.com/v1/bpi/currentprice.json",
      dataType:'json',
      success: function(json) {
             console.log( "JSON Data: " + json.bpi.USD.rate_float);
      //console.log(this.state.price);
        price = json.bpi.USD.rate_float;
        
      }
    });
    // Done.done(function( json ) {
    //   console.log( "JSON Data: " + json.bpi.USD.rate_float);
    //   //console.log(this.state.price);
    //   this.price = json.bpi.USD.rate_float;
    //  });
    console.log(price);
    const oldBtcDataSet = this.state.lineChartData.datasets[0];
    const newBtcDataSet = { ...oldBtcDataSet };
    newBtcDataSet.data.push(price);
    const newChartData = {
      ...this.state.lineChartData,
      datasets: [newBtcDataSet],
      labels: this.state.lineChartData.labels.concat(
        new Date().toLocaleTimeString()
      )
    };
    this.setState({ currprice:price })
    this.setState({ lineChartData: newChartData });
    let d = new Date();
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString()
    });

  }
  componentWillMount() {
    console.log("hello")
    const oldBtcDataSet = this.state.lineChartData.datasets[0];
    const newBtcDataSet = { ...oldBtcDataSet };
    newBtcDataSet.data.push(8363);
    const newChartData = {
      ...this.state.lineChartData,
      datasets: [newBtcDataSet],
      labels: this.state.lineChartData.labels.concat(
        new Date().toLocaleTimeString()
      )
    };
   //this.setState({ lineChartData: this.state.lineChartData.concat(5) });
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
      <div className="row mt-5 mt-xs-4">
        <div className="col-12 mb-3">
          <div className="card-deck custom-card-deck">
            <PriceCard
              header="Bitcoin(BTC)"
              src={"/bitcoin.png"}
              alt="fireSpot"
              label="(Price in USD)"
              value={this.state.currprice}
            />
          
          </div>
          <Line
            data={this.state.lineChartData}
            options={this.state.lineChartOptions}
          />
        </div>
      </div>
    );
    // return (
      
  //     <div className='timeclock-main'>
  //       { console.log(this.state.lineChartData) }
  //       <h3 className='timeclock-text'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year} {this.state.time}</h3>
  //       <Line
  //         data={this.state.lineChartData}
  //         options={this.state.lineChartOptions}
  //       />
  //     </div>
  //   )
  }
    // constructor(props){
    //   super(props); 
    // let d = new Date()
    // this.state = {
    //   lineChartData: {
    //     labels: [],
    //     datasets: [
    //       {
    //         type: "line",
    //         label: "BTC-USD",
    //         borderWidth: "2",
    //         lineTension: 0.45,
    //         data: []
    //       }
    //     ]
    //   },
    //   day: d.getDay(),
    //   month: d.getMonth(),
    //   date: d.getDate(),
    //   year: d.getFullYear(),
    //   time: d.toLocaleTimeString()
    // };
    // this.countingSecond = this.countingSecond.bind(this)
    // }
    // countingSecond() {
    //   let d = new Date()
    //   this.setState({
    //     day: d.getDay(),
    //     month: d.getMonth(),
    //     date: d.getDate(),
    //     year: d.getFullYear(),
    //     time: d.toLocaleTimeString()
    //   })
    // }
  
    // componentDidMount(){
    //   console.log("hello");
    //   const oldBtcDataSet = this.state.lineChartData.datasets[0];
    //   const newBtcDataSet = { ...oldBtcDataSet };
    //   newBtcDataSet.data.push(5);
    //   const newChartData = {
    //     ...this.state.lineChartData,
    //     datasets: [newBtcDataSet],
    //     labels: this.state.lineChartData.labels.concat(
    //       new Date().toLocaleTimeString()
    //     )
    //   };
    //   console.log("here");
    //   setInterval(this.countingSecond, 1000);  
    // }
 
    // render() {
      // return (
      //   <div className="row mt-5 mt-xs-4">
      //     <div className="col-12 mb-3">
      //       <div className="card-deck custom-card-deck">
      //         <PriceCard
      //           header="Bitcoin(BTC)"
      //           src={"/bitcoin.png"}
      //           alt="fireSpot"
      //           label="(Price in USD)"
      //           value="{this.state.btcusd}"
      //         />
            
      //       </div>
      //       <Line
      //         data={this.state.lineChartData}
      //       />
      //     </div>
      //   </div>
      // );
    // }
  }
  export default Body;