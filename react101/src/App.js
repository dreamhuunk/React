import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'

import Test from './Test';
import Slide from './components/Slide';

class App extends Component {

  render()
  {
    return (
      <div className="container">
        <div className="row">
          <Test topic="beach" />
          <Test topic="nature" />
          <Test topic="city"/>
          <Test topic="joker" />
          <Test topic="light"/>
          <Test topic="animal" />
        </div>
        <div className="row">
          <Test topic="sky" />
          <Test topic="bird" />
          <Test topic="bmw"/>
          <Test topic="lake" />
          <Test topic="sea"/>
          <Test topic="bikini" />
        </div>

        <Slide />
        
      </div>

      
      
    );
  }
  
}
export default App;
