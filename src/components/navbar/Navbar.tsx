import "./navbar.scss"

const Navbar = () => {
    

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon" />
        <img src="/app.svg" className="icon" />
        <img src="/expand.svg" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg" alt="" />
          <span>Sonia</span>
        </div>
        <img src="/setting.svg" className="icon" />
      </div>
    </div>
  )
}

export default Navbar