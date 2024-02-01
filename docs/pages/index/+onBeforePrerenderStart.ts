import options from '../../options';

import { Options, PageService } from '../../services';
import { frontmatterProcessor } from '../../utils/frontmatterProcessor';
import { tocPlugin } from '../../utils/tocPlugin';
import { navGenerator } from '../../utils/navGenerator';
import { sortProvider } from '../../utils/sortProvider';
import { MDXBundlerService } from 'mdx-tug';
import { Frontmatter } from '../../types/Frontmatter';

export { onBeforePrerenderStart };

async function onBeforePrerenderStart() {
  const mdxService = MDXBundlerService.create<Frontmatter, Options>({
    tocPlugin,
    sortProvider,
    frontmatterProcessor,
    ...options,
  });

  const pageService = new PageService({
    navGenerator,
    ...options,
    mdxService,
  });

  return pageService.getPages();
}
