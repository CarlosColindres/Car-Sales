import React from 'react';
import {connect} from 'react-redux'

const Header = ({price, image, name}) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

const mapStateToProps = state => {
  const {price, image, name} = state.car
  return {
    price,
    image,
    name
  }
}

export default connect(mapStateToProps, {})(Header);
