import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import DrawerItemsList from '../DrawerItemsList';

import styles from './styles';

class DrawerLists extends React.PureComponent {
  static propTypes = {
    secondList: PropTypes.arrayOf(PropTypes.shape({})),
    firstList: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
    closeOnClick: PropTypes.bool,
    closeDrawer: PropTypes.func,
  };

  static defaultProps = {
    firstList: [],
    secondList: [],
    closeOnClick: true,
    closeDrawer: null,
  };

  render() {
    const { firstList, secondList, classes, ...otherProps } = this.props;
    return (
      <div className={classes.wrapper}>
        {firstList.length ? (
          <DrawerItemsList items={firstList} {...otherProps} />
        ) : null}
        {firstList.length && secondList.length ? <Divider /> : null}
        {secondList.length ? (
          <DrawerItemsList items={secondList} {...otherProps} />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(DrawerLists);
