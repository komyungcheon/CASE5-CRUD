import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:4000/products/${id}`).then((response) => {
            setProduct(response.data);
        });
    }, [id]);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({ ...product, [name]: value });
    };
    const handleEdit = () => {
        axios.put(`http://localhost:4000/products/${id}`, product).then(() => {
            navigate("/");
        });
    }
    return (
        <div className="container w-50 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1>Edit Sản phẩm</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="title"
                value={product.title}
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={product.price}
                onChange={handleChange}
            />
            <br />
            <textarea cols="30" rows="5"   
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={product.description}
                onChange={handleChange}
            >
            </textarea>
            <br />
            <div className="d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-success" style={{marginRight:'10px'}}
                    onClick={handleEdit}
                >
                    Cập Nhật
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