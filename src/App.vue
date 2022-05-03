<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <!-- <friend-contact
      name="Gautam Patel"
      phone-number="6541 451214"
      email-address="gautama.patel@radixweb.com"
    ></friend-contact> -->
    <knowledge-base
      :topics="topics"
      @select-topic="activateTopic"
    ></knowledge-base>
    <user-base :users="users" :userlist="userlist"></user-base>
    <product-grid></product-grid>
  </div>
</template>
<script>
// import FriendContact from './components/FriendContact.vue';

export default {
  // components: { FriendContact },
  data() {
    const userData = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(userData);
    return {
      users: [
        {
          id: 1,
          name: 'Gautam Patel',
          email: 'gautama.patel@radixweb.com',
          phone: '541 5214 451',
          website: 'www.gautam-vue.com',
        },
        {
          id: 2,
          name: 'Rinku Patel',
          email: 'rinku.patel@radixweb.com',
          phone: '123 4567 890',
          website: 'www.rinku-vue.com',
        },
      ],
      userlist:null,
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  max-width: 87rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  color: rgb(219, 71, 58);
  width: 90%;
}

#app ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

#app li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h2 {
  margin: 0.75rem 0;
  text-align: center;
}
button {
  font: inherit;
  border: 1px solid #65d456;
  background-color: #65d456;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #3b1188;
  border-color: #3b1188;
}
</style>
