import React from 'react';
import _ from 'lodash';
import {PageHeader, Container} from 'rebass';

import Programming from './Programming';
import Title from './Title';
import Projects from './Projects';

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
                    <Projects {...data}/> {/* <Programming/> */}
                </Container>
            </div>
        );
    }
}
