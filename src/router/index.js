import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import DataKantin from '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'

import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Sidebar from '../views/layouts/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'dashboard',
    components: {default: Dashboard, header: Navbar, footer: Footer, sidebar: Sidebar},
  
  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {default: DataKantin, header: Navbar, footer: Footer, sidebar: Sidebar},
 
  },
  {
    path: '/datamakanan',
    name: 'datamakanan',
    components: {default: DataMakanan, header: Navbar, footer: Footer, sidebar: Sidebar},

  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, header: Navbar, footer: Footer, sidebar: Sidebar},
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
