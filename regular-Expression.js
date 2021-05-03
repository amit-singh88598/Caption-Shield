module.exports = {
  regxFirstName: /^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/,
  regxLastName: /^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/,
  regxEmail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  regxPrimaryNumber: /^\d{10}$/,
  regxSecondaryNumber: /^\d{10}$/,
  regxPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
