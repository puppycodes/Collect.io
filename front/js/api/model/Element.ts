class Element {

  public file: string

  public url: string

  public type: 'image' | 'link' | 'colors' | 'note'

  public name: string

  public content: string

  public tags: string[]

}

export default Element
