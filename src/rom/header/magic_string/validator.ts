import fs from 'fs';
import { buffer } from 'stream/consumers';

/**
 * The iNES "Magic String".
 * 
 * This consists of ASCII-encoded "NES" followed by the MS-DOS EOF character.
 */
const NES_MAGIC_STRING = '4e45531a';

const getMagicStringBuffer = (): Buffer => new Buffer(NES_MAGIC_STRING, 'hex');

const getFileMagicString = (path: string): string => getBufferMagicString(fs.readFileSync(path));

const getBufferMagicString = (buffer: Buffer): string => buffer.toString('hex', 0, 4);

const validateBufferMagicString = (buffer: Buffer): boolean => getBufferMagicString(buffer) === NES_MAGIC_STRING;

const validateFileMagicString = (path: string): boolean => validateBufferMagicString(fs.readFileSync(path));

export default {
  NES_MAGIC_STRING,
  getBufferMagicString,
  getFileMagicString,
  validateBufferMagicString,
  validateFileMagicString,
};
