import React from 'react';
import _ from 'lodash';
import {Flex, Box} from 'reflexbox';
import {PageHeader, Container} from 'rebass';

import Programming from './Programming';
import Title from './Title';
import Projects from './Projects';
import Info from './Info';
import Footer from './Footer';

import data from '../data';

import mono from '../configuration/mono';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = _.assignIn({}, mono)
    }

    static childContextTypes = {
        rebass: React.PropTypes.object
    }

    getChildContext() {
        return {rebass: this.state}
    }

    render() {
        const {fontFamily, fontWeight, letterSpacing, color, backgroundColor} = this.state

        return (
            <div style={{
                fontFamily,
                fontWeight,
                letterSpacing,
                color,
                backgroundColor
            }}>
                <Container>
                    <Title/>
                    <Info />
                    <Projects {...data}/> {/* <Programming/> */}
                </Container>
                <Footer />

            </div>
        );
    }
}
