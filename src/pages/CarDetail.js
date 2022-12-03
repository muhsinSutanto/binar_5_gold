import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h1>ini CarDetail</h1>
      {Object.entries(car).length ? (
        <div>
          <img src={car.image} />
          <h1>{car.name}</h1>
          <p>{car.price}</p>
        </div>
      ) : (
        <h1>loading ........</h1>
      )}
    </div>
  );
};

export default CarDetail;
