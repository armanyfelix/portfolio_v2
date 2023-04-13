migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w75trfr0xicc2y3")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w75trfr0xicc2y3")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
