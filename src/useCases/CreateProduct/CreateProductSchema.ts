import joi from "joi";

const CreateProductSchema = joi.object({
  descripcion: joi.string().min(3).max(100).required(),
  precio: joi.number().integer().min(0).max(100000).required(),
  existencias: joi.number().integer().min(0).max(100000).required(),
  fabrica: joi.object({
    nombre: joi.string().min(3).max(100).required(),
    descripcion: joi.string().min(3).max(100).required(),
  }),
});

export { CreateProductSchema };
