import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import omit from 'lodash/fp/omit';

/**
 * HOC that omits props other than the its own passed by {@link DrawerItemsList} to its inner
 * components.
 *
 * @function withoutDrawerItemsListItemProps
 */
export default compose(mapProps, omit)([
  'closeOnClick',
  'closeDrawer',
]);
