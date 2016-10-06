import React from 'react';
import {Flex, Box} from 'reflexbox';

import About from './About';
import Contact from './Contact';


//import _ from 'lodash';

export default class Title extends React.Component {
    render() {
        return (
          <Flex wrap gutter={2}>
            <Box col={12} sm={6} px={2}>
              <About />
            </Box>
            <Box col={12} sm={6} px={2}>
              <Contact />
            </Box>
          </Flex>
        );
    }
}
