#!/usr/bin/node
function handleResponseFromAPI(promise) {
  return promise.then({ status: 200, body: 'success' }).catch(Error);
}
