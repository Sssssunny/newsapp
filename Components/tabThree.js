import React, { useState, useEffect } from 'react';
import { Container, Content, List } from 'native-base';
import { View, Text, ActivityIndicator } from 'react-native';
import { getArticlesHealth } from '../api/news';
import DataItem from './DataItem';

export default function TabThree() {

	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		async function get_articles() {
			setArticles(await getArticlesHealth());
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