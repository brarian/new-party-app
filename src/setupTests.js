import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const $ = require('jquery');
const jsdom = require('jsdom');
const m = require('module');
const { JSDOM } = jsdom;

Enzyme.configure({adapter: new Adapter()});


const originalLoader = m._load;
 
m._load = function hookedLoader(request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return { uri: request };
  }
 
  return originalLoader(request, parent, isMain);
};

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
global.$ = $(global.window);

// mock calls to localStorage
global.window.localStorage = {
  getItem: () => {
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjIsIlJvbGVJZCI6MSwidXNlciI6ImFkbWluIiwiaWF0IjoxNDkyODkxNzEzLCJleHAiOjE0OTI5NzgxMTN9.bJ5OMykjtl1xwEwBYK7EJ07qcF95Oi6isIO0PdBwYEQ`;
  },
  setItem: () => {
    // do nothing
  }
};

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};