import React from 'react';
import {connect} from 'react-redux'
import AddedFeature from './AddedFeature';
import {removeFeature} from '../actions'

const AddedFeatures = ({features, removeFeature}) => {
  console.log(features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const {features} = state.car
  return {features}
}

export default connect(mapStateToProps,{removeFeature})(AddedFeatures);
