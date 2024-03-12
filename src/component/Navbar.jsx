import React, {useState} from 'react';

const categoryArray = ["Technology", "Business", "Health", "Science", "Sports", "Entertainment"];

const Navbar = ({ setCategory }) => {
    const categoryHandler = (categoryData) => {
        setCategory(categoryData);
    }
    const homeHandler = () => {
        setCategory("general")
    }
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{height:"70px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-danger'>NewsX</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" style={{cursor:"pointer"}} onClick={()=>homeHandler()}>
        <span className="nav-link">Home</span>
      </li>
        {
          categoryArray.map((item, index)=>{
            return(
              <li className="nav-item" key={index} style={{cursor:"pointer"}} onClick={()=>categoryHandler(item)}>
                <span className="nav-link">{item}</span>
              </li>
            )
          })
        }
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
 </nav>
  )
}

export default Navbar;