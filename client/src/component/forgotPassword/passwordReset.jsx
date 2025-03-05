import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



const ResetPasswordLocal = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const handleReset = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8080/reset-password", { email, newPassword });
      setMessage(response.data.message);
      navigate('/')
    } catch (error) {
      setMessage("Error resetting password. Try again.");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2 >Reset Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" className={loading ? "loading" : ""} disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <Link to='/'>
          cancel reset password
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordLocal;
