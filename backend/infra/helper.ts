class Helper {

  isBodyEmpty(body) {
    if (Object.keys(body).length === 0) {
      return true;
    }
  }

  sendResponse = function(res, statusCode, data) {
    return res.status(statusCode).json({result: data})
  }
}

export default new Helper();