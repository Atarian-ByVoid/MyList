/* eslint-disable linebreak-style */
const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.title == undefined) {
        return response.status(400).json({ message: 'The field "title" is require' });
    }

    if (body.title == '') {
        return response.status(400).json({ message: 'The "title" cannot be empty' });
    }

    next();
};

const validateFieldStatus = (request, response, next) => {
    const { body } = request;

    if (body.status == undefined) {
        return response.status(400).json({ message: 'The field "title" is require' });
    }

    if (body.status == '') {
        return response.status(400).json({ message: 'The "title" cannot be empty' });
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};