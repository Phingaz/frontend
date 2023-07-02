import {Fragment} from "react"

export default function Furniture({ lengthF, width, height, handleChange }) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm-2">
          <label htmlFor="furniture">Length </label>
        </div>
        <div className="col-sm-5">
          <input
            type="number"
            id="length"
            name="length"
            onChange={handleChange}
            value={lengthF}
            className="form-control"
            required
          />
        </div>
        <div className="col-sm-6"></div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          <label htmlFor="furniture">Width </label>
        </div>
        <div className="col-sm-5">
          <input
            type="number"
            id="width"
            name="width"
            onChange={handleChange}
            value={width}
            className="form-control"
            required
          />
        </div>
        <div className="col-sm-6"></div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          <label htmlFor="furniture">Height </label>
        </div>
        <div className="col-sm-5">
          <input
            type="number"
            id="height"
            name="height"
            onChange={handleChange}
            value={height}
            className="form-control"
            required
          />
        </div>
        <div className="col-sm-6"></div>
      </div>
    </Fragment>
  );
}
