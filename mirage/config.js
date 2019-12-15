export default function() {
  this.namespace = '/api';

  let projects = [{
        type: 'projects',
        id: 'grand-old-mansion',
        attributes: {
          title: 'React Bookfair Website',
          module: 'Front End Frameworks',
          lecturer: 'Jing Hua Ye',
          grade: '100%',
          language: 'Javascript',
          image: 'https://i.ibb.co/C2yrSx0/bookfair.jpg',
          description: "A bookfair website created as part of my first project for Front End Development."
        }
      }, {
        type: 'projects',
        id: 'urban-living',
        attributes: {
          title: 'Reverse Auction',
          module: 'App Development Frameworks',
          lecturer: 'Cliona',
          grade: '99%',
          language: 'Java',
          image: 'https://i.ibb.co/gD9NYfg/reverse-Auction.jpg',
          description: "A revese auction site created as part of App Development Frameworks using Spring"
        }
      }, {
        type: 'projects',
        id: 'downtown-charm',
        attributes: {
          title: 'Some Kind of Robot',
          module: 'Robotics',
          lecturer: 'Bob Marley',
          grade: '1000%',
          language: 'C',
          image: 'https://i.ibb.co/xJjRJJN/robot.png',
          description: "Just a robot, might take over the world some day. Who knows"
        }
      }]
    this.get('/projects', function(db, request) {
      return { data: projects };
    });
  }