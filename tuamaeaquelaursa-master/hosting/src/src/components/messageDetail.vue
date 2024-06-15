<template>
  <section class="message-details">
    <header class="message-details-header" v-if="!message.subject">
      <h1 class="message-details-header-subject">Carregando...</h1>
    </header>
    <header class="message-details-header" v-if="message.subject">
      <h1 class="message-details-header-subject">{{message.subject}}</h1>
      <div class="message-details-header-info">
        <div class="message-details-header-info-sender">{{message.from}}</div>
        <div class="message-details-header-info-date">{{fancy_date(message.created_at)}}</div>
      </div>
    </header>
    <main :class="'message-details-body' + (message.bodyHtml ? '' : ' nl2br')" v-html="message.bodyHtml || message.bodyPlain"></main>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'MessageDetail',
    computed: {
      ...mapGetters([ 'message' ]),
    },
    methods: {
      fancy_date( date ) {
        let cur_date = new Date();
        let msg_date = new Date( date );
        let options = {
          hour: 'numeric',
          minute: 'numeric'
        };

        if ( msg_date.getMonth() < cur_date.getMonth() ) {
          options.weekday = 'short';
          options.month = 'short';
          options.day = '2-digit';
        } else {
          if ( msg_date.getDate() < cur_date.getDate() ) {
            options.weekday = 'short';
            options.day = '2-digit';
          }

          if ( msg_date.getDate() == cur_date.getDate() )
            options.second = 'numeric';
        }

        return msg_date.toLocaleString(navigator.language, options);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';

  .nl2br {
    white-space: pre;
    font-family: monospace;
  }

  .message-details {
    &-header,
    &-body {
      max-width: 53rem;
      margin-left: auto;
      margin-right: auto;
    }
    &-body {
      padding-top: 1rem;
    }

    &-header {
      border-bottom: 1px solid $app-background;
      padding-left: 1rem;
      padding-bottom: 1rem;
      padding-right: 1rem;

      &-subject {
        font-size: 1.25rem;
        // margin-top: 0;
      }

      &-info {
        display: flex;
        &-sender { flex: 1; }
        &-date {
          flex: 1;
          text-align: right;
          color: lighten($dark-text, 30%);
          font-size: .8rem;
        }
      }
    }
  }
</style>
