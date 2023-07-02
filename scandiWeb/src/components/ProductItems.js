export default function ProductItems({ id, sku, name, price, productType, length, weight, width, height, size, notifications, runChangeHandler }) {

    return (
        <div className="items" >
            <input
                type="checkbox"
                className="delete-checkbox"
                id={id}
                name="product_ids"
                onChange={runChangeHandler}
                value={id}
            />
            <div id="cards" className="card">
                <br />

                {sku}
                <br />

                {name}
                <br />

                {price}$
                <br />

                {productType === "Book" && <p>Weight: {weight} KG</p>}
                {productType === "Dvd" && <p>Size: {size} MB</p>}
                {productType === "Furniture" && <p>Dimension: {`${length} X ${width} X ${height}`} </p>}
            </div>
        </div>

    );
}
