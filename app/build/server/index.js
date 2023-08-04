import { c as ct$1, Z, r as rt$1, s as st$1 } from './chunks/index-02d8ed20.js';
import { o, c, n, t, i } from './chunks/index2-e7fe418e.js';
import { z as z$1, A } from './chunks/index3-a50d3d2e.js';

/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'>': '\\u003E',
	'/': '\\u002F',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\0': '\\u0000',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

class DevalueError extends Error {
	/**
	 * @param {string} message
	 * @param {string[]} keys
	 */
	constructor(message, keys) {
		super(message);
		this.name = 'DevalueError';
		this.path = keys.join('');
	}
}

/** @param {any} thing */
function is_primitive(thing) {
	return Object(thing) !== thing;
}

const object_proto_names$1 = Object.getOwnPropertyNames(Object.prototype)
	.sort()
	.join('\0');

/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);

	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names$1
	);
}

/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}

/** @param {string} str */
function stringify_string(str) {
	let result = '"';

	for (let i = 0; i < str.length; i += 1) {
		const char = str.charAt(i);
		const code = char.charCodeAt(0);

		if (char === '"') {
			result += '\\"';
		} else if (char in escaped) {
			result += escaped[char];
		} else if (code >= 0xd800 && code <= 0xdfff) {
			const next = str.charCodeAt(i + 1);

			// If this is the beginning of a [high, low] surrogate pair,
			// add the next two characters, otherwise escape
			if (code <= 0xdbff && next >= 0xdc00 && next <= 0xdfff) {
				result += char + str[++i];
			} else {
				result += `\\u${code.toString(16).toUpperCase()}`;
			}
		} else {
			result += char;
		}
	}

	result += '"';
	return result;
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved =
	/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const object_proto_names = Object.getOwnPropertyNames(Object.prototype)
	.sort()
	.join('\0');

/**
 * Turn a value into the JavaScript that creates an equivalent value
 * @param {any} value
 */
function uneval(value) {
	const counts = new Map();

	/** @type {string[]} */
	const keys = [];

	/** @param {any} thing */
	function walk(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (!is_primitive(thing)) {
			if (counts.has(thing)) {
				counts.set(thing, counts.get(thing) + 1);
				return;
			}

			counts.set(thing, 1);

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'BigInt':
				case 'String':
				case 'Boolean':
				case 'Date':
				case 'RegExp':
					return;

				case 'Array':
					/** @type {any[]} */ (thing).forEach((value, i) => {
						keys.push(`[${i}]`);
						walk(value);
						keys.pop();
					});
					break;

				case 'Set':
					Array.from(thing).forEach(walk);
					break;

				case 'Map':
					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive$1(key) : '...'})`
						);
						walk(value);
						keys.pop();
					}
					break;

				default:
					const proto = Object.getPrototypeOf(thing);

					if (
						proto !== Object.prototype &&
						proto !== null &&
						Object.getOwnPropertyNames(proto).sort().join('\0') !==
							object_proto_names
					) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (Object.getOwnPropertySymbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					for (const key in thing) {
						keys.push(`.${key}`);
						walk(thing[key]);
						keys.pop();
					}
			}
		}
	}

	walk(value);

	const names = new Map();

	Array.from(counts)
		.filter((entry) => entry[1] > 1)
		.sort((a, b) => b[1] - a[1])
		.forEach((entry, i) => {
			names.set(entry[0], get_name(i));
		});

	/**
	 * @param {any} thing
	 * @returns {string}
	 */
	function stringify(thing) {
		if (names.has(thing)) {
			return names.get(thing);
		}

		if (is_primitive(thing)) {
			return stringify_primitive$1(thing);
		}

		const type = get_type(thing);

		switch (type) {
			case 'Number':
			case 'String':
			case 'Boolean':
				return `Object(${stringify(thing.valueOf())})`;

			case 'RegExp':
				return `new RegExp(${stringify_string(thing.source)}, "${
					thing.flags
				}")`;

			case 'Date':
				return `new Date(${thing.getTime()})`;

			case 'Array':
				const members = /** @type {any[]} */ (thing).map((v, i) =>
					i in thing ? stringify(v) : ''
				);
				const tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
				return `[${members.join(',')}${tail}]`;

			case 'Set':
			case 'Map':
				return `new ${type}([${Array.from(thing).map(stringify).join(',')}])`;

			default:
				const obj = `{${Object.keys(thing)
					.map((key) => `${safe_key(key)}:${stringify(thing[key])}`)
					.join(',')}}`;
				const proto = Object.getPrototypeOf(thing);
				if (proto === null) {
					return Object.keys(thing).length > 0
						? `Object.assign(Object.create(null),${obj})`
						: `Object.create(null)`;
				}

				return obj;
		}
	}

	const str = stringify(value);

	if (names.size) {
		/** @type {string[]} */
		const params = [];

		/** @type {string[]} */
		const statements = [];

		/** @type {string[]} */
		const values = [];

		names.forEach((name, thing) => {
			params.push(name);

			if (is_primitive(thing)) {
				values.push(stringify_primitive$1(thing));
				return;
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					values.push(`Object(${stringify(thing.valueOf())})`);
					break;

				case 'RegExp':
					values.push(thing.toString());
					break;

				case 'Date':
					values.push(`new Date(${thing.getTime()})`);
					break;

				case 'Array':
					values.push(`Array(${thing.length})`);
					/** @type {any[]} */ (thing).forEach((v, i) => {
						statements.push(`${name}[${i}]=${stringify(v)}`);
					});
					break;

				case 'Set':
					values.push(`new Set`);
					statements.push(
						`${name}.${Array.from(thing)
							.map((v) => `add(${stringify(v)})`)
							.join('.')}`
					);
					break;

				case 'Map':
					values.push(`new Map`);
					statements.push(
						`${name}.${Array.from(thing)
							.map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`)
							.join('.')}`
					);
					break;

				default:
					values.push(
						Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}'
					);
					Object.keys(thing).forEach((key) => {
						statements.push(
							`${name}${safe_prop(key)}=${stringify(thing[key])}`
						);
					});
			}
		});

		statements.push(`return ${str}`);

		return `(function(${params.join(',')}){${statements.join(
			';'
		)}}(${values.join(',')}))`;
	} else {
		return str;
	}
}

/** @param {number} num */
function get_name(num) {
	let name = '';

	do {
		name = chars[num % chars.length] + name;
		num = ~~(num / chars.length) - 1;
	} while (num >= 0);

	return reserved.test(name) ? `${name}0` : name;
}

/** @param {string} c */
function escape_unsafe_char(c) {
	return escaped[c] || c;
}

/** @param {string} str */
function escape_unsafe_chars(str) {
	return str.replace(unsafe_chars, escape_unsafe_char);
}

/** @param {string} key */
function safe_key(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? key
		: escape_unsafe_chars(JSON.stringify(key));
}

/** @param {string} key */
function safe_prop(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? `.${key}`
		: `[${escape_unsafe_chars(JSON.stringify(key))}]`;
}

/** @param {any} thing */
function stringify_primitive$1(thing) {
	if (typeof thing === 'string') return stringify_string(thing);
	if (thing === void 0) return 'void 0';
	if (thing === 0 && 1 / thing < 0) return '-0';
	const str = String(thing);
	if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
	if (typeof thing === 'bigint') return thing + 'n';
	return str;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 */
function stringify(value) {
	/** @type {any[]} */
	const stringified = [];

	/** @type {Map<any, number>} */
	const indexes = new Map();

	/** @type {string[]} */
	const keys = [];

	let p = 0;

	/** @param {any} thing */
	function flatten(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (indexes.has(thing)) return indexes.get(thing);

		if (thing === undefined) return UNDEFINED;
		if (Number.isNaN(thing)) return NAN;
		if (thing === Infinity) return POSITIVE_INFINITY;
		if (thing === -Infinity) return NEGATIVE_INFINITY;
		if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;

		const index = p++;
		indexes.set(thing, index);

		let str = '';

		if (is_primitive(thing)) {
			str = stringify_primitive(thing);
		} else {
			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					str = `["Object",${stringify_primitive(thing)}]`;
					break;

				case 'BigInt':
					str = `["BigInt",${thing}]`;
					break;

				case 'Date':
					str = `["Date","${thing.toISOString()}"]`;
					break;

				case 'RegExp':
					const { source, flags } = thing;
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;

				case 'Array':
					str = '[';

					for (let i = 0; i < thing.length; i += 1) {
						if (i > 0) str += ',';

						if (i in thing) {
							keys.push(`[${i}]`);
							str += flatten(thing[i]);
							keys.pop();
						} else {
							str += HOLE;
						}
					}

					str += ']';

					break;

				case 'Set':
					str = '["Set"';

					for (const value of thing) {
						str += `,${flatten(value)}`;
					}

					str += ']';
					break;

				case 'Map':
					str = '["Map"';

					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive(key) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
					}

					str += ']';
					break;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (Object.getOwnPropertySymbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					if (Object.getPrototypeOf(thing) === null) {
						str = '["null"';
						for (const key in thing) {
							keys.push(`.${key}`);
							str += `,${stringify_string(key)},${flatten(thing[key])}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key in thing) {
							if (started) str += ',';
							started = true;
							keys.push(`.${key}`);
							str += `${stringify_string(key)}:${flatten(thing[key])}`;
							keys.pop();
						}
						str += '}';
					}
			}
		}

		stringified[index] = str;
		return index;
	}

	const index = flatten(value);

	// special case — value is represented as a negative index
	if (index < 0) return `${index}`;

	return `[${stringified.join(',')}]`;
}

