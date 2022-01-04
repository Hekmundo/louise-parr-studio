export interface SiteData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

// Prismic data models:
export interface PrismicRichText {
  type: string;
  text: string;
  spans: {
    start: number;
    end: number;
    type: string;
  }[];
}

export interface PrismicImage {
  alt: string | null;
  url: string;
}

export interface HomePage {
  prismicHomePage: {
    _previewable: string;
    data: {
      banner: {
        text: string;
      };
      footer_button_link: {
        url: string;
        target: string;
      };
      footer_button_text: string;
      footer_content: {
        richText: PrismicRichText[];
      };
      image_collage: PrismicImage[];
    };
  };
}
