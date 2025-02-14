const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-56rY20y7BI5qO93Lvi4wyCj37V2wPKAgJ9Qa4MmCptSX_WJfTqr4Pbm9ZFT26-7KeQ&usqp=CAU"
            alt="Logo"
          />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;