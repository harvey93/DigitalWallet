import * as APIPuppies from '../utils/puppyUtil.js';
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const RECEIVE_PUPPY = "RECEIVE_PUPPY";


export const receivePuppies = (puppies) => ({
    type: RECEIVE_PUPPIES,
    puppies
});

export const receivePuppy = (puppy) => ({
  type: RECEIVE_PUPPY,
  puppy
});

export const fetchPuppies = () => dispatch => {
    return APIPuppies.getPuppies()
        .then( res => {
            // console.log(res.data.data);
            dispatch(receivePuppies(res.data.data));
        });
};

export const fetchPuppy = (id) => dispatch => {
    return APIPuppies.getPuppy(id)
        .then( res => {
            // console.log(res.data.data);
            dispatch(receivePuppy(res.data.data));
        });
};

export const createPuppy = (puppy) => dispatch => {
    return APIPuppies.createPuppy(puppy);
};

export const updatePuppy = (id, puppy) => dispatch => {
    return APIPuppies.updatePuppy(id, puppy);
};

export const deletePuppy = (id) => dispatch => {
    return APIPuppies.deletePuppy(id);
};
