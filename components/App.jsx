import React from 'react';
import {PageHeader, Container} from 'rebass';

import Programming from './Programming';
import Title from './Title';
import Projects from './Projects';

import data from '../data';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Title/>
                <Projects {...data}/>
                {/* <Programming/> */}
            </Container>
        );
    }
}
