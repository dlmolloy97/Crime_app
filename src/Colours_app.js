import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import { data }  from './data/crime_data.js';
import { colorMapper, selectWrangler } from './ColorMapper';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {month: 1, traces: 1023};
        this.handleChange = this.handleChange.bind(this);
    
  }
    handleChange(event) {
        var filterdata = data.filter(object => object['year']===event.target.value);
        var mytraces = colorMapper(filterdata,'hour','incidents','weekday','bar')
        this.setState({month: event.target.value, traces: mytraces})  }
    render() {
        let unique = selectWrangler(data)
        let selectList = unique.length > 0 && unique.map((item, i) => {
            return (
        <option key={i} value={item}>{item}</option>
      )
    }, this);
      return (
          <div>
          <Plot
        data={this.state.traces}
        layout={ {width: 1000, height: 500, title: 'Crime count in ' + this.state.month} }
        
      />
<select id="selector" value={this.state.month} onChange={this.handleChange}>   
      {selectList}
          </select>
      </div>

    );
  }
}
