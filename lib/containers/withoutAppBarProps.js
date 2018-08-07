import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import omit from 'lodash/fp/omit';

/**
 * HOC that omits props other than the its own passed by an AppBar to its inner components.
 *
 * @function withoutAppBarProps
 */
export default compose(mapProps, omit)([
  'toggleLeftDrawer',
  'toggleRightDrawer',
]);
