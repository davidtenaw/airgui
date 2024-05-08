import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { IoAirplane } from 'react-icons/io5';
import { Stations } from '../data/Stations';

class SinglePlane extends Component {
  state = {
    path: this.props.path, // Initialize path state with prop value
  };

  transition = { duration: 5, ease: 'linear' };

  componentDidUpdate(prevProps) {
    // Update path state if prop changes
    if (prevProps.path !== this.props.path) {
      this.setState({ path: this.props.path });
    }
  }

  render() {
    const { id } = this.props;
    const { path } = this.state;

    return (
      <motion.div
        className="landing-plane"
        initial={{ offsetDistance: '0%', scale: 1 }}
        animate={{ offsetDistance: '100%', scale: 1 }}
        transition={this.transition}
        style={{ fill: 'blue', offsetPath: `path("${path}")` }}
      >
        <IoAirplane />
      </motion.div>
    );
  }
}

export default SinglePlane;
