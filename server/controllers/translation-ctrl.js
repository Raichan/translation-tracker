const Translation = require("../models/translation-model");

createTranslation = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Enter a language",
    });
  }

  const translation = new Translation(body);

  if (!translation) {
    return res.status(400).json({ success: false, error: err });
  }

  translation
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: translation,
        message: "Translation added!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Translation not added!",
      });
    });
};

updateTranslation = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Translation.findOne({ _id: req.params.id }, (err, translation) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Translation not found!",
      });
    }
    translation.language = body.language;
    translation
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          data: translation,
          message: "Translation updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Translation not updated!",
        });
      });
  });
};

deleteTranslation = async (req, res) => {
  await Translation.findOneAndDelete(
    { _id: req.params.id },
    (err, translation) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!translation) {
        return res
          .status(404)
          .json({ success: false, error: `Translation not found` });
      }

      return res.status(200).json({ success: true, data: translation });
    }
  );
};

getTranslationById = async (req, res) => {
  await Translation.findOne({ _id: req.params.id }, (err, translation) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!translation) {
      return res
        .status(404)
        .json({ success: false, error: `Translation not found` });
    }
    return res.status(200).json({ success: true, data: translation });
  });
};

getTranslations = async (req, res) => {
  await Translation.find({}, (err, translations) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!translations.length) {
      return res
        .status(404)
        .json({ success: false, error: `No translations found` });
    }
    return res.status(200).json({ success: true, data: translations });
  });
};

// Get a total number of translations for each language of an event
getLanguageTotals = async (req, res) => {
  await Translation.find({ eventid: req.params.id }, (err, translations) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    let languages = {};
    translations.forEach((t) => {
      if (!(t.language in languages)) {
        languages[t.language] = 0;
      }
      languages[t.language] += 1;
    });
    return res.status(200).json({ success: true, data: languages });
  });
};

// Get n latest translations for a specific event
getLatest = async (req, res) => {
  let limit = "n" in req.body ? req.body["n"] : 0; // If n not specified, return all
  await Translation.find({ eventid: req.params.id })
    .sort({ createdAt: -1 })
    .limit(limit)
    .exec((err, translations) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: translations });
    });
};

module.exports = {
  createTranslation,
  updateTranslation,
  deleteTranslation,
  getTranslations,
  getTranslationById,
  getLanguageTotals,
  getLatest,
};
