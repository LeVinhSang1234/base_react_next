import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/home/23122")}>Home</div>;
};
export default Home;