/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing instanceof String) return stringify_string(thing.toString());
	if (thing === void 0) return UNDEFINED.toString();
	if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse$1;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse$1(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index);

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index);

    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue
    }

    var key = str.slice(index, eqIdx).trim();

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1);
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1;
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires;

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority;

    switch (priority) {
      case 'low':
        str += '; Priority=Low';
        break
      case 'medium':
        str += '; Priority=Medium';
        break
      case 'high':
        str += '; Priority=High';
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var setCookie = {exports: {}};

var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};

function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}

function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);

  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  try {
    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }

  var cookie = {
    name: name,
    value: value,
  };

  parts.forEach(function (part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value;
    } else {
      cookie[key] = value;
    }
  });

  return cookie;
}

function parseNameValuePair(nameValuePairStr) {
  // Parses name-value-pair according to rfc6265bis draft

  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
  } else {
    value = nameValuePairStr;
  }

  return { name: name, value: value };
}

function parse(input, options) {
  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }

  if (input.headers && input.headers["set-cookie"]) {
    // fast-path for node.js (which automatically normalizes header names to lower-case
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    // slow-path for other environments - see #25
    var sch =
      input.headers[
        Object.keys(input.headers).find(function (key) {
          return key.toLowerCase() === "set-cookie";
        })
      ];
    // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
      var cookie = parseString(str, options);
      cookies[cookie.name] = cookie;
      return cookies;
    }, cookies);
  }
}

/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }

  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;

  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }

  function notSpecialChar() {
    ch = cookiesString.charAt(pos);

    return ch !== "=" && ch !== ";" && ch !== ",";
  }

  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;

    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        // ',' is a cookie separator if we have later first '=', not ';' or ','
        lastComma = pos;
        pos += 1;

        skipWhitespace();
        nextStart = pos;

        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }

        // currently special character
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          // we found cookies separator
          cookiesSeparatorFound = true;
          // pos is inside the next cookie, so back up and return it.
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          // in param ',' or param separator ';',
          // we continue from that comma
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }

    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }

  return cookiesStrings;
}

setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;

