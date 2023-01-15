migrate((db) => {
  const collection = new Collection({
    "id": "w75trfr0xicc2y3",
    "created": "2023-01-08 08:39:41.643Z",
    "updated": "2023-01-08 08:39:41.643Z",
    "name": "proyects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ms45jesa",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "huz3rhlz",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "x8cdxpzw",
        "name": "url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "1xs7ibjx",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "oio4u20a",
        "name": "started_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "szqcctpc",
        "name": "finished_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "6e8sdbej",
        "name": "stack",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w75trfr0xicc2y3");

  return dao.deleteCollection(collection);
})
