import React from 'react';
import { Container, Header, Body, Title, Tab, Tabs } from 'native-base';

// tabOne 는 export default 로 선언했기 때문에 그냥 부르면 돼. {} 안에 넣는거 아님.
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

// 이거 이름 잘못됐네...
// 함수형 컴포넌트로 변경.
// header 가 두번들어가 있어서 중복 제거.
function TabScreen () {
	return (
		<Container>
			<Header hasTabs>
				<Body>
					<Title>News</Title>
				</Body>
			</Header>
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

export default TabScreen;