/* global fetch */

import React from 'react';
import PropTypes from 'prop-types';
import { LOCALES, localeMapper } from 'mcs-lite-ui/lib/utils/localeHelper';
import Helmet from 'react-helmet';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { DEFAULT_LOCALE } from '../IntlProvider/IntlProvider';
import ogImage from '../../statics/images/img_ogimage.png';

const defaultLocaleMapper = localeMapper(DEFAULT_LOCALE);

const GITHUB_API_URL =
  'https://api.github.com/repos/MCS-Lite/mcs-lite-app/releases/latest';

// Remind: Twitter need absolute path
const ogImageForTwitter =
  'https://raw.githubusercontent.com/MCS-Lite/mcs-lite/master/packages/mcs-lite-design/src/logo/img_ogimage.png';

class App extends React.PureComponent {
  static propTypes = {
    // React-intl I18n
    getMessages: PropTypes.func.isRequired,

    // React-Router HOC
    router: PropTypes.object.isRequired,
  };
  state = {
    tag: null,
  };
  componentDidMount() {
    fetch(GITHUB_API_URL)
      .then(res => res.json())
      .then(res => this.setState({ tag: res.tag_name }));
  }
  render() {
    const { getMessages: t, router } = this.props;
    const { tag } = this.state;
    // Remind: fix for netlify redirect to lower case path
    const locale = defaultLocaleMapper(router.params.locale);

    return (
      <div>
        {/* 1. Helmet */}
        <Helmet titleTemplate={`%s ${t('titleTemplate')}`}>
          {/* <!-- https://megatags.co/#generate-tags --> */}
          <title>{t('title')}</title>
          {/* <!-- Search Engine --> */}
          <meta name="description" content={t('desc')} />
          <meta name="image" content={ogImage} />
          {/* <!-- Schema.org for Google --> */}
          <meta itemProp="name" content={t('title')} />
          <meta itemProp="description" content={t('desc')} />
          <meta itemProp="image" content={ogImage} />
          {/* <!-- Twitter --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={t('title')} />
          <meta name="twitter:description" content={t('desc')} />
          <meta name="twitter:creator" content="@evenchange4" />
          <meta name="twitter:image" content={ogImageForTwitter} />
          <meta name="twitter:alt" content={t('desc')} />
          {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
          <meta name="og:title" content={t('title')} />
          <meta name="og:description" content={t('desc')} />
          <meta name="og:image" content={ogImage} />
          <meta name="og:url" content="https://mcslite.netlify.com/" />
          <meta name="og:site_name" content={t('title')} />
          <meta name="og:type" content="website" />
          <meta property="og:locale" content={DEFAULT_LOCALE} />
          {LOCALES.map(({ id }) =>
            <meta key={id} property="og:locale:alternate" content={id} />,
          )}
        </Helmet>

        <Header locale={locale} />

        <Section1 tag={tag} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 tag={tag} />

        <Footer />
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default App;
