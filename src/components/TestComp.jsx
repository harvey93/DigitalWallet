import React from 'react';
import { connect } from 'react-redux';
// import { fetchPuppies, fetchPuppy, createPuppy, updatePuppy, deletePuppy } from '../actions/puppyActions.js';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';

class TestComp extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        // this.props.fetchPuppies();
        // this.props.fetchPuppy(3);
        // console.log(this.props);
    }

    handleClick(){
      // console.log('in');
      // this.props.createPuppy({name: "hrant", breed: "yerevan", age: 24, sex: "m" })
      //   .then( () => this.props.fetchPuppies());
        // .then(this.props.fetchPuppies());
      // this.props.updatePuppy(3, { name: "kacho", breed: "dog", age: 45, sex: "M"});
      // this.props.deletePuppy(5);
      // this.props.fetchPuppies();
      // this.props.fetchPayments();
      // this.props.fetchUserPayments(2);
      // this.props.removePayment(5);
      // this.props.createPayment(1,
      //   {firstname: "eminem", lastname: "white", card: "mastercard", card_number: "123",
      //     expires_month: "5", expires_year: "4", csc: "410"});
      this.props.updatePayment(13,
        {firstname: "hrant", lastname: "black", card: "mastercard", card_number: "123",
          expires_month: "5", expires_year: "4", csc: "410", user_id: "1"});
    }

    render(){
        console.log(this.props);
        return(
          <div>
            <h1 onClick={ () => this.handleClick()}>HELLO</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  // puppies: state.default.puppies || [],
  payments: state.default.payments || []
});

const mapDispatchToProps = dispatch => ({
    // fetchPuppies: () => dispatch(fetchPuppies()),
    // fetchPuppy: (id) => dispatch(fetchPuppy(id)),
    // createPuppy: (puppy) => dispatch(createPuppy(puppy)),
    // updatePuppy: (id, puppy) => dispatch(updatePuppy(id, puppy)),
    // deletePuppy: (id) => dispatch(deletePuppy(id)),
    fetchPayments: () => dispatch(fetchPayments()),
    fetchUserPayments: (id) => dispatch(fetchUserPayments(id)),
    removePayment: (id) => dispatch(removePayment(id)),
    createPayment: (id, payment) => dispatch(createPayment(id, payment)),
    updatePayment: (id, payment) => dispatch(updatePayment(id, payment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComp);
