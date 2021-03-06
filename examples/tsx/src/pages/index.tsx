{/* <route>
  name: 'test'
  meta:
    layout: empty
    head:
      title: t('Message')
      meta:
        -
          name: language
          content: en-US
        -
          name: author
          content: ziping
</route> */}

import { defineComponent, getCurrentInstance, ComponentInternalInstance, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Index',
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const instance: ComponentInternalInstance | null = getCurrentInstance();
    const toString = instance?.appContext.config.globalProperties.$toString;

    console.log(toRaw(route.meta));

    const { locale } = useI18n();

    locale.value = 'en-US';

    setTimeout(() => {
      locale.value = 'zh-CN';
    }, 5000);

    return () => (
      <div>
        <div>
          <hello></hello> World.
        </div>
        <span>
          {store.state.text} {store.state.user.name}.
        </span>

        <div>
          <a-button type="primary" onClick={() => router.push('/about')}>Primary Button</a-button>
        </div>

        <div>{toString({ a: 1 })}</div>

        <div>{ $t("Message") }</div>
      </div>
    );
  },
});
