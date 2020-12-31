import React, { Component } from 'react';
import Header from './Components/Header';
import CustomizeLaptop from './Components/CustomizeLaptop';
import Cart from './Components/Cart';




import './App.css';




// component1
class App extends Component {
  state = {
    selected: {
      // component4
      Processor: {
        
        // component5
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      // component4
      'Operating System': {
        // component5
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      // component4
      'Video Card': {
        // component5
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      // component4
      Display: {
        // component5
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    

    

    

    return (
      <div className="App">
        {/* component2 */}
        <Header />        
        <main>
          {/* component3 */}
          <CustomizeLaptop features={this.props.features} selected={this.state.selected} updateFeature={this.updateFeature}/>
          
            
            <Cart selected={this.state.selected}/>
            
          
        </main>
      </div>
    );
  }
}

export default App;
