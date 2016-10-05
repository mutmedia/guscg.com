import React from 'react';
import {SectionHeader, Section} from 'rebass';

//import _ from 'lodash';

export default class Title extends React.Component {
    render() {
        return (
          <Section>
            <SectionHeader heading="About" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              efficitur tortor ac dictum finibus. Curabitur pharetra lectus eget
              sem pharetra, eu suscipit elit condimentum. Etiam vel ullamcorper
              urna. Phasellus accumsan gravida lectus, sit amet ullamcorper tellus.
              Aliquam eu porta metus, vitae venenatis velit.
          </Section>
        );
    }
}
