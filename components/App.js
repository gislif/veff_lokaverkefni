import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Petrol from './Petrol'

var App = React.createClass({
  render: function(){
    return (
    	<div>
	    	<Header />
	    	<Petrol />
	    	<Footer />
    	</div>
    	);
  }
});

export default App;
