<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
    xmlns:media="http://search.yahoo.com/mrss/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
    <head>
      <title>
        <xsl:value-of select="/rss/channel/title" /> Web Feed
      </title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <style type="text/css">
      :root {
        --accent: rgb(230, 5, 16);
        --backgroundDark: rgb(27, 25, 23);
        --backgroundLight: rgb(230, 230, 227);
        --linkDark: rgba(230, 230, 227, 0.2);
        --linkLight: rgba(27, 25, 23, 0.2);
        --textDark: rgba(205, 204, 199, 0.87);
        --textLight: rgb(14, 13, 12);

        color-scheme: light dark;
      }

      body {
        background-color: light-dark(var(--backgroundLight), var(--backgroundDark));
        color: light-dark(var(--textLight), var(--textDark));
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
        line-height: 1.6;
        word-wrap: break-word;
      }

      section {
        margin: 0 auto;
        width: clamp(300px, 50vw, 768px);
      }

      article {
        border-block-start: 1px solid light-dark(var(--linkLight), var(--linkDark));
        clear: both;
        padding-block: 1em;
      }

      h1 {
        font-size: clamp(20px, 2vw, 50px);
      }

      h2 {
        font-size: clamp(15px, 1.2vw, 40px);
        margin-block-end: 0.5em;
      }

      h3 {
        font-size: clamp(12px, 1vw, 30px);
        line-height: 1;
        margin-block-end: 0.5em;
        margin-block-start: 0;
      }

      img {
        float: inline-start;
        margin-inline-end: 1em;
        margin-block-end: 1.5em;
      }

      small,
      .timestamp {
        font-size: clamp(10px, 0.8vw, 15px);
        margin-block: 0;
      }

      a {
        color: light-dark(var(--textLight), var(--textDark));
        text-decoration-line: none;
        text-size-adjust: 100%;
        text-underline-offset: auto;
      }

      a:hover,
      a:active,
      a:focus {
        text-decoration-color: var(--accent);
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 4px;
      }

      .timestamp {
        color: light-dark(var(--linkLight), var(--linkDark));
        font-style: italic;
      }

      .title {
        margin-block-end: 0;
      }

      .description {
        margin-block-start: 0;
      }

      </style>
    </head>

    <body>
      <section>
        <header>
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: text-bottom; width: 1.2em; height: 1.2em;" class="pr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3C12.9411 3 21 11.0589 21 21H18C18 12.7157 11.2843 6 3 6V3ZM3 10C9.07513 10 14 14.9249 14 21H11C11 16.5817 7.41828 13 3 13V10ZM3 17C5.20914 17 7 18.7909 7 21H3V17Z"></path>
            </svg>
            Web Feed Preview
          </h1>
          <h2 class="title">
            <xsl:value-of select="/rss/channel/title" />
          </h2>
          <p class="description">
            <xsl:value-of select="/rss/channel/description" />
          </p>
          <a target="_blank">
            <xsl:attribute name="href">
              <xsl:value-of select="/rss/channel/link" />
            </xsl:attribute>
            Visit Website
          </a>
        </header>
        <h2>Recent Items</h2>
        <xsl:for-each select="/rss/channel/item">
          <article>
            <xsl:if test="media:thumbnail/@url">
              <img src="{media:thumbnail/@url}" alt="{title}" width="100" height="100" />
            </xsl:if>
            <div class="timestamp">
              <time>
                <xsl:value-of select="pubDate" />
              </time>
            </div>
            <h3>
              <a target="_blank">
                <xsl:attribute name="href">
                  <xsl:value-of select="link" />
                </xsl:attribute>
                <xsl:value-of select="title" />
              </a>
            </h3>
            <small>
              <xsl:value-of select="description" disable-output-escaping="yes" />
            </small>
          </article>
        </xsl:for-each>
      </section>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
