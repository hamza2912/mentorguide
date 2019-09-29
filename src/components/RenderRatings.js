import PropTypes from "prop-types";
import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentMedical , faStar , faPhoneAlt, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default class RenderRatings extends Component {
    static propTypes = {
        rate: PropTypes.number,
        pclass: PropTypes.string,
        icoclass: PropTypes.string
    }

  render() {

    if (this.props.rate > 1 && this.props.rate <= 2) {
        return (
          <p className={this.props.pclass}><span className='pr-1'>{this.props.rate}</span>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        </p>
        );
      }
      else if (this.props.rate > 2 && this.props.rate <= 3) {
        return (
          <p className={this.props.pclass}><span className='pr-1'>{this.props.rate}</span>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        </p>
        );
      }
      else if (this.props.rate > 3 && this.props.rate <= 4 && this.props.rate > 4) {
        return (
          <p className={this.props.pclass}><span className='pr-1'>{this.props.rate}</span>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
                        </p>
        );
      }
      else {
          return (
            <p className={this.props.pclass}><span className='pr-1'>{this.props.rate}</span>
            <FontAwesomeIcon className={this.props.icoclass} icon={ faStar }/>
            </p>
          );
      }
  

  }
}