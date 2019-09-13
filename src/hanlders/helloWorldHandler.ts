import R from 'ramda';
import logger from '../utils/logger';
import { getSuccessResponse, getFailureResponse } from '../utils/AwsRequestResponse';
import helloWorldService from '../services/helloWorldService';

const handler = async () => {
  try {
    const result = await helloWorldService.sayHello();
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
