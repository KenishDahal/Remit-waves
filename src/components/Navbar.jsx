import React, { useState } from "react";
import logo from "../images/logo-remitwaves.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
    <>
      <nav className="main--nav p-3 ">
        {/* 1st logo part  */}
        <div className="main--nav__logo">
          <figure className="">
            <img src={logo} alt="logo" />
          </figure>
        </div>

        {/* 2nd menu part  */}
        <div className="main--nav__menu--link">
          <ul>
            <li>
              <a className="" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="" href="/about">
                Service
              </a>
            </li>
            <li>
              <a className="" href="/service">
                Aboutus
              </a>
            </li>
            <li>
              <Link className="link " to="/download">
                Download
              </Link>
            </li>
          </ul>
        </div>
        <div className="main--nav__btn ">
          <Link className="link button" to="/download">
            Get App
          </Link>
        </div>

        {/* <Link className="link " to="/download">
          <Button text={"Get App"} />
        </Link> */}

        {/* 3rd pages links */}
        {/* <div className="main--nav__bar">
          <FontAwesomeIcon onClick={openModal} icon={faBars} />
          <Modal
            className="modal"
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <form className="modal--form">
              <div>Home</div>
              <div>Services</div>
              <div>Carrerr</div>
              <div>Blogs</div>
              <div className="modal--button" onClick={closeModal}>
                <Button className="card__button" text={"Close"} />
              </div>
            </form>
          </Modal>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
