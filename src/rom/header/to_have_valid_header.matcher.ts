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
  const pass = validator.validateFileHeader(received);
  if (pass) {
    return {
      message: () => `expected ${received} not to have a valid header (`,
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
