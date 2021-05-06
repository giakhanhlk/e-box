const Joi = require("joi");

exports.addUser = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(2)
      .max(30)
      .pattern(
        new RegExp(
          /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/
        )
      ),
    lastName: Joi.string()
      .min(2)
      .max(30)
      .pattern(
        new RegExp(
          /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/
        )
      ),
    username: Joi.string()
      .alphanum()
      .min(4)
      .max(30)
      .insensitive()
      .invalid("admin", "mod")
      .pattern(
        new RegExp(
          /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/
        )
      )
      .required(),
    email: Joi.string()
      .max(40)
      .pattern(
        new RegExp(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
      )
      .required(),
    phoneNumber: Joi.string()
      .pattern(new RegExp(/^(0{1})([0-9]{9})$/))
      .required(),
    password: Joi.string().min(3).max(30).required(),
    rePassword: Joi.required().valid(Joi.ref("password")),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

exports.loginUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
