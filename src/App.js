import React from 'react';
import ReactDOM from 'react-dom';
//var Index = require('./index.jsx');
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ExtraComp from './ExtraComp/ExtraComp';
import LikeButton from './LikeButton/LikeButton';
import ButtonEmphasisExample from './ButtonEmphasisExample';
import ButtonAnimatedExample from './ButtonAnimatedExample';
//const SemanticUI = require('./semantic.min.css');
import HeaderPage from './HeaderPage.js';
import FooterPage from './FooterPage.js';

var _text = {
	'description' : 'This is a sandbox area to add features and to practice proficiency with ReactJs, NodeJs, and Webpack' 
};
var App = React.createClass({
	render: function() {
		const stylemap = require('./App.scss');
		return (
			<div>
			<div className="contentBody">
				<HeaderPage />
				{_text.description}
			</div>
			
			<FooterPage />
			
			</div>
		);
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);