export const resFormat = (res, statusCode, data = null, error = null) => {
    res.status(statusCode).json({
        success: !error,
        data,
        error,
    });
};
