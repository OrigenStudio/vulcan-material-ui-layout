import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapKeys from 'lodash/mapKeys';
import { getActions } from 'meteor/vulcan:lib';

const mapActionKeys = (actions, keys) => mapKeys(
  actions,
  (actionCreator, key) => keys[key] || key,
);

/**
 * Creates a HOC that passes the actions to dispatch actions to the appbar.
 *
 * ### Options
 *
 * Options are used as a mapper for actions so they can be renamed, where the key
 * is the original name of the action and the value is the new name.
 *
 * @example <caption>Avoid name collision between two drawer's controlls</caption>
 *
 *  compose(
 *    withAppBarControls({
 *      setComponent: 'setAppBarComponent',
 *      setComponentName: 'setAppBarComponentName',
 *      setComponentProps: 'setAppBarComponentProps',
 *      addComponentProps: 'addAppBarComponentProps',
 *    }),
 *  )(Component);
 *
 * @param {object} options
 * @return {function}
 * @function withAppBarControls
 */
export default options => connect(
  null,
  dispatch => bindActionCreators(
    mapActionKeys(getActions().appBar, options),
    dispatch,
  ),
);
