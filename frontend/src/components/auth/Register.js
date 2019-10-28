import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import StepZilla from 'react-stepzilla';
import { Line } from 'rc-progress';
import Select from "react-select";
import { connect } from "react-redux";
import { signup } from '../../actions/auth'
import Tooltip from 'rc-tooltip';
import Header from './Header'

class RegisterStepOne extends Component {

  constructor(props) {
    super(props);
  }

  isValidated() {
    this.props.validateField('first_name', this.props.newUser.first_name);
    this.props.validateField('last_name', this.props.newUser.last_name);
    this.props.validateDate(this.props.newUser.date);
    this.props.validateMonth(this.props.newUser.month);
    this.props.validateYear(this.props.newUser.year);  
    return this.props.validation.first_name && this.props.validation.last_name && this.props.validation.date && this.props.validation.month && this.props.validation.year;
  }
  
  render() {
    let dates = [
      { value: '01', label: '01' },
      { value: '02', label: '02' },
      { value: '03', label: '03' },
      { value: '04', label: '04' },
      { value: '05', label: '05' },
      { value: '06', label: '06' },
      { value: '07', label: '07' },
      { value: '08', label: '08' },
      { value: '09', label: '09' },
      { value: '10', label: '10' },
      { value: '11', label: '11' },
      { value: '12', label: '12' },
      { value: '13', label: '13' },
      { value: '14', label: '14' },
      { value: '15', label: '15' },
      { value: '16', label: '16' },
      { value: '17', label: '17' },
      { value: '18', label: '18' },
      { value: '19', label: '19' },
      { value: '20', label: '20' },
      { value: '21', label: '21' },
      { value: '22', label: '22' },
      { value: '23', label: '23' },
      { value: '24', label: '24' },
      { value: '25', label: '25' },
      { value: '26', label: '26' },
      { value: '27', label: '27' },
      { value: '28', label: '28' },
      { value: '29', label: '29' },
      { value: '30', label: '30' },
      { value: '31', label: '31' },
    ];
    
    let months = [
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' }
    ]

    let years = [
      { value: '1990', label: '1990' },
      { value: '1991', label: '1991' },
      { value: '1992', label: '1992' },
      { value: '1993', label: '1993' },
      { value: '1994', label: '1994' },
      { value: '1995', label: '1995' },
      { value: '1996', label: '1996' },
      { value: '1997', label: '1997' },
      { value: '1998', label: '1998' },
      { value: '1999', label: '1999' },
      { value: '2000', label: '2000' },
      { value: '2001', label: '2001' },
      { value: '2002', label: '2002' },
      { value: '2003', label: '2003' },
      { value: '2004', label: '2004' },
      { value: '2005', label: '2005' },
      { value: '2006', label: '2006' },
      { value: '2007', label: '2007' },
      { value: '2008', label: '2008' },
      { value: '2009', label: '2009' },
      { value: '2010', label: '2010' },
      { value: '2011', label: '2011' },
      { value: '2012', label: '2012' },
      { value: '2013', label: '2013' },
      { value: '2014', label: '2014' },
      { value: '2015', label: '2015' },
      { value: '2016', label: '2016' },
      { value: '2017', label: '2017' },
      { value: '2018', label: '2018' },
      { value: '2019', label: '2019' }

    ]

    return (
      <form className="pure-form pure-form-stacked">
        <label className="left" htmlFor="firstName">First name</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.first_name.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.first_name}</span>}
                        >
          <input id="first_name" name="first_name" value={this.props.newUser.first_name} onChange={this.props.onChange} className="register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.first_name) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.first_name.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>
        <label className="left" htmlFor="lastName">Last name</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.last_name.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.last_name}</span>}
                        >
          <input id="last_name" name="last_name" value={this.props.newUser.last_name} onChange={this.props.onChange} className="lastName register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.last_name) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.last_name.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>
        <label className="left" htmlFor="date">Date of birth</label>
        <div className="validation-input">

          <div className="date">
            <Select name={"date"} value={this.props.newUser.date} onChange={this.props.onDateChange} isSearchable={false} isClearable={false} classNamePrefix="date-single" options={dates} placeholder={'Date'} />
            <span className={'checkmark date-select-checkmark ' + ((this.props.validation.date) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark date-select-checkmark ' + ((this.props.formErrors.date.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
          <div className="month">
            <Select name={"month"} value={this.props.newUser.month} onChange={this.props.onMonthChange} isSearchable={false} isClearable={false} classNamePrefix="month-single" options={months} placeholder={'Month'} />
            <span className={'checkmark month-select-checkmark ' + ((this.props.validation.month) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark month-select-checkmark ' + (this.props.formErrors.month.length > 0 ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
          <div className="year">
          <Tooltip
                            visible={this.props.formErrors.year.length > 0 || this.props.formErrors.month.length > 0 || this.props.formErrors.date.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>
                              <div>{this.props.formErrors.date}</div> 
                              <div>{this.props.formErrors.month}</div>
                              <div>{this.props.formErrors.year}</div>
                              </span>}
                        >
            <Select name={"year"} value={this.props.newUser.year} onChange={this.props.onYearChange} isSearchable={false} isClearable={false} classNamePrefix="year-single" options={years} placeholder={'Year'} />
            </Tooltip>
            <span className={'checkmark year-select-checkmark ' + ((this.props.validation.year) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark year-select-checkmark ' + (this.props.formErrors.year.length > 0 ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
        </div>
      </form>
    )
  }
}

class RegisterStepTwo extends Component {

  constructor(props) {
    super(props);
  }

  isValidated() {
    this.props.validateField('email', this.props.newUser.email);
    this.props.validateField('phone', this.props.newUser.phone);
    return this.props.validation.email;
  }

  goBack() {
    this.props.jumpToStep(this.props.step-1);
  }


  render() {
    return (
      <form className="pure-form pure-form-stacked">

        <label className="left" htmlFor="email">Email</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.email.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.email}</span>}
                        >
          <input id="email" name="email" value={this.props.newUser.email} onChange={this.props.onChange} className="register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.email) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.email.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>
        <label className="left" htmlFor="phone">Phone</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.phone.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.phone}</span>}
                        >
          <input id="phone" name="phone" value={this.props.newUser.phone} onChange={this.props.onChange} className="register-width" type="number" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.phone) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.phone.length > 6) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>

      </form>
    )
  }
}
class RegisterStepThree extends Component {

