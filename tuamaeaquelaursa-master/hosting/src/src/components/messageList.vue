<template>
  <section class="message-list">
    <div class="no-messages" v-if="loader">
      <p>Tua mãe, aquela ursa foi buscar as correspondências para você.</p>
    </div>
    <div v-else>
      <div class="all-messages" v-if="messages.length > 0">
        <router-link class="the-message" v-for="(msg, index) in messages" :key="index" :to="['', $route.params.email, msg.key].join('/')" tag="div">
          <div class="the-message-from">{{msg.from}}</div>
          <div class="the-message-subject">{{msg.subject}}</div>
          <div class="the-message-time" :title="(new Date(msg.created_at)).toLocaleString()">{{fancy_date(msg.created_at)}}</div>
        </router-link>
      </div>
      <div class="no-messages" v-if="messages.length == 0">
        <p>Tua mãe, aquela ursa não encontrou tuas cartas.<br>¯\_(ツ)_/¯</p>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'MessageList',
    computed: {
      ...mapState([ 'loader' ]),
      ...mapGetters(['messages'])
    },
    beforeMount() {
      this.hydrate_messages(this.$route.params);
    },
    mounted() {
    },
    methods: {
      ...mapActions(['hydrate_messages']),
      fancy_date( date ) {
        let cur_date = new Date();
        let msg_date = new Date( date );
        let options = {
          hour: 'numeric',
          minute: 'numeric'
        };
        let week = 86400000 * 6;
        let msg_time = cur_date.getTime() - msg_date.getTime();

        if ( msg_date.getDate() < cur_date.getDate() && msg_time < week ) {
          options.weekday = 'short';
        }
        else
        if ( msg_date.getDate() == cur_date.getDate() && msg_time < week  ) {
          options.second = 'numeric';
        }
        else {
          options.weekday = 'short';
          options.month = 'short';
          options.day = '2-digit';
        }

        return msg_date.toLocaleString(navigator.language, options);
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';

  .message-list {
    background-color: #FFF;
  }
  .no-messages {
    padding: 1rem;
    text-align: center;
  }
  .the-message {
    position: relative;
    padding: .5rem 1rem .5rem .5rem;
    cursor: pointer;
    z-index: 1;

    white-space: nowrap;
    border-bottom: 1px solid #CBCBCB;
    border-left: .5rem solid transparent;

    &:nth-child( odd )  { background-color: #FFFFFF; }
    &:nth-child( even ) { background-color: #F2F2F2; }
    &:hover {
      border-left-color: #AAA;
      background-color: darken(#F2F2F2, 10%);
    }


    &-from, &-subject, &-time {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-from, &-time {
      line-height: 1rem;
    }

    &-from {
      font-size: .85rem;
      color: lighten($dark-text, 20%);
      padding-bottom: .15rem;
    }
    &-time {
      font-size: .7rem;
      text-align: right;
      color: lighten($dark-text, 30%);
      position: absolute;
      top: .5rem;
      right: 1rem;
      padding-left: .4rem;
    }
    &:nth-child( odd ) &-time  { background-color: #FFFFFF; }
    &:nth-child( even ) &-time { background-color: #F2F2F2; }
    &:hover &-time { background-color: darken(#F2F2F2, 10%); }
    &-subject {}
  }


@media only screen and (min-width: 640px){
  .the-message {
    display: flex;

    &-from { flex: 1; }
    &-subject { flex: 1; }
    &-time { flex: 0.5; position: relative; top: 0; right: 0; padding: 0;}
  }
}
@media only screen and (min-width: 1025px){
  .the-message {
    &-from { flex: 1; }
    &-subject { flex: 2; }
    &-time { flex: 0.5; }
  }
}
</style>
