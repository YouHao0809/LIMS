import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const welcome = r => require.ensure([], () => r(require('@/page/welcome')), 'welcome');
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const register = r => require.ensure([], () => r(require('@/page/register')), 'register');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

const routes = [
	// {
	// 	path: '/',
	// 	component: login
	// },
	{
		path: '/',
		component: welcome
	},
	{
		path: '/welcome',
		component: welcome,
		name: '',
		children: [{
			path: '/login',
			component:login,
			meta: [login],
		},{
			path: '/register',
			component:register,
			meta: [register],
		}
			
		]
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addShop',
			component: addShop,
			meta: ['????????????', '????????????'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['????????????', '????????????'],
		},{
			path: '/userList',
			component: userList,
			meta: ['????????????', '????????????'],
		},{
			path: '/shopList',
			component: shopList,
			meta: ['????????????', '????????????'],
		},{
			path: '/foodList',
			component: foodList,
			meta: ['????????????', '????????????'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['????????????', '????????????'],
		},{
			path: '/adminList',
			component: adminList,
			meta: ['????????????', '???????????????'],
		},{
			path: '/visitor',
			component: visitor,
			meta: ['??????', '????????????'],
		},{
			path: '/newMember',
			component: newMember,
			meta: ['??????', '????????????'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['????????????', 'MarkDown'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['??????', '????????????'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['??????', '???????????????'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['??????', '????????????'],
		},{
			path: '/explain',
			component: explain,
			meta: ['??????', '??????'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
