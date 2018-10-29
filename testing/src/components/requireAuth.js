import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shoudNavigateAway();
        }

        componentDidUpdate() {
            this.shoudNavigateAway();
        }

        shoudNavigateAway() {
            if (!this.props.auth) {
                //console.log('I NEED TO LEAVE!!!');
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}>{this.props.children}</ChildComponent>;
        }
    }

    const mapStateToProps = state => {
        return {
            auth: state.auth
        };
    };

    return connect(mapStateToProps)(ComposedComponent);
};
