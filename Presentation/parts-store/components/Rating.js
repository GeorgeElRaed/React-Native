import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import HorizontalStack from '../components/HorizontalStack';

export default class Rating extends Component {

    constructor(props) {
        super(props);

        this.max = 5;

        this.styles = this.props.style;

        this.RatingBar = this.GetRatingBar();

    }

    GetRatingBar() {
        n = Math.floor(this.props.Rating);
        d = this.props.Rating - n;

        k = 1;

        Stars = [];
        for (var i = 0; i < n; i++)
            Stars.push(
                (
                    <Icon
                        key={k++}
                        color='rgb(253,111,110)'
                        size={14}
                        type="ionicon"
                        name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                    />
                )
            );

        if (d >= 0.5)
            Stars.push(
                (<Icon
                    key={k++}
                    color='rgb(253,111,110)'
                    size={14}
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-star-half" : "md-star-half"}
                />)
            );

        SLeft = this.max - Stars.length;

        for (var i = 0; i < SLeft; i++)
            Stars.push(
                (
                    <Icon
                        key={k++}
                        color='rgb(253,111,110)'
                        size={14}
                        type="ionicon"
                        name={Platform.OS === "ios" ? "ios-star-outline" : "md-star-outline"}
                    />
                )
            );

        return Stars;
    }

    render() {
        return (
            <HorizontalStack style={this.styles}>
                {this.RatingBar}
            </HorizontalStack>
        );
    }

}