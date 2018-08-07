import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MaterialUILayout from 'material-ui-layout';

export default class Layout extends PureComponent {
  appBarProps() {
    const {
      appBarContentComponent: AppBarContentComponent,
      appBarContentProps,
    } = this.props;
    return {
      appBarPosition: 'fixed',
      appBarContent: <AppBarContentComponent {...appBarContentProps} />,
    };
  }

  leftDrawerProps() {
    const {
      leftDrawerContentComponent: LeftDrawerComponent,
      leftDrawerContentProps,
    } = this.props;
    return LeftDrawerComponent
      ? {
          leftDrawerContent: (
            <LeftDrawerComponent {...leftDrawerContentProps} />
          ),
          leftDrawerType: 'permanent',
          leftDrawerUnder: true,
        }
      : {};
  }

  rightDrawerProps() {
    const {
      rightDrawerContentComponent: RightDrawerComponent,
      rightDrawerContentProps,
    } = this.props;
    return RightDrawerComponent
      ? {
          rightDrawerContent: (
            <RightDrawerComponent {...rightDrawerContentProps} />
          ),
          rightDrawerType: 'persistent',
          rightDrawerUnder: true,
        }
      : {};
  }

  render() {
    const { children, classes } = this.props;
    // TODO make the usingTwoRowAppBar be modified by props
    return (
      <MaterialUILayout
        overrideClasses={classes}
        {...this.appBarProps()}
        {...this.leftDrawerProps()}
        {...this.rightDrawerProps()}
        usingTwoRowAppBar
      >
        {children}
      </MaterialUILayout>
    );
  }

  static propTypes = {
    appBarContentComponent: PropTypes.func.isRequired,
    appBarContentProps: PropTypes.shape({}),
    leftDrawerContentComponent: PropTypes.func,
    leftDrawerContentProps: PropTypes.shape({}),
    rightDrawerContentComponent: PropTypes.func,
    rightDrawerContentProps: PropTypes.shape({}),
  };

  static defaultProps = {
    appBarContentProps: {},
    leftDrawerContentProps: {},
    rightDrawerContentProps: {},
  };
}
