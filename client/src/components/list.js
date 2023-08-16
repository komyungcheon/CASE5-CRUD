import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function ListProduct() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/products").then((response) => {
            setList(response.data);
        });
    }, []);
    const deleteProduct = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm không!")) {
            axios.delete(`http://localhost:4000/products/${id}`).then(() => {
                axios.get("http://localhost:4000/products").then((response) => {
                    setList(response.data);
                })
            })
        }
    };
    return (
        <div className="mx-4 shadow p-3 mb-8 bg-body rounded mt-5">
            <h1 className="text-center">Danh sách sản phẩm</h1>
            <button
                type="button"
                className="btn btn-success mb-3"
                onClick={() => {
                    navigate("/add");
                }}
            >
                Thêm sản phẩm
            </button>
            <Table striped bordered hover responsive className="table table-info">
                <thead>
                    <tr className="text-center">
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Lựa Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td>{index}</td>
                            <td>
                                <Link to={`/detail/${item.id}`} className="text-decoration-none">
                                    <span className="">{item.title}</span>
                                </Link>
                            </td>
                            <td>{item.price}</td>
                            <td className="col-8">{item.description}</td>
                            <td>
                                <div style={{ display: 'flex', justifyContent: 'center',}}>
                                    <button
                                        type="button"
                                        className="btn btn-danger me-3"
                                        onClick={() => {
                                            deleteProduct(`${item.id}`);
                                        }}
                                    >
                                        Xoá
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            navigate(`/product/${item.id}`);
                                        }}
                                    >
                                        Cập Nhật
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}