import React from 'react';
import {Flex, Box} from 'reflexbox';
import {Footer as RebassFooter} from 'rebass';

//import _ from 'lodash';

export default class Footer extends React.Component {
    render() {
        return (
            <RebassFooter mt={4} color='white' backgroundColor='black'>
                <Flex justify="space-between">
                    <Box />
                    <Box py={2} px={6}>
                        Made by Gustavo Ceci Guimaraes
                    </Box>
                </Flex>

            </RebassFooter>
        );
    }
}
