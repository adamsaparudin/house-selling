let House = require('../models/house')

module.exports = {

  create: (req, res, next) => {
    House.create(req.body, (err, data) => {
        if(err) res.send(err)
        else res.send(data)
    })
  },

  read: (req, res, next) => {
    House.find({}).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  update: (req, res, next) => {
    House.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteHouse: (req, res, next) => {
    House.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
