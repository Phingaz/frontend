export default function Dvd({ size, handleChange }) {
  return (
    <div className="row">
      <div className="col-sm-2">
        <label htmlFor="size">Size (MB)</label>
      </div>
      <div className="col-sm-5">
        <input
          type="number"
          id="size"
          name="size"
          onChange={handleChange}
          value={size}
          className="form-control"
          required
        />
      </div>
      <div className="col-sm-6"></div>
    </div>
  );
}
