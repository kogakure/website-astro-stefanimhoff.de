import { describe, it, expect } from 'vitest';
import {
  stripMarkdown,
  makeAbsolute,
  fixImagePaths,
  replaceImageComponent,
  replaceAmazonBookComponent,
  replaceAppleTvComponent,
  replaceNetflixComponent,
  replacePrimeVideoComponent,
  replaceFlagComponent,
  replaceBlockquoteComponent,
  replacePullquoteComponent,
  replaceProductLinkComponent,
  replaceDownloadLinkComponent,
  replaceMoreLinkComponent,
  replaceRubyComponent,
  replaceSpotifyComponent,
  replaceFigureComponent,
  replaceBannerComponent,
  replaceColorSwatchComponent,
  replaceWrapperComponent,
  stripMDXComponents,
} from './rss-parser';

const SITE_URL = 'https://www.stefanimhoff.de';

describe('rss-parser', () => {
  describe('stripMarkdown', () => {
    it('should remove markdown links', () => {
      expect(stripMarkdown('[text](url)')).toBe('text');
      expect(stripMarkdown('[Click here](https://example.com)')).toBe('Click here');
    });

    it('should remove formatting characters', () => {
      expect(stripMarkdown('**bold** _italic_ `code`')).toBe('bold italic code');
      expect(stripMarkdown('~~strikethrough~~')).toBe('strikethrough');
    });

    it('should handle mixed formatting', () => {
      expect(stripMarkdown('This is **bold** and [a link](url)')).toBe('This is bold and a link');
    });

    it('should handle empty string', () => {
      expect(stripMarkdown('')).toBe('');
    });

    it('should handle text without markdown', () => {
      expect(stripMarkdown('plain text')).toBe('plain text');
    });
  });

  describe('makeAbsolute', () => {
    it('should keep absolute URLs unchanged', () => {
      expect(makeAbsolute('https://other.com/path', SITE_URL)).toBe('https://other.com/path');
      expect(makeAbsolute('http://example.com', SITE_URL)).toBe('http://example.com');
    });

    it('should convert relative URLs starting with /', () => {
      expect(makeAbsolute('/path/to/file', SITE_URL)).toBe('https://www.stefanimhoff.de/path/to/file');
      expect(makeAbsolute('/images/test.jpg', SITE_URL)).toBe('https://www.stefanimhoff.de/images/test.jpg');
    });

    it('should convert relative URLs without leading /', () => {
      expect(makeAbsolute('path/to/file', SITE_URL)).toBe('https://www.stefanimhoff.de/path/to/file');
    });

    it('should handle empty URL', () => {
      expect(makeAbsolute('', SITE_URL)).toBe('');
    });

    it('should handle siteUrl with trailing slash', () => {
      expect(makeAbsolute('/path', 'https://example.com/')).toBe('https://example.com/path');
    });

    it('should handle siteUrl without trailing slash', () => {
      expect(makeAbsolute('/path', 'https://example.com')).toBe('https://example.com/path');
    });

    it('should handle invalid URLs with fallback', () => {
      // Invalid URLs that cause URL constructor to throw will use fallback logic
      const result = makeAbsolute('path/to/file', 'invalid-base');
      expect(result).toBe('invalid-base/path/to/file');
    });
  });

  describe('fixImagePaths', () => {
    it('should make relative image src absolute', () => {
      const html = '<img src="/images/test.jpg" alt="Test" />';
      const result = fixImagePaths(html, SITE_URL);
      expect(result).toBe('<img src="https://www.stefanimhoff.de/images/test.jpg" alt="Test" />');
    });

    it('should keep absolute image src unchanged', () => {
      const html = '<img src="https://other.com/test.jpg" alt="Test" />';
      const result = fixImagePaths(html, SITE_URL);
      expect(result).toBe(html);
    });

    it('should handle multiple images', () => {
      const html = '<img src="/img1.jpg" /><img src="/img2.jpg" />';
      const result = fixImagePaths(html, SITE_URL);
      expect(result).toContain('https://www.stefanimhoff.de/img1.jpg');
      expect(result).toContain('https://www.stefanimhoff.de/img2.jpg');
    });

    it('should handle empty HTML', () => {
      expect(fixImagePaths('', SITE_URL)).toBe('');
    });

    it('should preserve other img attributes', () => {
      const html = '<img class="test" src="/test.jpg" alt="Test" width="100" />';
      const result = fixImagePaths(html, SITE_URL);
      expect(result).toContain('class="test"');
      expect(result).toContain('alt="Test"');
      expect(result).toContain('width="100"');
    });
  });

  describe('replaceImageComponent', () => {
    it('should convert Image component to figure with img', () => {
      const attrs = 'src="/test.jpg" alt="Test"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('<figure>');
      expect(result).toContain('<img src="https://www.stefanimhoff.de/test.jpg"');
      expect(result).toContain('alt="Test"');
      expect(result).toContain('</figure>');
    });

    it('should handle width and height attributes', () => {
      const attrs = 'src="/test.jpg" alt="Test" width="800" height="600"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('width="800"');
      expect(result).toContain('height="600"');
    });

    it('should wrap image in anchor if href provided', () => {
      const attrs = 'src="/test.jpg" alt="Test" href="https://example.com"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('<a href="https://example.com">');
      expect(result).toContain('</a>');
    });

    it('should add figcaption with caption', () => {
      const attrs = 'src="/test.jpg" alt="Test" caption="My Caption"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('<figcaption>My Caption</figcaption>');
    });

    it('should add source with link if sourceUrl provided', () => {
      const attrs = 'src="/test.jpg" alt="Test" source="Author" sourceUrl="https://example.com"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('<cite><a href="https://example.com">Author</a></cite>');
    });

    it('should add source without link if no sourceUrl', () => {
      const attrs = 'src="/test.jpg" alt="Test" source="Author"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('<cite>Author</cite>');
      expect(result).not.toContain('<a href=');
    });

    it('should escape HTML in alt text', () => {
      const attrs = 'src="/test.jpg" alt="<script>alert(\'xss\')</script>"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).not.toContain('<script>');
      expect(result).toContain('&lt;script>');
    });

    it('should return empty string if no src', () => {
      const attrs = 'alt="Test"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toBe('');
    });

    it('should handle missing alt attribute', () => {
      const attrs = 'src="/test.jpg"';
      const result = replaceImageComponent(attrs, SITE_URL);

      expect(result).toContain('alt=""');
    });
  });

  describe('replaceAmazonBookComponent', () => {
    it('should create Amazon book link with image', () => {
      const attrs = 'asin="B001234567" alt="Book Title"';
      const result = replaceAmazonBookComponent(attrs);

      expect(result).toContain('https://www.amazon.de/gp/product/B001234567');
      expect(result).toContain('https://images-na.ssl-images-amazon.com/images/P/B001234567.01.LZZZZZZZ.jpg');
      expect(result).toContain('aria-label="Book Title"');
    });

    it('should escape HTML in alt attribute', () => {
      const attrs = 'asin="B001234567" alt="<script>xss</script>"';
      const result = replaceAmazonBookComponent(attrs);

      expect(result).not.toContain('<script>');
      expect(result).toContain('&lt;script>');
    });

    it('should return empty string if no asin', () => {
      const attrs = 'alt="Test"';
      const result = replaceAmazonBookComponent(attrs);

      expect(result).toBe('');
    });
  });

  describe('replaceAppleTvComponent', () => {
    it('should create Apple TV link', () => {
      const attrs = 'id="test123"';
      const result = replaceAppleTvComponent(attrs);

      expect(result).toContain('https://tv.apple.com/show/umc.cmc.test123');
      expect(result).toContain('title="Apple TV+"');
    });

    it('should return empty string if no id', () => {
      const result = replaceAppleTvComponent('');

      expect(result).toBe('');
    });
  });

  describe('replaceNetflixComponent', () => {
    it('should create Netflix link', () => {
      const attrs = 'id="80001234"';
      const result = replaceNetflixComponent(attrs);

      expect(result).toContain('https://www.netflix.com/title/80001234');
      expect(result).toContain('title="Netflix"');
    });

    it('should return empty string if no id', () => {
      const result = replaceNetflixComponent('');

      expect(result).toBe('');
    });
  });

  describe('replacePrimeVideoComponent', () => {
    it('should create Prime Video link', () => {
      const attrs = 'id="B08XYZ123"';
      const result = replacePrimeVideoComponent(attrs);

      expect(result).toContain('https://www.amazon.de/gp/video/detail/B08XYZ123');
      expect(result).toContain('title="Prime Video"');
    });

    it('should return empty string if no id', () => {
      const result = replacePrimeVideoComponent('');

      expect(result).toBe('');
    });
  });

  describe('replaceFlagComponent', () => {
    it('should create span with label', () => {
      const attrs = 'label="Test Flag"';
      const result = replaceFlagComponent(attrs, SITE_URL);

      expect(result).toContain('<span title="Test Flag">[Test Flag]</span>');
    });

    it('should create anchor if href provided', () => {
      const attrs = 'label="Test" href="/path"';
      const result = replaceFlagComponent(attrs, SITE_URL);

      expect(result).toContain('<a href="https://www.stefanimhoff.de/path"');
      expect(result).toContain('[Test]');
    });

    it('should escape HTML in label', () => {
      const attrs = 'label="<script>xss</script>"';
      const result = replaceFlagComponent(attrs, SITE_URL);

      expect(result).not.toContain('<script>');
      expect(result).toContain('&lt;script&gt;');
    });

    it('should return empty string if no label', () => {
      const result = replaceFlagComponent('', SITE_URL);

      expect(result).toBe('');
    });
  });

  describe('replaceBlockquoteComponent', () => {
    it('should create blockquote with content', () => {
      const attrs = '';
      const content = '<p>Quote text</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('<blockquote lang="en"><p>Quote text</p></blockquote>');
    });

    it('should add footer with author', () => {
      const attrs = 'author="John Doe"';
      const content = '<p>Quote</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('<footer>— <b>John Doe</b></footer>');
    });

    it('should add source with cite', () => {
      const attrs = 'source="Book Title"';
      const content = '<p>Quote</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('<cite>Book Title</cite>');
    });

    it('should add source with link if sourceUrl provided', () => {
      const attrs = 'source="Article" sourceUrl="https://example.com"';
      const content = '<p>Quote</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('<cite><a href="https://example.com">Article</a></cite>');
    });

    it('should convert relative sourceUrl to absolute', () => {
      const attrs = 'source="Article" sourceUrl="/blog/post"';
      const content = '<p>Quote</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('<cite><a href="https://www.stefanimhoff.de/blog/post">Article</a></cite>');
    });

    it('should add source without link if no sourceUrl', () => {
      const attrs = 'source="Book Title"';
      const content = '<p>Quote</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('<cite>Book Title</cite>');
      expect(result).not.toContain('<a href=');
    });

    it('should handle custom lang attribute', () => {
      const attrs = 'lang="de"';
      const content = '<p>Zitat</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('lang="de"');
    });

    it('should escape HTML in author and source', () => {
      const attrs = 'author="<b>Evil</b>" source="<script>xss</script>"';
      const content = '<p>Quote</p>';
      const result = replaceBlockquoteComponent(attrs, content, SITE_URL);

      expect(result).toContain('&lt;b&gt;Evil&lt;/b&gt;');
      expect(result).toContain('&lt;script&gt;');
    });
  });

  describe('replacePullquoteComponent', () => {
    it('should create pullquote with text', () => {
      const attrs = 'text="Important quote"';
      const result = replacePullquoteComponent(attrs, SITE_URL);

      expect(result).toContain('<blockquote');
      expect(result).toContain('<p>Important quote</p>');
    });

    it('should handle alignment center', () => {
      const attrs = 'text="Quote" alignment="center"';
      const result = replacePullquoteComponent(attrs, SITE_URL);

      expect(result).toContain('text-align: center;');
    });

    it('should handle alignment left', () => {
      const attrs = 'text="Quote" alignment="left"';
      const result = replacePullquoteComponent(attrs, SITE_URL);

      expect(result).toContain('text-align: left;');
    });

    it('should add footer with author and source', () => {
      const attrs = 'text="Quote" author="Jane" source="Book"';
      const result = replacePullquoteComponent(attrs, SITE_URL);

      expect(result).toContain('<b>Jane</b>');
      expect(result).toContain('<cite>Book</cite>');
    });

    it('should add source with link if sourceUrl provided', () => {
      const attrs = 'text="Quote" source="Article" sourceUrl="/blog/post"';
      const result = replacePullquoteComponent(attrs, SITE_URL);

      expect(result).toContain('<cite><a href="https://www.stefanimhoff.de/blog/post">Article</a></cite>');
    });

    it('should return empty string if no text', () => {
      const result = replacePullquoteComponent('', SITE_URL);

      expect(result).toBe('');
    });
  });

  describe('replaceProductLinkComponent', () => {
    it('should create Amazon product link', () => {
      const attrs = 'asin="B001234567" text="Buy Now"';
      const result = replaceProductLinkComponent(attrs);

      expect(result).toContain('https://www.amazon.de/gp/product/B001234567');
      expect(result).toContain('Buy Now');
    });

    it('should escape HTML in text', () => {
      const attrs = 'asin="B001234567" text="<script>xss</script>"';
      const result = replaceProductLinkComponent(attrs);

      expect(result).not.toContain('<script>');
      expect(result).toContain('&lt;script&gt;');
    });

    it('should return empty string if missing asin or text', () => {
      expect(replaceProductLinkComponent('asin="B001234567"')).toBe('');
      expect(replaceProductLinkComponent('text="Buy"')).toBe('');
    });
  });

  describe('replaceDownloadLinkComponent', () => {
    it('should create download link with arrow', () => {
      const attrs = 'href="/file.pdf" text="Download"';
      const result = replaceDownloadLinkComponent(attrs, SITE_URL);

      expect(result).toContain('https://www.stefanimhoff.de/file.pdf');
      expect(result).toContain('Download');
      expect(result).toContain('&#8595;');
    });

    it('should return empty string if missing href or text', () => {
      expect(replaceDownloadLinkComponent('href="/file.pdf"', SITE_URL)).toBe('');
      expect(replaceDownloadLinkComponent('text="Download"', SITE_URL)).toBe('');
    });
  });

  describe('replaceMoreLinkComponent', () => {
    it('should create more link with arrow', () => {
      const attrs = 'href="/article" text="Read more"';
      const result = replaceMoreLinkComponent(attrs, SITE_URL);

      expect(result).toContain('https://www.stefanimhoff.de/article');
      expect(result).toContain('Read more');
      expect(result).toContain('&#8594;');
    });

    it('should return empty string if missing href or text', () => {
      expect(replaceMoreLinkComponent('href="/article"', SITE_URL)).toBe('');
      expect(replaceMoreLinkComponent('text="More"', SITE_URL)).toBe('');
    });
  });

  describe('replaceRubyComponent', () => {
    it('should create ruby annotation', () => {
      const attrs = 'base="東京" text="とうきょう"';
      const result = replaceRubyComponent(attrs);

      expect(result).toContain('<ruby>');
      expect(result).toContain('東京');
      expect(result).toContain('<rt>とうきょう</rt>');
      expect(result).toContain('</ruby>');
    });

    it('should escape HTML in base and text', () => {
      const attrs = 'base="<b>test</b>" text="<i>ruby</i>"';
      const result = replaceRubyComponent(attrs);

      expect(result).toContain('&lt;b&gt;test&lt;/b&gt;');
      expect(result).toContain('&lt;i&gt;ruby&lt;/i&gt;');
    });

    it('should return empty string if missing base or text', () => {
      expect(replaceRubyComponent('base="test"')).toBe('');
      expect(replaceRubyComponent('text="ruby"')).toBe('');
    });
  });

  describe('replaceSpotifyComponent', () => {
    it('should create Spotify embed iframe', () => {
      const attrs = 'id="abc123xyz"';
      const result = replaceSpotifyComponent(attrs);

      expect(result).toContain('<iframe');
      expect(result).toContain('https://open.spotify.com/embed/show/abc123xyz');
      expect(result).toContain('width="100%"');
      expect(result).toContain('height="352"');
    });

    it('should return empty string if no id', () => {
      const result = replaceSpotifyComponent('');

      expect(result).toBe('');
    });
  });

  describe('replaceFigureComponent', () => {
    it('should wrap content in figure', () => {
      const attrs = '';
      const content = '<img src="/test.jpg" />';
      const result = replaceFigureComponent(attrs, content);

      expect(result).toBe('<figure><img src="/test.jpg" /></figure>');
    });

    it('should add figcaption if caption provided', () => {
      const attrs = 'caption="Test Caption"';
      const content = '<img src="/test.jpg" />';
      const result = replaceFigureComponent(attrs, content);

      expect(result).toContain('<figcaption>Test Caption</figcaption>');
    });

    it('should escape HTML in caption', () => {
      const attrs = 'caption="<script>xss</script>"';
      const content = '<img src="/test.jpg" />';
      const result = replaceFigureComponent(attrs, content);

      expect(result).not.toContain('<script>');
      expect(result).toContain('&lt;script&gt;');
    });
  });

  describe('replaceBannerComponent', () => {
    it('should wrap content in aside', () => {
      const attrs = '';
      const content = '<p>Banner content</p>';
      const result = replaceBannerComponent(attrs, content);

      expect(result).toBe('<aside><p>Banner content</p></aside>');
    });

    it('should create details with summary', () => {
      const attrs = 'summary="Click to expand"';
      const content = '<p>Hidden content</p>';
      const result = replaceBannerComponent(attrs, content);

      expect(result).toContain('<details>');
      expect(result).toContain('<summary><strong>Click to expand</strong></summary>');
      expect(result).toContain('<p>Hidden content</p>');
    });

    it('should add open attribute if specified', () => {
      const attrs = 'summary="Summary" open';
      const content = '<p>Content</p>';
      const result = replaceBannerComponent(attrs, content);

      expect(result).toContain('<details open>');
    });

    it('should escape HTML in summary', () => {
      const attrs = 'summary="<script>xss</script>"';
      const content = '<p>Content</p>';
      const result = replaceBannerComponent(attrs, content);

      expect(result).not.toContain('<script>');
      expect(result).toContain('&lt;script&gt;');
    });
  });

  describe('replaceColorSwatchComponent', () => {
    it('should create div with background color', () => {
      const attrs = 'color="#FF5733"';
      const result = replaceColorSwatchComponent(attrs);

      expect(result).toContain('<div');
      expect(result).toContain('background-color: #FF5733;');
      expect(result).toContain('width: 100px');
      expect(result).toContain('height: 100px');
    });

    it('should escape color value', () => {
      const attrs = 'color="red\"><script>xss</script>"';
      const result = replaceColorSwatchComponent(attrs);

      expect(result).not.toContain('<script>');
    });

    it('should return empty string if no color', () => {
      const result = replaceColorSwatchComponent('');

      expect(result).toBe('');
    });
  });

  describe('replaceWrapperComponent', () => {
    it('should wrap content in div', () => {
      const content = '<p>Content</p>';
      const result = replaceWrapperComponent(content);

      expect(result).toBe('<div><p>Content</p></div>');
    });
  });

  describe('stripMDXComponents', () => {
    it('should replace Image component', () => {
      const text = '<Image src="/test.jpg" alt="Test" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<figure>');
      expect(result).toContain('https://www.stefanimhoff.de/test.jpg');
    });

    it('should replace AmazonBook component', () => {
      const text = '<AmazonBook asin="B001234567" alt="Book" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('amazon.de/gp/product/B001234567');
    });

    it('should replace AppleTV component (both casing)', () => {
      const text1 = '<AppleTv id="test123" />';
      const text2 = '<AppleTV id="test456" />';

      expect(stripMDXComponents(text1, SITE_URL)).toContain('tv.apple.com');
      expect(stripMDXComponents(text2, SITE_URL)).toContain('tv.apple.com');
    });

    it('should replace Netflix component', () => {
      const text = '<Netflix id="80001234" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('netflix.com/title/80001234');
    });

    it('should replace PrimeVideo component', () => {
      const text = '<PrimeVideo id="B08XYZ" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('amazon.de/gp/video/detail/B08XYZ');
    });

    it('should replace Flag component', () => {
      const text = '<Flag label="New" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('[New]');
    });

    it('should replace Blockquote component', () => {
      const text = '<Blockquote author="John">Quote text</Blockquote>';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<blockquote');
      expect(result).toContain('John');
    });

    it('should replace Pullquote component', () => {
      const text = '<Pullquote text="Important" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('Important');
    });

    it('should replace Figure component', () => {
      const text = '<Figure caption="Test">Content</Figure>';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<figure>');
      expect(result).toContain('Test');
    });

    it('should replace Banner component', () => {
      const text = '<Banner>Content</Banner>';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<aside>');
    });

    it('should replace ProductLink component', () => {
      const text = '<ProductLink asin="B001234567" text="Buy" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('amazon.de/gp/product/B001234567');
    });

    it('should replace DownloadLink component', () => {
      const text = '<DownloadLink href="/file.pdf" text="Download" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('Download');
      expect(result).toContain('&#8595;');
    });

    it('should replace MoreLink component', () => {
      const text = '<MoreLink href="/article" text="More" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('More');
      expect(result).toContain('&#8594;');
    });

    it('should replace Ruby component', () => {
      const text = '<Ruby base="東京" text="とうきょう" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<ruby>');
      expect(result).toContain('東京');
    });

    it('should replace Spotify component', () => {
      const text = '<Spotify id="abc123" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<iframe');
      expect(result).toContain('spotify');
    });

    it('should replace ColorSwatch component', () => {
      const text = '<ColorSwatch color="#FF5733" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('background-color: #FF5733;');
    });

    it('should replace ColorStack wrapper', () => {
      const text = '<ColorStack>Content</ColorStack>';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<div>Content</div>');
    });

    it('should replace Bookshelf wrapper', () => {
      const text = '<Bookshelf>Books</Bookshelf>';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<div>Books</div>');
    });

    it('should remove unknown self-closing components', () => {
      const text = 'Before <UnknownComponent prop="value" /> After';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toBe('Before  After');
    });

    it('should remove unknown paired components and their content', () => {
      const text = 'Before <UnknownWrapper>Content</UnknownWrapper> After';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toBe('Before  After');
    });

    it('should handle multiple components in sequence', () => {
      const text = '<Image src="/img.jpg" alt="Img" /><Flag label="New" /><Ruby base="日本" text="にほん" />';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toContain('<figure>');
      expect(result).toContain('[New]');
      expect(result).toContain('<ruby>');
    });

    it('should handle empty text', () => {
      expect(stripMDXComponents('', SITE_URL)).toBe('');
    });

    it('should preserve regular HTML', () => {
      const text = '<p>Regular <strong>HTML</strong> content</p>';
      const result = stripMDXComponents(text, SITE_URL);

      expect(result).toBe(text);
    });
  });
});
