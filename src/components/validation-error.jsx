import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);

  // Way 1 ---------------------------------- *** ---------------------------------
  const errorMessages = [];
  if (error) {
    for (const key in error) {
      error[key].forEach((err) => errorMessages.push(`${key} - ${err}`));
    }
  }

  // Way 2 ---------------------------------- *** ---------------------------------
  // const errorMessages = error ? Object.values(error) : [];

  // Way 3 ---------------------------------- *** ---------------------------------
  // const errorMessages = error ? [...error.email, ...error.username, ...error.password] : [];

  // Way 4 ---------------------------------- *** ---------------------------------
  // const errorMessages = error ? [...new Set(Object.values(error).flat())] : [];

  // Way 5 ---------------------------------- *** ---------------------------------
  // const errorMessages = error ? Object.values(error).flat() : [];

  return (
    error && (
      <ul className="text-danger ps-3" style={{ listStyle: "circle" }}>
        {errorMessages.map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </ul>
    )
  );
}

export default ValidationError;
