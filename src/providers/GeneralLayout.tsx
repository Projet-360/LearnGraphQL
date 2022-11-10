import React, { useCallback } from "react";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vH",
  background: "#e1e1e1",

  "& .navTop": {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "5%",
    alignItems: "center",

    "& >div": {
      padding: "1rem",
      width: "33.33%",
      background: "#5e5c5c",
      color: "white",
      textAlign: "center",
    },

    "& >div:hover": {
      cursor: "pointer",
      background: "black",
    },
  },

  "& .mainContainer": {
    height: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    "& >*": {
      height: "90%",
      width: "95%",
    },
  },
};

interface IGeneralLayout {
  children: React.ReactNode;
}

const navigationInfo: any[] = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "Simple",
    path: "/Simple",
  },
];

const GeneralLayout: React.FC<IGeneralLayout> = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (path: string) => () => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Box sx={style}>
      <div className="navTop">
        {navigationInfo.map(
          ({ label, path }: { label: string; path: string }) => (
            <div key={label} onClick={handleClick(path)}>
              <span>{label}</span>
            </div>
          )
        )}
      </div>

      <div className="mainContainer">
        <Paper>{children}</Paper>
      </div>
    </Box>
  );
};

export default GeneralLayout;
