import { useState } from "react";
import React from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";


const BoxContain = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

export default function Editor({ heading, icon, color,value,onChange }) {

const [open,setOpen]=useState(true)

const handleChange=(editor,data,value)=>{
onChange(value)
}

  return (
    <BoxContain style={open?null:{flexGrow:0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: "20px",
              width: "20px",
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "black",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
        fontSize="small"
        style={{alignSelf:'center'}}
        onClick={()=>setOpen(prevState=>!prevState)}
         />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </BoxContain>
  );
}
