import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<section className="ftco-section fixed">
		<div className="container">
			<div className="row justify-content-between">
				<div className="col">
					<a className="navbar-brand fs-3 fw-bold" href="index.html">Foodie <span className='fs-5'>Kitchen</span></a>
				</div>
				<div className="col d-flex justify-content-end">
					<div className="social-media  ">
		    		<p className="mb-2 d-flex gap-4">
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span ><i className="fa-brands fa-facebook fa-xl"></i></span></a>
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span ><i className="fa-brands fa-twitter fa-xl"></i></span></a>
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span ><i className="fa-brands fa-instagram fa-xl"></i></span></a>
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span ><i className="fa-brands fa-dribbble fa-xl"></i></span></a>
		    		</p>
	        </div>
				</div>
			</div>
		</div>
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
				<form action="#" className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input type="text" className="form-control" placeholder="Search"/>
            <button type="submit" placeholder="" className="form-control search w-25"><span className="fa fa-search"></span></button>
          </div>
        </form>
	      <div className="collapse navbar-collapse logo" id="ftco-nav">
        <ul className="navbar-nav mr-auto">
	        	<li >
            <Link className=" nav-item active nav-link " to="/Home">Home</Link>
            </li>
	        	<li >
            <Link className="nav-item nav-link" to="/Menu">Menu</Link>
            </li>
	        	<li >
            <Link className="nav-item nav-link"  to="/Blog">Blog</Link>
            </li>
            <li >
            <Link className="nav-item nav-link" to="/Contect">Contect</Link>
            </li>
	        
          <li className='dropdown' >
            <Link className="nav-item nav-link  dropdown-toggle" target='blank' to="/About">About-Us</Link>
            </li>
            </ul>
	      </div>
	    </div>
	  </nav>
	</section>
      {/* <div className='Nav'>
        <div>
          <h3>React.js</h3>
        </div>
        <div>
        <input type="search" name="Search" id="Search" />
        <label htmlFor="Search">Search</label>
        </div>
        <div>
          <ul className='logo'>

            <a href="#"><li className='itmes'>Home</li></a>
            <a href="#"><li className='itmes'>About-Us</li></a>
            <a href="#"><li className='itmes'>Contect-US</li></a>
            <a href="#"><li className='itmes'>Address</li></a>
          </ul>
        </div>
        <div>
          <button type="button">Visit Now</button>
        </div>
      </div> */}
    </>

  )
}

export default Navbar
