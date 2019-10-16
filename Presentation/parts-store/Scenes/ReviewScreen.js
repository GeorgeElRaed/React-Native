import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, Button, View, TextInput } from 'react-native';
import t from 'tcomb-form-native';
import API from '../components/API/API';

const Form = t.form.Form;
const rating = t.refinement(t.Number, function (n) {
    return n >= 0 && n <= 5;
});

const Review = t.struct({
    Username: t.String,
    Review: t.String,
    Rating: rating,
});

const options = {
    fields: {
        Username: {
            error: 'Please provide username',
        },
        Review: {
            error: 'Review cannot be empty',
        },
        Rating: {
            error: 'Please enter a rating between 0 and 5',
        }
    },
};

export default class ReviewScreen extends Component {

    constructor(props) {
        super(props);

        this.Item = this.props.navigation.getParam("Item", {});

        this.imageWidth = Math.round(Dimensions.get('window').width);
        this.styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'rgb(235,235,235)',
                borderRadius: 10,
                textAlign: "center",
                justifyContent: "center",
                padding: 20,
            },
        });
    }

    handleSubmit = () => {
        const value = this.reviewform.getValue();
        if (value.Username == null || value.Rating == null || value.Review == null)
            return;
            
        review = {
            ItemID: this.Item.ID,
            Username: value.Username,
            Rating: value.Rating,
            Review: value.Review,
            Date: new Date().toISOString(),
        }

        API.AddReview(review, (Obj) => {
            this.props.navigation.pop();
        })

    }

    render() {

        return (
            <View style={this.styles.container}>
                <View >
                    <Form
                        ref={form => this.reviewform = form}
                        type={Review}
                        options={options} />
                    <Button
                        title="Submit!"
                        onPress={this.handleSubmit}
                    />
                </View>
            </View>
        );

    }
}


