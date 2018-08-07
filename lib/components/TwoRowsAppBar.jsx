import React, { PureComponent } from 'react';
import { TwoRowsAppBar as MaterialUITwoRowsAppBar } from 'material-ui-layout';
import { Components } from 'meteor/vulcan:core';

export default class TwoRowsAppBar extends PureComponent {

  getContent(location) {
    const {
      [`${location}Content`]: content,
      [`${location}ComponentName`]: componentName,
      [`${location}Component`]: Component = componentName && Components[componentName],
      [`${location}ComponentProps`]: componentProps,
    } = this.props;

    if (content) {
      return content;
    }
    if (Component) {
      return (
        <Component
          toggleLeftDrawer={this.props.toggleLeftDrawer}
          toggleRightDrawer={this.props.toggleRightDrawer}
          {...componentProps}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <MaterialUITwoRowsAppBar
        topLeftContent={this.getContent('topLeft')}
        topCenterContent={this.getContent('topCenter')}
        topRightContent={this.getContent('topRight')}
        bottomLeftContent={this.getContent('bottomLeft')}
        bottomCenterContent={this.getContent('bottomCenter')}
        bottomRightContent={this.getContent('bottomRight')}
      />
    );
  }
}
