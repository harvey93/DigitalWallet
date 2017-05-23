import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';

import PaymentItem from './PaymentItem';


class PaymentList extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserPayments(this.props.userId);
  }

  render(){
    // console.log(this.props.payments);
    return (
      <div>
        {this.props.payments.map((el, idx) => (
          <PaymentItem userId={this.props.userId} key={idx} paymentInfo={el}/>
        ))}
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
)(PaymentList);
