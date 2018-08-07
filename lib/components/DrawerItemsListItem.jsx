import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

export default class DrawerItemsListItem extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.func,
    iconName: PropTypes.string,
    inset: PropTypes.bool,
    onClick: PropTypes.func,
    closeOnClick: PropTypes.bool,
    closeDrawer: PropTypes.func,
  };

  static defaultProps = {
    inset: false,
    closeOnClick: true,
    closeDrawer: null,
  };

  renderIcon = () => {
    if (this.props.icon) {
      return <this.props.icon />;
    } else if (this.props.iconName) {
      return <Icon>{this.props.iconName}</Icon>;
    }
    return null;
  };

  handleClick = event => {
    this.props.onClick(event);
    if (this.props.closeOnClick && this.props.closeDrawer) {
      this.props.closeDrawer(event);
    }
  };

  render() {
    const icon = this.renderIcon();
    return (
      <ListItem button onClick={this.handleClick}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText inset={this.props.inset && !icon} primary={this.props.label} />
      </ListItem>
    );
  }
}
