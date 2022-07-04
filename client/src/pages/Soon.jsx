import {Link} from "react-router-dom"

const Soon = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      COMING SOON!
        
      <Link to="/" style={{ textDecoration: 'none' , color:"black"}}><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  );
};

export default Soon;