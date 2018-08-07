import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapKeys from 'lodash/fp/mapKeys';
import mapValues from 'lodash/fp/mapValues';
import flow from 'lodash/fp/flow';
import curryRight from 'lodash/fp/curryRight';
import partial from 'lodash/fp/partial';
import { getActions } from 'meteor/vulcan:lib';

/**
 * Creates a HOC that passes the actions to dispatch actions to the given drawer.
 *
 * ### Options
 *
 *  - `drawerName`: name of the drawer to connect to
 *
 * The rest of the options is used as a mapper for actions so they can be renamed, where the key
 * is the original name of the action and the value is the new name. This can be useful when two
 * drawers need to be controlled at the same time to avoid collision between the same actions.
 *
 * @example <caption>Avoid name collision between two drawer's controlls</caption>
 *
 *  compose(
 *    withDrawerControls({
 *      drawerName: 'leftDrawer',
 *      setComponent: 'setLeftDrawerComponent',
 *      setComponentName: 'setLeftDrawerComponentName',
 *      setComponentProps: 'setLeftDrawerComponentProps',
 *      addComponentProps: 'addLeftDrawerComponentProps',
 *    }),
 *    withDrawerControls({
 *      drawerName: 'rightDrawer',
 *      setComponent: 'setRightDrawerComponent',
 *      setComponentName: 'setRightDrawerComponentName',
 *      setComponentProps: 'setRightDrawerComponentProps',
 *      addComponentProps: 'addRightDrawerComponentProps',
 *    }),
 *  )(Component);
 *
 * @param {object} options
 * @return {function}
 * @function withDrawerControls
 */
export default ({ drawerName, ...options }) => connect(
  null,
  dispatch => flow(
    mapKeys(key => options[key] || key),
    curryRight(bindActionCreators)(dispatch),
    mapValues(action => partial(action, [drawerName])),
  )(getActions().drawers),
);
