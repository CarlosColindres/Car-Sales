import React from 'react';
import {connect} from 'react-redux'

const Total = ({additionalPrice,price}) => {
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  const {additionalPrice} = state
  const {price} = state.car
  return {
    additionalPrice,
    price
  }
}

export default connect(mapStateToProps,{})(Total);
