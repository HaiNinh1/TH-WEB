import {useEffect, useState} from "react";

import { users as UserData } from "../../data/data";
import { Modal } from "bootstrap";
import ModalUpdateUser from "./ModalUpdateUser";
import "./ManageUser.css";

const ManageUser = () => {

    const [userData, setUserData] = useState([]);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);


    useEffect(() => {
        setUserData(UserData);
    }, [])
    
    return (
        <>
        <div className="header-manage-user">
            <div className="d-flex  justify-content-between align-items-center mb-3  ">
                <div><h2>Employee</h2></div>
                <div>
                    <button className="btn btn-primary" onClick={ () => setShowModalUpdateUser(true)}>+Add </button>
                </div>
            </div>
            <table className="table table-hover table-bordered ">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Position</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {userData.map((user) => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.position}</td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-warning" onClick={ () => setShowModalUpdateUser(true)} >Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                

            />
        </div>
        </>
    )
}

export default ManageUser;