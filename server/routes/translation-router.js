const express = require("express");
const router = express.Router();

const TranslationCtrl = require("../controllers/translation-ctrl");

router.post("/", TranslationCtrl.createTranslation);
router.put("/:id", TranslationCtrl.updateTranslation);
router.delete("/:id", TranslationCtrl.deleteTranslation);
router.get("/:id", TranslationCtrl.getTranslationById);
router.get("/", TranslationCtrl.getTranslations);
router.get("/totals/:id", TranslationCtrl.getLanguageTotals);
router.post("/latest/:id", TranslationCtrl.getLatest);

module.exports = router;
