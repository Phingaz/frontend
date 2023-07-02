import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItems from "../components/ProductItems";

export default function ProductList() {
    const [allProducts, setAllProducts] = useState([]);

    const [selectedProducts, setSelectedProducts] = useState({
        product_ids: [],
    });

    useEffect(() => {
        fetch(`https://scandi-db.onrender.com/`)
        .then(res => res.json())
        .then(data => {
            if(data.length === 0) {
                setAllProducts([{
                    sku: "Click Add",
                    name: "To add an Entry",
                    price: 0,
                }])
            } else {
                setAllProducts(data)
            }
        })
    }, []);


    function handleCheckboxChange(event) {
        const { name, value } = event.target;

        let selectedProduct_ids = selectedProducts.product_ids;
        selectedProduct_ids.push(value);
        const newSelectedProducts = {
            ...selectedProducts,
            [name]: selectedProduct_ids,
        };
        setSelectedProducts(newSelectedProducts);
    }

    const handleDeleteClick = () => {
        selectedProducts.product_ids.forEach(el => {
            fetch("https://scandi-db.onrender.com/delete" + el, {
                method: "DELETE"
            }).then(res => {
                window.location.reload()
            });
        })
    }


    const productElements = allProducts.map((product) => {
        return (
            <ProductItems
                key={product.id}
                id={product.id}
                sku={product.sku}
                name={product.name}
                price={product.price}
                productType={product.productType}
                length={product.length}
                breadth={product.breadth}
                height={product.height}
                width={product.width}
                weight={product.weight}
                size={product.size}
                notifications={product.notifications}
                runChangeHandler={handleCheckboxChange}
            />
        );
    });

    return (
        <div>
            <div className="container">
                <div id="header" className="fixed-header">
                    <div className="row">
                        <div className="heading">
                            <h1><b>Product List</b></h1>
                        </div>
                        <div id="btns">
                            <div className="">
                                <Link to="/add-product" id="add_button" className="btn btn-success add">ADD</Link>
                            </div>
                            <div className="">
                                <button
                                    id="delete-product-btn"
                                    className="btn btn-success"
                                    onClick={handleDeleteClick}>MASS DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="flex-container products">
                    {allProducts.length >= 1 ? productElements : ">>> Loading <<<"}
                </div>
            </div>
        </div>
    );
}
