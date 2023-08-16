import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value });
    };
    const handleAdd = () => {
        if (window.confirm("Thêm mới thành công!")) {
            axios.post("http://localhost:4000/products", product).then(() => {
                navigate("/");
            });
        }
    }
    return (
        <div className="container w-50 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1 className="text-center">Thêm Sản phẩm</h1>
            <input
                type="text"
                placeholder="Nhập Tên"
                name="title"
                value={product.title}
                className="form-control"
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                placeholder="Nhập Giá"
                name="price"
                value={product.price}
                className="form-control"
                onChange={handleChange}
            />
            <br />

            <textarea cols="30" rows="5"
                placeholder="Nhập Mô Tả"
                name="description"
                value={product.description}
                className="form-control"
                onChange={handleChange}
            ></textarea>
            <br />
            <div className="d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-success" style={{marginRight:'10px'}}
                    onClick={handleAdd}
                >
                    Thêm Mới Sản Phẩm
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        navigate("/");
                    }}
                >Hủy</button>
            </div>
        </div>
    );
}