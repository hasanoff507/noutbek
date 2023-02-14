import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AllCardType } from '../../../Api/Crud';
import Information from './Characteristic/Information'
import AdditionalInformation from './Characteristic/AdditionalInformation';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
type Props = {
  simpledata: AllCardType[]
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Characteristic: React.FC<Props> = ({ simpledata }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '45px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='mui-tabs-button' label="Xarakteristika" {...a11yProps(0)} />
          <Tab className='mui-tabs-button' label="To’liq ma’lumot " {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Information simpledata={simpledata}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdditionalInformation simpledata={simpledata}/>
      </TabPanel>
    </Box>
  );
}
export default Characteristic