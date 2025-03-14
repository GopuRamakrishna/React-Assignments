import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { taskContextObj } from '../../Context/TaskMan';

function Users() {
  const { arre, setArre, removed_user, setRemovedUser } = useContext(taskContextObj);
  const [userEditStatus, setUserEditStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navi=useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:3000/users', { method: "GET" })
      .then(res => res.json())
      .then(users => setArre(users))
      .catch(err => console.log(err));
  }, [setArre]);

  function userEditEnable(user) {
    setCurrentUser(user);
    setUserEditStatus(true);
  }

  function handleRemove(user) {
    const Remove = [...removed_user, user];
    setRemovedUser(Remove);
    deleteUser(user.id);
  }

  function deleteUser(userId) {
    fetch(`http://localhost:3000/users/${userId}`, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setArre(arre => arre.filter(user => userId !== user.id));
        } else {
          console.log("error occurred");
        }
      })
      .catch(err => console.log(err));
  }

  function handleSave() {
    if (currentUser) {
      fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
      .then(res => {
        if (res.ok) {
          setArre(arre => arre.map(user => user.id === currentUser.id ? currentUser : user));
          setUserEditStatus(false);
        } else {
          console.log("error occurred");
        }
      })
      .catch(err => console.log(err));
    }
  }
  function handleRegister(){
   navi('/register');
  }

  return (
    <div>
      <h3 className="text-center text-danger">Users</h3>
      { arre === null ? (
    <div className='text-center'>
        <h2 className='text-center mt-5'>No User's</h2>
        <button className="btn btn-primary text-center" onClick={handleRegister}>Register</button>
        </div>
      ) : (
        <div>
          { userEditStatus === false ? (
            <div className='mt-2 row'>
              { arre.map((user, idx) =>
                <div className='cols card card-body m-4 d-flex justify-content-evenly flex-column' key={idx}>
                  <div>
                    <p className='m-1'>UserId: {user.id}</p>
                    <p className='m-1'>Username -: {user.username}</p>
                    <p className='m-1'>Date Of Birth -: {user.dob}</p>
                    <p className='m-1'>Address -: {user.address}</p>
                  </div>
                  <div>
                    <button className='btn btn-primary m-3' onClick={() => userEditEnable(user)}>Edit</button>
                    <button className='btn btn-danger m-3' onClick={() => handleRemove(user)}>Remove</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* <button type="button" className="btn btn-secondary" onClick={() => setUserEditStatus(false)}>Close</button> */}
              <div className="modal fade show" style={{ display: 'block' }} id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit User</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setUserEditStatus(false)}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form className='form w-50 mx-auto'>
                        <div>
                          <label htmlFor="username" className='form-label'>Username</label>
                          <input 
                            className='form-control'
                            type="text" 
                            name="username" 
                            id="username" 
                            value={currentUser.username} 
                            onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })} 
                          />
                        </div>
                        <div>
                          <label htmlFor="dob" className='form-label'>Date of Birth</label>
                          <input 
                            type="date" 
                             className='form-control'
                            name="dob" 
                            id="dob" 
                            value={currentUser.dob} 
                            onChange={(e) => setCurrentUser({ ...currentUser, dob: e.target.value })} 
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className='form-label'>Address</label>
                          <input 
                            type="text" 
                             className='form-control'
                            name="address" 
                            id="address" 
                            value={currentUser.address} 
                            onChange={(e) => setCurrentUser({ ...currentUser, address: e.target.value })} 
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setUserEditStatus(false)}>Close</button>
                      <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Users;
