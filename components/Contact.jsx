import React from 'react';
import {SectionHeader, Section, LinkBlock} from 'rebass';
import {Flex, Box} from 'reflexbox';

//import {openInNewTab} from '../helpers';
function openInNewTab(href) {
    return (e) => {
        e.preventDefault();
        window.open(href, '_blank');
    };
}

class ContactLink extends React.Component {
  render() {
    return (
      <LinkBlock href={this.props.link} is='a' onClick={openInNewTab(this.props.link)}>
        <Flex justify="space-between">
          <Box>
            {this.props.name}:
          </Box>
          <Box>
            {this.props.shortLink}
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
              <SectionHeader heading='Contact' />
              <ContactLink
                name='email'
                link='https://twitter.com/Ghust95'
                shortLink='gustavo.ceci95@gmail.com'
              />
              <ContactLink
                name='twitter'
                link='mailto:gustavo.ceci95@gmail.com'
                shortLink='@Ghust95'
              />
              <ContactLink
                name='github'
                link='https://github.com/Ghust1995'
                shortLink='github.com/Ghust1995'
              />
              <ContactLink
                name='linkedIn'
                link='https://www.linkedin.com/in/gustavoceci95'
                shortLink='linkedin.com/in/gustavoceci95'
              />
          </Section>
        );
    }
}
