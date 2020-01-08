module.exports = {
  
  
  siteTitle: 'Umair Zaki', // <title>
  manifestName: 'Portfolio',
  manifestShortName: 'Portfolio', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/UmairZaki/`, // This path is subpath of your hosting https://domain/portfolio
  // social

  authorName: 'Umair Zaki',
  authorHeading: 'Web Developer UI- JAMStack - Machine Learning AI Services',
  authorSocialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/UmairZaki',
    },
    {
      icon: 'fa-linkedin',
      name: 'Linkedn',
      url: 'https://www.linkedin.com/in/umair-zaki-8353a918b/',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/umair.zaki.12',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:umairzakicnbc@gmail.com',
    },
  ],
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-react-helmet', 'gatsby-plugin-offline']
};