  constructor(props) {
    super(props);
  }

  goBack() {
    this.props.jumpToStep(this.props.step-1);
  }

   isValidated() {
  //   this.props.validateDate(this.props.newUser.date);
  //   this.props.validateMonth(this.props.newUser.month);
  //   this.props.validateYear(this.props.newUser.year);
    this.props.validateField('password', this.props.newUser.password);

    return this.props.validation.password;
   }


  render() {
    
    return (
      <form className="pure-form pure-form-stacked register-width">
       

        
        <div>
        {/* <label className="right error-message">{this.props.formErrors.date}</label> */}
        </div>
        <label className="left" htmlFor="passcode">Password</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.password.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.password}</span>}
                        >
          <input id="register-passcode" name="password" value={this.props.newUser.password} onChange={this.props.onChange} className="passcode" type="password" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.password) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
        </div>
        {/* <label className="right error-message">{this.props.formErrors.password}</label> */}

      </form>
    )
  }
}
class RegisterStepFour extends Component {

  constructor(props) {
    super(props);
  }

  goBack() {
    this.props.jumpToStep(this.props.step-1);
  }

  isValidated() {
    this.props.validateState(this.props.newUser.state);
    this.props.validateCountry(this.props.newUser.country);
    this.props.validateField('address', this.props.newUser.address);
    this.props.validateField('city', this.props.newUser.city);
    this.props.validateField('postcode', this.props.newUser.postcode);
    
    return this.props.validation.address && this.props.validation.city && this.props.validation.state && this.props.validation.postcode && this.props.validation.country;
  }