const Ze=ct$1((e,t,r,n)=>{let{stores:s}=t,{page:a}=t,{components:o}=t,{form:i}=t,{data_0:c=null}=t,{data_1:f=null}=t;return Z("__svelte__",s),s.page.notify,t.stores===void 0&&r.stores&&s!==void 0&&r.stores(s),t.page===void 0&&r.page&&a!==void 0&&r.page(a),t.components===void 0&&r.components&&o!==void 0&&r.components(o),t.form===void 0&&r.form&&i!==void 0&&r.form(i),t.data_0===void 0&&r.data_0&&c!==void 0&&r.data_0(c),t.data_1===void 0&&r.data_1&&f!==void 0&&r.data_1(f),s.page.set(a),`


${o[1]?`${rt$1(o[0]||st$1,"svelte:component").$$render(e,{data:c},{},{default:()=>`${rt$1(o[1]||st$1,"svelte:component").$$render(e,{data:f,form:i},{},{})}`})}`:`${rt$1(o[0]||st$1,"svelte:component").$$render(e,{data:c,form:i},{},{})}`}

`});function te(e,t){const r=[];e.split(",").forEach((a,o)=>{const i=/([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(a);if(i){const[,c,f,y="1"]=i;r.push({type:c,subtype:f,q:+y,i:o});}}),r.sort((a,o)=>a.q!==o.q?o.q-a.q:a.subtype==="*"!=(o.subtype==="*")?a.subtype==="*"?1:-1:a.type==="*"!=(o.type==="*")?a.type==="*"?1:-1:a.i-o.i);let n,s=1/0;for(const a of t){const[o,i]=a.split("/"),c=r.findIndex(f=>(f.type===o||f.type==="*")&&(f.subtype===i||f.subtype==="*"));c!==-1&&c<s&&(n=a,s=c);}return n}function et(e,...t){const r=e.headers.get("content-type")?.split(";",1)[0].trim()??"";return t.includes(r)}function ve(e){return et(e,"application/x-www-form-urlencoded","multipart/form-data")}function tt(e){return e instanceof Error||e&&e.name&&e.message?e:new Error(JSON.stringify(e))}function re(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function rt(e){return e.split("%25").map(decodeURI).join("%25")}function nt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}const st=["href","pathname","search","searchParams","toString","toJSON"];function at(e,t){const r=new URL(e);for(const n of st){let s=r[n];Object.defineProperty(r,n,{get(){return t(),s},enumerable:!0,configurable:!0});}return r[Symbol.for("nodejs.util.inspect.custom")]=(n,s,a)=>a(e,s),ot(r),r}function ot(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}});}function Re(e){for(const t of ["search","searchParams"])Object.defineProperty(e,t,{get(){throw new Error(`Cannot access url.${t} on a page with prerendering enabled`)}});}const ne="/__data.json";function $e(e){return e.endsWith(ne)}function it(e){return e.replace(/\/$/,"")+ne}function de(e){return e.slice(0,-ne.length)}const Se={id:"__error"};function ct(e,t){return new Response(`${t} method not allowed`,{status:405,headers:{allow:lt(e).join(", ")}})}function lt(e){const t=[];for(const r in ["GET","POST","PUT","PATCH","DELETE"])r in e&&t.push(r);return (e.GET||e.HEAD)&&t.push("HEAD"),t}function T(e,t){return e.reduce((r,n)=>n?.universal?.[t]??n?.server?.[t]??r,void 0)}function se(e,t,r){return new Response(e.error_template({status:t,message:r}),{headers:{"content-type":"text/html; charset=utf-8"},status:t})}async function ue(e,t$1,r){r=r instanceof t?r:tt(r);const n=r instanceof t?r.status:500,s=await z(e,t$1,r),a=te(e.request.headers.get("accept")||"text/html",["application/json","text/html"]);return $e(new URL(e.request.url).pathname)||a==="application/json"?new Response(JSON.stringify(s),{status:n,headers:{"content-type":"application/json; charset=utf-8"}}):se(t$1,n,s.message)}function z(e,t$1,r){return r instanceof t?r.body:t$1.handle_error(r,e)}function B(e,t){return new Response(void 0,{status:e,headers:{location:t}})}function Oe(e,t){return t.path?`Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (data${t.path})`:t.path===""?`Data returned from \`load\` while rendering ${e.route.id} is not a plain object`:t.message}function Te(e){if(!e)return "null";if(e.type==="error"||e.type==="skip")return JSON.stringify(e);const t=stringify(e.data),r=[];return e.uses.dependencies.size>0&&r.push(`"dependencies":${JSON.stringify(Array.from(e.uses.dependencies))}`),e.uses.params.size>0&&r.push(`"params":${JSON.stringify(Array.from(e.uses.params))}`),e.uses.parent&&r.push('"parent":1'),e.uses.route&&r.push('"route":1'),e.uses.url&&r.push('"url":1'),`{"type":"data","data":${t},"uses":{${r.join(",")}}${e.slash?`,"slash":${JSON.stringify(e.slash)}`:""}}`}async function dt(e,t,r){const n$1=e.request.method;let s=t[n$1];if(!s&&n$1==="HEAD"&&(s=t.GET),!s)return ct(t,n$1);const a=t.prerender??r.prerender_default;if(a&&(t.POST||t.PATCH||t.PUT||t.DELETE))throw new Error("Cannot prerender endpoints that have mutative methods");if(r.prerendering&&!a){if(r.initiator)throw new Error(`${e.route.id} is not prerenderable`);return new Response(void 0,{status:204})}try{const o=await s(e);if(!(o instanceof Response))throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);return r.prerendering&&o.headers.set("x-sveltekit-prerender",String(a)),o}catch(o){if(o instanceof n)return new Response(void 0,{status:o.status,headers:{location:o.location}});throw o}}function ut(e){const{method:t,headers:r}=e.request;if(t==="PUT"||t==="PATCH"||t==="DELETE")return !0;if(t==="POST"&&r.get("x-sveltekit-action")==="true")return !1;const n=e.request.headers.get("accept")??"*/*";return te(n,["*","text/html"])!=="text/html"}function fe(e){return e.filter(t=>t!=null)}function ft(e){return te(e.request.headers.get("accept")??"*/*",["application/json","text/html"])==="application/json"&&e.request.method==="POST"}async function ht(e,t$1,r){const n$1=r?.actions;if(!n$1){r&&Ce(r);const s=o(405,"POST method not allowed. No actions exist for this page");return L({type:"error",error:await z(e,t$1,s)},{status:s.status,headers:{allow:"GET"}})}Pe(n$1);try{const s=await qe(e,n$1);return s instanceof i?L({type:"failure",status:s.status,data:he(s.data,e.route.id)}):L({type:"success",status:s?200:204,data:he(s,e.route.id)})}catch(s){const a=s;return a instanceof n?L({type:"redirect",status:a.status,location:a.location}):L({type:"error",error:await z(e,t$1,Ae(a))},{status:a instanceof t?a.status:500})}}function Ae(e){return e instanceof i?new Error('Cannot "throw fail()". Use "return fail()"'):e}function L(e,t){return c(e,t)}function pt(e,t){return t.server&&e.request.method!=="GET"&&e.request.method!=="HEAD"}async function mt(e,t){const r=t.actions;if(!r)return Ce(t),e.setHeaders({allow:"GET"}),{type:"error",error:o(405,"POST method not allowed. No actions exist for this page")};Pe(r);try{const n=await qe(e,r);return n instanceof i?{type:"failure",status:n.status,data:n.data}:{type:"success",status:200,data:n}}catch(n$1){const s=n$1;return s instanceof n?{type:"redirect",status:s.status,location:s.location}:{type:"error",error:Ae(s)}}}function Pe(e){if(e.default&&Object.keys(e).length>1)throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions")}async function qe(e,t){const r=new URL(e.request.url);let n="default";for(const a of r.searchParams)if(a[0].startsWith("/")){if(n=a[0].slice(1),n==="default")throw new Error('Cannot use reserved action name "default"');break}const s=t[n];if(!s)throw new Error(`No action with name '${n}' found`);if(!ve(e.request))throw new Error(`Actions expect form-encoded data (received ${e.request.headers.get("content-type")}`);return s(e)}function Ce(e){for(const t of ["POST","PUT","PATCH","DELETE"])if(e[t])throw new Error(`${t} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`)}function _t(e,t){return Ue(e,uneval,t)}function he(e,t){return Ue(e,stringify,t)}function Ue(e,t,r){try{return t(e)}catch(n){const s=n;if("path"in s){let a=`Data returned from action inside ${r} is not serializable: ${s.message}`;throw s.path!==""&&(a+=` (data.${s.path})`),new Error(a)}throw s}}async function ze(e){for(const t in e)if(typeof e[t]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([r,n])=>[r,await n])));return e}async function ae({event:e,options:t,state:r,node:n,parent:s}){if(!n?.server)return null;const a={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},o=at(e.url,()=>{a.url=!0;});r.prerendering&&Re(o);const i=await n.server.load?.call(null,{...e,depends:(...f)=>{for(const y of f){const{href:k}=new URL(y,e.url);a.dependencies.add(k);}},params:new Proxy(e.params,{get:(f,y)=>(a.params.add(y),f[y])}),parent:async()=>(a.parent=!0,s()),route:{get id(){return a.route=!0,e.route.id}},url:o}),c=i?await ze(i):null;return t.dev&&He(c,e.route.id),{type:"data",data:c,uses:a,slash:n.server.trailingSlash}}async function Ne({event:e,fetched:t,node:r,parent:n,server_data_promise:s,state:a,resolve_opts:o,csr:i}){const c=await s;if(!r?.universal?.load)return c?.data??null;const f=await r.universal.load.call(null,{url:e.url,params:e.params,data:c?.data??null,route:e.route,fetch:async(k,u)=>{const _=k instanceof Request&&k.body?k.clone().body:null,l=await e.fetch(k,u),d=new URL(k instanceof Request?k.url:k,e.url),p=d.origin===e.url.origin;let m;if(p)a.prerendering&&(m={response:l,body:null},a.prerendering.dependencies.set(d.pathname,m));else if((k instanceof Request?k.mode:u?.mode??"cors")!=="no-cors"){const g=l.headers.get("access-control-allow-origin");if(!g||g!==e.url.origin&&g!=="*")throw new Error(`CORS error: ${g?"Incorrect":"No"} 'Access-Control-Allow-Origin' header is present on the requested resource`)}const E=new Proxy(l,{get(h,g,v){async function b(){const j=await h.text();if(!j||typeof j=="string"){const O=Number(h.status);if(isNaN(O))throw new Error(`response.status is not a number. value: "${h.status}" type: ${typeof h.status}`);t.push({url:p?d.href.slice(e.url.origin.length):d.href,method:e.request.method,request_body:k instanceof Request&&_?await yt(_):u?.body,response_body:j,response:h});}return m&&(m.body=j),j}return g==="arrayBuffer"?async()=>{const j=await h.arrayBuffer();return m&&(m.body=new Uint8Array(j)),j}:g==="text"?b:g==="json"?async()=>JSON.parse(await b()):Reflect.get(h,g,h)}});if(i){const h=l.headers.get;l.headers.get=g=>{const v=g.toLowerCase(),b=h.call(l.headers,v);if(b&&!v.startsWith("x-sveltekit-")&&!o.filterSerializedResponseHeaders(v,b))throw new Error(`Failed to get response header "${v}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e.route})`);return b};}return E},setHeaders:e.setHeaders,depends:()=>{},parent:n}),y=f?await ze(f):null;return He(y,e.route.id),y}async function yt(e){let t="";const r=e.getReader(),n=new TextDecoder;for(;;){const{done:s,value:a}=await r.read();if(s)break;t+=n.decode(a);}return t}function He(e,t){if(e!=null&&Object.getPrototypeOf(e)!==Object.prototype)throw new Error(`a load function related to route '${t}' returned ${typeof e!="object"?`a ${typeof e}`:e instanceof Response?"a Response object":Array.isArray(e)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}function V(e){let t=5381;if(typeof e=="string"){let r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let n=r.length;for(;n;)t=t*33^r[--n];}else throw new TypeError("value must be a string or TypedArray");return (t>>>0).toString(36)}const De={"&":"&amp;",'"':"&quot;"},gt=new RegExp(`[${Object.keys(De).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,"g");function Y(e){return `"${e.replace(gt,r=>r.length===2?r:De[r]??`&#${r.charCodeAt(0)};`)}"`}const Ie={"<":"\\u003C","\u2028":"\\u2028","\u2029":"\\u2029"},wt=new RegExp(`[${Object.keys(Ie).join("")}]`,"g");function bt(e,t,r=!1){const n={};let s=null,a=null;for(const[f,y]of e.response.headers)t(f,y)&&(n[f]=y),f==="cache-control"&&(s=y),f==="age"&&(a=y);const o={status:e.response.status,statusText:e.response.statusText,headers:n,body:e.response_body},i=JSON.stringify(o).replace(wt,f=>Ie[f]),c=['type="application/json"',"data-sveltekit-fetched",`data-url=${Y(e.url)}`];if(e.request_body&&c.push(`data-hash=${Y(V(e.request_body))}`),!r&&e.method==="GET"&&s){const f=/s-maxage=(\d+)/g.exec(s)??/max-age=(\d+)/g.exec(s);if(f){const y=+f[1]-+(a??"0");c.push(`data-ttl="${y}"`);}}return `<script ${c.join(" ")}>${i}<\/script>`}const P=JSON.stringify,kt=new TextEncoder;function pe(e){K[0]||Et();const t=Le.slice(0),r=jt(e);for(let s=0;s<r.length;s+=16){const a=r.subarray(s,s+16);let o,i,c,f=t[0],y=t[1],k=t[2],u=t[3],_=t[4],l=t[5],d=t[6],p=t[7];for(let m=0;m<64;m++)m<16?o=a[m]:(i=a[m+1&15],c=a[m+14&15],o=a[m&15]=(i>>>7^i>>>18^i>>>3^i<<25^i<<14)+(c>>>17^c>>>19^c>>>10^c<<15^c<<13)+a[m&15]+a[m+9&15]|0),o=o+p+(_>>>6^_>>>11^_>>>25^_<<26^_<<21^_<<7)+(d^_&(l^d))+K[m],p=d,d=l,l=_,_=u+o|0,u=k,k=y,y=f,f=o+(y&k^u&(y^k))+(y>>>2^y>>>13^y>>>22^y<<30^y<<19^y<<10)|0;t[0]=t[0]+f|0,t[1]=t[1]+y|0,t[2]=t[2]+k|0,t[3]=t[3]+u|0,t[4]=t[4]+_|0,t[5]=t[5]+l|0,t[6]=t[6]+d|0,t[7]=t[7]+p|0;}const n=new Uint8Array(t.buffer);return We(n),Je(n)}const Le=new Uint32Array(8),K=new Uint32Array(64);function Et(){function e(r){return (r-Math.floor(r))*4294967296}let t=2;for(let r=0;r<64;t++){let n=!0;for(let s=2;s*s<=t;s++)if(t%s===0){n=!1;break}n&&(r<8&&(Le[r]=e(t**(1/2))),K[r]=e(t**(1/3)),r++);}}function We(e){for(let t=0;t<e.length;t+=4){const r=e[t+0],n=e[t+1],s=e[t+2],a=e[t+3];e[t+0]=a,e[t+1]=s,e[t+2]=n,e[t+3]=r;}}function jt(e){const t=kt.encode(e),r=t.length*8,n=512*Math.ceil((r+65)/512),s=new Uint8Array(n/8);s.set(t),s[t.length]=128,We(s);const a=new Uint32Array(s.buffer);return a[a.length-2]=Math.floor(r/4294967296),a[a.length-1]=r,a}const q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");function Je(e){const t=e.length;let r="",n;for(n=2;n<t;n+=3)r+=q[e[n-2]>>2],r+=q[(e[n-2]&3)<<4|e[n-1]>>4],r+=q[(e[n-1]&15)<<2|e[n]>>6],r+=q[e[n]&63];return n===t+1&&(r+=q[e[n-2]>>2],r+=q[(e[n-2]&3)<<4],r+="=="),n===t&&(r+=q[e[n-2]>>2],r+=q[(e[n-2]&3)<<4|e[n-1]>>4],r+=q[(e[n-1]&15)<<2],r+="="),r}const me=new Uint8Array(16);function xt(){return crypto.getRandomValues(me),Je(me)}const vt=new Set(["self","unsafe-eval","unsafe-hashes","unsafe-inline","none","strict-dynamic","report-sample","wasm-unsafe-eval"]),Rt=/^(nonce|sha\d\d\d)-/;class Ge{#r;#n;#s;#a;#e;#t;#o;constructor(t,r,n,s){this.#r=t,this.#a=s?{...r}:r;const a=this.#a;if(s){const c=a["style-src"]||a["default-src"];c&&!c.includes("unsafe-inline")&&(a["style-src"]=[...c,"unsafe-inline"]);}this.#e=[],this.#t=[];const o=a["script-src"]||a["default-src"],i=a["style-src"]||a["default-src"];this.#n=!!o&&o.filter(c=>c!=="unsafe-inline").length>0,this.#s=!s&&!!i&&i.filter(c=>c!=="unsafe-inline").length>0,this.script_needs_nonce=this.#n&&!this.#r,this.style_needs_nonce=this.#s&&!this.#r,this.#o=n;}add_script(t){this.#n&&(this.#r?this.#e.push(`sha256-${pe(t)}`):this.#e.length===0&&this.#e.push(`nonce-${this.#o}`));}add_style(t){this.#s&&(this.#r?this.#t.push(`sha256-${pe(t)}`):this.#t.length===0&&this.#t.push(`nonce-${this.#o}`));}get_header(t=!1){const r=[],n={...this.#a};this.#t.length>0&&(n["style-src"]=[...n["style-src"]||n["default-src"]||[],...this.#t]),this.#e.length>0&&(n["script-src"]=[...n["script-src"]||n["default-src"]||[],...this.#e]);for(const s in n){if(t&&(s==="frame-ancestors"||s==="report-uri"||s==="sandbox"))continue;const a=n[s];if(!a)continue;const o=[s];Array.isArray(a)&&a.forEach(i=>{vt.has(i)||Rt.test(i)?o.push(`'${i}'`):o.push(i);}),r.push(o.join(" "));}return r.join("; ")}}class $t extends Ge{get_meta(){return `<meta http-equiv="content-security-policy" content=${Y(this.get_header(!0))}>`}}class St extends Ge{constructor(t,r,n,s){if(super(t,r,n,s),Object.values(r).filter(a=>!!a).length>0){const a=r["report-to"]?.length??0>0,o=r["report-uri"]?.length??0>0;if(!a&&!o)throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both")}}}class Ot{nonce=xt();csp_provider;report_only_provider;constructor({mode:t,directives:r,reportOnly:n},{prerender:s,dev:a}){const o=t==="hash"||t==="auto"&&s;this.csp_provider=new $t(o,r,this.nonce,a),this.report_only_provider=new St(o,n,this.nonce,a);}get script_needs_nonce(){return this.csp_provider.script_needs_nonce||this.report_only_provider.script_needs_nonce}get style_needs_nonce(){return this.csp_provider.style_needs_nonce||this.report_only_provider.style_needs_nonce}add_script(t){this.csp_provider.add_script(t),this.report_only_provider.add_script(t);}add_style(t){this.csp_provider.add_style(t),this.report_only_provider.add_style(t);}}const Tt={...z$1(!1),check:()=>!1};async function D({branch:e,fetched:t,options:r,state:n,page_config:s,status:a,error:o=null,event:i,resolve_opts:c,action_result:f}){if(n.prerendering){if(r.csp.mode==="nonce")throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');if(r.app_template_contains_nonce)throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%")}const{entry:y}=r.manifest._,k=new Set(y.stylesheets),u=new Set(y.imports),_=new Set(r.manifest._.entry.fonts),l=new Set,d=new Map;let p;const m=f?.type==="success"||f?.type==="failure"?f.data??null:null;if(s.ssr){const w={stores:{page:A(null),navigating:A(null),updated:Tt},components:await Promise.all(e.map(({node:x})=>x.component())),form:m};let R={};for(let x=0;x<e.length;x+=1)R={...R,...e[x].data},w[`data_${x}`]=R;w.page={error:o,params:i.params,route:i.route,status:a,url:i.url,data:R,form:m},p=r.root.render(w);for(const{node:x}of e)x.imports&&x.imports.forEach($=>u.add($)),x.stylesheets&&x.stylesheets.forEach($=>k.add($)),x.fonts&&x.fonts.forEach($=>_.add($)),x.inline_styles&&Object.entries(await x.inline_styles()).forEach(([$,N])=>d.set($,N));}else p={head:"",html:"",css:{code:"",map:null}};let E="",h=p.html;const g=new Ot(r.csp,{dev:r.dev,prerender:!!n.prerendering}),v=V(h);let b;if(r.paths.assets)b=r.paths.assets;else if(n.prerendering?.fallback)b=r.paths.base;else {const w=i.url.pathname.slice(r.paths.base.length).split("/").slice(2);b=w.length>0?w.map(()=>"..").join("/"):".";}const j=w=>w.startsWith("/")?w:`${b}/${w}`,O={data:"",form:"null"};try{O.data=`[${e.map(({server_data:w})=>{if(w?.type==="data"){const R=uneval(w.data),x=[];return w.uses.dependencies.size>0&&x.push(`dependencies:${P(Array.from(w.uses.dependencies))}`),w.uses.params.size>0&&x.push(`params:${P(Array.from(w.uses.params))}`),w.uses.parent&&x.push("parent:1"),w.uses.route&&x.push("route:1"),w.uses.url&&x.push("url:1"),`{type:"data",data:${R},uses:{${x.join(",")}}${w.slash?`,slash:${P(w.slash)}`:""}}`}return P(w)}).join(",")}]`;}catch(w){const R=w;throw new Error(Oe(i,R))}if(m&&(O.form=_t(m,i.route.id)),d.size>0){const w=Array.from(d.values()).join(`
`),R=[];r.dev&&R.push(" data-sveltekit"),g.style_needs_nonce&&R.push(` nonce="${g.nonce}"`),g.add_style(w),E+=`
	<style${R.join("")}>${w}</style>`;}for(const w of k){const R=j(w);if(c.preload({type:"css",path:R})){const x=[];if(g.style_needs_nonce&&x.push(`nonce="${g.nonce}"`),d.has(w))x.push("disabled",'media="(max-width: 0)"');else {const $=['rel="preload"','as="style"'].concat(x);l.add(`<${encodeURI(R)}>; ${$.join(";")}; nopush`);}x.unshift('rel="stylesheet"'),E+=`
		<link href="${R}" ${x.join(" ")}>`;}}for(const w of _){const R=j(w);if(c.preload({type:"font",path:R})){const $=['rel="preload"','as="font"',`type="font/${w.slice(w.lastIndexOf(".")+1)}"`,`href="${R}"`,"crossorigin"];E+=`
		<link ${$.join(" ")}>`;}}if(s.csr){const w=[`env: ${P(r.public_env)}`,`paths: ${P(r.paths)}`,`target: document.querySelector('[data-sveltekit-hydrate="${v}"]').parentNode`,`version: ${P(r.version)}`];if(s.ssr){const $=[`node_ids: [${e.map(({node:N})=>N.index).join(", ")}]`,`data: ${O.data}`,`form: ${O.form}`];a!==200&&$.push(`status: ${a}`),o&&$.push(`error: ${uneval(o)}`),r.embedded&&$.push(`params: ${uneval(i.params)}`,`route: ${P(i.route)}`),w.push(`hydrate: {
					${$.join(`,
					`)}
				}`);}const R=`
			import { start } from ${P(j(y.file))};

			start({
				${w.join(`,
				`)}
			});
		`;for(const $ of u){const N=j($);c.preload({type:"js",path:N})&&(l.add(`<${encodeURI(N)}>; rel="modulepreload"; nopush`),n.prerendering&&(E+=`
		<link rel="modulepreload" href="${N}">`));}const x=['type="module"',`data-sveltekit-hydrate="${v}"`];g.add_script(R),g.script_needs_nonce&&x.push(`nonce="${g.nonce}"`),h+=`
		<script ${x.join(" ")}>${R}<\/script>`;}if(s.ssr&&s.csr&&(h+=`
	${t.map(w=>bt(w,c.filterSerializedResponseHeaders,!!n.prerendering)).join(`
	`)}`),r.service_worker){const w=r.dev?", { type: 'module' }":"",R=`
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${j("service-worker.js")}'${w});
				});
			}
		`;g.add_script(R),E+=`
		<script${g.script_needs_nonce?` nonce="${g.nonce}"`:""}>${R}<\/script>`;}if(n.prerendering){const w=[],R=g.csp_provider.get_meta();R&&w.push(R),n.prerendering.cache&&w.push(`<meta http-equiv="cache-control" content="${n.prerendering.cache}">`),w.length>0&&(E=w.join(`
