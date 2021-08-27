import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link';

const CardItem = ({ icon: Icon, name, linkText, linkUrl }) => (
  <div className="flex flex-col p-8 border rounded-lg sm:space-x-5 sm:flex-row lg:flex-col border-gray-2 lg:space-x-0">
    <Icon className="flex-shrink-0" />
    <div className="flex flex-col h-full mt-4 sm:mt-0 lg:mt-4">
      <h3 className="mb-5 text-lg font-bold leading-normal sm:mb-2 lg:mb-5 ">{name}</h3>
      <Link className="mt-auto" type="text" theme="primary" to={linkUrl}>
        {linkText}
      </Link>
    </div>
  </div>
);

CardItem.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

CardItem.defaultProps = {};

export default CardItem;
