import React from 'react';
import {SectionHeader, Section, Text, Tooltip} from 'rebass';

import _ from 'lodash';

const favoriteGames = [
  "Stephen's Sausage Roll",
  'Braid',
  'Portal',
  'The Witness',
  'Smash Bros (?!)'
];

class StringWithTooltips extends React.Component {
  render() {
    let games = _.clone(favoriteGames);
    const words = _.map(_.words(this.props.string), (word) => {
      let component = word + ' ';
      if(word.length > 4) {
        let game = games[0];
        games = _.drop(games);
        component = (<span><Tooltip inverted rounded title={game}>{component}</Tooltip>{' '}</span>);
      }
      return (<span>{component}</span>);
    });
    return (
      <Text>
        {words}
      </Text>
    );
  }
}

export default class Title extends React.Component {
    render() {
        return (
          <Section>
            <SectionHeader mt={0} heading="About" />
              <Text>
                I am a Computer Engineering Student at ITA, in Brazil.
                I really like learning new stuff, specially if it will help me make my games feel/look/play better.
                I find game design a very interesting field, thinking about the player experience and learning during gameplay is awesome!
              </Text>
              <StringWithTooltips string={'Puzzle games with narrative or exploration are my favorites!'} />
          </Section>
        );
    }
}
