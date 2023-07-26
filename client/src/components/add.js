import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTour() {
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: "",
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    const handleAdd = () => {
        axios.post("http://localhost:8000/tuors", tour).then(() => {
            navigate("/");
        });
    }
    return (
        <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1 className="text-center">Thêm Tour</h1>
            <input
                type="text"
                placeholder="Nhập Tên"
                name="title"
                value={tour.tilte}
                className="form-control"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                placeholder="Nhập Giá"
                name="price"
                value={tour.price}
                className="form-control"
                onChange={handleChange}
            />
            <br />

            <input
                type="text"
                placeholder="Nhập Mô Tả"
                name="description"
                value={tour.description}
                className="form-control"
                onChange={handleChange}
            />
            <br />
            <div>
                <button
                    type="button"
                    className="btn btn-primary" style={{marginRight:'10px'}}
                    onClick={handleAdd}
                >
                    Thêm Mới
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        navigate("/");
                    }}
                >Hủy</button>
            </div>
        </div>
    );
}