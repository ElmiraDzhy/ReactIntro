import React from 'react';
import PropTypes from 'prop-types';

function FlexContainer(props) {
  const { children, direction, justify, alignItems, flexWrap } = props;
  const styles = {
    display: 'flex',
    flexDirection: `${direction}`,
    justifyContent: `${justify}`,
    alignItems: `${alignItems}`,
    flexWrap: `${flexWrap}`,
  };

  return <article style={styles}>{children}</article>;
}

export default FlexContainer;

FlexContainer.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  alignItems: 'normal',
  flexWrap: 'nowrap',
};

FlexContainer.propTypes = {
  direction: PropTypes.string.isRequired,
  justify: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  flexWrap: PropTypes.string.isRequired,
};
