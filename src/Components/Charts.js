import React, {Component} from 'react';
import {Bar, Bubble, Pie} from 'react-chartjs-2'

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataCharts:{
                labels: ['provincia1', 'provincia2', 'provincia3', 'provincia4','provincia5', 'provincia6'] ,
                datasets: [
                    {
                        label: 'poblacion',
                        data: [
                        617594,
                        181045, 
                        153060, 
                        106519, 
                        105162, 
                        95072	
                        ],
                        backgroundColor:[
                            'rgba(236, 23, 210, 0.4)',
                            'rgba(207, 116, 202, 0.9)',
                            'rgba(25, 57, 66, 1)',
                            'rgba(232, 37, 173, 0.5)',
                            'rgba(105, 196, 142, 0.6)',
                            'rgba(223, 190, 171, 0.9)',
                        ]
                    }
                ]
            }
        }
    }
    
  render(){
      return(
          <div className="chart">
                <Bar
                data={this.state.dataCharts}
                options={{ maintainAspectRatio: false }}
                />
          </div>
      )
  }
}

export default Chart