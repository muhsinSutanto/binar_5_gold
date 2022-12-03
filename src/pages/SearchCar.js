import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./pages.css";

const SearchCar = () => {
  const [carData, setCardata] = useState([]);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        console.log(res);
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log("cardata", carData);
  return (
    <div>
      <Navbar />
      <div className="card-wrapper">
        {!!carData.length
          ? carData.map((item) => (
              <div className="car-card">
                <div className="img-container">
                  <img src={item.image} />
                </div>
                <p>{item.name}</p>
                <h2>{item.price}/ hari</h2>
                <p>Lorem ipsum</p>
                <Link to={`/detailmobil/${item.id}`}>
                  <button>pilih mobil</button>
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchCar;
