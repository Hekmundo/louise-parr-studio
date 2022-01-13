/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: any;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicAlternateLanguageType = {
  readonly id: Maybe<Scalars['ID']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicEmbedType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicGeoPointType = {
  readonly longitude: Scalars['Float'];
  readonly latitude: Scalars['Float'];
};

type PrismicImageDimensionsType = {
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

type PrismicImageThumbnailType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicImageThumbnailType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicImageThumbnailType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicImageThumbnailType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicImageThumbnailType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicLinkType = {
  readonly link_type: Maybe<PrismicLinkTypeEnum>;
  readonly isBroken: Maybe<Scalars['Boolean']>;
  readonly url: Maybe<Scalars['String']>;
  readonly target: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly type: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lang: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly localFile: Maybe<File>;
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicLinkTypeEnum =
  | 'Any'
  | 'Document'
  | 'Media'
  | 'Web';

type PrismicSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicSharedSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly variation: Scalars['String'];
  readonly version: Scalars['String'];
};

type PrismicStructuredTextType = {
  readonly text: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly richText: Scalars['PrismicStructuredText'];
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  readonly raw: Scalars['PrismicStructuredText'];
};

type PrismicTypePathType = Node & {
  readonly kind: Scalars['String'];
  readonly path: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ImgixFixed = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

type ImgixFluid = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly aspectRatio: Scalars['Float'];
};

type ImgixPlaceholder =
  | 'dominantColor'
  | 'blurred'
  | 'none';

type ImgixParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  readonly ar: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  readonly auto: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  readonly bg: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  readonly blendAlign: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly blendalign: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly ba: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  readonly blendAlpha: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  readonly blendalpha: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  readonly balph: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  readonly blendColor: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendcolor: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendClr: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendclr: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  readonly blendCrop: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly blendcrop: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly bc: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  readonly blendFit: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly blendfit: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly bf: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  readonly blendH: Maybe<Scalars['Float']>;
  /** Alias for `blendH`. */
  readonly blendh: Maybe<Scalars['Float']>;
  /** Alias for `blendH`. */
  readonly bh: Maybe<Scalars['Float']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  readonly blendMode: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  readonly blendmode: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  readonly bm: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  readonly blendPad: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly blendpad: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly bp: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  readonly blendSize: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  readonly blendsize: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  readonly bs: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  readonly blendW: Maybe<Scalars['Float']>;
  /** Alias for `blendW`. */
  readonly blendw: Maybe<Scalars['Float']>;
  /** Alias for `blendW`. */
  readonly bw: Maybe<Scalars['Float']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  readonly blendX: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  readonly blendx: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  readonly bx: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  readonly blendY: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly blendy: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly by: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  readonly blend: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  readonly b: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  readonly blur: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  readonly borderBottom: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  readonly borderLeft: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  readonly borderRadiusInner: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  readonly borderRadius: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  readonly borderRight: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  readonly borderTop: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  readonly border: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  readonly bri: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  readonly ch: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  readonly chromasub: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  readonly colorquant: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  readonly colors: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  readonly con: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  readonly cornerRadius: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  readonly crop: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  readonly cs: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  readonly dl: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  readonly dpi: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  readonly dpr: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  readonly duotoneAlpha: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  readonly duotone: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  readonly exp: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  readonly expires: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  readonly faceindex: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  readonly facepad: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  readonly faces: Maybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  readonly fillColor: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  readonly fillcolor: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  readonly fill: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  readonly fit: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  readonly f: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  readonly flip: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  readonly fm: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  readonly fpDebug: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  readonly fpX: Maybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  readonly fpY: Maybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  readonly fpZ: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  readonly gam: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  readonly gridColors: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  readonly gridSize: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  readonly h: Maybe<Scalars['Float']>;
  /** Alias for `h`. */
  readonly height: Maybe<Scalars['Float']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  readonly high: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  readonly htn: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  readonly hue: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  readonly invert: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  readonly inv: Maybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. */
  readonly iptc: Maybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  readonly lossless: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  readonly markAlign: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly ma: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly markalign: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  readonly markAlpha: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  readonly markalpha: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  readonly malph: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  readonly markBase: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  readonly mb: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  readonly markbase: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  readonly markFit: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly mf: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly markfit: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  readonly markH: Maybe<Scalars['Float']>;
  /** Alias for `markH`. */
  readonly mh: Maybe<Scalars['Float']>;
  /** Alias for `markH`. */
  readonly markh: Maybe<Scalars['Float']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  readonly markPad: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  readonly mp: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  readonly markpad: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  readonly markRot: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  readonly markScale: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly ms: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly markscale: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  readonly markTile: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  readonly mtile: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  readonly marktile: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  readonly markW: Maybe<Scalars['Float']>;
  /** Alias for `markW`. */
  readonly mw: Maybe<Scalars['Float']>;
  /** Alias for `markW`. */
  readonly markw: Maybe<Scalars['Float']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  readonly markX: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  readonly mx: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  readonly markx: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  readonly markY: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly my: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly marky: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  readonly mark: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  readonly m: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  readonly maskBg: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  readonly maskbg: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  readonly mask: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  readonly maxH: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  readonly maxHeight: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  readonly maxW: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  readonly maxWidth: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  readonly minH: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  readonly minHeight: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  readonly minW: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  readonly minWidth: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  readonly monochrome: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  readonly mono: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  readonly nr: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  readonly nrs: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  readonly orient: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  readonly or: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  readonly padBottom: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  readonly padLeft: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  readonly padRight: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  readonly padTop: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  readonly pad: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  readonly page: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  readonly palette: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  readonly pdfAnnotation: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  readonly annotation: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  readonly prefix: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  readonly px: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  readonly q: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  readonly rect: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  readonly rot: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  readonly sat: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  readonly sepia: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  readonly shad: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  readonly sharp: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  readonly transparency: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  readonly trimColor: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  readonly trimcolor: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  readonly trimMd: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  readonly trimmd: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  readonly trimPad: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  readonly trimpad: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  readonly trimSd: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  readonly trimsd: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  readonly trimTol: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  readonly trimtol: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  readonly trim: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  readonly txtAlign: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly txtalign: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly ta: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  readonly txtClip: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly txtclip: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly tcl: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  readonly txtColor: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtcolor: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtClr: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtclr: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly tc: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  readonly txtFit: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  readonly txtfit: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  readonly txtFont: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly tf: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly txtfont: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  readonly txtLead: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  readonly txtlead: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  readonly txtLig: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  readonly txtlig: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  readonly txtLineColor: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlinecolor: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtLineClr: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlineclr: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  readonly txtLine: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly txtline: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly tl: Maybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  readonly txtPad: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly txtpad: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly tp: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  readonly txtShad: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly txtshad: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly tsh: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  readonly txtSize: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  readonly tsz: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  readonly txtsize: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  readonly txtTrack: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly txttrack: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly tt: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  readonly txtWidth: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  readonly txtwidth: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  readonly txt: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  readonly t: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  readonly usm: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  readonly usmrad: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  readonly vib: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  readonly w: Maybe<Scalars['Float']>;
  /** Alias for `w`. */
  readonly width: Maybe<Scalars['Float']>;
};

type PrismicFooterDataType = {
  readonly text: Maybe<Scalars['String']>;
};

type PrismicFooter = Node & {
  readonly data: PrismicFooterDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicFooter_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicFooter_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicContactPageDataDropdownOptions = {
  readonly option: Maybe<Scalars['String']>;
};

type PrismicHeaderDataLogoImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicHeaderDataLogoImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicHeaderDataLogoImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicHeaderDataLogoImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicHeaderDataLogoImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicContactPageDataType = {
  readonly contact_content: Maybe<PrismicStructuredTextType>;
  readonly dropdown_header: Maybe<Scalars['String']>;
  readonly dropdown_options: Maybe<ReadonlyArray<Maybe<PrismicContactPageDataDropdownOptions>>>;
};

type PrismicAboutPageDataAboutImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicAboutPageDataAboutImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicAboutPageDataAboutImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicAboutPageDataAboutImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicAboutPageDataAboutImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicContactPage = Node & {
  readonly uid: Scalars['String'];
  readonly data: PrismicContactPageDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicContactPage_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicContactPage_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAboutPageDataType = {
  readonly about_content: Maybe<PrismicStructuredTextType>;
  readonly about_image: Maybe<PrismicAboutPageDataAboutImageImageType>;
  readonly instagram_header: Maybe<PrismicStructuredTextType>;
  readonly main_paragraph: Maybe<PrismicStructuredTextType>;
};

type PrismicHeaderDataPageNavigation = {
  readonly page: Maybe<PrismicLinkType>;
  readonly page_name: Maybe<Scalars['String']>;
};

type PrismicHomePageDataImageCollageImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicHomePageDataImageCollageImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicHomePageDataImageCollageImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicHomePageDataImageCollageImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicHomePageDataImageCollageImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicAboutPage = Node & {
  readonly uid: Scalars['String'];
  readonly data: PrismicAboutPageDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicAboutPage_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicAboutPage_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicHomePageDataImageCollage = {
  readonly image: Maybe<PrismicHomePageDataImageCollageImageImageType>;
};

type PrismicHomePageDataType = {
  readonly banner: Maybe<PrismicStructuredTextType>;
  readonly footer_button_link: Maybe<PrismicLinkType>;
  readonly footer_button_text: Maybe<Scalars['String']>;
  readonly footer_content: Maybe<PrismicStructuredTextType>;
  readonly image_collage: Maybe<ReadonlyArray<Maybe<PrismicHomePageDataImageCollage>>>;
};

type PrismicHomePage = Node & {
  readonly data: PrismicHomePageDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicHomePage_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicHomePage_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicHeaderDataStoreLinks = {
  readonly store_link: Maybe<PrismicLinkType>;
  readonly store_name: Maybe<Scalars['String']>;
};

type PrismicHeaderDataType = {
  readonly logo: Maybe<PrismicHeaderDataLogoImageType>;
  readonly page_navigation: Maybe<ReadonlyArray<Maybe<PrismicHeaderDataPageNavigation>>>;
  readonly store_label: Maybe<Scalars['String']>;
  readonly store_links: Maybe<ReadonlyArray<Maybe<PrismicHeaderDataStoreLinks>>>;
};

type PrismicHeader = Node & {
  readonly data: PrismicHeaderDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicHeader_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicHeader_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAllDocumentTypes = PrismicHeader | PrismicHomePage | PrismicFooter | PrismicAboutPage | PrismicContactPage;

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly prismicEmbedType: Maybe<PrismicEmbedType>;
  readonly allPrismicEmbedType: PrismicEmbedTypeConnection;
  readonly prismicTypePathType: Maybe<PrismicTypePathType>;
  readonly allPrismicTypePathType: PrismicTypePathTypeConnection;
  readonly prismicFooter: Maybe<PrismicFooter>;
  readonly allPrismicFooter: PrismicFooterConnection;
  readonly prismicContactPage: Maybe<PrismicContactPage>;
  readonly allPrismicContactPage: PrismicContactPageConnection;
  readonly prismicAboutPage: Maybe<PrismicAboutPage>;
  readonly allPrismicAboutPage: PrismicAboutPageConnection;
  readonly prismicHomePage: Maybe<PrismicHomePage>;
  readonly allPrismicHomePage: PrismicHomePageConnection;
  readonly prismicHeader: Maybe<PrismicHeader>;
  readonly allPrismicHeader: PrismicHeaderConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicEmbedTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicEmbedTypeArgs = {
  filter: Maybe<PrismicEmbedTypeFilterInput>;
  sort: Maybe<PrismicEmbedTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTypePathTypeArgs = {
  kind: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTypePathTypeArgs = {
  filter: Maybe<PrismicTypePathTypeFilterInput>;
  sort: Maybe<PrismicTypePathTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicFooterArgs = {
  data: Maybe<PrismicFooterDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicFooterArgs = {
  filter: Maybe<PrismicFooterFilterInput>;
  sort: Maybe<PrismicFooterSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicContactPageArgs = {
  uid: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicContactPageDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicContactPageArgs = {
  filter: Maybe<PrismicContactPageFilterInput>;
  sort: Maybe<PrismicContactPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicAboutPageArgs = {
  uid: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicAboutPageDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicAboutPageArgs = {
  filter: Maybe<PrismicAboutPageFilterInput>;
  sort: Maybe<PrismicAboutPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicHomePageArgs = {
  data: Maybe<PrismicHomePageDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicHomePageArgs = {
  filter: Maybe<PrismicHomePageFilterInput>;
  sort: Maybe<PrismicHomePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicHeaderArgs = {
  data: Maybe<PrismicHeaderDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicHeaderArgs = {
  filter: Maybe<PrismicHeaderFilterInput>;
  sort: Maybe<PrismicHeaderSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicEmbedTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
};


type PrismicEmbedTypeConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_maxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_minArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_sumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldsEnum;
};

type PrismicEmbedTypeEdge = {
  readonly next: Maybe<PrismicEmbedType>;
  readonly node: PrismicEmbedType;
  readonly previous: Maybe<PrismicEmbedType>;
};

type PrismicEmbedTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicEmbedTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicEmbedTypeGroupConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_maxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_minArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_sumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldsEnum;
};

type PrismicEmbedTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicEmbedTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicEmbedTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTypePathTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
};


type PrismicTypePathTypeConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_maxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_minArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_sumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldsEnum;
};

type PrismicTypePathTypeEdge = {
  readonly next: Maybe<PrismicTypePathType>;
  readonly node: PrismicTypePathType;
  readonly previous: Maybe<PrismicTypePathType>;
};

type PrismicTypePathTypeFieldsEnum =
  | 'kind'
  | 'path'
  | 'type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicTypePathTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTypePathTypeGroupConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_maxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_minArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_sumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldsEnum;
};

type PrismicTypePathTypeFilterInput = {
  readonly kind: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTypePathTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTypePathTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicFooterDataTypeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
};

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

type PrismicAlternateLanguageTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicAlternateLanguageTypeFilterInput>;
};

type PrismicAlternateLanguageTypeFilterInput = {
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicFooterConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFooterEdge>;
  readonly nodes: ReadonlyArray<PrismicFooter>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicFooterGroupConnection>;
};


type PrismicFooterConnection_distinctArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterConnection_maxArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterConnection_minArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterConnection_sumArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicFooterFieldsEnum;
};

type PrismicFooterEdge = {
  readonly next: Maybe<PrismicFooter>;
  readonly node: PrismicFooter;
  readonly previous: Maybe<PrismicFooter>;
};

type PrismicFooterFieldsEnum =
  | 'data.text'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
  | '_previewable'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicFooterGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFooterEdge>;
  readonly nodes: ReadonlyArray<PrismicFooter>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicFooterGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicFooterGroupConnection_distinctArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterGroupConnection_maxArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterGroupConnection_minArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterGroupConnection_sumArgs = {
  field: PrismicFooterFieldsEnum;
};


type PrismicFooterGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicFooterFieldsEnum;
};

type PrismicFooterFilterInput = {
  readonly data: Maybe<PrismicFooterDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicFooterSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicFooterFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicContactPageDataTypeFilterInput = {
  readonly contact_content: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly dropdown_header: Maybe<StringQueryOperatorInput>;
  readonly dropdown_options: Maybe<PrismicContactPageDataDropdownOptionsFilterListInput>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly richText: Maybe<PrismicStructuredTextQueryOperatorInput>;
  readonly raw: Maybe<PrismicStructuredTextQueryOperatorInput>;
};

type PrismicStructuredTextQueryOperatorInput = {
  readonly eq: Maybe<Scalars['PrismicStructuredText']>;
  readonly ne: Maybe<Scalars['PrismicStructuredText']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['PrismicStructuredText']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['PrismicStructuredText']>>>;
};

type PrismicContactPageDataDropdownOptionsFilterListInput = {
  readonly elemMatch: Maybe<PrismicContactPageDataDropdownOptionsFilterInput>;
};

type PrismicContactPageDataDropdownOptionsFilterInput = {
  readonly option: Maybe<StringQueryOperatorInput>;
};

type PrismicContactPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicContactPageEdge>;
  readonly nodes: ReadonlyArray<PrismicContactPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicContactPageGroupConnection>;
};


type PrismicContactPageConnection_distinctArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageConnection_maxArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageConnection_minArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageConnection_sumArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicContactPageFieldsEnum;
};

type PrismicContactPageEdge = {
  readonly next: Maybe<PrismicContactPage>;
  readonly node: PrismicContactPage;
  readonly previous: Maybe<PrismicContactPage>;
};

type PrismicContactPageFieldsEnum =
  | 'uid'
  | 'data.contact_content.text'
  | 'data.contact_content.html'
  | 'data.contact_content.richText'
  | 'data.contact_content.raw'
  | 'data.dropdown_header'
  | 'data.dropdown_options'
  | 'data.dropdown_options.option'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
  | '_previewable'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicContactPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicContactPageEdge>;
  readonly nodes: ReadonlyArray<PrismicContactPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicContactPageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicContactPageGroupConnection_distinctArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageGroupConnection_maxArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageGroupConnection_minArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageGroupConnection_sumArgs = {
  field: PrismicContactPageFieldsEnum;
};


type PrismicContactPageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicContactPageFieldsEnum;
};

type PrismicContactPageFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicContactPageDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicContactPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicContactPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicAboutPageDataTypeFilterInput = {
  readonly about_content: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly about_image: Maybe<PrismicAboutPageDataAboutImageImageTypeFilterInput>;
  readonly instagram_header: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly main_paragraph: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicAboutPageDataAboutImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicImageDimensionsTypeFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ImgixFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ImgixFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type PrismicAboutPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAboutPageEdge>;
  readonly nodes: ReadonlyArray<PrismicAboutPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicAboutPageGroupConnection>;
};


type PrismicAboutPageConnection_distinctArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageConnection_maxArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageConnection_minArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageConnection_sumArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAboutPageFieldsEnum;
};

type PrismicAboutPageEdge = {
  readonly next: Maybe<PrismicAboutPage>;
  readonly node: PrismicAboutPage;
  readonly previous: Maybe<PrismicAboutPage>;
};

type PrismicAboutPageFieldsEnum =
  | 'uid'
  | 'data.about_content.text'
  | 'data.about_content.html'
  | 'data.about_content.richText'
  | 'data.about_content.raw'
  | 'data.about_image.alt'
  | 'data.about_image.copyright'
  | 'data.about_image.dimensions.width'
  | 'data.about_image.dimensions.height'
  | 'data.about_image.url'
  | 'data.about_image.fixed.base64'
  | 'data.about_image.fixed.src'
  | 'data.about_image.fixed.srcSet'
  | 'data.about_image.fixed.srcWebp'
  | 'data.about_image.fixed.srcSetWebp'
  | 'data.about_image.fixed.sizes'
  | 'data.about_image.fixed.width'
  | 'data.about_image.fixed.height'
  | 'data.about_image.fluid.base64'
  | 'data.about_image.fluid.src'
  | 'data.about_image.fluid.srcSet'
  | 'data.about_image.fluid.srcWebp'
  | 'data.about_image.fluid.srcSetWebp'
  | 'data.about_image.fluid.sizes'
  | 'data.about_image.fluid.aspectRatio'
  | 'data.about_image.gatsbyImageData'
  | 'data.about_image.localFile.sourceInstanceName'
  | 'data.about_image.localFile.absolutePath'
  | 'data.about_image.localFile.relativePath'
  | 'data.about_image.localFile.extension'
  | 'data.about_image.localFile.size'
  | 'data.about_image.localFile.prettySize'
  | 'data.about_image.localFile.modifiedTime'
  | 'data.about_image.localFile.accessTime'
  | 'data.about_image.localFile.changeTime'
  | 'data.about_image.localFile.birthTime'
  | 'data.about_image.localFile.root'
  | 'data.about_image.localFile.dir'
  | 'data.about_image.localFile.base'
  | 'data.about_image.localFile.ext'
  | 'data.about_image.localFile.name'
  | 'data.about_image.localFile.relativeDirectory'
  | 'data.about_image.localFile.dev'
  | 'data.about_image.localFile.mode'
  | 'data.about_image.localFile.nlink'
  | 'data.about_image.localFile.uid'
  | 'data.about_image.localFile.gid'
  | 'data.about_image.localFile.rdev'
  | 'data.about_image.localFile.ino'
  | 'data.about_image.localFile.atimeMs'
  | 'data.about_image.localFile.mtimeMs'
  | 'data.about_image.localFile.ctimeMs'
  | 'data.about_image.localFile.atime'
  | 'data.about_image.localFile.mtime'
  | 'data.about_image.localFile.ctime'
  | 'data.about_image.localFile.birthtime'
  | 'data.about_image.localFile.birthtimeMs'
  | 'data.about_image.localFile.blksize'
  | 'data.about_image.localFile.blocks'
  | 'data.about_image.localFile.publicURL'
  | 'data.about_image.localFile.id'
  | 'data.about_image.localFile.children'
  | 'data.instagram_header.text'
  | 'data.instagram_header.html'
  | 'data.instagram_header.richText'
  | 'data.instagram_header.raw'
  | 'data.main_paragraph.text'
  | 'data.main_paragraph.html'
  | 'data.main_paragraph.richText'
  | 'data.main_paragraph.raw'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
  | '_previewable'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicAboutPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAboutPageEdge>;
  readonly nodes: ReadonlyArray<PrismicAboutPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicAboutPageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicAboutPageGroupConnection_distinctArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageGroupConnection_maxArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageGroupConnection_minArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageGroupConnection_sumArgs = {
  field: PrismicAboutPageFieldsEnum;
};


type PrismicAboutPageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAboutPageFieldsEnum;
};

type PrismicAboutPageFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicAboutPageDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicAboutPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicAboutPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicHomePageDataTypeFilterInput = {
  readonly banner: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly footer_button_link: Maybe<PrismicLinkTypeFilterInput>;
  readonly footer_button_text: Maybe<StringQueryOperatorInput>;
  readonly footer_content: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly image_collage: Maybe<PrismicHomePageDataImageCollageFilterListInput>;
};

type PrismicLinkTypeFilterInput = {
  readonly link_type: Maybe<PrismicLinkTypeEnumQueryOperatorInput>;
  readonly isBroken: Maybe<BooleanQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicLinkTypeEnumQueryOperatorInput = {
  readonly eq: Maybe<PrismicLinkTypeEnum>;
  readonly ne: Maybe<PrismicLinkTypeEnum>;
  readonly in: Maybe<ReadonlyArray<Maybe<PrismicLinkTypeEnum>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<PrismicLinkTypeEnum>>>;
};

type PrismicHomePageDataImageCollageFilterListInput = {
  readonly elemMatch: Maybe<PrismicHomePageDataImageCollageFilterInput>;
};

type PrismicHomePageDataImageCollageFilterInput = {
  readonly image: Maybe<PrismicHomePageDataImageCollageImageImageTypeFilterInput>;
};

type PrismicHomePageDataImageCollageImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicHomePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicHomePageEdge>;
  readonly nodes: ReadonlyArray<PrismicHomePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicHomePageGroupConnection>;
};


type PrismicHomePageConnection_distinctArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageConnection_maxArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageConnection_minArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageConnection_sumArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicHomePageFieldsEnum;
};

type PrismicHomePageEdge = {
  readonly next: Maybe<PrismicHomePage>;
  readonly node: PrismicHomePage;
  readonly previous: Maybe<PrismicHomePage>;
};

type PrismicHomePageFieldsEnum =
  | 'data.banner.text'
  | 'data.banner.html'
  | 'data.banner.richText'
  | 'data.banner.raw'
  | 'data.footer_button_link.link_type'
  | 'data.footer_button_link.isBroken'
  | 'data.footer_button_link.url'
  | 'data.footer_button_link.target'
  | 'data.footer_button_link.size'
  | 'data.footer_button_link.id'
  | 'data.footer_button_link.type'
  | 'data.footer_button_link.tags'
  | 'data.footer_button_link.lang'
  | 'data.footer_button_link.slug'
  | 'data.footer_button_link.uid'
  | 'data.footer_button_link.localFile.sourceInstanceName'
  | 'data.footer_button_link.localFile.absolutePath'
  | 'data.footer_button_link.localFile.relativePath'
  | 'data.footer_button_link.localFile.extension'
  | 'data.footer_button_link.localFile.size'
  | 'data.footer_button_link.localFile.prettySize'
  | 'data.footer_button_link.localFile.modifiedTime'
  | 'data.footer_button_link.localFile.accessTime'
  | 'data.footer_button_link.localFile.changeTime'
  | 'data.footer_button_link.localFile.birthTime'
  | 'data.footer_button_link.localFile.root'
  | 'data.footer_button_link.localFile.dir'
  | 'data.footer_button_link.localFile.base'
  | 'data.footer_button_link.localFile.ext'
  | 'data.footer_button_link.localFile.name'
  | 'data.footer_button_link.localFile.relativeDirectory'
  | 'data.footer_button_link.localFile.dev'
  | 'data.footer_button_link.localFile.mode'
  | 'data.footer_button_link.localFile.nlink'
  | 'data.footer_button_link.localFile.uid'
  | 'data.footer_button_link.localFile.gid'
  | 'data.footer_button_link.localFile.rdev'
  | 'data.footer_button_link.localFile.ino'
  | 'data.footer_button_link.localFile.atimeMs'
  | 'data.footer_button_link.localFile.mtimeMs'
  | 'data.footer_button_link.localFile.ctimeMs'
  | 'data.footer_button_link.localFile.atime'
  | 'data.footer_button_link.localFile.mtime'
  | 'data.footer_button_link.localFile.ctime'
  | 'data.footer_button_link.localFile.birthtime'
  | 'data.footer_button_link.localFile.birthtimeMs'
  | 'data.footer_button_link.localFile.blksize'
  | 'data.footer_button_link.localFile.blocks'
  | 'data.footer_button_link.localFile.publicURL'
  | 'data.footer_button_link.localFile.id'
  | 'data.footer_button_link.localFile.children'
  | 'data.footer_button_link.raw'
  | 'data.footer_button_text'
  | 'data.footer_content.text'
  | 'data.footer_content.html'
  | 'data.footer_content.richText'
  | 'data.footer_content.raw'
  | 'data.image_collage'
  | 'data.image_collage.image.alt'
  | 'data.image_collage.image.copyright'
  | 'data.image_collage.image.url'
  | 'data.image_collage.image.gatsbyImageData'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
  | '_previewable'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicHomePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicHomePageEdge>;
  readonly nodes: ReadonlyArray<PrismicHomePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicHomePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicHomePageGroupConnection_distinctArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageGroupConnection_maxArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageGroupConnection_minArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageGroupConnection_sumArgs = {
  field: PrismicHomePageFieldsEnum;
};


type PrismicHomePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicHomePageFieldsEnum;
};

type PrismicHomePageFilterInput = {
  readonly data: Maybe<PrismicHomePageDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicHomePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicHomePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicHeaderDataTypeFilterInput = {
  readonly logo: Maybe<PrismicHeaderDataLogoImageTypeFilterInput>;
  readonly page_navigation: Maybe<PrismicHeaderDataPageNavigationFilterListInput>;
  readonly store_label: Maybe<StringQueryOperatorInput>;
  readonly store_links: Maybe<PrismicHeaderDataStoreLinksFilterListInput>;
};

type PrismicHeaderDataLogoImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicHeaderDataPageNavigationFilterListInput = {
  readonly elemMatch: Maybe<PrismicHeaderDataPageNavigationFilterInput>;
};

type PrismicHeaderDataPageNavigationFilterInput = {
  readonly page: Maybe<PrismicLinkTypeFilterInput>;
  readonly page_name: Maybe<StringQueryOperatorInput>;
};

type PrismicHeaderDataStoreLinksFilterListInput = {
  readonly elemMatch: Maybe<PrismicHeaderDataStoreLinksFilterInput>;
};

type PrismicHeaderDataStoreLinksFilterInput = {
  readonly store_link: Maybe<PrismicLinkTypeFilterInput>;
  readonly store_name: Maybe<StringQueryOperatorInput>;
};

type PrismicHeaderConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicHeaderEdge>;
  readonly nodes: ReadonlyArray<PrismicHeader>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicHeaderGroupConnection>;
};


type PrismicHeaderConnection_distinctArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderConnection_maxArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderConnection_minArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderConnection_sumArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicHeaderFieldsEnum;
};

type PrismicHeaderEdge = {
  readonly next: Maybe<PrismicHeader>;
  readonly node: PrismicHeader;
  readonly previous: Maybe<PrismicHeader>;
};

type PrismicHeaderFieldsEnum =
  | 'data.logo.alt'
  | 'data.logo.copyright'
  | 'data.logo.dimensions.width'
  | 'data.logo.dimensions.height'
  | 'data.logo.url'
  | 'data.logo.fixed.base64'
  | 'data.logo.fixed.src'
  | 'data.logo.fixed.srcSet'
  | 'data.logo.fixed.srcWebp'
  | 'data.logo.fixed.srcSetWebp'
  | 'data.logo.fixed.sizes'
  | 'data.logo.fixed.width'
  | 'data.logo.fixed.height'
  | 'data.logo.fluid.base64'
  | 'data.logo.fluid.src'
  | 'data.logo.fluid.srcSet'
  | 'data.logo.fluid.srcWebp'
  | 'data.logo.fluid.srcSetWebp'
  | 'data.logo.fluid.sizes'
  | 'data.logo.fluid.aspectRatio'
  | 'data.logo.gatsbyImageData'
  | 'data.logo.localFile.sourceInstanceName'
  | 'data.logo.localFile.absolutePath'
  | 'data.logo.localFile.relativePath'
  | 'data.logo.localFile.extension'
  | 'data.logo.localFile.size'
  | 'data.logo.localFile.prettySize'
  | 'data.logo.localFile.modifiedTime'
  | 'data.logo.localFile.accessTime'
  | 'data.logo.localFile.changeTime'
  | 'data.logo.localFile.birthTime'
  | 'data.logo.localFile.root'
  | 'data.logo.localFile.dir'
  | 'data.logo.localFile.base'
  | 'data.logo.localFile.ext'
  | 'data.logo.localFile.name'
  | 'data.logo.localFile.relativeDirectory'
  | 'data.logo.localFile.dev'
  | 'data.logo.localFile.mode'
  | 'data.logo.localFile.nlink'
  | 'data.logo.localFile.uid'
  | 'data.logo.localFile.gid'
  | 'data.logo.localFile.rdev'
  | 'data.logo.localFile.ino'
  | 'data.logo.localFile.atimeMs'
  | 'data.logo.localFile.mtimeMs'
  | 'data.logo.localFile.ctimeMs'
  | 'data.logo.localFile.atime'
  | 'data.logo.localFile.mtime'
  | 'data.logo.localFile.ctime'
  | 'data.logo.localFile.birthtime'
  | 'data.logo.localFile.birthtimeMs'
  | 'data.logo.localFile.blksize'
  | 'data.logo.localFile.blocks'
  | 'data.logo.localFile.publicURL'
  | 'data.logo.localFile.id'
  | 'data.logo.localFile.children'
  | 'data.page_navigation'
  | 'data.page_navigation.page.link_type'
  | 'data.page_navigation.page.isBroken'
  | 'data.page_navigation.page.url'
  | 'data.page_navigation.page.target'
  | 'data.page_navigation.page.size'
  | 'data.page_navigation.page.id'
  | 'data.page_navigation.page.type'
  | 'data.page_navigation.page.tags'
  | 'data.page_navigation.page.lang'
  | 'data.page_navigation.page.slug'
  | 'data.page_navigation.page.uid'
  | 'data.page_navigation.page.raw'
  | 'data.page_navigation.page_name'
  | 'data.store_label'
  | 'data.store_links'
  | 'data.store_links.store_link.link_type'
  | 'data.store_links.store_link.isBroken'
  | 'data.store_links.store_link.url'
  | 'data.store_links.store_link.target'
  | 'data.store_links.store_link.size'
  | 'data.store_links.store_link.id'
  | 'data.store_links.store_link.type'
  | 'data.store_links.store_link.tags'
  | 'data.store_links.store_link.lang'
  | 'data.store_links.store_link.slug'
  | 'data.store_links.store_link.uid'
  | 'data.store_links.store_link.raw'
  | 'data.store_links.store_name'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
  | '_previewable'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicHeaderGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicHeaderEdge>;
  readonly nodes: ReadonlyArray<PrismicHeader>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicHeaderGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicHeaderGroupConnection_distinctArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderGroupConnection_maxArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderGroupConnection_minArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderGroupConnection_sumArgs = {
  field: PrismicHeaderFieldsEnum;
};


type PrismicHeaderGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicHeaderFieldsEnum;
};

type PrismicHeaderFilterInput = {
  readonly data: Maybe<PrismicHeaderDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicHeaderSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicHeaderFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


type AboutPageQuery = { readonly prismicAboutPage: Maybe<(
    Pick<PrismicAboutPage, '_previewable'>
    & { readonly data: { readonly about_content: Maybe<Pick<PrismicStructuredTextType, 'richText'>>, readonly about_image: Maybe<Pick<PrismicAboutPageDataAboutImageImageType, 'url' | 'alt'>>, readonly instagram_header: Maybe<Pick<PrismicStructuredTextType, 'richText'>>, readonly main_paragraph: Maybe<Pick<PrismicStructuredTextType, 'richText'>> } }
  )> };

type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


type ContactPageQuery = { readonly prismicContactPage: Maybe<(
    Pick<PrismicContactPage, '_previewable'>
    & { readonly data: (
      Pick<PrismicContactPageDataType, 'dropdown_header'>
      & { readonly contact_content: Maybe<Pick<PrismicStructuredTextType, 'richText'>>, readonly dropdown_options: Maybe<ReadonlyArray<Maybe<Pick<PrismicContactPageDataDropdownOptions, 'option'>>>> }
    ) }
  )> };

type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


type HomePageQuery = { readonly prismicHomePage: Maybe<(
    Pick<PrismicHomePage, '_previewable'>
    & { readonly data: (
      Pick<PrismicHomePageDataType, 'footer_button_text'>
      & { readonly banner: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly footer_button_link: Maybe<Pick<PrismicLinkType, 'url' | 'target'>>, readonly footer_content: Maybe<Pick<PrismicStructuredTextType, 'richText'>>, readonly image_collage: Maybe<ReadonlyArray<Maybe<{ readonly image: Maybe<Pick<PrismicHomePageDataImageCollageImageImageType, 'alt' | 'url'>> }>>> }
    ) }
  )> };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

type staticUsersAlexDesktoplouiseParrStudiosrccomponentsHeaderTsx667518402QueryVariables = Exact<{ [key: string]: never; }>;


type staticUsersAlexDesktoplouiseParrStudiosrccomponentsHeaderTsx667518402Query = { readonly prismicHeader: Maybe<{ readonly data: (
      Pick<PrismicHeaderDataType, 'store_label'>
      & { readonly logo: Maybe<Pick<PrismicHeaderDataLogoImageType, 'alt' | 'url'>>, readonly page_navigation: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicHeaderDataPageNavigation, 'page_name'>
        & { readonly page: Maybe<Pick<PrismicLinkType, 'url' | 'link_type'>> }
      )>>>, readonly store_links: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicHeaderDataStoreLinks, 'store_name'>
        & { readonly store_link: Maybe<Pick<PrismicLinkType, 'url' | 'target'>> }
      )>>> }
    ) }> };

type GatsbyImgixFluidFragment = Pick<ImgixFluid, 'aspectRatio' | 'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp' | 'sizes' | 'base64'>;

type GatsbyImgixFluid_noBase64Fragment = Pick<ImgixFluid, 'aspectRatio' | 'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp' | 'sizes'>;

type GatsbyImgixFixedFragment = Pick<ImgixFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImgixFixed_noBase64Fragment = Pick<ImgixFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyPrismicImageFixedFragment = GatsbyImgixFixedFragment;

type GatsbyPrismicImageFixed_noBase64Fragment = GatsbyImgixFixed_noBase64Fragment;

type GatsbyPrismicImageFixed_withWebpFragment = GatsbyImgixFixedFragment;

type GatsbyPrismicImageFixed_withWebp_noBase64Fragment = GatsbyImgixFixed_noBase64Fragment;

type GatsbyPrismicImageFluidFragment = GatsbyImgixFluidFragment;

type GatsbyPrismicImageFluid_noBase64Fragment = GatsbyImgixFluid_noBase64Fragment;

type GatsbyPrismicImageFluid_withWebpFragment = GatsbyImgixFluidFragment;

type GatsbyPrismicImageFluid_withWebp_noBase64Fragment = GatsbyImgixFluid_noBase64Fragment;

}