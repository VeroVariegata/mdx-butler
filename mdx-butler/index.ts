import { MDXBundlerService } from './MDXBundlerService.js';
import { docs } from './utils/docs';
import { createFrontmatterProcessor } from './utils/createFrontmatterProcessor.js';

export * from 'mdx-bundler';

export type { IMDXBundlerService } from './IMDXBundlerService';
export type {
  MDXServiceBaseOptions,
  DocHeading,
  MDXOptions,
  MDXBundlerOptions,
  FrontmatterProcessor,
  SourceFileType,
  SortProvider,
  FileProvider,
  FieldDefinitions,
  UnknownFrontMatter,
  SOURCE_FILE_TYPE,
  MDXServiceOptions,
  MDXServiceReturnType,
} from './types/index.js';
export { MDXBundlerService, docs, createFrontmatterProcessor };

export default docs;
