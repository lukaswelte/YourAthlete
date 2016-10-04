import React, { PureComponent } from 'react';

class CircularImage extends PureComponent {
  render() {
    const { children, style, url, size } = this.props;

    const sizeOfImage = size || style.height || style.widht;

    const styles = {
      ...style,
      height: sizeOfImage,
      width: sizeOfImage,
      borderRadius: sizeOfImage / 2,
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };

    return (
      <div style={styles}>
        {children}
      </div>
    );
  }
}

export default CircularImage;
