import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';

import PaymentList from './PaymentList';


class User extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    // console.log(this.props);
    return (
      <div>
        <PaymentList userId={this.props.userId}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // puppies: state.default.puppies || [],
  payments: state.default.payments || []
});

const mapDispatchToProps = dispatch => ({
    fetchUserPayments: (id) => dispatch(fetchUserPayments(id)),
    removePayment: (id) => dispatch(removePayment(id)),
    createPayment: (id, payment) => dispatch(createPayment(id, payment)),
    updatePayment: (id, payment) => dispatch(updatePayment(id, payment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
