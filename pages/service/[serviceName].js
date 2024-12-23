import * as React from 'react';
import { useRouter } from 'next/router';
import { 
  LEAD_GENERATION_PAGE, 
  PAID_MARKETING_PAGE, 
  PERFORMANCE_MARKETING_PAGE, 
  PERSONAL_BRANDING_PAGE, 
  PPC_PAGE, 
  SEO_PAGE, 
  SOCIAL_MEDIA_PAGE, 
  UGC_PAGE, 
  WEB_DEVELOPMENT_PAGE 
} from '@/text';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme, useMediaQuery } from '@mui/material';
import FirstComponent from '@/components/FirstComponent';
import SubscriptionComponent from '@/components/SubscriptionComponent';
import Features from '@/components/SecondComponent';
import ServiceProcess from '@/components/ThirdComponent';
import FaqComponent from '@/components/FAQs';

const services = [
  PERFORMANCE_MARKETING_PAGE, 
  SOCIAL_MEDIA_PAGE, 
  WEB_DEVELOPMENT_PAGE, 
  SEO_PAGE, 
  LEAD_GENERATION_PAGE, 
  PERSONAL_BRANDING_PAGE, 
  UGC_PAGE
];

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[\s/\\]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const ServicePage = () => {
  const router = useRouter();
  const { serviceName } = router.query;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const serviceIndex = services.findIndex(
    (service) => createSlug(service.title) === serviceName
  );
  const [value, setValue] = React.useState(serviceIndex !== -1 ? serviceIndex : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedSlug = createSlug(services[newValue].title);
    router.push(`/service/${selectedSlug}`, undefined, { shallow: true });
  };

  React.useEffect(() => {
    if (serviceIndex !== -1) {
      setValue(serviceIndex);
    }
  }, [serviceIndex]);

  const currentService = services[value];

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: isMobile ? '100%' : '25%',
            borderRight: isMobile ? 'none' : '1px solid #e0e0e0',
            borderBottom: isMobile ? '1px solid #e0e0e0' : 'none',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            orientation={isMobile ? 'horizontal' : 'vertical'}
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={isMobile ? 'auto' : 'off'}
            allowScrollButtonsMobile
            sx={{
              width: '100%',
              '.MuiTab-root': {
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
                fontWeight: '600',
                textAlign: 'left',
              },
            }}
          >
            {services.map((service, index) => (
              <Tab key={index} label={service.title} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ flex: 1, padding: '16px' }}>
          <FirstComponent
            data={{
              title: currentService.title,
              description: currentService.description,
              image: currentService.image,
            }}
          />
        </Box>
      </Box>

      <div>
        <Features
          features={currentService.features}
          sectionHeading={currentService.sectionHeading}
          sectionSubtitle={currentService.sectionSubtitle}
        />
        <ServiceProcess processImage={currentService.processImage} />
        <FaqComponent faqSection={currentService.faqSection} />
      </div>
    </div>
  );
};

export default ServicePage;