`)+E);}E+=p.head;const A$1=await c.transformPageChunk({html:r.app_template({head:E,body:h,assets:b,nonce:g.nonce}),done:!0})||"",H=new Headers({"x-sveltekit-page":"true","content-type":"text/html",etag:`"${V(A$1)}"`});if(!n.prerendering){const w=g.csp_provider.get_header();w&&H.set("content-security-policy",w);const R=g.report_only_provider.get_header();R&&H.set("content-security-policy-report-only",R),l.size&&H.set("link",Array.from(l).join(", "));}return new Response(A$1,{status:a,headers:H})}async function Be({event:e,options:t$1,state:r,status:n$1,error:s,resolve_opts:a}){const o=[];try{const i=[],c=await t$1.manifest._.nodes[0](),f=T([c],"ssr")??!0,y=T([c],"csr")??!0;if(f){r.initiator=Se;const k=ae({event:e,options:t$1,state:r,node:c,parent:async()=>({})}),u=await k,_=await Ne({event:e,fetched:o,node:c,parent:async()=>({}),resolve_opts:a,server_data_promise:k,state:r,csr:y});i.push({node:c,server_data:u,data:_},{node:await t$1.manifest._.nodes[1](),data:null,server_data:null});}return await D({options:t$1,state:r,page_config:{ssr:f,csr:T([c],"csr")??!0},status:n$1,error:await z(e,t$1,s),branch:i,fetched:o,event:e,resolve_opts:a})}catch(i){return i instanceof n?B(i.status,i.location):se(t$1,i instanceof t?i.status:500,(await z(e,t$1,i)).message)}}async function At(e,t$1,r,n$1,s,a){if(s.initiator===t$1)return new Response(`Not found: ${e.url.pathname}`,{status:404});if(s.initiator=t$1,ft(e)){const o=await n$1.manifest._.nodes[r.leaf]();return ht(e,n$1,o?.server)}try{const o=await Promise.all([...r.layouts.map(h=>h==null?h:n$1.manifest._.nodes[h]()),n$1.manifest._.nodes[r.leaf]()]),i=o.at(-1);let c=200,f;if(pt(e,i)){if(f=await mt(e,i.server),f?.type==="redirect")return B(303,f.location);if(f?.type==="error"){const h=f.error;c=h instanceof t?h.status:500;}f?.type==="failure"&&(c=f.status);}const y=o.some(h=>h?.server),k=it(e.url.pathname),u=T(o,"prerender");if(u){const h=i.server;if(h&&h.actions)throw new Error("Cannot prerender pages with actions")}else if(s.prerendering)return u!==!1&&T(o,"ssr")===!1&&!i.server?.actions?await D({branch:[],fetched:[],page_config:{ssr:!1,csr:T(o,"csr")??!0},status:c,error:null,event:e,options:n$1,state:s,resolve_opts:a}):new Response(void 0,{status:204});s.prerender_default=u;const _=[];if(T(o,"ssr")===!1)return await D({branch:[],fetched:_,page_config:{ssr:!1,csr:T(o,"csr")??!0},status:c,error:null,event:e,options:n$1,state:s,resolve_opts:a});let l=[],d=null;const p=o.map((h,g)=>{if(d)throw d;return Promise.resolve().then(async()=>{try{if(h===i&&f?.type==="error")throw f.error;return await ae({event:e,options:n$1,state:s,node:h,parent:async()=>{const v={};for(let b=0;b<g;b+=1){const j=await p[b];j&&Object.assign(v,await j.data);}return v}})}catch(v){throw d=v,d}})}),m=T(o,"csr")??!0,E=o.map((h,g)=>{if(d)throw d;return Promise.resolve().then(async()=>{try{return await Ne({event:e,fetched:_,node:h,parent:async()=>{const v={};for(let b=0;b<g;b+=1)Object.assign(v,await E[b]);return v},resolve_opts:a,server_data_promise:p[g],state:s,csr:m})}catch(v){throw d=v,d}})});for(const h of p)h.catch(()=>{});for(const h of E)h.catch(()=>{});for(let h=0;h<o.length;h+=1){const g=o[h];if(g)try{const v=await p[h],b=await E[h];l.push({node:g,server_data:v,data:b});}catch(v){const b=v;if(b instanceof n){if(s.prerendering&&y){const A=JSON.stringify({type:"redirect",location:b.location});s.prerendering.dependencies.set(k,{response:new Response(A),body:A});}return B(b.status,b.location)}const j=b instanceof t?b.status:500,O=await z(e,n$1,b);for(;h--;)if(r.errors[h]){const A=r.errors[h],H=await n$1.manifest._.nodes[A]();let w=h;for(;!l[w];)w-=1;return await D({event:e,options:n$1,state:s,resolve_opts:a,page_config:{ssr:!0,csr:!0},status:j,error:O,branch:fe(l.slice(0,w+1)).concat({node:H,data:null,server_data:null}),fetched:_})}return se(n$1,j,O.message)}else l.push(null);}if(s.prerendering&&y){const h=`{"type":"data","nodes":[${l.map(g=>Te(g?.server_data)).join(",")}]}`;s.prerendering.dependencies.set(k,{response:new Response(h),body:h});}return await D({event:e,options:n$1,state:s,resolve_opts:a,page_config:{csr:T(o,"csr")??!0,ssr:!0},status:c,error:null,branch:fe(l),action_result:f,fetched:_})}catch(o){return await Be({event:e,options:n$1,state:s,status:500,error:o,resolve_opts:a})}}function Pt(e,t,r){const n={},s=e.slice(1);let a="";for(let o=0;o<t.length;o+=1){const i=t[o];let c=s[o];if(i.chained&&i.rest&&a&&(c=c?a+"/"+c:a),a="",c===void 0)i.rest&&(n[i.name]="");else {if(i.matcher&&!r[i.matcher](c)){if(i.optional&&i.chained){let f=s.indexOf(void 0,o);if(f===-1){const y=t[o+1];if(y?.rest&&y.chained)a=c;else return}for(;f>=o;)s[f]=s[f-1],f-=1;continue}return}n[i.name]=c;}}if(!a)return n}function qt(e){let t=!1,r;return ()=>t?r:(t=!0,r=e())}const _e="x-sveltekit-invalidated";async function Ct(e,t$1,r,n$1,s,a){if(!t$1.page)return new Response(void 0,{status:404});try{const o=[...t$1.page.layouts,t$1.page.leaf],i=s??o.map(()=>!0);let c=!1;const f=new URL(e.url);f.pathname=re(f.pathname,a);const y={...e,url:f},k=o.map((d,p)=>qt(async()=>{try{if(c)return {type:"skip"};const m=d==null?d:await r.manifest._.nodes[d]();return ae({event:y,options:r,state:n$1,node:m,parent:async()=>{const E={};for(let h=0;h<p;h+=1){const g=await k[h]();g&&Object.assign(E,g.data);}return E}})}catch(m){throw c=!0,m}})),u=k.map(async(d,p)=>i[p]?d():{type:"skip"});let _=u.length;const l=await Promise.all(u.map((d,p)=>d.catch(async m=>{if(m instanceof n)throw m;return _=Math.min(_,p+1),{type:"error",error:await z(e,r,m),status:m instanceof t?m.status:void 0}})));try{const p=`{"type":"data","nodes":[${l.slice(0,_).map(Te).join(",")}]}`;return G(p)}catch(d){const p=d;return G(JSON.stringify(Oe(e,p)),500)}}catch(o){const i=o;return i instanceof n?X(i):G(JSON.stringify(await z(e,r,i)))}}function G(e,t=200){return new Response(e,{status:t,headers:{"content-type":"application/json","cache-control":"private, no-store"}})}function X(e){return G(JSON.stringify({type:"redirect",location:e.location}))}const S={};function Ut(e,t,r,n){const s=e.headers.get("cookie")??"",a=parse_1(s,{decode:u=>u}),o=re(t.pathname,n),i=o.split("/").slice(0,-1).join("/")||"/";if(r){const u=parse_1(s,{decode:decodeURIComponent});for(const _ of Object.keys(S))S[_]=new Set([...S[_]].filter(l=>!J(o,l)||_ in u));for(const _ in u)S[_]=S[_]??new Set,[...S[_]].some(l=>J(o,l))||S[_].add(i);}const c={},f={httpOnly:!0,sameSite:"lax",secure:!(t.hostname==="localhost"&&t.protocol==="http:")},y={get(u,_){const l=c[u];if(l&&ye(t.hostname,l.options.domain)&&J(t.pathname,l.options.path))return l.value;const d=_?.decode||decodeURIComponent,m=parse_1(s,{decode:d})[u];if(!r||m)return m;const E=new Set([...S[u]??[]]);l&&E.add(l.options.path??i),E.size>0&&console.warn(`Cookie with name '${u}' was not found at path '${t.pathname}', but a cookie with that name exists at these paths: '${[...E].join("', '")}'. Did you mean to set its 'path' to '/' instead?`);},set(u,_,l={}){let d=l.path??i;if(c[u]={name:u,value:_,options:{...f,...l,path:d}},r)if(S[u]=S[u]??new Set,_)S[u].add(d);else {if(!S[u].has(d)&&S[u].size>0){const p=`'${Array.from(S[u]).join("', '")}'`;console.warn(`Trying to delete cookie '${u}' at path '${d}', but a cookie with that name only exists at these paths: ${p}.`);}S[u].delete(d);}},delete(u,_={}){y.set(u,"",{..._,maxAge:0});},serialize(u,_,l){return serialize_1(u,_,{...f,...l})}};function k(u,_){const l={...a};for(const d in c){const p=c[d];if(!ye(u.hostname,p.options.domain)||!J(u.pathname,p.options.path))continue;const m=p.options.encode||encodeURIComponent;l[p.name]=m(p.value);}if(_){const d=parse_1(_,{decode:p=>p});for(const p in d)l[p]=d[p];}return Object.entries(l).map(([d,p])=>`${d}=${p}`).join("; ")}return {cookies:y,new_cookies:c,get_cookie_header:k}}function ye(e,t){if(!t)return !0;const r=t[0]==="."?t.slice(1):t;return e===r?!0:e.endsWith("."+r)}function J(e,t){if(!t)return !0;const r=t.endsWith("/")?t.slice(0,-1):t;return e===r?!0:e.startsWith(r+"/")}function zt(e,t){for(const r of t){const{name:n,value:s,options:a}=r;e.append("set-cookie",serialize_1(n,s,a));}}function Nt({event:e,options:t,state:r,get_cookie_header:n}){return async(s,a)=>{const o=ge(s,a,e.url),i=a?.body;let c=(s instanceof Request?s.mode:a?.mode)??"cors",f=(s instanceof Request?s.credentials:a?.credentials)??"same-origin";return await t.hooks.handleFetch({event:e,request:o,fetch:async(y,k)=>{const u=ge(y,k,e.url),_=new URL(u.url);if(u.headers.has("origin")||u.headers.set("origin",e.url.origin),y!==o&&(c=(y instanceof Request?y.mode:k?.mode)??"cors",f=(y instanceof Request?y.credentials:k?.credentials)??"same-origin"),(u.method==="GET"||u.method==="HEAD")&&(c==="no-cors"&&_.origin!==e.url.origin||_.origin===e.url.origin)&&u.headers.delete("origin"),_.origin!==e.url.origin){if(`.${_.hostname}`.endsWith(`.${e.url.hostname}`)&&f!=="omit"){const j=n(_,u.headers.get("cookie"));j&&u.headers.set("cookie",j);}let b=await fetch(u);return c==="no-cors"&&(b=new Response("",{status:b.status,statusText:b.statusText,headers:b.headers})),b}let l;const d=t.paths.assets||t.paths.base,p=decodeURIComponent(_.pathname),m=(p.startsWith(d)?p.slice(d.length):p).slice(1),E=`${m}/index.html`,h=t.manifest.assets.has(m),g=t.manifest.assets.has(E);if(h||g){const b=h?m:E;if(t.read){const j=h?t.manifest.mimeTypes[m.slice(m.lastIndexOf("."))]:"text/html";return new Response(t.read(b),{headers:j?{"content-type":j}:{}})}return await fetch(u)}if(f!=="omit"){const b=n(_,u.headers.get("cookie"));b&&u.headers.set("cookie",b);const j=e.request.headers.get("authorization");j&&!u.headers.has("authorization")&&u.headers.set("authorization",j);}if(i&&typeof i!="string"&&!ArrayBuffer.isView(i))throw new Error("Request body must be a string or TypedArray");u.headers.has("accept")||u.headers.set("accept","*/*"),u.headers.has("accept-language")||u.headers.set("accept-language",e.request.headers.get("accept-language")),l=await Fe(u,t,r);const v=l.headers.get("set-cookie");if(v)for(const b of splitCookiesString_1(v)){const{name:j,value:O,...A}=parseString_1(b);e.cookies.set(j,O,A);}return l}})}}function ge(e,t,r){return e instanceof Request?e:new Request(typeof e=="string"?new URL(e,r):e,t)}const we=({html:e})=>e,be=()=>!1,ke=({type:e})=>e==="js"||e==="css";async function Fe(e,t,r){let n$1=new URL(e.url);if(t.csrf.check_origin&&e.method==="POST"&&e.headers.get("origin")!==n$1.origin&&ve(e)){const d=o(403,`Cross-site ${e.method} form submissions are forbidden`);return e.headers.get("accept")==="application/json"?c(d.body,{status:d.status}):new Response(d.body.message,{status:d.status})}let s;try{s=rt(n$1.pathname);}catch{return new Response("Malformed URI",{status:400})}let a=null,o$1={};if(t.paths.base&&!r.prerendering?.fallback){if(!s.startsWith(t.paths.base))return new Response("Not found",{status:404});s=s.slice(t.paths.base.length)||"/";}const i=$e(s);let c$1;if(i&&(s=de(s)||"/",n$1.pathname=de(n$1.pathname)||"/",c$1=n$1.searchParams.get(_e)?.split("_").map(Boolean),n$1.searchParams.delete(_e)),!r.prerendering?.fallback){const l=await t.manifest._.matchers();for(const d of t.manifest._.routes){const p=d.pattern.exec(s);if(!p)continue;const m=Pt(p,d.params,l);if(m){a=d,o$1=nt(m);break}}}let f;const y={},k={cookies:null,fetch:null,getClientAddress:r.getClientAddress||(()=>{throw new Error("@sveltejs/adapter-node does not specify getClientAddress. Please raise an issue")}),locals:{},params:o$1,platform:r.platform,request:e,route:{id:a?.id??null},setHeaders:l=>{for(const d in l){const p=d.toLowerCase(),m=l[d];if(p==="set-cookie")throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");if(p in y)throw new Error(`"${d}" header is already set`);y[p]=m,r.prerendering&&p==="cache-control"&&(r.prerendering.cache=m);}},url:n$1,isDataRequest:i};let u={transformPageChunk:we,filterSerializedResponseHeaders:be,preload:ke};try{if(a&&!i){if(a.page){const h=await Promise.all([...a.page.layouts.map(g=>g==null?g:t.manifest._.nodes[g]()),t.manifest._.nodes[a.page.leaf]()]);f=T(h,"trailingSlash");}else a.endpoint&&(f=(await a.endpoint()).trailingSlash);const E=re(n$1.pathname,f??"never");if(E!==n$1.pathname&&!r.prerendering?.fallback)return new Response(void 0,{status:301,headers:{"x-sveltekit-normalize":"1",location:(E.startsWith("//")?n$1.origin+E:E)+(n$1.search==="?"?"":n$1.search)}})}const{cookies:l,new_cookies:d,get_cookie_header:p}=Ut(e,n$1,t.dev,f??"never");k.cookies=l,k.fetch=Nt({event:k,options:t,state:r,get_cookie_header:p}),r.prerendering&&!r.prerendering.fallback&&Re(n$1);const m=await t.hooks.handle({event:k,resolve:(E,h)=>_(E,h).then(g=>{for(const v in y){const b=y[v];g.headers.set(v,b);}return zt(g.headers,Object.values(d)),r.prerendering&&E.route.id!==null&&g.headers.set("x-sveltekit-routeid",encodeURI(E.route.id)),g})});if(m.status===200&&m.headers.has("etag")){let E=e.headers.get("if-none-match");E?.startsWith('W/"')&&(E=E.substring(2));const h=m.headers.get("etag");if(E===h){const g=new Headers({etag:h});for(const v of ["cache-control","content-location","date","expires","vary","set-cookie"]){const b=m.headers.get(v);b&&g.set(v,b);}return new Response(void 0,{status:304,headers:g})}}if(i&&m.status>=300&&m.status<=308){const E=m.headers.get("location");if(E)return X(new n(m.status,E))}return m}catch(l){return l instanceof n?i?X(l):B(l.status,l.location):await ue(k,t,l)}async function _(l,d){try{if(d){if("ssr"in d)throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");u={transformPageChunk:d.transformPageChunk||we,filterSerializedResponseHeaders:d.filterSerializedResponseHeaders||be,preload:d.preload||ke};}if(r.prerendering?.fallback)return await D({event:l,options:t,state:r,page_config:{ssr:!1,csr:!0},status:200,error:null,branch:[],fetched:[],resolve_opts:u});if(a){let p;if(i)p=await Ct(l,a,t,r,c$1,f??"never");else if(a.endpoint&&(!a.page||ut(l)))p=await dt(l,await a.endpoint(),r);else if(a.page)p=await At(l,a,a.page,t,r,u);else throw new Error("This should never happen");return p}return r.initiator===Se?new Response("Internal Server Error",{status:500}):r.initiator?r.prerendering?new Response("not found",{status:404}):await fetch(e):await Be({event:l,options:t,state:r,status:404,error:new Error(`Not found: ${l.url.pathname}`),resolve_opts:u})}catch(p){return await ue(l,t,p)}finally{l.cookies.set=()=>{throw new Error("Cannot use `cookies.set(...)` after the response has been generated")},l.setHeaders=()=>{throw new Error("Cannot use `setHeaders(...)` after the response has been generated")};}}}let Q="",Me="";function Ve(e){Q=e.base,Me=e.assets||Q;}const Ht=({head:e,body:t,assets:r,nonce:n})=>`<!DOCTYPE html>\r
<html\r
	lang="en"\r
	class=""\r
