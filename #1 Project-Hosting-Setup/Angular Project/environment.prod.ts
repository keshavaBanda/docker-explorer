export const environment = {
  production: true,
 // APIEndpoint: 'https://aszhostserver.ddns.net/MegaEvent/api/',
  // APIEndpoint1: 'https://aszhostserver.ddns.net/MegaEvent2/api/',
  APIEndpoint: window["env"]["apiUrl"] || "default",
  debug: window["env"]["debug"] || false,
  
  defaultLangCode: 'en',
  language: [
    { code: 'en', key: 'english', value: 'English' },
  ],
  defaultPageLimit: 10,
  pageLimit: [5, 10, 15, 20, 25],
};
