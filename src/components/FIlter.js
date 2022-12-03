import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = (props) => {
  return (
    <div>
      <div className="filter-section">
        <div>
          <label>Nama Mobil</label>
          <input onChange={props.handleChangeName} />
        </div>
        <div>
          <FormControl>
            <Select
              value={props.fCategory}
              onChange={props.handleChangeCategory}
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
          <button onClick={props.handleFilter}>edit</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
