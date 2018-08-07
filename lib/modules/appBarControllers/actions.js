import { addAction } from 'meteor/vulcan:core';

addAction({
  appBar: {
    setComponent(component) {
      return {
        type: 'APP_BAR_SET_COMPONENT',
        componentName: component.name,
        componentProps: component.props,
      };
    },
    setComponentName(componentName) {
      return {
        type: 'APP_BAR_SET_COMPONENT_NAME',
        componentName,
      };
    },
    setComponentProps(componentProps) {
      return {
        type: 'APP_BAR_SET_COMPONENT_PROPS',
        componentProps,
      };
    },
    addComponentProps(componentProps) {
      return {
        type: 'APP_BAR_ADD_COMPONENT_PROPS',
        componentProps,
      };
    },
  },
});
