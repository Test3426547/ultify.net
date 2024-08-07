<template>
    <div id="home">
  
      <div v-if="content || isPreviewing()">
        <div>
          page title:
          {{ content?.data?.title || 'Unpublished' }}
        </div>
        <Content
          model="page"
          :content="content"
          :api-key="BUILDER_PUBLIC_API_KEY"
          :customComponents="REGISTERED_COMPONENTS"
        />
      </div>
      <div v-else>Content not Found</div>
    </div>
  </template>
  
  <script setup>
  import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
  
  import HelloWorldComponent from '../components/HelloWorld.vue';
  
  // Register your Builder components
  const REGISTERED_COMPONENTS = [
    {
      component: HelloWorldComponent,
      name: 'MyFunComponent',
      canHaveChildren: true,
      inputs: [
        {
          name: 'text',
          type: 'string',
          defaultValue: 'World',
        },
      ],
    },
  ];
  
  // TODO: enter your public API key
  const BUILDER_PUBLIC_API_KEY = '2d47574992594081a270a51a1d3bae05'; // ggignore
  
  const route = useRoute();
  
  // fetch builder content data
  const { data: content } = await useAsyncData('builderData', () =>
    fetchOneEntry({
      model: 'page',
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: {
        urlPath: route.path,
      },
    })
  );
  </script>