>\r
	<head>\r
		<meta charset="utf-8" />\r
		<meta\r
			name="viewport"\r
			content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"\r
		/>\r
		<link\r
			rel="icon"\r
			href="/assets/favicon.ico"\r
		/>\r
		<link\r
			rel="shortcut icon"\r
			type="image/svg"\r
			href="/logo.png"\r
		/>\r
		<link\r
			rel="shortcut icon"\r
			type="image/png"\r
			href="/favicon.png"\r
		/>\r
\r
		<meta\r
			name="application-name"\r
			content="AlphaTrack"\r
		/>\r
		<meta\r
			name="msapplication-TileColor"\r
			content="#da532c"\r
		/>\r
\r
		<meta\r
			name="og:site_name"\r
			content="AlphaTrack"\r
		/>\r
\r
		<!-- Apple Metatags-->\r
		<meta\r
			name="apple-mobile-web-app-capable"\r
			content="yes"\r
		/>\r
		<meta\r
			name="apple-mobile-web-app-status-bar-style"\r
			content="black-translucent"\r
		/>\r
		<meta\r
			content="yes"\r
			name="apple-touch-fullscreen"\r
		/>\r
		<meta\r
			name="apple-mobile-web-app-title"\r
			content="AlphaTrack"\r
		/>\r
		<link\r
			rel="apple-touch-icon"\r
			sizes="180x180"\r
			href="/apple-touch-icon.png"\r
		/>\r
		<link\r
			rel="mask-icon"\r
			href="/assets/safari-pinned-tab.svg"\r
			color="#5bbad5"\r
		/>\r
		<link\r
			rel="preload"\r
			type="image/svg+xml"\r
			href="/icons.svg"\r
		/>\r
		<meta\r
			name="theme-color"\r
			content="#17171d"\r
		/>\r
		<meta\r
			name="apple-mobile-web-app-orientations"\r
			content="portrait"\r
		/>\r
		<meta\r
			name="apple-mobile-web-app-status-bar-style"\r
			content="black"\r
		/>\r
