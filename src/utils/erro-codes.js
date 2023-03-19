const ClientErrors = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  NOT_FOUND: 404,
});

const ServerErrors = Object.freeze({
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
});

const SuccessCodes = Object.freeze({
  CREATED: 200,
  OK: 201,
});

export { ClientErrors, ServerErrors, SuccessCodes };
