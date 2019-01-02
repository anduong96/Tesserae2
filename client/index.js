import Client from 'react-engine/lib/client'
import Routes from './RouterConfig'

document.addEventListener('DOMContentLoaded', () => Client.boot({ routes: Routes }))
