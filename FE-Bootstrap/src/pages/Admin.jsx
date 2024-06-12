import React, { useEffect, useState } from "react";
import { Navbar, Image, Dropdown } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

import "./Admin.css";

function Admin() {
  const [admin, setAdmin] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    // get all admin
    axios
      .get("http://localhost:8000/api/v1/admin")
      .then((response) => {
        setAdmin(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // get all data inventory
    axios
      .get("http://localhost:8000/api/v1/inventory")
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigateTo("/");
  };

  return (
    <>
      {token ? (
        <div>
          <div className="d-flex">
            <div className="side-bar-admin col-2 bg-body-tertiary shadow">
              <Image
                className="side-bar-admin__logo p-4"
                src="/logo_diskominfo.png"
              />
              <div className="mt-3">
                <Link to="/admin" className="text-decoration-none">
                  <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="dashboard-icon.svg"
                      style={{
                        filter:
                          "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)",
                      }}
                    />
                    <h5 className="ms-2 mb-0">Dashboard</h5>
                  </div>
                </Link>

                <Link to="/admin-users" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="users-icon.svg"
                    />
                    <h5 className="ms-2 mb-0"> All Users</h5>
                  </div>
                </Link>

                <Link to="/admin-inventory" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="airlines-icon.svg"
                    />
                    <h5 className="ms-2 mb-0">All Data</h5>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-10">
              <Navbar.Collapse className="navbar-admin Container d-flex p-4">
                <h4 className="me-auto mb-0">Diskominfo Kabupaten Lamongan</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                    className="border-0"
                  >
                    <Image src="/fi_user_org.svg" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="btn bg-danger"
                    onClick={handleLogout}
                  >
                    <Dropdown.Item className="bg-danger text-white text-center">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
              <div className="container p-4">
                <h1>Welcome to Admin Page</h1>
                <div className="main-admin d-flex flex-wrap mt-4">
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="users-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">All Users</h4>
                        <p className="mb-0">
                          {admin.data?.adminData?.length} Admin
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-users" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="airlines-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">All Data</h4>
                        <p className="mb-0">
                          {inventory.data?.inventoryData?.length} Inventory
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-inventory" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Admin;
