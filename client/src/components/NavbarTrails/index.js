import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Nav, NavMenu } from "./NavbarTrailsElements";
import "./index.css";
import Select, { components } from "react-select";
import Button from "@mui/material/Button";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Stack from "@mui/material/Stack";

const controlStyles = {
  border: "1px solid black",
  padding: "0px",
  background: "#374153",
  color: "white",
  transform: "translate(-75%, 0)",
  width: "200px",
  control:(base,state)=>({
  ...base,
  boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "red" : "blue"}}),
  menu:(base) => ({...base,zindex:100})
};

const ControlComponent = (props) => (
  <div>
    <div style={controlStyles} >
      {/* <p>Select Trail</p>  */}
      <components.Control {...props} />
    </div>
  </div>
);

const trailOptions = [
  { value: "Crosscut", label: "Crosscut" },
  { value: "Pioneer", label: "Pioneer" },
  { value: "Gold King", label: "Gold King" },
  { value: "Briar Rose", label: "Briar Rose" },
  { value: "Cashier", label: "Cashier" },
  { value: "Claimjumper", label: "Claimjumper" },
  { value: "Columbine", label: "Columbine" },
  { value: "4 oclock", label: `Four O'Clock` },
  { value: "Freeway", label: "Freeway" },
  { value: "Lower Sawmill", label: "Lower Sawmill" },
  { value: "Silverthorne", label: "Silverthorne" },
];

let sortedTrailOptions = trailOptions.sort((a,b)=>(a.value > b.value)? 1 : -1);

export default function NavbarTrails() {
  const [selectedTrail,setSelectedTrail] = useState("")

  const handleSelect = (e) => {
    if (e != null){setSelectedTrail(e.value)} else {setSelectedTrail("")}
  }

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${selectedTrail}`) 
  }

  return (
    <>
      <Nav>
        <h4 style={{ color: "white", transform: "translate(-125px,0px)" }}>
          Shred the Gnar 🎿
        </h4>
        {/* <NavMenu style={{transform:"translate(-590px,0px)"}}> */}
        <NavMenu>
          <Stack direction="row" spacing={-17}>
            <Select
              onChange={handleSelect}
              defaultValue={"None"}
              isClearable
              components={{ Control: ControlComponent }}
              isSearchable
              name="trails"
              options={sortedTrailOptions}
            />
            <Button
              onClick={handleSubmit}
              variant="filled"
              startIcon={<FmdGoodIcon />}
              style={{ background: "white", border: "1px solid black" }}
            >
              Go
            </Button>
          </Stack>
        </NavMenu>
      </Nav>
    </>
  );
}
