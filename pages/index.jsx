import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
// Box
// Typografy
// Container
// Grid
// Button

// Image
// Modal
// Textfield

const useStyle = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      backgroundColor: theme.palette.primary.light,
      padding: 10,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      "&::after": {
        content: "'hoge'",
        display: "block",
        width: 100,
        height: 100,
        backgroundColor: "#f00",
      },
      [theme.breakpoints.down("sm")]: {
        backgroundColor: theme.palette.common.white,
      },
    },
    navStyle: {
      display: "flex",
      width: theme.typography.pxToRem(500),
      marginLeft: "auto",
    },
    button: {
      dispaly: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "4em",
      lineHeight: "1.25",
      fontSize: theme.typography.pxToRem(20),
    },
    buttonRoot: {
      backgroundColor: "#000",
      color: "yellow",
    },
    buttonLabel: {
      color: "yellow",
    },
  };
});

function Top() {
  const { root, navStyle, buttonLabel, buttonRoot } = useStyle();
  const [modal, setModal] = useState(false);

  return (
    <Box className={root} component="header" onClick={}>
      <Box display="flex" width={900} mx="auto">
        <Typography component="h1" variant="body1">
          ロゴ
        </Typography>
        <Box className={navStyle} component="nav">
          <Button
            classes={{
              root: buttonRoot,
              label: buttonLabel,
            }}
            href="https://example.com"
            color="primary"
            size="large"
            fullWidth={true}
            variant="contained"
          >
            ボタン
          </Button>
          <Button color="primary" size="small" variant="contained">
            ボタン
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Top;
