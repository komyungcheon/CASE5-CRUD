import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
export default function DetailTour() {
    const navigate = useNavigate();
    const { id } = useParams();
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
    return (
        <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1 className="text-center">Chi tiết tour</h1>
            <span>Tên: {tour.title} </span>
            <br />
            <span>Giá: {tour.price} </span>
            <br />
            <span>Mô tả: {tour.description} </span>
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