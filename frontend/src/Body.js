


import React, { Component } from 'react';
import PriceCard from './PriceCard';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, Widgets, FusionTheme);
const dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    showrealtimevalue: "0",
    numberSuffix: 'K',
    theme: 'fusion',
    setadaptiveymin: "1"
  },
  data: [
    { label: 'Venezuela', value: '290' },
    { label: 'Saudi', value: '260' },
    { label: 'Canada', value: '180' },
    { label: 'Iran', value: '140' },
    { label: 'Russia', value: '115' },
    { label: 'UAE', value: '100' },
    { label: 'US', value: '30' },
    { label: 'China', value: '30' }
  ]
};
 
const chartConfigs = {
  type: 'realtimeline',
  width: "100%",
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource
};

class Body extends Component {
    // ...
  
    render() {
      return (
        <div className="row mt-5 mt-xs-4">
          <div className="col-12 mb-3">
            <div className="card-deck custom-card-deck">
              <PriceCard
                header="Bitcoin(BTC)"
                src={"/bitcoin.png"}
                alt="fireSpot"
                label="(Price in USD)"
                value="{this.state.btcusd}"
              />
            
            </div>
            <ReactFC {...chartConfigs} />
          </div>
        </div>
      );
    }
  }
  export default Body;