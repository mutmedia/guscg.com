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
    SectionHeader,
    Space,
    Section,
    Text,
    Tooltip
} from 'rebass';

function openInNewTab(href) {
    return (e) => {
        e.preventDefault();
        window.open(href, '_blank');
    };
}

export default class Projects extends React.Component {

  render() {
      return (
          <Section>
              <SectionHeader  heading="My Projects" />
              <Flex justify="center" wrap gutter={2}>
                  {_.map(this.props.projects, ({
                      image,
                      name,
                      description,
                      rating,
                      github,
                      link,
                      tags
                  }) => (
                      <Box key={_.uniqueId('project_')} col={12} sm={4} p={2}>
                          <Card>
                              <LinkBlock href={link} is="a" onClick={openInNewTab(link)}>
                                  <CardImage src={image}/>
                                  <Box col={12} p={1}>
                                      <Flex align='center'>
                                          <Heading children={name}/>
                                          <Space auto/> {/* <Rating ml={1} value={rating} /> */}
                                      </Flex>
                                      <Box>
                                          <Text children={description}/>
                                          <Space auto/>
                                      </Box>
                                  </Box>
                              </LinkBlock>
                              <Divider/>
                              <Flex align="center" justify="space-between">
                                <Box px={2}>
                                    <Text small children={tags}/>
                                </Box>
                                  <Box px={2}>
                                      <Tooltip inverted rounded title="See Source!">
                                          <LinkBlock href={github} is="a" onClick={openInNewTab(github)}>
                                              <Media img='images/GitHub-Mark-32px.png'/>
                                          </LinkBlock>
                                      </Tooltip>
                                  </Box>
                              </Flex>
                          </Card>
                      </Box>
                  ))}
              </Flex>
          </Section>
      );
  }
}
