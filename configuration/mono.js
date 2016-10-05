import {config} from 'rebass';

const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.06em'
};

const mono = {

fontFamily: 'Roboto, sans-serif',
  color: '#111',
  backgroundColor: '#fff',

  scale: [
    0, 6, 12, 24, 36, 48
  ],

  fontSizes: [
    64, 24, 20, 18, 14, 12, 11
  ],

  borderColor: `rgba(0, 0, 0, ${1})`,
  borderRadius: '6px',

  colors: {
    ...(config.colors),
    primary: '#111'
  },

  Heading: {
    fontFamily: 'inherit',
    ...caps
  },

  Button: {
    ...caps
  },
  NavItem: {
    ...caps
  },
  PageHeader: { borderColor: '#111' },
  Footer: { borderColor: '#111' },
  Input: {
    input: {
      backgroundColor: `rgba(255, 255, 255, 1)`
    }
  }
};

export default mono;
