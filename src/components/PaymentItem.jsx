import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';
import { receiveStatus } from '../actions/statusActions.js';



class PaymentItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  handleDelete(){
    // console.log(this.props.paymentInfo);
    // console.log(this.props.userId);
    this.props.removePayment(this.props.paymentInfo.id)
      .then( () => this.props.fetchUserPayments(this.props.userId));
  }

  changeStatus(status) {
    // console.log('in');
    this.props.receiveStatus(status);
  }

  render(){
    let cardNums = this.props.paymentInfo.card_number;
    // cardNums.split(" ")[]
    return (
      <div>
        <div className='name-div-container'>
            <h1 className='payment-list-item-h1'>{this.props.paymentInfo.firstname.slice(0, 8)}</h1>
            <h1 className='payment-list-item-h1'>{this.props.paymentInfo.lastname.slice(0,8)}</h1>
            <h1 className='payment-list-item-h1'>x-{cardNums.split(" ")[3]}</h1>
          <div className='payment-list-button-div'>
            <h1 className='buttons' onClick={() => this.changeStatus(["Update", this.props.paymentInfo])}>Update</h1>
            <h1 className='buttons'onClick={this.handleDelete}>Delete</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // puppies: state.default.puppies || [],
  payments: state.default.payments || [],
  status: state.default.status
});

const mapDispatchToProps = dispatch => ({
    fetchUserPayments: (id) => dispatch(fetchUserPayments(id)),
    removePayment: (id) => dispatch(removePayment(id)),
    createPayment: (id, payment) => dispatch(createPayment(id, payment)),
    updatePayment: (id, payment) => dispatch(updatePayment(id, payment)),
    receiveStatus: (status) => dispatch(receiveStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentItem);
