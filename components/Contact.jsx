import React from 'react';
import {SectionHeader, Section, LinkBlock, Text} from 'rebass';
import {Flex, Box} from 'reflexbox';

//import {openInNewTab} from '../helpers';
function openInNewTab(href) {
    return (e) => {
        e.preventDefault();
        window.open(href, '_blank');
    };
}

class ContactLink extends React.Component {
    constructor() {
        super();
        this.state = {
            bold: false
        };
    }
    render() {
        return (
            <LinkBlock
              mb={2}
              href={this.props.link}
              is='a'
              onClick={openInNewTab(this.props.link)}
              onMouseEnter={() => this.setState({bold: true})}
              onMouseLeave={() => this.setState({bold: false})}>
                <Flex justify="space-between">
                    <Box>
                        <Text bold={this.state.bold}>
                            {this.props.name}:
                        </Text>
                    </Box>
                    <Box>
                        <Text bold={this.state.bold}>
                            {this.props.shortLink}
                        </Text>
                    </Box>
                </Flex>
            </LinkBlock>
        );
    }
}

export default class Title extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader mt={0} heading='Contact'/>
                <ContactLink name='email' link='mailto:gustavo.ceci95@gmail.com' shortLink='gustavo.ceci95@gmail.com'/>
                <ContactLink name='twitter' link='https://twitter.com/Ghust95' shortLink='@Ghust95'/>
                <ContactLink name='github' link='https://github.com/Ghust1995' shortLink='github.com/Ghust1995'/>
                <ContactLink name='linkedIn' link='https://www.linkedin.com/in/gustavoceci95' shortLink='linkedin.com/in/gustavoceci95'/>
            </Section>
        );
    }
}
