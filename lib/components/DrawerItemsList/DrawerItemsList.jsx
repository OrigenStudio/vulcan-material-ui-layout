import map from 'lodash/map';
import omit from 'lodash/omit';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import styles from './styles';
import DrawerItemsListItem from '../DrawerItemsListItem';

class DrawerItemsList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
    closeOnClick: PropTypes.bool,
    closeDrawer: PropTypes.func,
  };

  static defaultProps = {
    closeOnClick: true,
    closeDrawer: null,
  };

  renderItem = ({ component: Component = DrawerItemsListItem, ...item }, index) => (
    <Component
      key={item.key || index}
      closeOnClick={this.props.closeOnClick}
      {...item}
      closeDrawer={this.props.closeDrawer}
    />
  );

  render() {
    const { items, classes } = this.props;
    return <List className={classes.list}>{map(items, this.renderItem)}</List>;
  }
}

export default withStyles(styles)(DrawerItemsList);
