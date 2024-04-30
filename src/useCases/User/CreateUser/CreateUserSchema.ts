import joi from "joi";

const CreateUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(6).max(30),
});

export { CreateUserSchema };
