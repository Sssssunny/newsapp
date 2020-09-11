import React from 'react';
import { Container, Header, Content, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { Modal, Share, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ModalView({ viewModal, modalArticleData, handleClose }) {
  
  const webViewHeight = Dimensions.get('window').height - 100;
  
  return (
    <Modal
      animationType="slide"
      transparent
      visible={viewModal}
    >
      <Container>
        <Header>
          <Left>
            <Button onPress={handleClose} transparent>
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <Title>기사 제목</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="share" />
            </Button>
          </Right>
        </Header>
        <Content>
          <WebView
            containerStyle={{ height: webViewHeight }}
            source={{ uri: modalArticleData.url }}
            style={{ flex: 1 }}
            onError={handleClose}
            startInLoadingState
            scalesPageToFit
          />
        </Content>
      </Container>
    </Modal>
  );
};