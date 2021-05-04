
export const toHypertext = (h: any, data: any) => {
  const args = [];
  for (let i = 0; i < data.length; i++) {
    let arg = data[i];
    if (i === 0 && typeof arg === 'string' && tagBlacklist.includes(arg.toLowerCase().trim())) {
      arg = 'template';

    } else if (i === 1 && arg) {
      const attrs: any = {};
      Object.keys(arg).forEach(key => {
        const k = key.toLowerCase();
        if (!k.startsWith('on') && k !== 'innerhtml') {
          attrs[key] = arg[key];
        }
      });
      arg = attrs;

    } else if (i > 1) {
      if (Array.isArray(arg)) {
        arg = toHypertext(h, arg);
      }
    }
    args.push(arg);
  }
  return h.apply(null, args);
};

const tagBlacklist = ['script', 'link', 'meta', 'object', 'head', 'html', 'body'];
