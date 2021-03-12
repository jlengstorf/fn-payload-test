exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'X-Header-Test': ['one', 'two'],
    },
    body: JSON.stringify(event.multiValueQueryStringParameters),
  };
};
