export interface AwsProxyRequest {
  body: string;
  httpMethod: string;
  resource: string;
  isBase64Encoded: boolean;
  queryStringParameters: string;
  pathParameters: object;
  headers: string;
}

export interface AwsProxyResponse {
  isBase64Encoded: boolean;
  statusCode: number;
  headers: object;
  body: string;
}

export const getSuccessResponse = (statusCode: number, result: any): AwsProxyResponse => ({
  statusCode: 200,
  body: JSON.stringify(result),
  isBase64Encoded: false,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export const getFailureResponse = (error: Error): AwsProxyResponse => {
  const response: AwsProxyResponse = {
    statusCode: 500,
    body: JSON.stringify(error),
    isBase64Encoded: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
  return response;
};
