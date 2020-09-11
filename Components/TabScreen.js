import React, { Component } from 'react';
import { Container, Header, Body, Title, Text, Content, Tab, Tabs } from 'native-base';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

export default class TabsScreen extends Component {
	render() {
		return (
			<Container>
				<Header hasTabs>
					<Body>
						<Title>News</Title>
					</Body>
				</Header>

				<Header hasTabs />
				<Tabs>
					<Tab heading="전체">
						<TabOne />
					</Tab>
					<Tab heading="과학">
						<TabTwo />
					</Tab>
					<Tab heading="건강">
						<TabThree />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}