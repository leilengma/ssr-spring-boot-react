import App from "./app/app"
import Language from "./language/language"

const routes =  [
    {
      path: '/index',
      exact: true,
      component: App,
    },
    {
        path: '/language',
        exact: true,
        component: Language,
    }
  ]
  
  export default routes