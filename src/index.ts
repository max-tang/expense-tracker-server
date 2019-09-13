import R from 'ramda';
import {AwsProxyRequest, AwsProxyResponse, getFailureResponse} from './utils/AwsRequestResponse';
import helloWorldHandler from './hanlders/helloWorldHandler';
import logger from './utils/logger';

const registeredHandlers = [
  ...helloWorldHandler.handlerMappings,
  [
    R.T,
    R.always(
      (event: AwsProxyRequest): Promise<AwsProxyResponse> => {
        logger.log('No handler found for event', event);
        return Promise.resolve(getFailureResponse(new Error('No handler found!')));
      }
    )
  ]
];

export const handler = async (event: AwsProxyRequest): Promise<AwsProxyResponse> => {
  // @ts-ignore
  const registeredHandler = R.cond(registeredHandlers)(event);
  const response = await registeredHandler(event);
  return response;
};
