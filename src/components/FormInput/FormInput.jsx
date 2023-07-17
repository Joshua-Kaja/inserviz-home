import '../FormInput/FormInput.css'
function FormInput({ label, type, placehoder, Img }) {
  return (
    <>
    <div className="input-wrapper">
      <label className="input-label" htmlFor={label}>
        {label}
      </label>
      <div className="input">
        <img src={Img} alt={Img} />
        <input
          className="input-textarea"
          type={type}
          name={label}
          id={label}
          placeholder={placehoder}
        />
      </div>
    </div>
    </>
  );
}

export default FormInput;