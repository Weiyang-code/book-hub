import {useState} from 'react'
import "../css/FormInput.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const {label, handleChange, errorMessage, id, ...inputProps} = props

  function handleFocus() {
    setFocused(true)
  }
  return (
    <>
      <div className="form-group">
        <label for={props.name}>{label}</label>
        <input
          className="form-control"
          {...inputProps}
          onChange={handleChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
}

export default FormInput;
