import validator from './validator';

interface CustomMatchers<R = unknown> {
  toHaveValidHeader(): R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers { }
    interface Matchers<R> extends CustomMatchers<R> { }
    interface InverseAsymmetricMatchers extends CustomMatchers { }
  }
}

const toHaveValidHeader = (received: string) => {
  const pass = validator.validateFile(received);
  if (pass) {
    return {
      message: () => `expected ${received} not to have a valid header`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to have a valid header`,
      pass: false,
    };
  }
};

export default toHaveValidHeader;

/*
import { checkHtmlElement, deprecate } from './utils'

export function toBeEmpty(element) {
  deprecate(
    'toBeEmpty',
    'Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM.',
  )
  checkHtmlElement(element, toBeEmpty, this)

  return {
    pass: element.innerHTML === '',
    message: () => {
      return [
        this.utils.matcherHint(
          `${ this.isNot ? '.not' : '' }.toBeEmpty`,
          'element',
          '',
        ),
        '',
        'Received:',
        `  ${ this.utils.printReceived(element.innerHTML) } `,
      ].join('\n')
    },
  }
}
*/
