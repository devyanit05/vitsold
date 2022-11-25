import React from "react";
import { Divider } from "@mui/material";

const CatTitle = (props) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "30px" }}>{props.title}</h2>
      <Divider />
    </div>
  );
};

export default CatTitle;
