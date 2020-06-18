const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const ADD_TRANSACTION = 'ADD_TRANSACTION';

export default (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };

    default:
      return state;
  }
};
