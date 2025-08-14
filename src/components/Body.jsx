import { useEffect } from "react";
import Login from "./Login";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch} from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();
    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
          path: "/browse",
          element: <Browse />
        }
    ]);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
          );
          // navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
        
          // I am not using this navigate here because we can only use this under app provider and we can see that this whole this present at just above so one way is that move approuter code in root file so we can use it in body like a child of it or other way is use navigate somewhere else like in Login component
        }
      });
    }, []);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;