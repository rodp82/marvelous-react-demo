
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#202020',
    borderBottom: '1px solid #393939',
    boxShadow: 'none'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap data-testid="headerTitle">MARVELous React</Typography>
      </Toolbar>
    </AppBar>
  );
}