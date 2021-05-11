
import { AppBar, /* makeStyles, */ Toolbar, Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   }
// }));

export default function Header() {
  // const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>MARVELous React</Typography>
      </Toolbar>
    </AppBar>
  );
}