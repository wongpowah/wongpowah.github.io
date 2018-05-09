import axios from "axios";

const {
  REACT_APP_API_PUBLIC: PUBLIC_API,
  REACT_APP_API_USER: USER_API
} = process.env;

export const parseParams = params =>
  Object.keys(params)
    .map(key => `${key}: "${params[key]}"`)
    .join(", ");

export const publicQuery = ({ field, params, props }) =>
  requestGraphQL({ api: PUBLIC_API, action: "query", field, params, props });

export const publicMutation = ({ field, params, props }) =>
  requestGraphQL({ api: PUBLIC_API, action: "mutation", field, params, props });

export const userQuery = ({ field, params, props }) =>
  requestGraphQL({ api: USER_API, action: "query", field, params, props });

export const userMutation = ({ field, params, props }) =>
  requestGraphQL({ api: USER_API, action: "mutation", field, params, props });

export const requestGraphQL = async ({ api, action, field, params, props }) => {
  params = params ? `(${parseParams(params)})` : "";
  props = props ? `{ ${props} }` : "";

  let query = `${action} { ${field}${params}${props} }`;

  return await graphQL(api, query);
};

export const graphQL = async (api, query) => {
  let error, result;

  try {
    let { data } = await axios(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      params: { query }
    });

    error = data && data.errors && data.errors[0] && data.errors[0].message;

    if (!error) {
      result = data && data.data;
    }
  } catch (e) {
    let { data } = e && e.response;

    error =
      (data && data.errors && data.errors[0] && data.errors[0].message) ||
      (data && data.error && data.error.message) ||
      `no response from "${api}"`;
  }

  return [error, result];
};
