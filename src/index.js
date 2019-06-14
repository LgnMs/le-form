import FormContainer from './components/FormContainer.vue';
import FormItem from './components/FormItem.vue';
import FormTitle from './components/FormTitle.vue';

function install(Vue) {
  Vue.component('FormContainer', FormContainer);
  Vue.component('FormItem', FormItem);
  Vue.component('FormTitle', FormTitle);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default { install };
