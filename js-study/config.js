const configs = {
  'xxx.com': {
    baseToken: 'xxxxxx',
    baseUrl: 'xxxxx',
  },
  'yyy.com': {
    baseToken: 'yyyyy',
    baseUrl: 'yyyyy'
  },
  'zzz.com': {
    baseToken: 'zzzzz',
    baseUrl: 'zzzz'
  }
}

const config = configs[location.href];
export default config;