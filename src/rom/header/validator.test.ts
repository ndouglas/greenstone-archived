import fs from 'fs';

describe('ROM headers', () => {
  it('should correctly identify a valid ROM header', () => {
    expect(
      fs.readFileSync('test/fixtures/iNES_header.nes')
    ).toHaveValidHeader();
  });
});
