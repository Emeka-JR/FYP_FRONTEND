export const environment = {
  production: false,
  apiUrl: 'https://fyp-backend-1-skjv.onrender.com/',
  apiEndpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      me: '/auth/me'
    },
    news: '/news',
    users: '/users'
  }
}; 