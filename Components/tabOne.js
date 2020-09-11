import React, { useState, useEffect } from 'react';
import { Container, Content, List } from 'native-base';

// ActivityIndicator 는 react-native 에서 호출.
import { ActivityIndicator, View, Text } from 'react-native';
import { getArticles } from '../api/news';
import DataItem from './DataItem';

function tabOne() {

	// 로딩여부 와 뉴스 정보를 state 에 담는다.
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	// useEffect 를 통해 초기 랜더링 될때만 데이터를 호출한다.
	useEffect(() => {
		async function get_articles() {
			setArticles(await getArticles());
			setIsLoading(false);
		}

		get_articles();
	}, []);

	const pageView = isLoading ? (
		<View>
			<ActivityIndicator animating={isLoading} size="large" />
			<Text style={{ marginTop: 10 }}>로딩중...</Text>
		</View>
	) : (
			<List
				dataArray={articles}
				renderRow={(article) => {
					return <DataItem article={article} />
				}}
			/>
		);

	return (
		<Container>
			<Content>
				{pageView}
			</Content>
		</Container>
	);
};

export default tabOne;