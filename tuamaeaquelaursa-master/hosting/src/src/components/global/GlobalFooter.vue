<template>
  <footer class="global-footer">
    <section class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="javascript:void(0)" v-on:click="scrollIntoView('#header', true)">Voltar ao topo</a>
          <a href="javascript:void(0)" v-on:click="scrollIntoView('#features')">Como funciona</a>
          <a href="javascript:void(0)" v-on:click="scrollIntoView('#motives')">Por que?</a>
          <a href="javascript:void(0)" v-on:click="scrollIntoView('#blog')">Blog</a>
        </div>
        <div class="footer-extras">
          <a href="/static/politica-de-privacidade-v1.pdf" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"/></svg>
            Política de privacidade
          </a>
          <a :href="'mailto:' + email + _hosting.suffix">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/></svg>
            {{ email + _hosting.suffix }}
          </a>
          <a href="https://github.com/edtsz/tuamaeaquelaursa" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
            Open Source
          </a>
        </div>
      </div>
      <div class="footer-credits">Orgulhosamente desenvolvido por Ronaldo Fuzinato, Éderson T. Szlachta e Cassiano Calegari</div>
    </section>
  </footer>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'GlobalFooter',
    computed: mapState(['_hosting' ]),
    data() {
      return {
        email: 'falecom',
        scrollIntoView: (hash, isHome) => {
          if (isHome || location.pathname === '/') {
            history.pushState({}, null, location.href.replace(/\#.*/, ''));
            document.querySelector(hash).scrollIntoView();
          } else {
            location.href = '/' + hash;
          }
        },
      };
    },
    created() {
      setTimeout(() => {
        if (location.hash && document.querySelector(location.hash)) {
          document.querySelector(location.hash).scrollIntoView();
          history.pushState({}, null, location.href.replace(/\#.*/, ''));
        }
      });
    }
  }
</script>

<style lang="scss">
  @import '@/scss/_color.scss';

  html { scroll-behavior: smooth; }
  @media screen and (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  .global-footer {
    background-color: $dark-brown;
    padding: 1rem;
  }

  .footer {
    a {
      color: white;
      text-decoration: none;
      display: block;
      svg {
        display: inline-block;
        fill: $lighter-brown;
        width: 16px;
      }
    }

    &-content {
      display: flex;
      max-width: 40rem;
      margin: 2rem auto;
    }

    &-links, &-extras {
      flex: 0 0 50%;
      max-width: 50%;
      text-align: left;
      a {
        margin: 10px 1rem;
        &:hover {
          transform: translateX(2px);
        }
      }
    }
    &-links {
      font-weight: 900;
    }
    &-extras {
      a { display: flex; }
      svg { margin-right: 5px; }
    }

    &-credits {
      font-size: 16px;
      color: $lighter-brown;
    }
  }

  @media only screen and (max-width:1000px) {
    .global-footer {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 1.5rem;
    }
    .footer {
      &-content {
        display: block;
        max-width: 100%;
        overflow-x: hidden;
        margin-top: 1rem;
      }
      &-links, &-extras {
        max-width: 100%;
      }
      &-extras {
        margin-top: 2rem;
      }
    }
  }
</style>
