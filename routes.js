import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import EmailDetail from './apps/mail/pages/EmailDetails.js'
import EmailAll from './apps/mail/pages/EmailAll.js'
import Note from './apps/keep/pages/NoteIndex.js'
import AddNote from './apps/keep/cmps/AddNote.js'
import EmailCompose from './apps/mail/cmps/EmailCompose.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/mail',
			component: EmailIndex,
			children: [
				{
					path: '',
					component: EmailAll,
					props: true,
					children: [
						{
							path: '/compose',
							component: EmailCompose,
						},
					],
				},
				{
					path: '/:mailId',
					component: EmailDetail,
					props: false,
				},
			],
		},
		{
			path: '/note',
			component: Note,
			children: [
				{
					path: '/edit/:noteId?',
					component: AddNote,
				},
			],
		},
		{
			path: '/:catchAll(.*)',
			component: HomePage,
		},
	],
}

export const router = createRouter(routerOptions)
