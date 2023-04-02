import * as fs from 'fs';
import * as path from 'path';

export default function readFile(filePathFromRoot: string): string {
    const basePath = path.dirname(__filename);
    const filePath = path.resolve(basePath, '..', filePathFromRoot);
    const file = fs.readFileSync(filePath, 'utf8');
    return file;
}