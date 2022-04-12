import { React,
//  useState,
//  useEffect
} from "react";
import { Nav, NavMenu } from "./NavbarYearElements";
import "./index.css";
// import { Button } from "antd";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

const NavbarYear = (props) => {

  const handleSubmit = (e) => {
    if (e != null) {
      // console.log(`the curr date`,currYear)
      // console.log(props.selectedYear)
      props.passData(`${e.getFullYear()}`);
      // console.log(`${e.getFullYear()}`);
    } else {
      
    }
  };

  // const buttonClickHandler2022 = () => {
  //   props.passData("2022");
  // };

  return (
    <>
      <Nav>
        <NavMenu>
          <div className="date-picker">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                clearable
                className="datepickercomp"
                views={["year"]}
                label="Select Year"
                value={new Date(props.selectedYear,0)}
                dateFormat={"yyyy"}
                onChange={(e) => handleSubmit(e)}
                renderInput={(params) => (
                  <TextField
                    ref="year"
                    label={'margin="none"'}
                    variant="standard"
                    size="small"
                    {...params}
                    helperText={null}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
          {/* <Button type="primary" value="2022" onClick={buttonClickHandler2022}>
              2022
          </Button> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavbarYear;
