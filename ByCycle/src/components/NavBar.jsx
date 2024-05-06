import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

const navigation = [
  { name: "ALL PRODUCT", href: "/", current: false },
  { name: "Jewelery", href: "/jewelery", current: false },
  { name: "Electronic", href: "/electronic", current: false },
  { name: "Clothing", href: "/clothing", current: false },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Your Company
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <img
                  className="rounded-circle"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width="32"
                  height="32"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/profile">Your Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/settings">Settings</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/cart">Cart</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/register">Sign out</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
