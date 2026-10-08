import React from 'react';
import Joi from 'joi';
import { validateProps } from './utils';
import User from './User';

export default function App() {
  return (
    <>
      <User name="A" email="invalid-email" />
      <User name="Alice" email="alice@example.com" gender="Female" />
    </>
  );
}