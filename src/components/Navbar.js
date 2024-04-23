import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { clearUserDetails } from "../features/loggedinuser/loggedinuserSlice";
import { IoNotificationsOutline } from "react-icons/io5";
import app from "../firebase/firebase";
import { Link } from "react-router-dom";

export default function Navbar({ handleLoginView }) {
  const [navMobileViewBtn, setnavMobileViewBtn] = useState(false);

  const auth = getAuth();

  const handleNavMobileViewBtn = () => {
    setnavMobileViewBtn(!navMobileViewBtn);
  };

  const photoURL = useSelector((state) => state.user.photourl);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("authToken");
        alert("Logout successful");
        dispatch(clearUserDetails());
        // Sign-out successful.
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  return (
    <div className="Navbar bg-white w-full h-20 shadow-md fixed top-0 z-[900]">
      <div className="flex items-center justify-center w-full">
        <div className="nav-main flex items-center justify-evenly w-full lg:mx-16 md:mx-12 mx-8">
          <div className="nav-logo lg:w-1/4 w-1/2 flex items-center lg:justify-center justify-start">
            <img
              className="w-28 h-20"
              src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
              alt=""
            />
          </div>
          <div className="nav-links lg:flex hidden items-center justify-evenly w-3/4">
            <div className="flex items-center justify-center w-2/3">
              <ul className="flex items-center justify-evenly w-3/4 font-medium xl:text-md lg:text-sm">
                <li>
                  <Link
                    to="/"
                    className="px-7 py-2 hover:scale-150 bg-blue-600 text-white rounded-md xl:text-lg lg:text-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-[1px] hover:shadow-blue-200"
                  >
                    Play
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/"
                    className="px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black rounded-md flex items-center justify-center"
                  >
                    Services
                    <MdKeyboardArrowDown/>
                  </Link>
                  <div className="nav-link-dropdown absolute top-16 shadow-xl -translate-x-5 hidden group-hover:block bg-white border border-1 rounded-md w-36">
                    <ul>
                      <li className="">
                        <Link
                          href="/documentation"
                          className="block px-4 py-2 border-b border-1 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/quick-start"
                          className="block px-4 py-2 border-b border-1 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left"
                        >
                          Quick Start
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="/results"
                          className="block px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left"
                        >
                          Result
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black rounded-md"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black rounded-md"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-btn w-1/3 flex justify-center items-center">
              {!localStorage.getItem("authToken") ? (
                <button
                  onClick={handleLoginView}
                  className="px-5 py-[10px] hover:shadow-lg hover:-translate-y-[1px] hover:shadow-blue-200 flex justify-center items-center bg-blue-700 text-white font-bold rounded-md"
                >
                  Login
                </button>
              ) : (
                <div className="flex justify-center items-center">
                  <button
                    className="p-5 rounded-full bg-cover bg-no-repeat hover:ring-1 hover:ring-blue-700 group"
                    style={{
                      backgroundImage: `url(${
                        photoURL ||
                        "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
                      })`,
                    }}
                  >
                    <div className="nav-link-dropdown absolute top-[68px] w-full max-w-40 -translate-x-[72px] shadow-xl hidden group-hover:block bg-white border border-1 rounded-md">
                      <ul>
                        <li className="">
                          <Link
                            to="/profile"
                            className="px-4 py-2 border-b border-1 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black w-full flex items-center justify-start gap-2 text-lg"
                          >
                            <AiOutlineUser className="text-2xl" /> Profile
                          </Link>
                        </li>
                        {/* <li className=""><div
                                            className="block px-4 py-2 border-b border-1 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left w-full">Login</div>
                                    </li> */}
                        <li className="">
                          <div
                            onClick={handleLogout}
                            className="px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black w-full flex justify-start items-center gap-2 text-lg"
                          >
                            <TbLogout className="text-2xl" /> Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  </button>
                  <button className="group">
                    <IoNotificationsOutline className="text-3xl hover:text-blue-700 ml-5 text-[#64748b]" />
                    <div className="nav-link-dropdown absolute top-[52px] w-full max-w-40 -translate-x-[40px] mt-3 shadow-xl hidden group-hover:block bg-white border border-1 rounded-md">
                      <ul>
                        <li className="">
                          <Link
                            to="/profile"
                            className="block px-4 py-2 border-b border-1 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left w-full"
                          >
                            Notification
                          </Link>
                        </li>
                        {/* <li className=""><div
                                            className="block px-4 py-2 border-b border-1 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left w-full">Login</div>
                                    </li> */}
                        {/* <li className="">
                          <div
                            onClick={handleLogout}
                            className="block px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left w-full"
                          >
                            Logout
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="nav-menu text-xl lg:w-1/4 w-1/2 flex lg:hidden items-center justify-end">
            <div className="" onClick={handleNavMobileViewBtn}>
              {!navMobileViewBtn ? (
                <AiOutlineMenu className="text-black text-3xl font-bold" />
              ) : (
                <AiOutlineClose className="text-red-700 text-3xl font-extrabold" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`nav-menu block lg:hidden h-fit pb-10 bg-white ${
          navMobileViewBtn ? "" : "hidden"
        }`}
      >
        <ul className="w-full h-full">
          <li>
            <Link
              to="/"
              className="w-full px-5 py-4 block text-left text-lg border-b border-1 border-black hover:bg-[#dce0e3] "
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/"
              className="w-full px-5 py-4 block text-left text-lg border-b border-1 border-black hover:bg-[#dce0e3] group-hover:bg-[#dce0e3]"
            >
              Services <i className="fa-solid fa-caret-down"></i>
            </Link>
            <div className="hover:flex flex-col hidden group-hover:flex">
              <Link
                to="/documentaion"
                className="w-full py-2 px-5 border-b border-1 border-black hover:bg-[#f1f5f9]"
              >
                Documentation
              </Link>
              <Link
                to="/quick-start"
                className="w-full py-2 px-5 border-b border-1 border-black hover:bg-[#f1f5f9]"
              >
                Quick start
              </Link>
              <Link
                to="/results"
                className="w-full py-2 px-5 border-b border-1 border-black hover:bg-[#f1f5f9]"
              >
                Results
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/about"
              className="w-full px-5 py-4 block text-left text-lg border-b border-1 border-black hover:bg-[#dce0e3] "
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="w-full px-5 py-4 block text-left text-lg border-b border-1 border-black hover:bg-[#dce0e3] "
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className="w-full px-5 py-4 block text-left text-lg border-b border-1 border-black hover:bg-[#dce0e3] "
            >
              Notifications
            </Link>
          </li>
        </ul>
        <div className="nav-login-btn h-52">
          <div className="flex justify-center items-end h-full">
            {!localStorage.getItem("authToken") ? (
              <button onClick={()=>{
                handleNavMobileViewBtn();
                handleLoginView();
              }} className=" mx-2 rounded-md px-5 py-[10px] w-full flex justify-center items-center bg-blue-600 text-white font-bold hover:bg-blue-700">
                <TbLogin className="text-2xl mx-2"/> Login
              </button>
            ) : (
              <div className="flex justify-between items-center w-full max-w-[308px] mx-24 border-4 hover:border-blue-700 rounded-full group">
                <div className="flex justify-evenly items-center w-32">
                  <div className="p-6 bg-red-400 rounded-full bg-[url('https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png')] bg-cover bg-no-repeat hover:ring-1 hover:ring-blue-700"></div>
                  <div className="text-xl">User</div>
                </div>
                <div className="text-3xl">
                  <i className="fa-solid fa-caret-down p-5 -rotate-90 group-hover:-rotate-180 transition duration-300"></i>
                </div>
                <div className="nav-login-btn-dropdown absolute -translate-y-[105px] translate-x-44 border-2 border-black rounded-lg bg-white w-36 text-center hidden group-hover:block hover:block">
                  <ul>
                    {/* <li className=""><div
                                        className="block px-4 py-2 border-b border-1 border-black hover:bg-[#f1f5f9] text-[#64748b] hover:text-black text-left rounded-tl-lg rounded-tr-lg">Login</div>
                                </li> */}
                    <li className="" onClick={handleLogout}>
                      <div className="px-4 py-2 border-b border-1 border-black hover:bg-[#f1f5f9] text-[#64748b] hover:text-black flex justify-start items-center gap-2 text-lg">
                        <TbLogout className="text-2xl" />
                        Logout
                      </div>
                    </li>
                    <li className="">
                      <Link
                        to="/profile"
                        className="px-4 py-2 hover:bg-[#f1f5f9] text-[#64748b] hover:text-black rounded-bl-lg rounded-br-lg flex justify-start items-center gap-2 text-lg"
                      >
                        <AiOutlineUser className="text-2xl" /> Profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
