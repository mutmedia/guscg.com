import React from 'react';
import {Flex, Box} from 'reflexbox';
import {Section, Divider} from 'rebass';

//import _ from 'lodash';

export default class Footer extends React.Component {
    render() {
        return (
            <Section>
              <Divider />
              <Flex justify="space-between">
                  <Box />
                  <Box py={2} px={6}>
                      Made by Gustavo Ceci Guimaraes
                  </Box>
              </Flex>
            </Section>
        );
    }
}
