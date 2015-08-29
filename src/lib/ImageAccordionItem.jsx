import React from 'react/addons';
import ReactMixin from 'react-mixin';

class ImageAccordionItem extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    onClick: React.PropTypes.func
  };
  static defaultProps = {
    src: '',
    onClick: () => {}
  };
  constructor() {
    super();
  }
  render = () => {
    var style = {};
    this.props.src && (style.backgroundImage = `url(${this.props.src})`);
    return (
      <div style={style} className="react-as-image-accordion-item">
        <span className="react-as-image-accordion-item-content" onClick={this.props.onClick}>
          {this.props.children}
        </span>
      </div>
    );
  }
}

ReactMixin(ImageAccordionItem.prototype, React.addons.PureRenderMixin);

export default ImageAccordionItem;
