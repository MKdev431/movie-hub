import { Auth } from "../components/Auth";
// import { db } from "./config/firebase";

function Login() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Login Page</h2>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Auth />
      </div>
    </>
  );
}

export default Login;
