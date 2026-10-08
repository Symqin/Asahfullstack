import React from 'react';
import Joi from 'joi';
import { validateProps } from './utils';

const userPropsSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ tlds: true }).required(),
  gender: Joi.string().valid("Male", "Female", "Prefer not to say").default("Prefer not to say"),
});

class User extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(userPropsSchema, props, "User");

    this.state = { validatedProps };
  }

  render() {
    const { name, email, gender } = this.state.validatedProps;

    return (
      <div className="user">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
      </div>
    );
  }
}

export default User;
