import { useState } from "react"; // Import useState untuk mengelola state
import { Logo } from "./Logo";
import { fetchUser } from "./utils";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState(fetchUser()); // Inisialisasi state user

  // Fungsi untuk menangani login
  const handleLogin = () => {
    const newUser = { username: "Angga Sanjaya" }; // Ini simulasi data user setelah login
    setUser(newUser); // Set state user setelah login
  };

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    setUser(null); // Set user menjadi null setelah logout
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Logo />

        {/* Conditional rendering tombol login/logout */}
        {!user ? (
          <button onClick={handleLogin}>Login</button> // Panggil handleLogin untuk login
        ) : (
          <button onClick={handleLogout}>Logout</button> // Panggil handleLogout untuk logout
        )}
      </nav>

      {/* Pesan selamat datang di luar navbar */}
      {user && user.username ? (
        <p>Welcome {user.username}</p>
      ) : (
        user && <p>Please complete your username!</p>
      )}
    </div>
  );
}
