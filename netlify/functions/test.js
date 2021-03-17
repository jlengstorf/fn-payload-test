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
      },
      null,
      2,
    ),
  };
};
