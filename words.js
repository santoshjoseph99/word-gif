import Word from './word';
import { Component } from 'preact';

export default class Words extends Component {
	render() {
    let {words, store} = this.props;
    let elements = words.map(w => <Word word={w} store={store} />);
		return (
      <p>{elements}</p>
		);
	}
}
