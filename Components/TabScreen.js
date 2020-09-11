import React, { Component } from 'react';
import { Container, Header, Body, Title, Text, Content, Tab, Tabs } from 'native-base';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

export default function TabScreen() {
	return (
		<Container>
			<Header style={{ backgroundColor: '#B0C4DE' }} hasTabs>
				<Body>
					<Title style={{ color: '#4682B4', fontSize: '25px' }}>News App</Title>
				</Body>
			</Header>
			<Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
				<Tab
					tabStyle={{ backgroundColor: '#B0C4DE' }}
					activeTabStyle={{ backgroundColor: '#B0C4DE' }}
					heading="TabOne"
				>
					<TabOne />
				</Tab>
				<Tab
					tabStyle={{ backgroundColor: '#B0C4DE' }}
					activeTabStyle={{ backgroundColor: '#B0C4DE' }}
					heading="TabTwo"
				>
					<TabTwo />
				</Tab>
				<Tab
					tabStyle={{ backgroundColor: '#B0C4DE' }}
					activeTabStyle={{ backgroundColor: '#B0C4DE' }}
					heading="TabThree"
				>
					<TabThree />
				</Tab>
			</Tabs>
		</Container>
	);
}