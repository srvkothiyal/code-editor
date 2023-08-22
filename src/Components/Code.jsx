import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Styling = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 47vh;
`;

export default function Code() {

  const {html,setHtml,css,setCss,javaScript,setJavaScript}=useContext(DataContext)
  return (
    <Styling>
      <Editor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JavaScript"
        icon="()"
        color="#fcd000"
        value={javaScript}
        onChange={setJavaScript}
      />
    </Styling>
  );
}
