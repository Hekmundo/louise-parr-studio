import React, { FC } from 'react';
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews';

const PreviewPage: FC = () => {
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage);
