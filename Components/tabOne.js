import React, { useState, useEffect } from 'react';
import { Container, Content, List } from 'native-base';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DataItem from './DataItem';
import ModalView from './ModalView';

export default function TabOne() {

	const dispatch = useDispatch();
	const { isLoading, articles } = useSelector((state) => {
		return {
			isLoading: state.isLoading,
			articles: state.entertainment,
		};
	});

	useEffect(() => {
		dispatch({ type: "CLICK", category: "entertainment"});
	}, []);

	// 모달을 보여는 여부를 담을 상태를 설정한다.
	const [viewModal, setModalView] = useState(false);
	// 모달을 열때 제목과 webview 로 보여줄 기사 주소를 담아준다.
	const [modalArticleData, setModalArticleData] = useState({});

	// 모달 열기
	const handleClick = (articleData) => {
		setModalView(true);
		setModalArticleData(articleData);
	};

	// 모달 닫기
	const handleClose = () => {
		setModalView(false);
		setModalArticleData({});
	};

	const pageView = isLoading ? (
		<View>
			<ActivityIndicator animating={isLoading} size="large" />
			<Text style={{ marginTop: 10 }}>로딩중...</Text>
		</View>
	) : (
			<List
				dataArray={articles}
				renderRow={(article) => {
					return <DataItem article={article} handleClick={handleClick} />
				}}
			/>
		);

	return (
		<Container>
			<Content>
				{pageView}
			</Content>
			<ModalView viewModal={viewModal} modalArticleData={modalArticleData} handleClose={handleClose} />
		</Container>
	);
};