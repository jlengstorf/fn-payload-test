exports.handler = async (event) => {
  const { multiValueQueryStringParameters, rawUrl, rawQuery } = event;

  return {
    statusCode: 200,
    headers: {
      'X-Header-Test': 'two',
    },
    body: JSON.stringify(
      {
        multiValueQueryStringParameters,
        rawUrl,
        rawQuery,
        keys: Object.keys(event),
      },
      null,
      2,
    ),
  };
};
