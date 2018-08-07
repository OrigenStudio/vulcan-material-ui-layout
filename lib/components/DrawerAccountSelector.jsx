import React from 'react';
import MUAvatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui';
import head from 'lodash/head';
import map from 'lodash/map';

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  smallAvatar: {
    width: 35,
    height: 35,
    marginLeft: theme.spacing.unit,
  },
  avatarsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contrastText: {
    color: theme.palette.primary.contrastText,
  },
});

const Avatar = ({ src, alt, className, children, ...otherProps }) => {
  if (src) {
    return (
      <MUAvatar alt={alt} src={src} className={className} {...otherProps} />
    );
  }
  return (
    <MUAvatar className={className} {...otherProps}>
      {head(alt || children)}
    </MUAvatar>
  );
};

class UserDrawer extends React.PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string,
    account: PropTypes.shape({}),
  };

  static defaultProps = {
    account: {},
    backgroundImage: '',
  };

  render() {
    const {
      classes,
      backgroundImage,
      account = {},
      accounts = [],
    } = this.props;

    return (
      <div>
        <div
          className={classes.wrapper}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container direction="row" alignItems="flex-start">
                <Grid item xs={6}>
                  <Avatar
                    alt={account.name}
                    src={account.imageURL}
                    className={classes.bigAvatar}
                  />
                </Grid>
                {accounts.length > 0 ? (
                  <Grid item xs={6}>
                    <div className={classes.avatarsWrapper}>
                      {map(accounts, a => (
                        <Avatar
                          alt={a.name}
                          src={a.imageURL}
                          className={classes.smallAvatar}
                        />
                      ))}
                    </div>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ListItem disableGutters>
                <ListItemText
                  classes={{
                    primary: classes.contrastText,
                    secondary: classes.contrastText,
                  }}
                  primary={account.name}
                  secondary={account.email}
                />
                {accounts.length > 0 ? <ArrowDropDownIcon /> : null}
              </ListItem>
            </Grid>
          </Grid>
        </div>
        {accounts.length > 0 ? (
          <List>
            {map(accounts, a => (
              <ListItem>
                <ListItemText
                  primary={a.name}
                  secondary={a.email}
                  onClick={a.onClick}
                />
              </ListItem>
            ))}
          </List>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(UserDrawer);
