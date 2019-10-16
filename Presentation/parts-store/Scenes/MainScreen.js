import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import ItemDisplay from '../components/ItemShowcase/ItemDisplay';
import { SearchBar, Icon } from 'react-native-elements';
import Variables from '../components/Globals/Variables';
import HorizontalStack from '../components/HorizontalStack';
import API from '../components/API/API';

export default class MainScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Shop",
    }
  };


  state = {
    SearchBar: null,
    SearchBarValue: "",
    SearchResults: null,
    DataHolder: [],
    isRefreshing: true,
    ActivityIndicator: null,
  };

  constructor(props) {
    super(props);
    this.page = 1;
    this.SearchPage = 1;
    this.KeyIndex = 1;

    this.HiddenData = [];

    Variables.SearchBarActive.registerListener((value) => {
      if (value && this.state.SearchBar == null) {

        this.setState({
          SearchBar: (
            <SearchBar
              placeholder="Search"
              value={[...this.state.SearchBarValue]}
              onChangeText={(newText) => {
                this.setState({ SearchBarValue: newText });
                if (newText != "") {
                  this.ShowSearchResults(newText);
                } else {
                  this.ResetSearch();
                }
              }
              }
            />
          )
        });
      }
      else
        this.setState({
          SearchBar: null,
        });
    });

  }


  ShowSearchResults = (query) => {
    this.HiddenData = [...this.state.DataHolder];
    this.SearchPage = 1;

    this.setState({
      DataHolder: [],
      ActivityIndicator: (<ActivityIndicator size="large" color="blue" />)
    });

    API.SearchItems(query, this.SearchPage, (Obj) => {
      this.UpdateFlatList(Obj);
      this.setState({ ActivityIndicator: null });
    })


  }



  LoadMore = () => {
    this.setState({ ActivityIndicator: (<ActivityIndicator size="large" color="blue" />) });

    API.GetItems(this.page++, (Obj) => {
      this.UpdateFlatList(Obj);
      this.setState({ ActivityIndicator: null });
    });
  }


  UpdateFlatList = (Obj) => {

    if (Obj.length == 0)
      return 0;

    DataHolder = [...this.state.DataHolder];

    Obj.forEach((item) => DataHolder.push(item));

    this.setState({
      DataHolder: DataHolder,
      isRefreshing: false,
    });
  }


  ResetList = () => {
    this.page = 1;
    this.setState({
      DataHolder: [],
      isRefreshing: true,
      ActivityIndicator: null,
    })
  }  
  
  ResetSearch = () => {
    this.setState({
      DataHolder: [...this.HiddenData],
      isRefreshing: false,
      ActivityIndicator: null,
    })

    this.HiddenData = [];
  }

  componentDidMount() {
    //Fetch Online
    API.GetItems(this.page++, (Obj) => this.UpdateFlatList(Obj));
  }




  render() {

    return (
      <View style={this.styles.container}>

        {this.state.SearchBar}
        <FlatList
          key={0}
          contentContainerStyle={this.styles.flatlist}
          data={this.state.DataHolder}
          extraData={this.state.DataHolder}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Details", { Item: item })
            }}>
              <ItemDisplay Object={item} />
            </TouchableOpacity>
          )}
          numColumns={2}
          refreshing={this.state.isRefreshing}
          onRefresh={() => { this.page = 0; this.ResetList(); this.LoadMore(); }}
          onEndReached={() => { this.LoadMore() }}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => this.KeyIndex++}
        />
        {this.state.ActivityIndicator}
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(235,235,235)',
    },
    main: {
      marginTop: 20,
      marginBottom: 20,
      padding: 20,
      width: "100%",
      height: "100%",
      alignSelf: 'stretch',
      alignItems: "center"
    },
    flatlist: {
      justifyContent: "center",
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 2,
      marginRight: 2,
    },
  });
}
