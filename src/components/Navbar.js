function Navbar(){
  return(
    <div className="navbar">
        <div className="navbar__s1">
            <h1 className="navbar__s1__title">Udemy</h1>
        </div>

        <div className="navbar__s2">
            <i className="fa-solid fa-magnifying-glass" style={{color: "#111212"}}></i>
            <input placeholder="Search for anything here" />
        </div>
        <div className="navbar__s3">
            <p>Courses</p>
            <div className="mylearning">
                <p>My Learning</p>
                <div className="mylearning_popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>
            <i className="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
            <i className="fa-solid fa-bell" style={{color: "#000000"}}></i>
            <i className="fa-solid fa-person" style={{color: "#000000"}}></i>
        </div>
    </div>
  )
}

export default Navbar;