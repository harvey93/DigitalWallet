# Digital Wallet


Digital Wallet is a simple Application that allows users to create, delete, and update new payment options. The Front End is built with React/Redux to manage the flow of data and deliver seamless, testable views. The Back End is built with Node and Postgres and hosted on Heroku.  

## Features and Implementation

### Add/Update Payment Option

![Add Payment](/docs/Add.gif)

The payment form is rendered conditionally based on the value of my status slice of state.

```
renderForm(){
  let status = this.props.status[0];

  if (status === 'Add') {
    return(
      <PaymentForm userId={this.props.userId}/>
    );
  }else if (status === 'Update') {
    return(
      <PaymentForm userId={this.props.userId}/>
    );
  }
}
```

This allows me to dynamically render the add form, the update form or no form all on the same page.

![Update Payment](/docs/Update.gif)

```
handleSubmit(){
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
```

### Node Api

[Node Api Repo](https://github.com/harvey93/DigitalWalletApi).

A REST API built with Node and Postgres. Supports Create, Read, Update, and Delete.

```
router.get('/api/users/:id/payments', db.getUserPayments);
router.post('/api/users/:id/payments', db.createPayment);
router.put('/api/payments/:id', db.updatePayment);
router.delete('/api/payments/:id', db.removePayment);
```
## Future Directions For The Project

* MVC Architecture: Models, Controllers and Model Level Validations
* ORM with Sequelize
* UI Level Validations
* Authentication layer with Passport.js
* Unit Tests for both UI and Back End


## Running Digital Wallet Locally

* `git clone https://github.com/harvey93/DigitalWallet.git`
* `cd DigitalWallet`
* `npm install`
* `npm start`
* Navigate to "http://localhost:3000/" in your browser
