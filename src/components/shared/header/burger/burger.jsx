import classNames from 'classnames';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const ANIMATION_DURATION = 0.2;

const Burger = ({ className, isToggled, onClick }) => (
  <motion.button
    className={classNames('relative h-5 w-7 shrink-0 text-black', className)}
    type="button"
    animate={isToggled ? 'toggled' : 'initial'}
    onClick={onClick}
  >
    <motion.span
      className="absolute top-0 right-0 block h-0.5 w-full rounded-full bg-current transition-colors duration-200"
      variants={{
        initial: {
          top: 0,
          display: 'block',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
        toggled: {
          top: 9,
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
      }}
    />
    <motion.span
      className="absolute top-[9px] left-0 block h-0.5 w-5 rounded-full bg-current transition-colors duration-200"
      variants={{
        initial: {
          display: 'block',
          transition: { delay: ANIMATION_DURATION },
        },
        toggled: {
          display: 'none',
          transition: { delay: ANIMATION_DURATION },
        },
      }}
    />
    <motion.span
      className="absolute bottom-0 right-0 block h-0.5 w-full rounded-full bg-current transition-colors duration-200"
      variants={{
        initial: {
          bottom: 0,
          display: 'block',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
        toggled: {
          bottom: 9,
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
      }}
    />
    <motion.span
      className="absolute top-[9px] right-0 hidden h-0.5 w-full rounded-full bg-current transition-colors duration-200"
      variants={{
        initial: {
          rotate: '0deg',
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
        toggled: {
          display: 'block',
          rotate: '45deg',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
      }}
    />
    <motion.span
      className="absolute top-[9px] right-0 hidden h-0.5 w-full rounded-full bg-current transition-colors duration-200"
      variants={{
        initial: {
          rotate: '0deg',
          transition: { duration: ANIMATION_DURATION },
          transitionEnd: { display: 'none' },
        },
        toggled: {
          display: 'block',
          rotate: '-45deg',
          transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
        },
      }}
    />
  </motion.button>
);

Burger.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  className: null,
  isToggled: false,
  onClick: null,
};

export default Burger;
