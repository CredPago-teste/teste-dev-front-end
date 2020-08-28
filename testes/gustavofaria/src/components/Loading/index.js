import React from 'react';
import PropTypes from 'prop-types';

import { Screen, Loading } from './styles';

const Component = ({ visible }) => (
  <>
    {
      visible
        ? (
          <Screen>
            <Loading />
          </Screen>
        )
        : <></>
    }
  </>
);

Component.propTypes = { visible: PropTypes.bool };
Component.defaultProps = { visible: true };

export default Component;
