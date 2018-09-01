import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  state = {
    items:
    [
      {
        title: `Zadanie 1`,
        key: 1,
        content: `Zrobić zakupy`,
      }
    ]
    // items: new Array(3).fill(0).map((a, i) => i).map(i => ({
    //   title: `Title ${i}`,
    //   key: i,
    //   content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`,
    // })),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista zadań na dzisiaj</Text>
        <FlatList data={this.state.items} renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  item: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  content: {
    marginBottom: 10,
  },
});
