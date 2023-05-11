/**
 * Board.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    message: { type: "string", required: true },
    user: { type: "string", required: true },
    email: { type: "string" },
  },
};
