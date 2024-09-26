const {Router} = require("express")
const {getFavoritos,postFavorito,deleteFavoritoId} = require("../controladores/favorito")

const router = Router()

router.get('/', getFavoritos) 

router.post('/', postFavorito)

router.delete('/:id', deleteFavoritoId)

module.exports = router