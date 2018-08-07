import { addReducer } from 'meteor/vulcan:core';

const defaultAppBarState = {
  componentProps: {},
};

addReducer({
  appBar: (state = defaultAppBarState, { type, ...options }) => {
    switch(type) {
      case 'APP_BAR_SET_COMPONENT':
        return {
          ...state,
          componentName: options.componentName,
          componentProps: {
            ...defaultAppBarState.componentProps,
            ...options.componentProps,
          },
        };
      case 'APP_BAR_SET_COMPONENT_NAME':
        return {
          ...state,
          componentName: options.componentName,
        };
      case 'APP_BAR_SET_COMPONENT_PROPS':
        return {
          ...state,
          componentProps: options.componentProps,
        };
      case 'APP_BAR_ADD_COMPONENT_PROPS':
        return {
          ...state,
          componentProps: {
            ...state.componentProps,
            ...options.componentProps,
          },
        };
      default:
        return state;
    }
  },
});
