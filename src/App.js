import React from 'react';
import ReactDOM from 'react-dom';
//var Index = require('./index.jsx');
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ExtraComp from './ExtraComp/ExtraComp';
import LikeButton from './LikeButton/LikeButton';
import ButtonEmphasisExample from './ButtonEmphasisExample';
import ButtonAnimatedExample from './ButtonAnimatedExample';
//const SemanticUI = require('./semantic.min.css');


var App = React.createClass({
	render: function() {
		const stylemap = require('./App.scss');
		return (
			<div className="contentBody">
			<h1> Hello, World! </h1>
				<ExtraComp />
			<ButtonEmphasisExample />
			<ButtonAnimatedExample />
			</div>
		);
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);