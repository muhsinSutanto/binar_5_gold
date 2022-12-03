import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/FIlter";
import Navbar from "../components/Navbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./pages.css";

const SearchCar = () => {
  const [carData, setCardata] = useState([]);
  const [fName, setFname] = useState("");
  const [fCategory, setFcategory] = useState("");

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleChangeName = (e) => {
    setFname(e.target.value);
  };

  const handleFilter = (e) => {
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}`
      )
      .then((res) => {
        setCardata(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  const handleChangeCategory = (e) => {
    setFcategory(e.target.value);
  };

  console.log(fCategory);

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="body-wrapper">
        <div className="body-container">
          <div className="filter-section">
            <div>
              <label>Nama Mobil</label>
              <input onChange={handleChangeName} />
            </div>
            <div>
              <FormControl>
                <Select
                  value={fCategory}
                  onChange={handleChangeCategory}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>category</em>
                  </MenuItem>
                  <MenuItem value={"small"}>small</MenuItem>
                  <MenuItem value={"Medium"}>medium</MenuItem>
                  <MenuItem value={"large"}>large</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <button onClick={handleFilter}>edit</button>
            </div>
          </div>

          <Filter
            handleChangeName={handleChangeName}
            handleFilter={handleFilter}
            fCategory={fCategory}
            handleChangeCategory={handleChangeCategory}
          />

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
      </div>
    </div>
  );
};

export default SearchCar;
