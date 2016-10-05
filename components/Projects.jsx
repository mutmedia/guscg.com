import React from 'react';
import _ from 'lodash';

import {Flex, Box} from 'reflexbox';
import {
    Card,
    CardImage,
    Divider,
    Heading,
    LinkBlock,
    Media,
    Space,
    Text,
    Tooltip
} from 'rebass';

export default class Projects extends React.Component {
    render() {
        const projects = this.props.projects;

        const cards = projects;

        return (
            <Flex justify="center" wrap gutter={2}>
                {cards.map(({
                    image,
                    name,
                    description,
                    rating,
                    github
                }, i) => (
                    <Box key={i} col={12} sm={4} p={2}>
                        <Card>
                            <CardImage src={image}/>
                            <Flex align='center'>
                                <Heading children={name}/>
                                <Space auto/> {/* <Rating ml={1} value={rating} /> */}
                            </Flex>
                            <Box>
                                <Text small children={description}/>
                            </Box>
                            <Divider/>
                            <Flex justify="flex-end">
                                <Box>
                                    <Tooltip inverted rounded title="See Source!">
                                      <LinkBlock href="#" is="a" onClick={() => window.open(github, '_blank')}>
                                          <Media img='images/GitHub-Mark-32px.png'/>
                                      </LinkBlock>
                                    </Tooltip>

                                </Box>
                                <Box></Box>
                            </Flex>
                        </Card>
                    </Box>
                ))}
            </Flex>
        );
    }
}
