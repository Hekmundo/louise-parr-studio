import React, { FC, useState, FormEvent } from 'react';
import { graphql, PageProps } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews';
import emailjs from '@emailjs/browser';
import { PrismicRichText } from '@prismicio/react';
import { ContactPageData } from '../types';
import { Layout } from '../components/Layout';
import SEO from '../components/SEO';

const successMessage = 'Thank you!';
const failMessage =
  'Sorry, there was a problem trying to send your enquiry. Please reload the page and try again or you can email me directly at contact@louiseparrstudio.com';

const ContactTemplate: FC<PageProps<ContactPageData>> = ({ data }) => {
  if (!data) return null;
  const { contact_content, dropdown_header, dropdown_options } =
    data.prismicContactPage.data;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [onSubmitMessage, setOnSubmitMessage] = useState(successMessage);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      const response = await emailjs.sendForm(
        'contact_service',
        'contact_form',
        '#contact-form',
        process.env.EMAILJS_USER_ID,
      );
      if (response.status !== 200 && response.text !== 'OK') {
        setOnSubmitMessage(failMessage);
      }
    } catch (error) {
      setOnSubmitMessage(failMessage);
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="container">
        <div>
          <PrismicRichText field={contact_content?.richText} />
        </div>
        <div>
          {!formSubmitted ? (
            <form id="contact-form" onSubmit={handleSubmit}>
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
                <label htmlFor="interest">{dropdown_header}</label>
                <select name="interest" id="interest">
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
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          ) : (
            <span>{onSubmitMessage}</span>
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
