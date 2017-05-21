import axios from 'axios';

export const getPayments = () => {
  return axios({
    method: 'GET',
    url: 'https://node-test-puppies.herokuapp.com/api/payments/',
  });
};

export const getUserPayments = (id) => {
  return axios({
    method: 'GET',
    url: `https://node-test-puppies.herokuapp.com/api/users/${id}/payments`
  });
};

export const removePayment = (id)  => {
  return axios({
    method: 'DELETE',
    url: `https://node-test-puppies.herokuapp.com/api/payments/${id}`
  });
};

export const createPayment = (id, payment) => {
  return axios({
    method: 'POST',
    url: `https://node-test-puppies.herokuapp.com/api/users/${id}/payments/`,
    data: {
      firstname: payment.firstname,
      lastname: payment.lastname,
      card: payment.card,
      card_number: payment.card_number,
      expires_month: payment.expires_month,
      expires_year: payment.expires_year,
      csc: payment.csc
    }
  });
};

export const updatePayment = (id, payment) => {
  return axios({
    method: 'PUT',
    url: `https://node-test-puppies.herokuapp.com/api/payments/${id}`,
    data: {
      firstname: payment.firstname,
      lastname: payment.lastname,
      card: payment.card,
      card_number: payment.card_number,
      expires_month: payment.expires_month,
      expires_year: payment.expires_year,
      csc: payment.csc,
      user_id: payment.user_id
    }
  });
};



// return axios({
//   method: 'POST',
//   url: `https://node-test-puppies.herokuapp.com/api/puppies/`,
//   data: {
//     name: puppy.name,
//     breed: puppy.breed,
//     age: puppy.age,
//     sex: puppy.sex
//   }
// });


// /api/users/:id/payments
