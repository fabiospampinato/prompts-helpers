
/* IMPORT */

import prompts from 'prompts';
import Spinner from 'tiny-spinner';
import {isArray, isDate, isNumber, isString} from './utils';

/* MAIN */

const PromptsHelpers = {

  /* API */

  confirm: async ( message: string, initial: boolean = false ): Promise<boolean> => {

    const {value} = await prompts ({
      type: 'confirm',
      name: 'value',
      message,
      initial
    });

    return !!value;

  },

  noYes: async ( message: string ): Promise<boolean> => {

    const {value} = await prompts ({
      type: 'toggle',
      name: 'value',
      message,
      initial: false,
      active: 'yes',
      inactive: 'no'
    });

    return !!value;

  },

  yesNo: async ( message: string ): Promise<boolean> => {

    const {value} = await prompts ({
      type: 'toggle',
      name: 'value',
      message,
      initial: true,
      active: 'yes',
      inactive: 'no'
    });

    return !!value;

  },

  date: async ( message: string, initial?: Date, validate?: (( value: Date ) => boolean | string) ): Promise<Date | false> => {

    const {value} = await prompts ({
      type: 'date',
      name: 'value',
      message,
      initial,
      validate
    });

    return isDate ( value ) ? value : false;

  },

  number: async ( message: string, max: number, min: number, validate?: (( value: number ) => boolean | string) ): Promise<number | false> => {

    const {value} = await prompts ({
      type: 'number',
      name: 'value',
      message,
      max,
      min,
      validate
    });

    return isNumber ( value ) ? value : false;

  },

  password: async ( message: string, validate?: (( value: string ) => boolean | string) ): Promise<string | false> => {

    const {value} = await prompts ({
      type: 'password',
      name: 'value',
      message,
      validate
    });

    return isString ( value ) ? value : false;

  },

  text: async ( message: string, validate?: (( value: string ) => boolean | string) ): Promise<string | false> => {

    const {value} = await prompts ({
      type: 'text',
      name: 'value',
      message,
      validate
    });

    return isString ( value ) ? value : false;

  },

  select: async <T extends string> ( message: string, choices: T[] ): Promise<T | false> => {

    const {value} = await prompts ({
      type: 'select',
      name: 'value',
      message,
      initial: 0,
      hint: ' ',
      choices: choices.map ( choice => ({
        title: choice,
        value: choice
      }))
    });

    return isString ( value ) ? value as T : false;

  },

  multiselect: async <T extends string> ( message: string, choices: T[], max: number = Infinity ): Promise<T[] | false> => {

    const {value} = await prompts ({
      type: 'multiselect',
      name: 'value',
      message,
      initial: 0,
      max,
      hint: ' ',
      instructions: false,
      choices: choices.map ( choice => ({
        title: choice,
        value: choice
      }))
    });

    return isArray ( value ) ? value as T[] : false;

  },

  spinner: ( message: string ): Spinner => {

    const spinner = new Spinner ();

    spinner.start ( message );

    return spinner;

  }

};

/* EXPORT */

export default PromptsHelpers;
