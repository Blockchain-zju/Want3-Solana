const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Want } = require('../models');
/**
 * Upload a Want
 */
const UploadWant = async (wantBody) => {
  return Want.create(wantBody);
};

/**
 * GetWant(wanterAddr)   -> [{wantID, nftAddr, slogan, realizedValue, isRealized}]
 * @param {String} wanterAddr
 * @returns {Promise<Array<Object>>}
 */
const GetWant = async (wanterAddr) => {
  const query = Want.find({ wanterAddr });
  query.select('nftAddr slogan realizeValue isRealized');
  const wants = await query.exec();
  const wantsWithId = wants.map((want) => {
    return {
      wantId: want._id,
      nftAddr: want.nftAddr,
      slogan: want.slogan,
      realizedValue: want.realizedValue,
      isRealized: want.isRealized,
    };
  });
  return wantsWithId;
};
module.exports = {
  UploadWant,
  GetWant,
};
