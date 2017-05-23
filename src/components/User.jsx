import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';
import { receiveStatus } from '../actions/statusActions.js';

import PaymentList from './PaymentList';
import PaymentForm from './PaymentForm';


class User extends React.Component{
  constructor(props) {
    super(props);
    this.renderForm = this.renderForm.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  renderForm(){
    let status = this.props.status;
    if (!status) {

    }else if (status[0] === 'Add') {
      return(
        <PaymentForm userId={this.props.userId}/>
      );
    }else if (status[0] === 'Update') {
      return(
        <PaymentForm userId={this.props.userId}/>
      );
    }
  }

  changeStatus(status) {
    // console.log('in');
    this.props.receiveStatus(status);
  }



  render(){
    // console.log(this.props);
    return (
      <div className='user-div'>
        <div className='header-div'>
        </div>
        <div className='list-and-form'>
          <div>
            <div className='add-div' onClick={() => this.changeStatus(['Add'])}>
              <i className="fa fa-plus-circle fa-lg add-button" aria-hidden="true"></i>
              <h1 className='add-button add-text'>Add</h1>
            </div>
          <PaymentList userId={this.props.userId}/>
          </div>
          {this.renderForm()}
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
)(User);
