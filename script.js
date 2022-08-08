const app = Vue.createApp({
  data() {
    return { navigation: [
      { icon: 'codicon:home', text: 'Home', active: true },
      { icon: 'healthicons:ui-user-profile-outline', text: 'Profile', active: false },
      { icon: 'tabler:messages', text: 'Menssagens', active: false },
      { icon: 'ic:round-monochrome-photos', text: 'Fotos', active: false },
      { icon: 'cil:settings', text: 'Configurações', active: false }] };

  },
  methods: {
    activeLink(item, index) {
      this.navigation.forEach(el => el.active = false);
      item.active = true;
    } } });



console.log(app, 'app!');


// const list = document.querySelectorAll('.list');

// function activeLink() {
//   list.forEach((item) => item.classList.remove('active'));
//   this.classList.add('active');
// }

// list.forEach((item) => item.addEventListener('click', activeLink));

app.mount('#app');