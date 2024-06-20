import { fullStack, vuejsReactjs, nodejsAspnetCore, webArtist } from '../assets/img/cardImg/_index';

const about = {
  id: 'about',
  title: 'Overview',
  subtitle: 'Introduction',
  imgBg: '#383E56',
  cards: [
    {
      imgSrc: fullStack,
      imgAlt: 'Image of laptop with code blocks coming out of the screen',
      title: 'Full Stack Software Developer'
    },
    {
      imgSrc: "https://res.cloudinary.com/ddxwdqwkr/image/upload/v1690837534/patterns.dev/Images/vue/intro/vue.png",
      imgAlt: 'Image of Vue.js and React.js logos',
      title: 'Front-End Development'
    },
    {
      imgSrc: "https://www.mucahittopal.com/upload/dosya/csmysql.jpg",
      imgAlt: 'Image of Node.js and ASP.NET Core logos',
      title: 'Back-End Development'
    },
    // {
    //   imgSrc: vuejsReactjs,
    //   imgAlt: 'Image of Vue.js and React.js logos',
    //   title: 'Front-End Development'
    // },
    // {
    //   imgSrc: nodejsAspnetCore,
    //   imgAlt: 'Image of Node.js and ASP.NET Core logos',
    //   title: 'Back-End Development'
    // },
    // {
    //   imgSrc: webArtist,
    //   imgAlt: 'Colorful image of multiple tech icons with splashes of color',
    //   title: 'Web Artist'
    // },
  ],
};

export default about;