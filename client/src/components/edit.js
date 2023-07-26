import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
export default function EditTour() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/tuors/${id}`).then((response) => {
            setTour(response.data);
        });
    }, [id]);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    const handleEdit = () => {
        axios.put(`http://localhost:8000/tuors/${id}`, tour).then(() => {
            navigate("/");
        });
    }
    return (
        <div className="container w-50 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1>Edit Tour</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="title"
                value={tour.title}
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={tour.price}
                onChange={handleChange}
            />
            <br />
            <textarea cols="30" rows="5"   
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={tour.description}
                onChange={handleChange}
            >
            </textarea>
            <br />
            <div className="d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-primary" style={{marginRight:'10px'}}
                    onClick={handleEdit}
                >
                    Cập Nhật
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