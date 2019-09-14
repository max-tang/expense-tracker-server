import R from 'ramda';
import logger from '../utils/logger';
import { getFailureResponse, getSuccessResponse } from '../utils/AwsRequestResponse';
import helloWorldService from '../services/helloWorldService';

const handler = async () => {
  try {
    const result = await helloWorldService.sayHello();
    logger.log('helloWorldHandler_handler', { result });
    return getSuccessResponse(200, result);
  } catch (error) {
    logger.log('helloWorldHandler_handler', error);
    return getFailureResponse(error);
  }
};

const handlerMappings = [
  [R.allPass([R.propEq('httpMethod', 'GET'), R.propEq('resource', '/hello-world')]), R.always(handler)]
];

export default {
  handlerMappings,
  handler
};
