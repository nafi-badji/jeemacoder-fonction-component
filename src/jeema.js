import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputFon from "./inputFunct";

const JeemaCoder = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    inputPrenom: "",
    inputNom: "",
    inputEmail: "",
    inputTel: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  
  const handleUser = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const addUsers = () => {
    if (
      newUser.inputPrenom.trim() === "" ||
      newUser.inputNom.trim() === "" ||
      newUser.inputEmail.trim() === "" ||
      newUser.inputTel.trim() === ""
    ) {
      alert("Remplir tous les champs !");
      return;
    }

    setUsers([...users, newUser]);
    setNewUser({ inputPrenom: "", inputNom: "", inputEmail: "", inputTel: "" });
  };

  
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };


  const editUsers = (index) => {
    setNewUser(users[index]);
    setEditIndex(index);
  };

 
  const updateUser = () => {
    const usersCopy = [...users];
    usersCopy[editIndex] = newUser;

    setUsers(usersCopy);
    setEditIndex(null);
    setNewUser({ inputPrenom: "", inputNom: "", inputEmail: "", inputTel: "" });
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center text-secondary">
          JeemaCoder Fonctional Component
        </h2>
        <div style={{ maxWidth: 600, margin: "auto" }}>
          <div className="row">
            <div className="col-md-6 p-1">
              <InputFon
                label="Prenom"
                type="text"
                className="form-control"
                name="inputPrenom"
                value={newUser.inputPrenom}
                onChange={handleUser}
              />
            </div>
            <div className="col-md-6 p-1">
              <InputFon
                label="Nom"
                type="text"
                className="form-control"
                name="inputNom"
                value={newUser.inputNom}
                onChange={handleUser}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-1 ">
              <InputFon
                label="Email"
                type="email"
                className="form-control"
                name="inputEmail"
                value={newUser.inputEmail}
                onChange={handleUser}
              />
            </div>
            <div className="col-md-6 p-1">
              
              <InputFon
              label="Telephone"
                type="number"
                className="form-control"
                name="inputTel"
                value={newUser.inputTel}
                onChange={handleUser}
              />
            </div>
            {editIndex === null ? (
              <button className="btn btn btn-secondary mt-4" onClick={addUsers}>
                Ajouter
              </button>
            ) : (
              <button className="btn btn btn-warning mt-4" onClick={updateUser}>
                Modifier
              </button>
            )}
          </div>
        </div>
      </div>

      <table className="table table-bordered" style={{maxWidth: 600,  margin: 'auto' , marginTop: 50}}>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.inputPrenom}</td>
              <td>{user.inputNom}</td>
              <td>{user.inputEmail}</td>
              <td>{user.inputTel}</td>
              <td className="d-flex gap-3">
                <button
                  className="btn btn-success"
                  onClick={() => editUsers(index)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default JeemaCoder;
