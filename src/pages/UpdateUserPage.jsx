import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaGamepad, FaUser, FaImage } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useToast } from "../contexts/ToastContext";
import Footer from "../components/Footer";

const UpdateUserPage = () => {
  const { user, updateUser } = useContext(AuthContext);
  const toast = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    document.title = "Update Profile | Game Hub";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile Updated Successfully!");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      <nav>
        <Navbar></Navbar>
      </nav>

      {/* Update Profile Form Container */}
      <div className="mt-[65px] flex items-center justify-center px-4 py-16 min-h-[calc(100vh-65px)]">
        <div className="w-full max-w-md">
          {/* Card with Glow Effect */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-green-500/20 to-transparent blur-3xl -z-10" />

            {/* Update Profile Card */}
            <div className="bg-linear-to-b from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FaGamepad className="text-4xl text-cyan-400" />
                </div>
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 mb-2">
                  Update Your Profile
                </h1>
                <p className="text-gray-400 text-sm">
                  Keep your information up to date
                </p>
              </div>

              {/* Current User Info Display */}
              {user && (
                <div className="mb-6 p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/50"}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/50"
                    />
                    <div>
                      <p className="text-white font-semibold">
                        {user.displayName || "No Name"}
                      </p>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Update Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName || ""}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Photo field  */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Photo URL
                  </label>
                  <div className="relative">
                    <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="photo"
                      defaultValue={user?.photoURL || ""}
                      placeholder="Enter your Photo URL"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Update Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-[1.02]"
                >
                  Update Profile
                </button>
              </form>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-cyan-300 text-sm text-center">
                  💡 Your changes will be reflected immediately across your
                  profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default UpdateUserPage;
