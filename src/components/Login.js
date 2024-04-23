import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
  // onAuthStateChanged
} from "firebase/auth";
import app from "../firebase/firebase";
import { useDispatch } from "react-redux";
import {
  setUserDetails,
  setUserEmail,
} from "../features/loggedinuser/loggedinuserSlice";

export default function Login({ login, handleLoginView }) {
  const [loginSihnupTransfer, setLoginSihnupTransfer] = useState(true);

  const handleLSTransfer = () => {
    setLoginSihnupTransfer(!loginSihnupTransfer);
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(setUserEmail({ name: user.displayName, email: user.email, photoUrl: user.photoURL }));
  //     } else {
  //       localStorage.removeItem('authToken');
  //     }
  //   });
  // }, [])
  

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [resetView, setResetView] = useState(false);
  const [resetMessageView, setResetMessageView] = useState(false);

  const handleReset = (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetMessageView(true);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
  };

  const handleLoginToResetTransfer = () => {
    setLoginSihnupTransfer(true);
    handleLoginView();
    setResetView(true);
  };

  const [emailVerifyView, setEmailVerifyView] = useState(false);

  const dispatch = useDispatch();

  const handleEmailVerify = () => {
    const user = auth.currentUser;
    console.log(user);
    if (user.emailVerified) {
      setEmailVerifyView(false);
    }
    else{
      alert("Email not yet Verified!");
    }
  };

  const auth = getAuth();

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert("User account created successfully!");
        console.log(user);
        handleLoginView();
        // dispatch(setUserEmail({ email: user.email }));
        dispatch(setUserDetails({name: credentials.name, email: user.email, photourl: user.photoURL}));
        setCredentials({ email: "", password: "", name: '' });
        localStorage.setItem("authToken", user.accessToken);
        setLoginSihnupTransfer(true);
        sendEmailVerification(auth.currentUser).then(() => {
          setEmailVerifyView(true);
        });
        updateProfile(auth.currentUser, {
          displayName: credentials.name
        })
        const response = await fetch('http://127.0.0.1:5000/api/auth/signup', {
          method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: credentials.name, email: user.email, phoneNo: user.phoneNumber, providerType: user.providerData[0].providerId, firebaseUserId: user.uid, creationTime: user.metadata.creationTime, lastSignInTime: user.metadata.lastSignInTime})
        })
        console.log(response);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    setCredentials({ email: "", password: "" });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert("User signed in successfully!");
        handleLoginView();
        console.log(user);
        dispatch(setUserEmail({ email: user.email }));
        // dispatch(setUserDetails({name: user.displayName, email: user.email, photourl: user.photoURL}));
        setCredentials({ email: "", password: "" });
        localStorage.setItem("authToken", user.accessToken);
        if (!user.emailVerified) {
          setEmailVerifyView(true);
        }
        setLoginSihnupTransfer(true);
        const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
          method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: user.displayName, email: user.email, phoneNo: user.phoneNumber, photoUrl: user.photoURL, emailverified: user.emailVerified, providerType: user.providerData[0].providerId, firebaseUserId: user.uid, creationTime: user.metadata.creationTime, lastSignInTime: user.metadata.lastSignInTime})
        })
        console.log(response);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        dispatch(
          setUserDetails({
            name: user.displayName,
            email: user.email,
            photourl: user.photoURL,
          })
        );
        alert("Login successful!");
        localStorage.setItem("authToken", token);
        setCredentials({ email: "", password: "" });
        setLoginSihnupTransfer(true);
        handleLoginView();
        const response = await fetch('http://127.0.0.1:5000/api/auth/signup', {
          method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: user.displayName, email: user.email, phoneNo: user.phoneNumber, photoUrl: user.photoURL, emailverified: user.emailVerified, providerType: user.providerData[0].providerId, firebaseUserId: user.uid, creationTime: user.metadata.creationTime, lastSignInTime: user.metadata.lastSignInTime})
        })
        console.log(response);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login unsuccessful! " + errorMessage);
      });
  };

  const githubProvider = new GithubAuthProvider();

  const handleGithubSignin = () => {
    signInWithPopup(auth, githubProvider)
      .then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        dispatch(
          setUserDetails({
            name: user.displayName,
            email: user.email,
            photourl: user.photoURL,
          })
        );
        alert("Login successful!");
        localStorage.setItem("authToken", token);
        setCredentials({ email: "", password: "" });
        setLoginSihnupTransfer(true);
        handleLoginView();
        const response = await fetch('http://127.0.0.1:5000/api/auth/signup', {
          method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: user.displayName, email: user.email, phoneNo: user.phoneNumber, photoUrl: user.photoURL, emailverified: user.emailVerified, providerType: user.providerData[0].providerId, firebaseUserId: user.uid, creationTime: user.metadata.creationTime, lastSignInTime: user.metadata.lastSignInTime})
        })
        console.log(response);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Login unsuccessful! " + errorMessage);
      });
  };

  return (
    <>
      <div className={`Login ${login ? "" : "hidden"}`}>
        <div className={`bg-white shadow rounded-lg lg:w-1/3  md:w-1/2 w-full max-h-[625px] h-full ${loginSihnupTransfer ? '' : 'overflow-y-scroll'} p-10 mt-16 fixed z-[900] top-10 left-0 right-0 mx-auto`}>
          <div className="flex justify-between items-center">
            <div>
              {loginSihnupTransfer ? (
                <p
                  tabIndex="0"
                  className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
                >
                  Login to your account
                </p>
              ) : (
                <p
                  tabIndex="0"
                  className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
                >
                  Sign up your account
                </p>
              )}
              {loginSihnupTransfer ? (
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
                >
                  Dont have account?{" "}
                  <span
                    className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
                    onClick={handleLSTransfer}
                  >
                    {" "}
                    Sign up here
                  </span>
                </p>
              ) : (
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
                >
                  Already have account?{" "}
                  <span
                    className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
                    onClick={handleLSTransfer}
                  >
                    {" "}
                    Log in here
                  </span>
                </p>
              )}
            </div>
            <AiOutlineClose
              className="text-4xl font-bold mb-2 hover:text-red-700 cursor-pointer"
              onClick={handleLoginView}
            />
          </div>
          <button
            onClick={handleGoogleSignIn}
            aria-label="Continue with google"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <button
            onClick={handleGithubSignin}
            aria-label="Continue with github"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                fill="#333333"
              />
            </svg>

            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Github
            </p>
          </button>
          {/* <button aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z" fill="#1DA1F2" />
                    </svg>

                    <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                </button> */}
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          {!loginSihnupTransfer
          ?
          <div>
            <label
              id="name"
              className="text-md font-medium leading-none text-gray-800"
            >
              Name
            </label>
            <input
              aria-labelledby="name"
              name="name"
              onChange={handleOnChange}
              value={credentials.name}
              type="text"
              className="bg-gray-200 mb-6 border rounded  text-lg font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          :
          null
          }
          <div>
            <label
              id="email"
              className="text-md font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              aria-labelledby="email"
              name="email"
              onChange={handleOnChange}
              value={credentials.email}
              type="email"
              className="bg-gray-200 border rounded  text-lg font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6 w-full">
            <div className="flex items-center justify-between">
              <label
                htmlhtmlFor="pass"
                className="text-md font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div
                className={`text-indigo-700 font-bold text-md cursor-pointer ${
                  loginSihnupTransfer ? "" : "hidden"
                }`}
                onClick={handleLoginToResetTransfer}
              >
                Forget Password?
              </div>
            </div>
            <input
              id="pass"
              name="password"
              type="password"
              onChange={handleOnChange}
              value={credentials.password}
              className="bg-gray-200 border rounded text-lg font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
            {/* <div className="relative flex items-center justify-center">
                        <input id="pass" type="password" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z" fill="#71717A" />
                            </svg>

                        </div>
                    </div> */}
          </div>
          <div className="mt-8">
            {loginSihnupTransfer ? (
              <button
                onClick={handleLogin}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-lg font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Login to my account
              </button>
            ) : (
              <button
                onClick={handleSignup}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-lg font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Create my account
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-full max-w-md p-6 fixed z-[900] top-20 left-0 right-0 mx-auto ${
          emailVerifyView ? "" : "hidden"
        }`}
      >
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Email Verification
              </h1>
            </div>
            <div className="text-center my-5">
              <p>An Verification link is sent on your email id.</p>
              <p>Please click button after verifying your email.</p>
            </div>
            <button
              type="button"
              onClick={handleEmailVerify}
              className="py-3 px-4 inline-flex w-full justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <main
        id="content"
        role="main"
        className={`w-full max-w-md p-6 fixed z-[900] top-20 left-0 right-0 mx-auto ${
          resetView ? "block" : "hidden"
        }`}
      >
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <AiOutlineClose
                className="text-2xl font-bold mb-2 hover:text-red-700 cursor-pointer absolute translate-x-80 -translate-y-[26px]"
                onClick={() => {
                  setResetView(false);
                  setResetMessageView(false);
                }}
              />
              {!localStorage.getItem("authToken") ? (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember your password?
                  <div
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    onClick={() => {
                      handleLoginView();
                      setResetView(false);
                    }}
                  >
                    Login here
                  </div>
                </p>
              ) : null}
            </div>

            <div className="mt-5">
              {!resetMessageView ? (
                <form className="">
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          required
                          aria-describedby="email-error"
                          value={email}
                          onChange={handleOnEmailChange}
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Reset password
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  If your email id is valid, you will receive a password reset
                  link on your email id.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}