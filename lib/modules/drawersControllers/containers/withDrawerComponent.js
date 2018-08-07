import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { getActions } from 'meteor/vulcan:lib';
import { Components } from 'meteor/vulcan:core';

const mapDispatchToProps = dispatch =>
  bindActionCreators(getActions().drawers, dispatch);

/**
 * Creates a HOC that connects to the Redux's store and retrieves a given drawer's name and props.
 *
 * ### Options
 *
 *  - `drawerName`: name of the drawer
 *  - `contentComponentPropName`: name of the prop where the drawer component is stored
 *  - `contentPropsPropName`: name of the prop where the drawer name is stored
 *  - `defaultComponentName`: name of the drawer to be used when no drawer found
 *  - `defaultComponentProps`: props of the drawer to be used when no drawer found
 *
 * @param {object} options
 * @function withDrawerComponent
 * @return {function}
 */
export default options => {
  const {
    drawerName,
    contentComponentPropName,
    contentPropsPropName,
    defaultComponentName,
    defaultComponentProps,
  } = options;
  return connect((state, props) => {
    const {
      componentName = props[contentComponentPropName] || defaultComponentName,
      componentProps = props[contentPropsPropName] || defaultComponentProps,
    } = get(state, ['drawers', drawerName], {});
    return {
      [contentComponentPropName]: componentName && Components[componentName],
      [contentPropsPropName]: componentProps,
    };
  }, mapDispatchToProps);
};
