import { graphql } from 'gatsby';

export const query = graphql`
  fragment PrismicColourThemeFragment on PrismicColourTheme {
    data {
      content_background_colour
      content_text_colour
      primary_colour
      primary_text_colour
      primary_text_hover_colour
      secondary_colour
      secondary_text_colour
    }
  }
`;
