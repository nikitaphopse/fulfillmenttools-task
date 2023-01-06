const apiErrorhandler = (err, req, res, next) => {
    console.log(err, "Error From Middleware.")
    if (err.isApiError) {
        res.status(err.code).json({
            code: err.code,
            message: err.message,
        });
        return;
    }
    if (err.isJoi) {
        res.status(502).json({
            code: 502,
            message: err.details[0].message,
        });
        return;
    }

    if(err.response && err.response.data) {
        res.status(502).json({
            code: err.response.status,
            message: err.response.data.error,
        });
        return;
    }
    res.status((err.code && err.code < 500) ? err.code : 500).json({
        code: (err.code && err.code < 500) ? err.code : 500,
        message: err.message.replace(/"/g, "'") ? err.message.replace(/"/g, "'") : err.message
    });
    return;
};
module.exports = apiErrorhandler;