import React, { Component } from 'react';
import { Container, Header, Body, Title, Text, Content, Tab, Tabs } from 'native-base';
import { Tab1 } from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

export default class TabsExample extends Component {
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
						<Tab1 />
					</Tab>
					<Tab heading="Tab2">
						<Tab2 />
					</Tab>
					<Tab heading="Tab3">
						<Tab3 />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default TabsExample;