import React from 'react'

var Footer = React.createClass({
		render: function(){
			var footerStyle = {
				border: 'solid black'
			};
				return(
						<div style={footerStyle}>
							<h2>Gísli Freyr Pálmarsson, vefforitun 3</h2>
						</div>
					);
		}
});

export default Footer;
