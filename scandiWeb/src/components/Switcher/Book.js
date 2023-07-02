export default function Book({ weight, handleChange }) {
  return (
      <div className="row">
        <div className="col-sm-2">
          <label htmlFor="price">Weight (kg)</label>
        </div>
        <div className="col-sm-5">
          <input
            type="number"
            id="weight"
            name="weight"
            onChange={handleChange}
            value={weight}
            className="form-control"
            required
          />
        </div>
        <div className="col-sm-6"></div>
      </div>
  );
}


