const Translation = require('../models/translation-model')

createTranslation = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Enter a language',
        })
    }

    const translation = new Translation(body)

    if (!translation) {
        return res.status(400).json({ success: false, error: err })
    }

    translation
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: translation._id,
                message: 'Translation added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Translation not added!',
            })
        })
}

updateTranslation = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Translation.findOne({ _id: req.params.id }, (err, translation) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Translation not found!',
            })
        }
        translation.language = body.language
        translation
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: translation._id,
                    message: 'Translation updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Translation not updated!',
                })
            })
    })
}

deleteTranslation = async (req, res) => {
    await Translation.findOneAndDelete({ _id: req.params.id }, (err, translation) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!translation) {
            return res
                .status(404)
                .json({ success: false, error: `Translation not found` })
        }

        return res.status(200).json({ success: true, data: translation })
    }).catch(err => console.log(err))
}

getTranslationById = async (req, res) => {
    await Translation.findOne({ _id: req.params.id }, (err, translation) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!translation) {
            return res
                .status(404)
                .json({ success: false, error: `Translation not found` })
        }
        return res.status(200).json({ success: true, data: translation })
    }).catch(err => console.log(err))
}

getTranslations = async (req, res) => {
    await Translation.find({}, (err, translations) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!translations.length) {
            return res
                .status(404)
                .json({ success: false, error: `No translations found` })
        }
        return res.status(200).json({ success: true, data: translations })
    }).catch(err => console.log(err))
}

module.exports = {
    createTranslation,
    updateTranslation,
    deleteTranslation,
    getTranslations,
    getTranslationById,
}