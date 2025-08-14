import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Navigate to the login page on sign out
      })
      .catch(() => {
        navigate("/browse"); // If sign out fails, stay on browse page
      });
  };

  return (
    <div className="absolute top-0 left-0 px-6 py-2 bg-transparent flex items-center justify-between w-screen">
      <img
        className="w-35 h-12"
        src="/netflix.png"
        alt="Netflix Logo"
      />
      {user && <div className="flex items-center ml-4">
        <img className="w-8 h-8 rounded-full"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button className="ml-2 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition" onClick={handleSignOut}>Sign Out</button>
      </div>
}
    </div>
  );
};

export default Header;