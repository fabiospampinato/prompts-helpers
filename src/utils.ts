
/* MAIN */

const isArray = ( value: unknown ): value is unknown[] => {

  return Array.isArray ( value );

};

const isDate = ( value: unknown ): value is Date => {

  return value instanceof Date;

};

const isNumber = ( value: unknown ): value is number => {

  return typeof value === 'number';

};

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

/* EXPORT */

export {isArray, isDate, isNumber, isString};
