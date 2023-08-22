import React from "react";
import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  height: 45vh;
`;

export default function Result() {
  //js ,css,html
  const [src, setSrc] = useState("");

  const { html, css, javaScript } = useContext(DataContext);

  const srcCode = `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${javaScript}</script>
  </html>
  `;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, javaScript]);
  return (
    <Container>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Container>
  );
}
