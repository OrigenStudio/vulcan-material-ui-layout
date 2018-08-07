import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import  { searchRoute, withRouteCheckAccess } from 'meteor/zetoff:vulcan';
import { withRouter } from 'react-router';

import DrawerItemsListItem from './DrawerItemsListItem';

export default compose(
  withRouter,
  withRouteCheckAccess(),
  withHandlers({
    onClick: ({ router, route, routeName }) => {
      const { path: pathname } = route || searchRoute(routeName) || {};
      return pathname && (() => {
        if (pathname) {
          router.push({ pathname });
        }
      });
    },
  }),
)(DrawerItemsListItem);