\r
		<!-- SvelteKit tags -->\r
		<link\r
			rel="manifest"\r
			href="/manifest.json"\r
		/>\r
\r
		<script>\r
			var parcelRequire;\r
\r
			// if (!("appearance" in localStorage)) {\r
			// 	localStorage.theme = "Dark";\r
			// }\r
			const hasSettings = localStorage.settings;\r
			if (!hasSettings) document.documentElement.classList.add("Dark");\r
			else document.documentElement.classList.add(JSON.parse(hasSettings)?.appearance?.Theme ?? "Dark");\r
		<\/script>\r
		`+e+`\r
	</head>\r
	<div id="app">`+t+`</div>\r
</html>\r
`,Dt=({status:e,message:t})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+t+`</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+e+`</span>
			<div class="message">
				<h1>`+t+`</h1>
			</div>
		</div>
	</body>
</html>
`;let Ye=null;Ve({base:"",assets:""});let Ee="https";function Vt(e){Ee=e.protocol||Ee,Ve(e.paths),e.building,Ye=e.read;}class Yt{constructor(t){this.options={csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf:{check_origin:!0},dev:!1,embedded:!1,handle_error:(r,n)=>this.options.hooks.handleError({error:r,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"},hooks:null,manifest:t,paths:{base:Q,assets:Me},public_env:{},read:Ye,root:Ze,service_worker:!0,app_template:Ht,app_template_contains_nonce:!1,error_template:Dt,version:"1691192070508"};}async init({env:t}){const r=Object.entries(t);Object.fromEntries(r.filter(([s])=>!s.startsWith("PUBLIC_")));const n=Object.fromEntries(r.filter(([s])=>s.startsWith("PUBLIC_")));if(this.options.public_env=n,!this.options.hooks){const s=await import('./chunks/hooks.server-c722afdc.js');this.options.hooks={handle:s.handle||(({event:a,resolve:o})=>o(a)),handleError:s.handleError||(({error:a})=>console.error(a.stack)),handleFetch:s.handleFetch||(({request:a,fetch:o})=>o(a))};}}async respond(t,r={}){if(!(t instanceof Request))throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");return Fe(t,this.options,r)}}

export { Yt as Server, Vt as override };
//# sourceMappingURL=index.js.map
