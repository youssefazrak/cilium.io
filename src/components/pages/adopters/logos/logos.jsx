import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AlibabaCloudLogo from './images/alibaba-cloud.inline.svg';
import AmazonEKSlogo from './images/amazon-eks.inline.svg';
import AppuioLogo from './images/appuio.inline.svg';
import AWSLogo from './images/aws.inline.svg';
import AzureLogo from './images/azure.inline.svg';
import CivoLogo from './images/civo.inline.svg';
import CraneLogo from './images/crane.inline.svg';
import DaoCloudLogo from './images/daocloud.inline.svg';
import DigitalOceanLogo from './images/digitalocean.inline.svg';
import GardernerLogo from './images/gardener.inline.svg';
import GoogleCloudLogo from './images/google-cloud.inline.svg';
import KindLogo from './images/kind.inline.svg';
import KopsLogo from './images/kops.inline.svg';
import KubeaszLogo from './images/kubeasz.inline.svg';
import KubekeyLogo from './images/kubekey.inline.svg';
import KubeoneLogo from './images/kubeone.inline.svg';
import KubesprayLogo from './images/kuberspray.inline.svg';
import OpenStackLogo from './images/openstack.inline.svg';
import Rke2Logo from './images/rke2.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import SovereignLogo from './images/sovereign.inline.svg';
import TencentCloudLogo from './images/tencent-cloud.inline.svg';

const logos = {
  aws: AWSLogo,
  tencentCloud: TencentCloudLogo,
  googleCloud: GoogleCloudLogo,
  azure: AzureLogo,
  appuio: AppuioLogo,
  alibabaCloud: AlibabaCloudLogo,
  scaleway: ScalewayLogo,
  digitalOcean: DigitalOceanLogo,
  openStack: OpenStackLogo,
  kind: KindLogo,
  kubespray: KubesprayLogo,
  kops: KopsLogo,
  amazonEks: AmazonEKSlogo,
  gardener: GardernerLogo,
  crane: CraneLogo,
  kubeasz: KubeaszLogo,
  kubekey: KubekeyLogo,
  kubeone: KubeoneLogo,
  rke2: Rke2Logo,
  daocloud: DaoCloudLogo,
  civo: CivoLogo,
  sovereign: SovereignLogo,
};

const spaceXClassNames = {
  sm: 'mx-4 md:mx-6 lg:mx-[26px]',
  md: 'mx-4 md:mx-6 lg:mx-8',
};

const Logos = ({ title, items, spaceXSize }) => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-32">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="mx-0 mt-4 flex flex-wrap justify-center md:mt-6 lg:mx-[-26px] lg:mt-8">
        {items.map((logo, index) => {
          const Logo = logos[logo];
          return (
            <Logo
              className={classNames(
                'mt-4 h-12 w-auto text-gray-1 md:mt-6 md:h-14 lg:mt-8 lg:h-16',
                spaceXClassNames[spaceXSize]
              )}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  </section>
);

Logos.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  spaceXSize: PropTypes.oneOf(Object.keys(spaceXClassNames)).isRequired,
};

export default Logos;
