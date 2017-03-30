import ServerInterface from './ServerInterface'
import Element from './model/Element'

let fakeNoteElement = () => {
  let e = new Element()
  e.type = 'note'
  e.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor nec dui commodo dapibus. Phasellus eget tincidunt urna. Cras facilisis pulvinar purus sed eleifend. Aliquam bibendum dui purus, non tempor nisl auctor at. Nunc pellentesque a orci in placerat. Fusce ac mollis velit. Praesent ultricies mattis felis, non interdum diam placerat eget. Donec pulvinar elit a euismod hendrerit. Aenean quis tempor nisl. Aenean ut cursus neque. Integer molestie efficitur faucibus. Duis mattis mi eu gravida vulputate. Nam quis magna vehicula, facilisis nisi eu, convallis nulla. Donec gravida feugiat dui in efficitur. Donec diam odio, accumsan a magna id, fringilla dignissim neque. Nam faucibus quam ut risus dictum posuere.'
  e.name = 'Fake Note'
  return e
}

class FakeServer implements ServerInterface {
  getInbox () {
    return new Promise((resolve, reject) => {
      resolve([
        fakeNoteElement()
      ])
    })
  }

}

export default new FakeServer()
