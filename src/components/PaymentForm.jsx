import React from 'react';
import { connect } from 'react-redux';
import {fetchPayments, fetchUserPayments, removePayment, createPayment, updatePayment} from '../actions/paymentActions.js';


class PaymentForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {firstname: '', lastname: '', card: '',
      card_number: '',
      card_number1: '', card_number2: '',
      card_number3: '', card_number4: '',
       expires_year: '', expires_month: '', csc: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateCardNum = this.updateCardNum.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let card_total = [];
    card_total.push(this.state.card_number1);
    card_total.push(this.state.card_number2);
    card_total.push(this.state.card_number3);
    card_total.push(this.state.card_number4);
    // console.log(card_total.join(' '));
    this.setState({["card_number"]: card_total.join(' ')},
      () => this.props.createPayment(this.props.userId, this.state));
    // console.log(this.props);
    // console.log(this.state);
    // this.props.createPayment(this.props.userId, this.state).then( () => console.log('success'));
  }

  update(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  updateCardNum(){
    console.log('in');
  }

  render(){
    // cardNums.split(" ")[]
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          className='payment-form-input'
          placeholder='firstname'
          onChange={this.update('firstname')}></input>
        <input type="text"
          className='payment-form-input'
          placeholder='lastname'
          onChange={this.update('lastname')}></input>
        <div>
          <input type="password"
            maxLength='4'
            className='payment-form-input'
            placeholder='####'
            onChange={this.update('card_number1')}></input>
          <input type="password"
            maxLength='4'
            className='payment-form-input'
            placeholder='####'
            onChange={this.update('card_number2')}></input>
          <input type="password"
            maxLength='4'
            className='payment-form-input'
            placeholder='####'
            onChange={this.update('card_number3')}></input>
          <input type="password"
            maxLength='4'
            className='payment-form-input'
            placeholder='####'
            onChange={this.update('card_number4')}></input>
        </div>
        <div>
          <label>
            <input type="radio" className='card-type' name="cardType" value="visa" onChange={this.update('card')}/>
            <i className="fa fa-cc-visa" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="mastercard"  onChange={this.update('card')}/>
            <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="discover"  onChange={this.update('card')}/>
            <i className="fa fa-cc-discover" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" className='card-type' name="cardType" value="amex"  onChange={this.update('card')}/>
            <i className="fa fa-cc-amex" aria-hidden="true"></i>
          </label>
        </div>
        <div>
          <input type="text"
            maxLength='2'
            className='payment-form-input'
            placeholder='MM'
            onChange={this.update('expires_month')}></input>
          <input type="text"
            maxLength='2'
            className='payment-form-input'
            placeholder='YY'
            onChange={this.update('expires_year')}></input>
          <input type="text"
            maxLength='3'
            className='payment-form-input'
            placeholder='###'
            onChange={this.update('csc')}></input>
        </div>

        <input type='Submit' value='Submit Form'/>
      </form>
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
)(PaymentForm);
