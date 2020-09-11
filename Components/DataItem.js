import React from 'react';
import { ListItem, Thumbnail, View, Text, Left, Body, Right, Button } from 'native-base';
import moment from 'moment';

function DataItem({ article }) {
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: article.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png' }} />
      </Left>
      <Body>
        <Text numberOfLines={2}>{article.title}</Text>
        <Text note numberOfLines={2}>{article.description}</Text>

        {/* 출처, 시간 표시 */}
        <Text numberOfLines={2}>{article.title}</Text>
        <Text note numberOfLines={2}>{article.description}</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          {/* 출처 */}
          <Text note>{article.source.name}  |  </Text>
          {/* 시간 */}
          <Text note>{moment(article.publishedAt || moment.now).fromNow()}</Text>
        </View>
      </Body>
      <Right>
        <Button transparent>
          <Text>보기</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default DataItem;