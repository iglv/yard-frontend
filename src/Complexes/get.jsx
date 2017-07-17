/* eslint import/prefer-default-export: 0 */
// TODO: Delete after add new functions

// Get data for API
export const get = params =>
  fetch(`https://yard.moscow/api/v1/${encodeURI(params)}`)
  .then(response => response.json());
