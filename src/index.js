let needlerOptions = {
  haystack: false,
  header: false,
  footer: false,
  flags: 'i'
}

const find = (options, callback) => {

  mergeAndValidateOptions(options, (error) => {

    if (error) {
      if (callback) callback(error);
      else return false;
    }

    let regex = new RegExp(`${needlerOptions.header}(.+?)${needlerOptions.footer}`);
    let result = needlerOptions.haystack.match(regex);
    let match = result && result[1] ? result[1] : false;

    if (callback) callback(false, match);
  });
}

const replace = (options, callback) => {

  mergeAndValidateOptions(options, (error) => {

    if (error) {
      if (callback) callback(error);
      else return false;
    }

    let regex;

    if (needlerOptions.flags) {
      regex = new RegExp(`${needlerOptions.header}([\\w\\s]+)${needlerOptions.footer}`, needlerOptions.flags);
    } else {
      regex = new RegExp(`${needlerOptions.header}([\\w\\s]+)${needlerOptions.footer}`);
    }

    let replace = `${needlerOptions.header}${needlerOptions.replace}${needlerOptions.footer}`;
    let result = needlerOptions.haystack.replace(regex, replace);
    if (callback) callback(false, result);
  });
}

const mergeAndValidateOptions = (options, callback) => {

  if (!options.haystack) {
    callback('Haystack is required.');
  } else if (!options.header) {
    callback('Header is required.');
  } else if (!options.footer) {
    callback('Footer is required.');
  } else {
    needlerOptions = Object.assign(needlerOptions, options);
    callback(false);
  }
}

export { find, replace }