  render() {

    let states = [
      {
        value: "NSW",
        label: "NSW",
      },
      {
        value: "NY",
        label: "NY",
      }
    ];

    let countries = [
      { value: 'australia', label: 'Australia' },
      { value: 'belgium', label: 'Belgium' },
      { value: 'germany', label: 'Germany' },
    ];

    return (
      <form className="pure-form pure-form-stacked">

        <label className="left" htmlFor="address">Address</label>
        <div className="validation-input">
        <Tooltip
                            visible={this.props.formErrors.address.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.address}</span>}
                        >
          <input id="register-address" name="address" value={this.props.newUser.address} onChange={this.props.onChange} className="address register-width" type="text" />
          </Tooltip>
          <span className={'checkmark ' + ((this.props.validation.address) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark ' + ((this.props.formErrors.address.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          {/* <label className="error-message">{this.props.formErrors.address}</label> */}
        </div>

        <div className="validation-input">
          <div className="city">
            <label className="left" htmlFor="city">City</label>

            <input id="city" name="city" value={this.props.newUser.city} onChange={this.props.onChange} type="text" />
            <span className={'checkmark ' + ((this.props.validation.city) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark ' + ((this.props.formErrors.city.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
          </div>
          <div className="state">
            <label className="left" htmlFor="state">State</label>
            <Select name={"state"} value={this.props.newUser.state} onChange={this.props.onStateChange} isSearchable={false} isClearable={false} classNamePrefix="state-single" options={states} placeholder={'State'} />
            <span className={'checkmark state-select-checkmark ' + ((this.props.validation.state) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark state-select-checkmark ' + (this.props.formErrors.state.length > 0 ? '' : 'hide')}>
                            <div className="checkmark_circle_error"></div>
                            <div className="checkmark_stem_error"></div>
                            <div className="checkmark_kick_error"></div>
                        </span>
          </div>
          <div className="postcode">
            <label className="left" htmlFor="postcode">Postcode</label>
            <Tooltip
                            visible={this.props.formErrors.city.length > 0||
                              this.props.formErrors.state.length > 0||
                              this.props.formErrors.postcode.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>
                              <div>{this.props.formErrors.city}</div> 
                              <div>{this.props.formErrors.state}</div>
                              <div>{this.props.formErrors.postcode}</div>
                              </span>}
                        >
            <input id="postcode" name="postcode" value={this.props.newUser.postcode} onChange={this.props.onChange} type="text" />
            </Tooltip>
            <span className={'checkmark ' + ((this.props.validation.postcode) ? '' : 'hide')}>
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </span>
            <span className={'checkmark ' + ( this.props.formErrors.postcode.length > 0 ? '' : 'hide')}>
                            <div className="checkmark_circle_error"></div>
                            <div className="checkmark_stem_error"></div>
                            <div className="checkmark_kick_error"></div>
                        </span>
          </div>

        </div>
        <div>
          <label className="left" htmlFor="country">Country</label>
          <Tooltip
                            visible={this.props.formErrors.country.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.country}</span>}
                        >
          <Select name={"country"} value={this.props.newUser.country} onChange={this.props.onCountryChange} isSearchable={false} isClearable={false} classNamePrefix="country-single" options={countries} placeholder={'Select Country'} />
          </Tooltip>
          <span className={'checkmark country-select-checkmark ' + ((this.props.validation.country) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark country-select-checkmark ' + (this.props.formErrors.country.length > 0 ? '' : 'hide')}>
                            <div className="checkmark_circle_error"></div>
                            <div className="checkmark_stem_error"></div>
                            <div className="checkmark_kick_error"></div>
                        </span>
        </div>
      </form>
    )
  }
}
class RegisterStepFive extends Component {

  goBack() {
    this.props.jumpToStep(this.props.step-1);
  }

  isValidated() {

    this.props.validateSpeciality(this.props.newUser.speciality);
    
    if (this.props.validation.speciality) {
      let newUser = this.props.newUser;
      newUser.state = newUser.state.value
      newUser.country = newUser.country.value
      newUser.speciality = newUser.speciality.value
      newUser.dob = newUser.year.value + '-' + newUser.month.value + '-' + newUser.date.value

      this.props.signup(newUser)
    }

    return this.props.validation.speciality;
  }

  render() {
    let specialities = [
      { value: 'special1', label: 'Special One' },
      { value: 'special2', label: 'Special Two' },
    ];
    return (
      <form className="pure-form pure-form-stacked register-width">
        <div>

          <label className="left" htmlFor="speciality">Speciality</label>        <Tooltip
                            visible={this.props.formErrors.speciality.length > 0}
                            trigger={[]}
                            overlayStyle={{ zIndex: 1000 }}
                            overlay={<span>{this.props.formErrors.speciality}</span>}
                        >
          <Select name={"speciality"} value={this.props.newUser.speciality} onChange={this.props.onSpecialityChange} isSearchable={false} isClearable={false} classNamePrefix="speciality-single" options={specialities} placeholder={'Select Speciality'} />
          </Tooltip>
          <span className={'checkmark speciality-select-checkmark ' + ((this.props.validation.speciality) ? '' : 'hide')}>
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
          <span className={'checkmark speciality-select-checkmark ' + ((this.props.formErrors.speciality.length > 0) ? '' : 'hide')}>
              <div className="checkmark_circle_error"></div>
              <div className="checkmark_stem_error"></div>
              <div className="checkmark_kick_error"></div>
            </span>
        </div>

        <label className="left other" htmlFor="other">Disease of interest</label>
        <div className="validation-input">
          <input id="other" className="register-width" type="text" />

        </div>
        {/* <div className="center signin-gap">
                    <button type="submit" className="form-button center">Register</button>
    </div>*/ }
      </form>
    )
  }
}
class RegisterStepSix extends Component {

  goBack() {
    this.props.jumpToStep(this.props.step-1);
  }

  render() {

    if (this.props.isAuthenticated) {
      return (
        <h2>
          Thank you for registering to Telemonica, we will get back to you soon to start the project. If you have any question please contact us. 
        </h2>
      )
    } else {
      return (
        <h2 className="center">
          We are sorry, we could not register you. The error was<br/>
          <label className="error-message">{serverErrors}</label><br/> 
          Please try again by clicking <span className="go-back pointer" onClick={() => this.props.jumpToStep(0)}>here</span>
        </h2>
      )
    }
  }
}
