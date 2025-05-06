import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalUpdateUser = (props) => {
    const { show, setShow, viewUser } = props;

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [sex, setSex] = useState('Male');

    const headerStyle = {
        backgroundColor: '#0d6efd', 
        color: 'white',
        padding: '10px 15px',
        borderBottom: 'none'
    };

    const titleStyle = {
        color: 'white',
        fontWeight: '500'
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton style={headerStyle}>
                    <Modal.Title style={titleStyle}>New Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>
                       
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) =>
                                    setRole(event.target.value)
                                }
                            >
                                <option value="">-- Select Position --</option>
                                <option value="Staff">Staff</option>
                                <option value="Manager">Manager</option>
                                <option value="CEO">CEO</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        
                        <div className="col-md-12">
                            <label className="form-label">Sex</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sex"
                                        id="male"
                                        value="Male"
                                        checked={sex === 'Male'}
                                        onChange={(event) => setSex(event.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sex"
                                        id="female"
                                        value="Female"
                                        checked={sex === 'Female'}
                                        onChange={(event) => setSex(event.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalUpdateUser;