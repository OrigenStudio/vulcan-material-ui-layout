import { addReducer } from 'meteor/vulcan:core';

const defaultDrawerState = {
  componentProps: {},
};

addReducer({
  drawers: (state = {}, { type, drawerName, ...options }) => {
    const drawerState = state[drawerName] || defaultDrawerState;
    switch(type) {
      case 'DRAWERS_SET_COMPONENT':
        return {
          ...state,
          [drawerName]: {
            ...drawerState,
            componentName: options.componentName,
            componentProps: options.componentProps,
          },
        };
      case 'DRAWERS_SET_COMPONENT_NAME':
        return {
          ...state,
          [drawerName]: {
            ...drawerState,
            componentName: options.componentName,
          },
        };
      case 'DRAWERS_SET_COMPONENT_PROPS':
        return {
          ...state,
          [drawerName]: {
            ...drawerState,
            componentProps: options.componentProps,
          },
        };
      case 'DRAWERS_ADD_COMPONENT_PROPS':
        return {
          ...state,
          [drawerName]: {
            ...drawerState,
            componentProps: {
              ...drawerState.componentProps,
              ...options.componentProps,
            },
          },
        };
      default:
        return state;
    }
  },
});
