/* Import dependencies, declare constants */

/**
* Your function call
* @param {Object} params Execution parameters
*   Members
*   - {Array} args Arguments passed to function
*   - {Object} kwargs Keyword arguments (key-value pairs) passed to function
*   - {String} remoteAddress The IPv4 or IPv6 address of the caller
*
* @param {Function} callback Execute this to end the function call
*   Arguments
*   - {Error} error The error to show if function fails
*   - {Any} returnValue JSON serializable (or Buffer) return value
*/

const request = require( 'superagent-bluebird-promise' );
const API = 'https://www.googleapis.com/customsearch/v1';

module.exports = (params, callback) => {
	var {q, num, start, gl, cx, key, fields, sites, searchType } = params.kwargs;

	if ( sites ) {
		sites = sites
			.split( ',' )
			.map( site => `site:${site}` )
			.join( ' OR ' )
			.trim();
	} else {
		sites = '';
	}

	q = ( `${q} ${sites}` ).trim();

	request
		.get( API )
		.query( {filter: 1, q, num, start, gl, cx, key, fields, searchType} )
		.then( response => {
			callback( null, response.body );
		})
		.catch( callback );
};
