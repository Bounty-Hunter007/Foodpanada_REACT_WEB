import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRestaurants } from "../config/firebase";
import MediaCard from "../components/DashCard";
function Dashboard() {
  const navigate = useNavigate();
  const [restroData, setRestroData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getRestaurants();
    setRestroData(data);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="dash">
        {restroData.map((item) => {
          return (
            <MediaCard data={item} onClick={() => navigate(`/restro/${item.id}`)} />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
