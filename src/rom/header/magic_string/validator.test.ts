import fs from 'fs';

describe('Magic Strings in ROM headers', () => {
  it('should correctly identify a valid ROM header magic string', () => {
    expect('test/fixtures/iNES_header.nes').toHaveValidMagicString();
  });
  it('should correctly identify an invalid ROM header with an empty file', () => {
    expect('test/fixtures/empty_file.nes').not.toHaveValidMagicString();
  });
  it('should correctly identify an invalid ROM header with an invalid magic string', () => {
    expect('test/fixtures/invalid_magic_string_file.nes').not.toHaveValidMagicString();
  });
});
