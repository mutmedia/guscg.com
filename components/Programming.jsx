import React from 'react';
import {Flex, Box} from 'reflexbox';
import {
    Heading,
    Block,
    Section,
    SectionHeader,
    Space,
    Donut,
    Slider,
    Stat,
    Divider
} from 'rebass';

//import _ from 'lodash';

export default class Programming extends React.Component {
    constructor() {
        super();
        this.state = {
            angle: 60,
            radius: 192
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        //const {radius, angle} = this.state;
        //const maxRadius = 320;
        return (
            <Section>
                <SectionHeader heading='Programming Skills'/>
                {/* <Flex wrap justify='space-between' align='stretch'>
                    <Flex column align='center' style={{
                        width: 320,
                        minHeight: 384
                    }}>
                        <Space auto/>
                        <Donut color='info' size={radius} strokeWidth={16} children={`${radius}px`} value={radius / maxRadius}/>
                        <Space auto/>
                        <Slider color='info' fill style={{
                            width: '100%'
                        }} name='radius' label='Radius' value={radius} min={128} max={maxRadius} onChange={this.handleChange}/>
                    </Flex>
                    <Flex column>
                        <Space auto/>
                        <Donut color='green' size={192} strokeWidth={16} children={`${angle}°`} value={angle / 360}/>
                        <Space auto/>
                        <Slider color='green' fill style={{
                            width: '100%'
                        }} name='angle' label='Angle' value={angle} max={360} onChange={this.handleChange}/>
                    </Flex>
                    <Box sm={3}>
                        <Block style={{
                            textAlign: 'right'
                        }} py={2} pl={2} color='red' borderColor='red' borderLeft>
                            <Heading level={4} size={2} children='Coordinates'/>
                            <div>
                                <Stat m={2} topLabel unit='px' value={100}/>
                            </div>
                            <div>
                                <Stat m={2} topLabel unit='px' value={2}/>
                            </div>
                        </Block>
                    </Box>
                </Flex>
                <Divider/>
                <Flex wrap justify='space-between' gutter={2} align='center'>
                    <Stat m={2} label='Stars' color='orange' value={1234 || '...'}/>
                    <Stat m={2} label='Forks' value={12 || '...'}/>
                    <Stat m={2} label='Watchers' value={12345 || '...'}/>
                    <Stat m={2} label='Version' value={1.0}/>
                </Flex> */}
            </Section>
        );
    }
}
