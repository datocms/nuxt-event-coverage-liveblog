<template>
  <div class="text-gray-700 body-font py-12 bg-gray-100 px-10">
    <div class="max-w-screen-sm mx-auto text-center">
      <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Real-times Updates Demo
      </p>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
        Event Coverage LiveBlog
      </h3>
      <p class="mt-4 max-w-xl text-xl leading-7 text-gray-500 lg:mx-auto">
        A simple Nuxt + Typescript + Tailwind project to demonstrate
        real-time capabilities of DatoCMS
      </p>
    </div>

    <div class="max-w-screen-sm mx-auto text-center mt-20 mb-12">
      <div v-if="status === 'connecting'">Connecting to DatoCMS...</div>
      <div v-else-if="status === 'connected'" class="flex flex-col md:flex-row items-center justify-center">
        <span class="flex h-3 w-3 relative mb-3 md:mb-0 md:mr-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
        <span>Connected to DatoCMS, receiving live updates!</span>
        &emsp;
        <button @click="subscribe = !subscribe" class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-2 rounded">
          Pause
        </button>
      </div>
      <div v-else>
        Connection closed
        &emsp;
        <button @click="subscribe = !subscribe" class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-2 rounded">
          Follow the stream
        </button>
      </div>
    </div>

    <div v-if="error" class="max-w-screen-sm my-12 mx-auto">
      <h1 class="title-font text-lg font-bold text-gray-900 mb-3">
        Error: {{ error.code }}
      </h1>
      <div class="my-5">{{ error.message }}</div>
      <pre v-if="error.response" class="bg-gray-100 p-5 mt-5 font-mono">
        {{ JSON.stringify(error.response, null, 2) }}
      </pre>
    </div>

    <div v-if="data" class="max-w-screen-sm mx-auto my-12">
      <TransitionGroup name="post">
        <div v-for="post in data.posts" :key="post.id">
          <div class="shadow-xl rounded-lg overflow-hidden bg-white">
            <Image v-for="photo in post.photos"
              :key="photo.responsiveImage.src"
              class="w-full"
              :data="photo.responsiveImage"
            />
            <div v-if="post.content" class="p-4 md:p-8 md:text-xl content" v-html="md.render(post.content)">
            </div>
          </div>
          <div class="mt-4 grid grid-cols-2 text-xs md:text-sm text-gray-500 md:px-8 items-center pb-12">
            <div class="flex items-center">
              <div class="w-8 h-8 relative">
                <Image
                  class="rounded-full mr-2 shadow"
                  layout="fill"
                  :data="post.author.avatar.responsiveImage"
                />
              </div>
              <div class="pl-2">{{ post.author.name }}</div>
            </div>
            <div class="text-right">
              {{ post._firstPublishedAt }}
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>

import MarkdownIt from 'markdown-it'

import { useQuerySubscription, Image } from 'vue-datocms';

const md = MarkdownIt()

const graphqlRequest = {
  query: `
    query HomePage($limit: IntType) {
      posts: allPosts(first: $limit, orderBy: _firstPublishedAt_DESC) {
        id
        content
        _firstPublishedAt
        photos {
          responsiveImage(imgixParams: {auto: [format]}) {
            ...imageFields
          }
        }
        author {
          name
          avatar {
            responsiveImage(imgixParams: {auto: [format], w: 60}) {
              ...imageFields
            }
          }
        }
      }
    }

    fragment imageFields on ResponsiveImage {
      src width height alt base64
    }
  `,
  variables: { limit: 10 },
};

const runtimeConfig = useRuntimeConfig()

const { data: initialData } = await useFetch<{ data: any } | { errors: any }>('https://graphql.datocms.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${runtimeConfig.public.datocms.token}`
  },
  body: graphqlRequest,
  transform: (options) => { 
    if('errors' in options) throw new Error(options.errors[0].message);

    return options.data;
   },
})

const isClient = typeof window !== 'undefined';

const subscribe = ref<boolean>(true);

const enabled = computed(() => isClient && subscribe.value)

const { data, status, error } = useQuerySubscription({
  ...graphqlRequest,
  enabled: enabled,
  initialData: initialData,
  token: runtimeConfig.public.datocms.token,
})

</script>
