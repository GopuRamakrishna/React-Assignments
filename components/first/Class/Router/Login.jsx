import React from 'react'

function Login() {
  return (
    <div>
      <form className="form mx-auto w-50">
        <div>
          <label htmlFor="name" className="form-label">name</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <button className="btn btn-outline-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Login