import FormContainer from './components/FormContainer.vue';
import FormItem from './components/FormItem.vue';

function install(Vue) {
  Vue.component('FormContainer', FormContainer);
  Vue.component('FormItem', FormItem);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default { install };
