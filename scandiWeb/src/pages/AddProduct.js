import React, { useState } from "react";
import Book from "../components/Switcher/Book"
import Dvd from "../components/Switcher/Dvd"
import Furniture from "../components/Switcher/Furniture";
import { Link, useNavigate } from "react-router-dom";

export default function ProductAdd() {
    const [form, setForm] = useState({
        sku: "",
        name: "",
        price: "",
        productType: "",
        size: "",
        height: "",
        width: "",
        length: "",
        weight: "",
        notification: "",
    });

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    const handleOnInput = (e) => {
        const { name, value, type, checked, customValidity } = e.target;
        setForm((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
                [customValidity]: "",
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(form)
        fetch('https://scandi-db.onrender.com/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        }).then(res => res.json()).then(result => {
            if (result === "Duplicate Entry, Please try again") {

            } else {
                navigate("/")
                window.location.reload()
            }
        })
        
    }

    return (
        <div className="App">
            <div className="container">
                <div id="header" className="fixed-header">
                    <form
                        action="#"
                        id="product_form"
                        method="post"
                        onSubmit={handleSubmit}
                    >
                        <div className="fixed-header">
                            <div className="row">
                                <div className="heading">
                                    <h1>
                                        <b>Product Add</b>
                                    </h1>
                                </div>
                               <div id="btns">
                                    <div className="">
                                        <button
                                            id="save_button"
                                            type="submit"
                                            className="btn btn-success add"
                                        >
                                            Save
                                        </button>
                                    </div>
                                    <div className="">
                                        <Link
                                            to="/"
                                            id="cancel_button"
                                            className="btn btn-success"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                               </div>
                            </div>
                            <hr />
                        </div>

                       <div className="product">
                            <div className="row">
                                <div className="col-sm-2">
                                    <label htmlFor="sku">SKU</label>
                                </div>
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        id="sku"
                                        name="sku"
                                        onChange={handleChange}
                                        value={form.sku}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-danger" role="alert">
                                        {formData.error_message}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-2">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="col-sm-5">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={form.name}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-sm-6"></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-2">
                                    <label htmlFor="price">Price ($)</label>
                                </div>
                                <div className="col-sm-5">
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        onChange={handleChange}
                                        value={form.price}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-sm-6"></div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-sm-2">
                                    <label htmlFor="productType">Type Switcher</label>
                                </div>
                                <div className="col-sm-5">
                                    <select
                                        id="productType"
                                        name="productType"
                                        onChange={handleChange}
                                        value={form.productType}
                                        className="form-control"
                                        required
                                    >
                                        <option id="" name="" value="">
                                            Select A Product
                                        </option>

                                        <option id="Book" value="Book">
                                            Book
                                        </option>
                                        <option id="Dvd" name="Dvd" value="Dvd">
                                            Dvd
                                        </option>
                                        <option id="Furniture" value="Furniture">
                                            Furniture
                                        </option>
                                    </select>
                                </div>
                                <div className="col-sm-6"></div>
                            </div>
                            <br />

                            <div id="productItems">
                                {form.productType === "Book" && (
                                    <Book
                                        handleChange={handleChange}
                                        runHandleOnInput={handleOnInput}
                                        weight={formData.weight}
                                    />
                                )}

                                {form.productType === "Dvd" && (
                                    <Dvd
                                        handleChange={handleChange}
                                        size={formData.size}
                                    />
                                )}

                                {form.productType === "Furniture" && (
                                    <Furniture
                                        handleChange={handleChange}
                                        height={formData.height}
                                        width={formData.width}
                                        lengthF={formData.length}
                                    />
                                )}
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
}