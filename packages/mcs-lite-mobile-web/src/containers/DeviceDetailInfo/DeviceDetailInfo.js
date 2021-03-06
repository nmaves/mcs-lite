import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import B from 'mcs-lite-ui/lib/B';
import P from 'mcs-lite-ui/lib/P';
import MobileHeader from 'mcs-lite-ui/lib/MobileHeader';
import { updatePathname } from 'mcs-lite-ui/lib/utils/routerHelper';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import { Link } from 'react-router';
import { Container } from './styled-components';

class DeviceDetailInfo extends React.Component {
  static propTypes = {
    // React-router Params
    deviceId: PropTypes.string.isRequired,

    // Redux State
    device: PropTypes.object,

    // Redux Action
    fetchDeviceDetail: PropTypes.func.isRequired,

    // React-intl I18n
    getMessages: PropTypes.func.isRequired,
  };
  componentWillMount = () => this.props.fetchDeviceDetail(this.props.deviceId);
  render() {
    const { deviceId, device, getMessages: t } = this.props;

    return (
      <div>
        <Helmet><title>{t('deviceIntro')}</title></Helmet>
        <MobileHeader.MobileHeader
          title={t('deviceIntro')}
          leftChildren={
            <MobileHeader.MobileHeaderIcon
              component={Link}
              to={updatePathname(`/devices/${deviceId}`)}
            >
              <IconArrowLeft />
            </MobileHeader.MobileHeaderIcon>
          }
        />

        <main>
          {device &&
            <Container>
              <div><B>{t('deviceName')}</B><P>{device.deviceName}</P></div>
              <div><B>{t('creator')}</B><P>{device.user.userName}</P></div>
              <div><B>{t('version')}</B><P>{device.prototype.version}</P></div>
              <div>
                <B>{t('description')}</B><P>{device.deviceDescription}</P>
              </div>
              <div><B>DeviceId</B><P>{device.deviceId}</P></div>
              <div><B>DeviceKey</B><P>{device.deviceKey}</P></div>
            </Container>}
        </main>
      </div>
    );
  }
}

export default DeviceDetailInfo;
