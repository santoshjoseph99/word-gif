import { Component } from 'preact';
const {observer} = require('mobx-observer');

export default observer(class Tooltip extends Component {
	render() {
    let {imageUrl, store, parent} = this.props;
    let visibleClass = store.showingTooltip && store.selectedWord == parent ? 'tooltip-image-visible' : '';
		return (
      <div class="tooltip">
        <img class={`tooltip-image ${visibleClass}`} src={imageUrl} alt="GIF" width="200" height="200" />
      </div>
		);
	}
});
