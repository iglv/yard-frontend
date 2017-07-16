/* eslint import/prefer-default-export: 0 */
// TODO: Удалить правило выше
// Функция получения данные по API

export const get = params =>
  fetch(`https://yard.moscow/api/v1/${encodeURI(params)}`)
  .then(response => response.json());
  // For debug
  // .then((json) => {
  //   console.log(url + encodeURI(params));
  //   console.log(json);
  //   return json;
  // })
  // .catch((error) => {
  //   console.log('error', error);
  // });

