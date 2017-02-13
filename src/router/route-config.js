import App from '../App.vue';
import Index from '../page/index'; 
import Page1 from '../page/page1';
import Page2 from '../page/page2';

export default {
	path: '/', component: App,
         children: [
	          { path: 'index', name:'index', component: Index },
	          { path: 'page1', name:'page1', component: Page1 },
	          { path: 'page2/:id', name:'page2', component: Page2 }
	]
}