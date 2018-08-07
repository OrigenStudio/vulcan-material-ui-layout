import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Components } from 'meteor/vulcan:core';
import React from 'react';
import compose from 'recompose/compose';
import DrawerLists from './DrawerLists';

const styles = theme => ({
  shipNameSection: {
    padding: theme.spacing.unit * 2,
    paddingBottom: 0,
    textAlign: 'center',
  },
});

class StandardDrawer extends React.PureComponent {
  render() {
    const { classes, ship = {}, width, ...otherProps } = this.props;
    const smallScreen = isWidthDown('xs', width);

    return (
      <div>
        {smallScreen ? <Components.DrawerAccountSelector /> : null}
        <div className={classes.shipNameSection}>
          <Typography variant="title" color="primary">
            {ship.name}
          </Typography>
          <Typography variant="subheading">{ship.model}</Typography>
        </div>
        <DrawerLists {...otherProps} />
      </div>
    );
  }
}

export default compose(withWidth(), withStyles(styles))(StandardDrawer);
