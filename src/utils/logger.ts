import { inspect } from 'util';

const log = (tag: string, details: any) => {
  const message = inspect(
    { tag, details },
    {
      customInspect: true,
      showHidden: false,
      depth: null
    }
  );

  console.log(message);
};

export default {
  log
};
