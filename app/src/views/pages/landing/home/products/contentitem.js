import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

class ContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
  }

  componentDidMount() {
    const { src } = this.props;

    return new Promise(resolve => {
      let image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = src;
    }).then(() => {
      this.setState({ image: src });
    });
  }

  render() {
    const { alt, to, label } = this.props;
    const { image } = this.state;

    return (
      <div className="content-list-item">
        {to ? (
          <Link className="content-list-link" target="_blank" to={to}>
            <span>{label}</span>
          </Link>
        ) : (
          <div className="content-list-link">
            <span>{label}</span>
          </div>
        )}
        {image && <img src={image} alt={alt} />}
      </div>
    );
  }
}

ContentItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  to: PropTypes.string,
  label: PropTypes.string
};

export default ContentItem;
