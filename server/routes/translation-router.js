const express = require('express')

const TranslationCtrl = require('../controllers/translation-ctrl')

const router = express.Router()

router.post('/translation', TranslationCtrl.createTranslation)
router.put('/translation/:id', TranslationCtrl.updateTranslation)
router.delete('/translation/:id', TranslationCtrl.deleteTranslation)
router.get('/translation/:id', TranslationCtrl.getTranslationById)
router.get('/translations', TranslationCtrl.getTranslations)

module.exports = router