import { Component, render } from 'preact';
import Tooltip from './tooltip';

const API_KEY = 'eoBGwj0cKMpGfk6LaHTUlaiEIQQiMA2y';

export default class Word extends Component {
  tooltip;

  getGiphyImage(query, node, store) {
    if(this.tooltip) {
      if(node == store.selectedWord) {
        store.showingTooltip = true;
      }
      return;
    }
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=1`)
      .then(response => response.json())
      .then(result => {
        if(result.meta.status === 200) {
          let imageUrl = result.data[0].images.fixed_height_small.url;
          store.showingTooltip = true;
          store.selectedWord = node;
          this.tooltip =
            render(<Tooltip imageUrl={imageUrl} store={this.props.store} parent={node} />, node.firstChild, node.firstChild.lastElementChild);
        } else {
          alert('Could not retrive image, please try again later');
        }
      })
  }

  handleMouseUp() {
    console.log('mouse up')
    this.getGiphyImage(this.props.word, this.base, this.props.store);
  }

  handleDoubleClick() {
    console.log('double click')
    this.getGiphyImage(this.props.word, this.base, this.props.store);
  }

	render() {
    let {word} = this.props;
		return (
      <span>
        <span></span>
        <span
          onDblClick={() => this.handleDoubleClick()}
          onMouseUp={() => this.handleMouseUp()}>
        {word} </span>
      </span>
		);
	}
}
