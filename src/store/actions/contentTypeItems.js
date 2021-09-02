export function addContentTypeItem(item) {
  console.log(item)
  return {
    type: 'ADD_CONTENT_TYPE_ITEM',
    item
  }
}
export function setContentType(items) {
  return {
    type: 'SET_CONTENT_TYPE_ITEMS',
    items
  }
}