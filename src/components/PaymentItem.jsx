import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';



class PaymentItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    let cardNums = this.props.paymentInfo.card_number;
    // cardNums.split(" ")[]
    return (
      <div>
        <div className='name-div-container'>
          <h1>{this.props.paymentInfo.firstname}</h1>
          <h1>{this.props.paymentInfo.lastname}</h1>
          <h1>x-{cardNums.split(" ")[3]}</h1>
        </div>
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
)(PaymentItem);
