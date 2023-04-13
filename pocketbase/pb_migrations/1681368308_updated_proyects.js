migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w75trfr0xicc2y3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ioar75h",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w75trfr0xicc2y3")

  // remove
  collection.schema.removeField("8ioar75h")

  return dao.saveCollection(collection)
})
