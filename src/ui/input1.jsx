function Input1({ label, type, classes, state, setState }) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className={classes}
        id="floatingInput"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default Input1;
