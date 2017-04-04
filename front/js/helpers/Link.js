export default {
  domain (link) {
    const found = link.match(/^https?:\/\/(www\.)?([^/]*)/)
    if (found.length === 3) {
      return found[2]
    }
    return link
  },
  favicon (link) {
    const found = link.match(/^(https?:\/\/[^/]*)/)
    if (found.length === 2) {
      return found[1] + '/favicon.ico'
    }
  }
}
