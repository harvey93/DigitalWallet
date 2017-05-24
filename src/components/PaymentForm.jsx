import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';
import { receiveStatus } from '../actions/statusActions.js';


class PaymentForm extends React.Component{
  constructor(props) {
    super(props);
    if (this.props.status[1]) {
        this.state = {
          id: this.props.status[1].id,
          firstname: this.props.status[1].firstname, lastname: this.props.status[1].lastname,
          card: this.props.status[1].card, card_number: this.props.status[1].card_number,
          card_number1: this.props.status[1].card_number.split(' ')[0],
          card_number2: this.props.status[1].card_number.split(' ')[1],
          card_number3: this.props.status[1].card_number.split(' ')[2],
          card_number4: this.props.status[1].card_number.split(' ')[3],
          expires_year: this.props.status[1].expires_year,
          expires_month: this.props.status[1].expires_month,
          csc: this.props.status[1].csc,
          user_id: this.props.status[1].user_id
        };
        // this.state = this.props.status[1];
    } else {
      this.state = {firstname: 'firstname', lastname: 'lastname', card: '',
               card_number: '',
               card_number1: '', card_number2: '',
               card_number3: '', card_number4: '',
                expires_year: 'YY', expires_month: 'MM', csc: 'csc'};
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let card_total = [];
    card_total.push(this.state.card_number1);
    card_total.push(this.state.card_number2);
    card_total.push(this.state.card_number3);
    card_total.push(this.state.card_number4);
    // console.log(card_total.join(' '));
    if (this.props.status[0] === "Add") {
      this.setState({["card_number"]: card_total.join(' ')},
        () => this.props.createPayment(this.props.userId, this.state)
          .then(
            () => this.props.fetchUserPayments(this.props.userId))
          .then(
            () => this.props.receiveStatus(false)
          ));
    }else {
        this.setState({["card_number"]: card_total.join(' ')},
          () => this.props.updatePayment(parseInt(this.state.id), this.state)
          .then( () => this.props.fetchUserPayments(this.props.userId)
            .then( () => this.props.receiveStatus(false))));
    }
  }

  update(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  handleCancel(){
    this.props.receiveStatus(false);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className='form-div'>
        <div className='name-input-container'>
          <input type="text"
            className='payment-form-input'
            placeholder="firstname"
            maxLength='15'
            onChange={this.update('firstname')}></input>
          <input type="text"
            className='payment-form-input'
            placeholder="lastname"
            maxLength='15'
            onChange={this.update('lastname')}></input>
        </div>
        <div className='cc-input-div'>
          <input type="password"
            maxLength='4'
            className='payment-cc-input'
            placeholder="####"
            onChange={this.update('card_number1')}></input>
          <input type="password"
            maxLength='4'
            className='payment-cc-input'
            placeholder='####'
            onChange={this.update('card_number2')}></input>
          <input type="password"
            maxLength='4'
            className='payment-cc-input'
            placeholder='####'
            onChange={this.update('card_number3')}></input>
          <input type="password"
            maxLength='4'
            className='payment-cc-input'
            placeholder='####'
            onChange={this.update('card_number4')}></input>
        </div>
        <div className='cc-type'>
          <label>
            <input type="radio" className='card-type'
              name="cardType" value="visa" onChange={this.update('card')}/>
            <i className="fa fa-cc-visa fa-2x visa-color" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="mastercard"  onChange={this.update('card')}/>
            <i className="fa fa-cc-mastercard fa-2x mastercard-color" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="discover"  onChange={this.update('card')}/>
            <i className="fa fa-cc-discover fa-2x discover-color" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="amex"  onChange={this.update('card')}/>
            <i className="fa fa-cc-amex fa-2x amex-color" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="paypal"  onChange={this.update('card')}/>
              <i className="fa fa-cc-paypal fa-2x paypal-color" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="bitcoin"  onChange={this.update('card')}/>
              <i className="fa fa-btc fa-2x btc-color" aria-hidden="true"></i>
          </label>

          <label>
            <input type="radio" className='card-type' name="cardType" value="stripe"  onChange={this.update('card')}/>
              <i className="fa fa-cc-stripe fa-2x stripe-color" aria-hidden="true"></i>
          </label>

        </div>
        <div className='exp-input-fields-container'>
          <div className='exp-fields-div'>
            <input type="text"
              maxLength='2'
              className='payment-form-input exp-fields'
              placeholder="MM"
              onChange={this.update('expires_month')}></input>
            <h1 className='slash'>/</h1>
            <input type="text"
              maxLength='2'
              className='payment-form-input exp-fields'
              placeholder="YY"
              onChange={this.update('expires_year')}></input>
          </div>
          <div>
            <input type="text"
              maxLength='3'
              className='payment-form-input csc-input'
              placeholder="CSC"
              onChange={this.update('csc')}></input>

          </div>
          <div className='submit-container'>
            <input type='Submit' className='submit-button' value={this.props.status[0]}/>
            <h1 className='submit-button delete'onClick={this.handleCancel}>Cancel</h1>
          </div>
        </div>
      </form>
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
)(PaymentForm);
