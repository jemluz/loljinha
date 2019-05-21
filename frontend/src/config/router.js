import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from "@/components/sections/LoginPage";
import ClienteData from "@/components/sections/ClienteData";
import FuncionarioData from "@/components/sections/FuncionarioData";
import CategoriaData from "@/components/sections/CategoriaData";
import ProdutoData from "@/components/sections/ProdutoData";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/cadastro',
      name: 'ClienteData',
      component: ClienteData
    },
    {
      path: '/funcionarios',
      name: 'FuncionarioData',
      component: FuncionarioData
    },
    {
      path: '/categorias',
      name: 'CategoriaData',
      component: CategoriaData
    },
    {
      path: '/produtos',
      name: 'ProdutoData',
      component: ProdutoData
    }
  ]
})
