var React = require('react');
var ReactDOM = require('react-dom');
var ReactSpinner = require('react-spinner');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactSpinner />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
