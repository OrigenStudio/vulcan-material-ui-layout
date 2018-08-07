import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

import { withoutDrawerItemsListItemProps } from '../containers';

export default compose(
  withoutDrawerItemsListItemProps,
  withStyles(theme => ({
    root: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
  })),
)(Divider);
