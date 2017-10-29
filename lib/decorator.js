'use strict';

/**
 * Verifica se um CNPJ está ou não com máscara.
 *
 * @param {String} cnpj
 *
 * @return {Bool}
 */
exports.isMasked = function(cnpj)
{
    return false;
};

/**
 * Aplica a máscara num CNPJ.
 *
 * @param {String} cnpj
 *
 * @return {String}
 */
exports.mask = function(cnpj)
{
    return cnpj;
};

/**
 * Remove as máscara de um CNPJ.
 *
 * @param {String} cnpj
 *
 * @return {String}
 */
exports.unMask = function(cnpj)
{
    return cnpj;
};
