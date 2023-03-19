import Joi from "joi-browser";

const loginSchema = {
  email: Joi.string().email().min(6).max(100).required().label("email"),
  password: Joi.string().min(6).max(100).required().label("password"),
};

export default loginSchema;
