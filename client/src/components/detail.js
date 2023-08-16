import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
export default function DetailProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
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
    return (
        <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1 className="text-center">Chi tiết Sản phẩm</h1>
            <span>Tên: {product.title} </span>
            <br />
            <span>Giá: {product.price} </span>
            <br />
            <span>Mô tả: {product.description} </span>
            <br />
            <button
                type="button"
                className="btn btn-outline-primary mt-2"
                onClick={() => {
                    navigate("/");
                }}
            >Danh Sách</button>
        </div>
    );
}