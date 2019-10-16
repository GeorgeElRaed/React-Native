import React, { Component } from 'react';
import { StyleSheet, ListView, Dimensions, View, Text } from 'react-native';
import HorizontalStack from '../HorizontalStack';
import API from '../API/API';

export default class SpecSheetView extends Component {


    state = {
        SpecsHolder: []
    }

    constructor(props) {
        super(props);
        this.keyIndex = 1;

        this.Item = this.props.Item;
        this.styles = this.props.Styles;

        this.styles.Title = {
            fontWeight: "bold",
            color: "black",
            fontSize: 17,
            marginBottom: 20,
        };

        this.styles.spec = {
            marginBottom: 15,
        };


        this.styles.speccontainer = {
            alignContent: "space-between",
            justifyContent: "space-between",
        };


        this.imageWidth = Math.round(Dimensions.get('window').width);


    }


    componentDidMount() {
        specs = [];

        API.GetItemSpecSheet(this.Item.ID, (SpecSheet) => {

            Object.keys(SpecSheet).forEach((key) => {
                if (key != "ItemID")
                    specs.push((
                        <HorizontalStack key={this.keyIndex++} style={this.styles.speccontainer}>
                            <Text style={this.styles.spec}>{key}:</Text>
                            <Text style={[this.styles.specvalue, this.styles.spec]}>{SpecSheet[key]}</Text>
                        </HorizontalStack>
                    )
                    )
            }
            )

            this.setState({
                SpecsHolder: specs,
            })
        }
        )
    }


    render() {


        return (
            <View>
                <View style={[this.styles.DetailsBlock, this.styles.pad, this.styles.bottomBorder, this.styles.topBorder]}>
                    <Text style={this.styles.Title}>Specifications</Text>
                    {this.state.SpecsHolder}
                </View>
            </View>
        );

    }
}


