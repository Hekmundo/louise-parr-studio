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
  richText: {
    type: string;
    text: string;
    spans: {
      start: number;
      end: number;
      type: string;
    }[];
  }[];
}

export interface PrismicImage {
  alt: string | null;
  url: string;
}

export interface PrismicExternalLink {
  url: string;
  target: string;
}

// Prismic documents:
export interface HomePage {
  prismicHomePage: {
    _previewable: string;
    data: {
      banner: {
        text: string;
      };
      footer_button_link: PrismicExternalLink;
      footer_button_text: string;
      footer_content: PrismicRichText;
      image_collage: {
        image: PrismicImage;
      }[];
    };
  };
}
export interface ContactPage {
  prismicContactPage: {
    _previewable: string;
    data: {
      contact_content: PrismicRichText;
      dropdown_header: string;
      dropdown_options: {
        option: string;
      }[];
    };
  };
}

export interface AboutPage {
  prismicAboutPage: {
    _previewable: string;
    data: {
      about_content: PrismicRichText;
      about_image: PrismicImage;
      instagram_header: PrismicRichText;
      main_paragraph: PrismicRichText;
    };
  };
}

export interface HeaderData {
  prismicHeader: {
    data: {
      logo: PrismicImage;
      page_navigation: {
        page: {
          url: string;
          link_type: string;
        };
        page_name: string;
      }[];
      store_label: string;
      store_links: {
        store_link: PrismicExternalLink;
        store_name: string;
      }[];
    };
  };
}
