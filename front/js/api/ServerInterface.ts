import Element from './model/Element'

interface ServerInterface {

  getInbox (): Promise<Element>

}

export default ServerInterface
