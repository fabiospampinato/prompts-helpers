
/* IMPORT */

const delay = require ( 'promise-resolve-timeout' );
const {default: Prompts} = require ( '../dist' );

/* MAIN */

const main = async () => {

  let result;

  /* CONFIRM */

  result = await Prompts.confirm ( 'confirm - default initial' );

  console.log ({ result });

  result = await Prompts.confirm ( 'confirm - no initial', false );

  console.log ({ result });

  result = await Prompts.confirm ( 'confirm - yes initial', true );

  console.log ({ result });

  /* TEXT */

  result = await Prompts.text ( 'text' );

  console.log ({ result });

  result = await Prompts.text ( 'text', value => ( value.length < 8 ) ? 'The length must be >= 8' : true );

  console.log ({ result });

  /* PASSWORD */

  result = await Prompts.password ( 'password' );

  console.log ({ result });

  result = await Prompts.password ( 'password', value => ( value.length < 8 ) ? 'The length must be >= 8' : true );

  console.log ({ result });

  /* NUMBER */

  result = await Prompts.number ( 'number', 100, 0 );

  console.log ({ result });

  result = await Prompts.number ( 'number', 100, 0, value => ( value % 2 !== 0 ) ? 'The number must be even' : true );

  console.log ({ result });

  /* NO YES */

  result = await Prompts.noYes ( 'noYes' );

  console.log ({ result });

  /* YES NO */

  result = await Prompts.yesNo ( 'yesNo' );

  console.log ({ result });

  /* DATE */

  result = await Prompts.date ( 'date - initial' );

  console.log ({ result });

  result = await Prompts.date ( 'date - from epoch', new Date ( 0 ) );

  console.log ({ result });

  result = await Prompts.date ( 'date - validation', undefined, date => ( date.getTime () > Date.now () ? 'Not in the future' : true ) );

  console.log ({ result });

  /* SELECT */

  result = await Prompts.select ( 'select', ['Foo', 'Bar', 'Baz', 'Qux'] );

  console.log ({ result });

  /* MULTISELECT */

  result = await Prompts.multiselect ( 'select', ['Foo', 'Bar', 'Baz', 'Qux'] );

  console.log ({ result });

  result = await Prompts.multiselect ( 'select - limit 2', ['Foo', 'Bar', 'Baz', 'Qux'], 2 );

  console.log ({ result });

  /* SPINNER */

  const spinner = await Prompts.spinner ( 'something' );

  await delay ( 1000 );

  spinner.success ( 'success' );

};

main ();
