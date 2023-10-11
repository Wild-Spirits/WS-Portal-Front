import React from 'react'

const Registratioion = () => {
  return (
    <form>
    <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
        <label className="form-label">Retype Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label">Agree to terms of use</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Registratioion
