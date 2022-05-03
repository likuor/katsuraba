import React from 'react';

function Button(props) {
  return (
    <div className={`text-white rounded-lg ${props.companyColor} py-4 w-3/4 `}>
      {props.deliveryCompany}
    </div>
  );
}

export default Button;
