import { connect } from 'react-redux';
import get from 'lodash/get';
import { getActions } from 'meteor/vulcan:lib';
import { Components } from 'meteor/vulcan:core';

/**
 * Creates a HOC that connects to the Redux's store and retrieves the appbar's name and props.
 *
 * ### Options
 *
 *  - `contentComponentPropName`: name of the prop where the appbar component is stored
 *  - `contentPropsPropName`: name of the prop where the appbar name is stored
 *  - `defaultComponentName`: name of the drawer to be used when no appbar found
 *  - `defaultComponentProps`: props of the drawer to be used when no appbar found
 *
 * @param {object} options
 * @function withDrawerComponent
 * @return {function}
 */
export default options => {
  const {
    contentComponentPropName,
    contentPropsPropName,
    defaultComponentName,
    defaultComponentProps,
  } = options;
  return connect(
    (state, props) => {
      const {
        componentName = props[contentComponentPropName] || defaultComponentName,
        componentProps = props[contentPropsPropName] || defaultComponentProps,
      } = get(state, 'appBar', {});
      return {
        [contentComponentPropName]: componentName && Components[componentName],
        [contentPropsPropName]: componentProps,
      };
    },
  );
};
