import React, { FC, useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import { PrismicRichText } from '@prismicio/react';
import { ContactPageData } from '../types';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const ContactTemplate: FC<PageProps<ContactPageData>> = ({ data }) => {
  if (!data) return null;
  const { contact_content, dropdown_header, dropdown_options } =
    data.prismicContactPage.data;

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="container">
        <div>
          <PrismicRichText field={contact_content?.richText} />
        </div>
        <div>
          {!formSubmitted ? (
            <form>
              <fieldset>
                <legend>Name</legend>
                <div>
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    maxLength={30}
                    name="fname"
                    id="fname"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    maxLength={30}
                    name="lname"
                    id="lname"
                    required
                  />
                </div>
              </fieldset>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="dropdown">{dropdown_header}</label>
                <select name="dropdown" id="dropdown">
                  {dropdown_options?.map((item, index) => (
                    <option
                      key={`dropdown-option-${index}`}
                      value={item?.option}
                    >
                      {item?.option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="text-area">Message</label>
                <textarea id="text-area" name="text-area" required />
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          ) : (
            <span>Thank you!</span>
          )}
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    prismicContactPage {
      _previewable
      data {
        contact_content {
          richText
        }
        dropdown_header
        dropdown_options {
          option
        }
      }
    }
  }
`;

// @ts-ignore
export default withPrismicPreview(ContactTemplate);
