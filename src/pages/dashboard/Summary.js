import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Summary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Summary
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
        <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem>
            <ListItemText inset primary="OS" />
          </ListItem>
          <ListItem>
            <ListItemText inset primary="16.7" />
          </ListItem>
        </List>
    </div>
  );
}