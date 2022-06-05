import validator from './validator';

interface CustomMatchers<R = unknown> {
  toHaveValidMagicString(): R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers { }
    interface Matchers<R> extends CustomMatchers<R> { }
    interface InverseAsymmetricMatchers extends CustomMatchers { }
  }
}

const toHaveValidMagicString = (received: string) => {
  const pass = validator.validateFileMagicString(received);
  if (pass) {
    return {
      message: () => `expected ${received} not to have a valid magic string`,
      pass: true,
    };
  } else {
    return {
      message: () => `expected ${received} to have a valid magic string`,
      pass: false,
    };
  }
};

export default toHaveValidMagicString;
