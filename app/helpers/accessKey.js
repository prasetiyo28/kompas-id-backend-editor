const redisCache = require('../lib/RedisCache');
exports.checkAccess = async (req, res, next) => {
  try {
    const key = req.header('access_token') || req.params.access_token || '';
    const redisData = await redisCache.getInAsync(key);
    if (!redisData) return MSG.sendResponse(res, 'ACCESS NOT FOUND');
    req.user = redisData.user;
    next();
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'ACCESS NOT FOUND');
  }
};