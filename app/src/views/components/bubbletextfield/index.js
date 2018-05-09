import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./style.css";

const BubbleTextField = ({
  id,
  className,
  style,
  inputClassName,
  inputStyle,
  label,
  labelClassName,
  labelStyle,
  errorText,
  onChange,
  value,
  ...rest
}) => (
  <div
    id={id}
    className={ClassNames(className, "bubbletextfield")}
    style={style}
  >
    <label
      htmlFor={`${id}-bubbletextfield`}
      className={labelClassName}
      style={labelStyle}
    >
      {label}
    </label>
    <input
      id={`${id}-bubbletextfield`}
      className={ClassNames(inputClassName, {
        filled: value,
        error: errorText
      })}
      style={inputStyle}
      value={value}
      {...rest}
      onChange={({ target }) => onChange(target.value)}
    />
    <span>{errorText}</span>
  </div>
);

BubbleTextField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape(),
  inputClassName: PropTypes.string,
  inputStyle: PropTypes.shape(),
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  labelStyle: PropTypes.shape(),
  errorText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

BubbleTextField.defaultProps = {
  onChange: () => {}
};

export default BubbleTextField;
