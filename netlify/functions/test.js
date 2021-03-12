exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'X-Header-Test': 'one',
      'X-Header-Test': 'two',
    },
    body: JSON.stringify(event.multiValueQueryStringParameters),
  };
};
