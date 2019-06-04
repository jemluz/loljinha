import Vue from 'vue'
import Router from 'vue-router'

import LoginCadastro from "@/components/sections/LoginCadastro";
import Vitrine from "@/components/sections/Vitrine";

import ListaUsuarios from "@/components/sections/ListaUsuarios";
import FuncionarioData from "@/components/sections/FuncionarioData";
import CategoriaData from "@/components/sections/CategoriaData";
import ProdutoData from "@/components/sections/ProdutoData";
import Carrinho from "@/components/sections/Carrinho";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vitrine',
      name: 'Vitrine',
      component: Vitrine
    },
    {
      path: '/auth',
      name: 'LoginCadastro',
      component: LoginCadastro
    },
    {
      path: '/usuarios',
      name: 'ListaUsuarios',
      component: ListaUsuarios
    },
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho
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
