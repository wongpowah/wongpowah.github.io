import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./style.css";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = { focus: false, error: "" };
  }

  render() {
    const {
      id,
      className,
      style,
      inputClassName,
      inputStyle,
      label,
      errorText,
      numberOfLines,
      disabled,
      onChange,
      validate,
      value,
      ...rest
    } = this.props;
    const { focus, error } = this.state;

    return (
      <div
        id={id}
        className={ClassNames(className, "textfield", {
          focus: focus,
          filled: value,
          error: errorText || error,
          disabled: disabled
        })}
        style={style}
      >
        {numberOfLines > 1 ? (
          <textarea
            id={`${id}-textfield`}
            className={ClassNames(inputClassName, "textfield-input")}
            style={inputStyle}
            value={value}
            rows={numberOfLines}
            disabled={disabled}
            {...rest}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() =>
              this.setState({ focus: false, error: validate(value) })
            }
            onChange={({ target }) => onChange(target.value)}
          />
        ) : (
          <input
            id={`${id}-textfield`}
            className={ClassNames(inputClassName, "textfield-input")}
            style={inputStyle}
            value={value}
            disabled={disabled}
            {...rest}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() =>
              this.setState({ focus: false, error: validate(value) })
            }
            onChange={({ target }) => onChange(target.value)}
          />
        )}
        <label className="textfield-label" htmlFor={`${id}-textfield`}>
          {label}
        </label>
        <div className="textfield-underline" />
        <div className="textfield-error">{errorText || error}</div>
      </div>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape(),
  inputClassName: PropTypes.string,
  inputStyle: PropTypes.shape(),
  label: PropTypes.string,
  errorText: PropTypes.string,
  numberOfLines: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  validate: PropTypes.func,
  value: PropTypes.string
};

TextField.defaultProps = {
  numberOfLines: 1,
  disabled: false,
  onChange: () => {},
  validate: () => {}
};

export default TextField;
