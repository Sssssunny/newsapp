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
					<Tab heading="일반">
						<TabOne />
					</Tab>
					<Tab heading="Tab2">
						<TabTwo />
					</Tab>
					<Tab heading="Tab3">
						<TabThree />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}