import { addAction } from 'meteor/vulcan:core';

addAction({
  drawers: {
    setComponent(drawerName, component) {
      return {
        type: 'DRAWERS_SET_COMPONENT',
        drawerName,
        componentName: component.name,
        componentProps: component.props,
      };
    },
    setComponentName(drawerName, componentName) {
      return {
        type: 'DRAWERS_SET_COMPONENT_NAME',
        drawerName,
        componentName,
      };
    },
    setComponentProps(drawerName, componentProps) {
      return {
        type: 'DRAWERS_SET_COMPONENT_PROPS',
        drawerName,
        componentProps,
      };
    },
    addComponentProps(drawerName, componentProps) {
      return {
        type: 'DRAWERS_ADD_COMPONENT_PROPS',
        drawerName,
        componentProps,
      };
    },
  },
});
