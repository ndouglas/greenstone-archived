import fs from 'fs';
import { buffer } from 'stream/consumers';
import magicString from './magic_string';

const validateBufferHeader = (buffer: Buffer): boolean => magicString.validator.validateBufferMagicString(buffer);

const validateFileHeader = (path: string): boolean => magicString.validator.validateFileMagicString(path);

const getFileHeader = (path: string): Buffer => getBufferHeader(fs.readFileSync(path));

const getBufferHeader = (buffer: Buffer): Buffer => buffer.slice(0, 16);

export default {
  getBufferHeader,
  getFileHeader,
  validateBufferHeader,
  validateFileHeader,
};
