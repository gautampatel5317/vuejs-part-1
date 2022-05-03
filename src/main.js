import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';
import UserBase from './components/UserBase.vue';
import UserGrid from './components/UserGrid.vue';
import UserElement from './components/UserElement.vue';
import ProductGrid from './components/ProductGrid.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);
app.component('user-base', UserBase);
app.component('user-grid', UserGrid);
app.component('user-element', UserElement);
app.component('product-grid', ProductGrid);
app.use(ElementPlus);
app.mount('#app');
