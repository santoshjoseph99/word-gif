import './style';
import { Component } from 'preact';
import Words from './words';
import Store from './store';

export default class App extends Component {
	handleMousedown() {
		console.log('global mouse down')
		this.props.store.showingTooltip = false;
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleMousedown.bind(this), false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleMousedown.bind(this), false);
	}

	render() {
		this.props.store = new Store();
		let words1 = ['text', 'dog', 'cat'];
		let words2 = ['text', 'dog', 'cat'];
		return (
			<div class="container">
				<Words class="container-item" words={words1} store={this.props.store} />
				<Words class="container-item" words={words2} store={this.props.store} />
			</div>
		);
	}
}
