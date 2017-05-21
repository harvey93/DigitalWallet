import axios from 'axios';

export const getPuppies = () => {
  return axios({
    method: 'GET',
    url: 'https://node-test-puppies.herokuapp.com/api/puppies',
  });
};

export const getPuppy = (id) => {
  return axios({
    method: 'GET',
    url: `https://node-test-puppies.herokuapp.com/api/puppies/${id}`,
  });
};

export const createPuppy = (puppy) => {
  return axios({
    method: 'POST',
    url: `https://node-test-puppies.herokuapp.com/api/puppies/`,
    data: {
      name: puppy.name,
      breed: puppy.breed,
      age: puppy.age,
      sex: puppy.sex
    }
  });
};

export const updatePuppy = (id, puppy) => {
  return axios({
    method: 'PUT',
    url: `https://node-test-puppies.herokuapp.com/api/puppies/${id}`,
    data: {
      name: puppy.name,
      breed: puppy.breed,
      age: puppy.age,
      sex: puppy.sex
    }
  });
};

export const deletePuppy = (id) => {
  return axios({
    method: 'DELETE',
    url: `https://node-test-puppies.herokuapp.com/api/puppies/${id}`
  });
};
