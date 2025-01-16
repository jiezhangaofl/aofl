/**
 * @summary is-required
 * @version 3.0.0
 * @since 1.0.0
 * @author Arian Khosravi <arian.khosravi@aofl.com>
 * @author Isaac Yoon <isaac.yoon@aofl.com>
 */

/**
 * isRequired
 *
 * @memberof module:@aofl/form-validate
 *
 * @param {String} value
 * @return {Boolean}
 */
function isRequired(value) {
  return Boolean((value && String(value) !== '') || (typeof value === 'number' && value === 0));
}

export {
  isRequired
};
