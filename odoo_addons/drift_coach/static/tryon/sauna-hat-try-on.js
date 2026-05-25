const Lt = "srgb", Pi = "srgb-linear", Di = "linear", Ye = "srgb";
const Yr = "300 es";
function Sa(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Li(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Ea() {
  const i = Li("canvas");
  return i.style.display = "block", i;
}
const Kr = {};
function Zr(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function qs(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Ae(...i) {
  i = qs(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function Xe(...i) {
  i = qs(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Sr(...i) {
  const e = i.join(" ");
  e in Kr || (Kr[e] = !0, Ae(...i));
}
function Ta(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const ya = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class Mn {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Tt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], ki = Math.PI / 180, Er = 180 / Math.PI;
function ti() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Tt[i & 255] + Tt[i >> 8 & 255] + Tt[i >> 16 & 255] + Tt[i >> 24 & 255] + "-" + Tt[e & 255] + Tt[e >> 8 & 255] + "-" + Tt[e >> 16 & 15 | 64] + Tt[e >> 24 & 255] + "-" + Tt[t & 63 | 128] + Tt[t >> 8 & 255] + "-" + Tt[t >> 16 & 255] + Tt[t >> 24 & 255] + Tt[n & 255] + Tt[n >> 8 & 255] + Tt[n >> 16 & 255] + Tt[n >> 24 & 255]).toLowerCase();
}
function ze(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Aa(i, e) {
  return (i % e + e) % e;
}
function Wi(i, e, t) {
  return (1 - t) * i + t * e;
}
function Wn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Rt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Ur = class Ur {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
Ur.prototype.isVector2 = !0;
let Ce = Ur;
class Vn {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], d = n[r + 2], m = n[r + 3], u = s[a + 0], p = s[a + 1], x = s[a + 2], S = s[a + 3];
    if (m !== S || l !== u || c !== p || d !== x) {
      let f = l * u + c * p + d * x + m * S;
      f < 0 && (u = -u, p = -p, x = -x, S = -S, f = -f);
      let h = 1 - o;
      if (f < 0.9995) {
        const M = Math.acos(f), A = Math.sin(M);
        h = Math.sin(h * M) / A, o = Math.sin(o * M) / A, l = l * h + u * o, c = c * h + p * o, d = d * h + x * o, m = m * h + S * o;
      } else {
        l = l * h + u * o, c = c * h + p * o, d = d * h + x * o, m = m * h + S * o;
        const M = 1 / Math.sqrt(l * l + c * c + d * d + m * m);
        l *= M, c *= M, d *= M, m *= M;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = m;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], d = n[r + 3], m = s[a], u = s[a + 1], p = s[a + 2], x = s[a + 3];
    return e[t] = o * x + d * m + l * p - c * u, e[t + 1] = l * x + d * u + c * m - o * p, e[t + 2] = c * x + d * p + o * u - l * m, e[t + 3] = d * x - o * m - l * u - c * p, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), d = o(r / 2), m = o(s / 2), u = l(n / 2), p = l(r / 2), x = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * d * m + c * p * x, this._y = c * p * m - u * d * x, this._z = c * d * x + u * p * m, this._w = c * d * m - u * p * x;
        break;
      case "YXZ":
        this._x = u * d * m + c * p * x, this._y = c * p * m - u * d * x, this._z = c * d * x - u * p * m, this._w = c * d * m + u * p * x;
        break;
      case "ZXY":
        this._x = u * d * m - c * p * x, this._y = c * p * m + u * d * x, this._z = c * d * x + u * p * m, this._w = c * d * m - u * p * x;
        break;
      case "ZYX":
        this._x = u * d * m - c * p * x, this._y = c * p * m + u * d * x, this._z = c * d * x - u * p * m, this._w = c * d * m + u * p * x;
        break;
      case "YZX":
        this._x = u * d * m + c * p * x, this._y = c * p * m + u * d * x, this._z = c * d * x - u * p * m, this._w = c * d * m - u * p * x;
        break;
      case "XZY":
        this._x = u * d * m - c * p * x, this._y = c * p * m - u * d * x, this._z = c * d * x + u * p * m, this._w = c * d * m + u * p * x;
        break;
      default:
        Ae("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], d = t[6], m = t[10], u = n + o + m;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (d - l) * p, this._y = (s - c) * p, this._z = (a - r) * p;
    } else if (n > o && n > m) {
      const p = 2 * Math.sqrt(1 + n - o - m);
      this._w = (d - l) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + c) / p;
    } else if (o > m) {
      const p = 2 * Math.sqrt(1 + o - n - m);
      this._w = (s - c) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (l + d) / p;
    } else {
      const p = 2 * Math.sqrt(1 + m - n - o);
      this._w = (a - r) / p, this._x = (s + c) / p, this._y = (l + d) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, d = t._w;
    return this._x = n * d + a * o + r * c - s * l, this._y = r * d + a * l + s * o - n * c, this._z = s * d + a * c + n * l - r * o, this._w = a * d - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    let n = e._x, r = e._y, s = e._z, a = e._w, o = this.dot(e);
    o < 0 && (n = -n, r = -r, s = -s, a = -a, o = -o);
    let l = 1 - t;
    if (o < 0.9995) {
      const c = Math.acos(o), d = Math.sin(c);
      l = Math.sin(l * c) / d, t = Math.sin(t * c) / d, this._x = this._x * l + n * t, this._y = this._y * l + r * t, this._z = this._z * l + s * t, this._w = this._w * l + a * t, this._onChangeCallback();
    } else
      this._x = this._x * l + n * t, this._y = this._y * l + r * t, this._z = this._z * l + s * t, this._w = this._w * l + a * t, this.normalize();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const Fr = class Fr {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion($r.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion($r.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), d = 2 * (o * t - s * r), m = 2 * (s * n - a * t);
    return this.x = t + l * c + a * m - o * d, this.y = n + l * d + o * c - s * m, this.z = r + l * m + s * d - a * c, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return Xi.copy(this).projectOnVector(e), this.sub(Xi);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Xi.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
Fr.prototype.isVector3 = !0;
let N = Fr;
const Xi = /* @__PURE__ */ new N(), $r = /* @__PURE__ */ new Vn(), Nr = class Nr {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, s, a, o, l, c) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, l, c) {
    const d = this.elements;
    return d[0] = e, d[1] = r, d[2] = o, d[3] = t, d[4] = s, d[5] = l, d[6] = n, d[7] = a, d[8] = c, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], d = n[4], m = n[7], u = n[2], p = n[5], x = n[8], S = r[0], f = r[3], h = r[6], M = r[1], A = r[4], T = r[7], C = r[2], y = r[5], w = r[8];
    return s[0] = a * S + o * M + l * C, s[3] = a * f + o * A + l * y, s[6] = a * h + o * T + l * w, s[1] = c * S + d * M + m * C, s[4] = c * f + d * A + m * y, s[7] = c * h + d * T + m * w, s[2] = u * S + p * M + x * C, s[5] = u * f + p * A + x * y, s[8] = u * h + p * T + x * w, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], d = e[8];
    return t * a * d - t * o * c - n * s * d + n * o * l + r * s * c - r * a * l;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], d = e[8], m = d * a - o * c, u = o * l - d * s, p = c * s - a * l, x = t * m + n * u + r * p;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / x;
    return e[0] = m * S, e[1] = (r * c - d * n) * S, e[2] = (o * n - r * a) * S, e[3] = u * S, e[4] = (d * t - r * l) * S, e[5] = (r * s - o * t) * S, e[6] = p * S, e[7] = (n * l - c * t) * S, e[8] = (a * t - n * s) * S, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(qi.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(qi.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(qi.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
Nr.prototype.isMatrix3 = !0;
let Pe = Nr;
const qi = /* @__PURE__ */ new Pe(), jr = /* @__PURE__ */ new Pe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Jr = /* @__PURE__ */ new Pe().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function ba() {
  const i = {
    enabled: !0,
    workingColorSpace: Pi,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === Ye && (r.r = en(r.r), r.g = en(r.g), r.b = en(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ye && (r.r = On(r.r), r.g = On(r.g), r.b = On(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === "" ? Di : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, s) {
      return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Pi]: {
      primaries: e,
      whitePoint: n,
      transfer: Di,
      toXYZ: jr,
      fromXYZ: Jr,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Lt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Lt }
    },
    [Lt]: {
      primaries: e,
      whitePoint: n,
      transfer: Ye,
      toXYZ: jr,
      fromXYZ: Jr,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Lt }
    }
  }), i;
}
const Ve = /* @__PURE__ */ ba();
function en(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function On(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Tn;
class Ra {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      Tn === void 0 && (Tn = Li("canvas")), Tn.width = e.width, Tn.height = e.height;
      const r = Tn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = Tn;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Li("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = en(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(en(t[n] / 255) * 255) : t[n] = en(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Ca = 0;
class Ar {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Ca++ }), this.uuid = ti(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Yi(r[a].image)) : s.push(Yi(r[a]));
      } else
        s = Yi(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Yi(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ra.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Ae("Texture: Unable to serialize Texture."), {});
}
let wa = 0;
const Ki = /* @__PURE__ */ new N();
class bt extends Mn {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = bt.DEFAULT_ANISOTROPY, d = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: wa++ }), this.uuid = ti(), this.name = "", this.source = new Ar(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ce(0, 0), this.repeat = new Ce(1, 1), this.center = new Ce(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Pe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Ki).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Ki).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Ki).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Ae(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = 300;
bt.DEFAULT_ANISOTROPY = 1;
const Or = class Or {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], d = l[4], m = l[8], u = l[1], p = l[5], x = l[9], S = l[2], f = l[6], h = l[10];
    if (Math.abs(d - u) < 0.01 && Math.abs(m - S) < 0.01 && Math.abs(x - f) < 0.01) {
      if (Math.abs(d + u) < 0.1 && Math.abs(m + S) < 0.1 && Math.abs(x + f) < 0.1 && Math.abs(c + p + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const A = (c + 1) / 2, T = (p + 1) / 2, C = (h + 1) / 2, y = (d + u) / 4, w = (m + S) / 4, g = (x + f) / 4;
      return A > T && A > C ? A < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(A), r = y / n, s = w / n) : T > C ? T < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(T), n = y / r, s = g / r) : C < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(C), n = w / s, r = g / s), this.set(n, r, s, t), this;
    }
    let M = Math.sqrt((f - x) * (f - x) + (m - S) * (m - S) + (u - d) * (u - d));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (f - x) / M, this.y = (m - S) / M, this.z = (u - d) / M, this.w = Math.acos((c + p + h - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this.w = ze(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this.w = ze(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
Or.prototype.isVector4 = !0;
let lt = Or;
class Pa extends Mn {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new lt(0, 0, e, t), this.scissorTest = !1, this.viewport = new lt(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new bt(r), a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Ar(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Xt extends Pa {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ys extends bt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Da extends bt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Fi = class Fi {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, s, a, o, l, c, d, m, u, p, x, S, f) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, d, m, u, p, x, S, f);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, l, c, d, m, u, p, x, S, f) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = d, h[10] = m, h[14] = u, h[3] = p, h[7] = x, h[11] = S, h[15] = f, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new Fi().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    if (e.determinant() === 0)
      return this.identity();
    const t = this.elements, n = e.elements, r = 1 / yn.setFromMatrixColumn(e, 0).length(), s = 1 / yn.setFromMatrixColumn(e, 1).length(), a = 1 / yn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), d = Math.cos(s), m = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * d, p = a * m, x = o * d, S = o * m;
      t[0] = l * d, t[4] = -l * m, t[8] = c, t[1] = p + x * c, t[5] = u - S * c, t[9] = -o * l, t[2] = S - u * c, t[6] = x + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const u = l * d, p = l * m, x = c * d, S = c * m;
      t[0] = u + S * o, t[4] = x * o - p, t[8] = a * c, t[1] = a * m, t[5] = a * d, t[9] = -o, t[2] = p * o - x, t[6] = S + u * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const u = l * d, p = l * m, x = c * d, S = c * m;
      t[0] = u - S * o, t[4] = -a * m, t[8] = x + p * o, t[1] = p + x * o, t[5] = a * d, t[9] = S - u * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const u = a * d, p = a * m, x = o * d, S = o * m;
      t[0] = l * d, t[4] = x * c - p, t[8] = u * c + S, t[1] = l * m, t[5] = S * c + u, t[9] = p * c - x, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const u = a * l, p = a * c, x = o * l, S = o * c;
      t[0] = l * d, t[4] = S - u * m, t[8] = x * m + p, t[1] = m, t[5] = a * d, t[9] = -o * d, t[2] = -c * d, t[6] = p * m + x, t[10] = u - S * m;
    } else if (e.order === "XZY") {
      const u = a * l, p = a * c, x = o * l, S = o * c;
      t[0] = l * d, t[4] = -m, t[8] = c * d, t[1] = u * m + S, t[5] = a * d, t[9] = p * m - x, t[2] = x * m - p, t[6] = o * d, t[10] = S * m + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(La, e, Ia);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), sn.crossVectors(n, Pt), sn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), sn.crossVectors(n, Pt)), sn.normalize(), ai.crossVectors(Pt, sn), r[0] = sn.x, r[4] = ai.x, r[8] = Pt.x, r[1] = sn.y, r[5] = ai.y, r[9] = Pt.y, r[2] = sn.z, r[6] = ai.z, r[10] = Pt.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], d = n[1], m = n[5], u = n[9], p = n[13], x = n[2], S = n[6], f = n[10], h = n[14], M = n[3], A = n[7], T = n[11], C = n[15], y = r[0], w = r[4], g = r[8], b = r[12], D = r[1], R = r[5], F = r[9], k = r[13], X = r[2], I = r[6], H = r[10], z = r[14], J = r[3], Q = r[7], ce = r[11], xe = r[15];
    return s[0] = a * y + o * D + l * X + c * J, s[4] = a * w + o * R + l * I + c * Q, s[8] = a * g + o * F + l * H + c * ce, s[12] = a * b + o * k + l * z + c * xe, s[1] = d * y + m * D + u * X + p * J, s[5] = d * w + m * R + u * I + p * Q, s[9] = d * g + m * F + u * H + p * ce, s[13] = d * b + m * k + u * z + p * xe, s[2] = x * y + S * D + f * X + h * J, s[6] = x * w + S * R + f * I + h * Q, s[10] = x * g + S * F + f * H + h * ce, s[14] = x * b + S * k + f * z + h * xe, s[3] = M * y + A * D + T * X + C * J, s[7] = M * w + A * R + T * I + C * Q, s[11] = M * g + A * F + T * H + C * ce, s[15] = M * b + A * k + T * z + C * xe, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], d = e[2], m = e[6], u = e[10], p = e[14], x = e[3], S = e[7], f = e[11], h = e[15], M = l * p - c * u, A = o * p - c * m, T = o * u - l * m, C = a * p - c * d, y = a * u - l * d, w = a * m - o * d;
    return t * (S * M - f * A + h * T) - n * (x * M - f * C + h * y) + r * (x * A - S * C + h * w) - s * (x * T - S * y + f * w);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], d = e[8], m = e[9], u = e[10], p = e[11], x = e[12], S = e[13], f = e[14], h = e[15], M = t * o - n * a, A = t * l - r * a, T = t * c - s * a, C = n * l - r * o, y = n * c - s * o, w = r * c - s * l, g = d * S - m * x, b = d * f - u * x, D = d * h - p * x, R = m * f - u * S, F = m * h - p * S, k = u * h - p * f, X = M * k - A * F + T * R + C * D - y * b + w * g;
    if (X === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / X;
    return e[0] = (o * k - l * F + c * R) * I, e[1] = (r * F - n * k - s * R) * I, e[2] = (S * w - f * y + h * C) * I, e[3] = (u * y - m * w - p * C) * I, e[4] = (l * D - a * k - c * b) * I, e[5] = (t * k - r * D + s * b) * I, e[6] = (f * T - x * w - h * A) * I, e[7] = (d * w - u * T + p * A) * I, e[8] = (a * F - o * D + c * g) * I, e[9] = (n * D - t * F - s * g) * I, e[10] = (x * y - S * T + h * M) * I, e[11] = (m * T - d * y - p * M) * I, e[12] = (o * b - a * R - l * g) * I, e[13] = (t * R - n * b + r * g) * I, e[14] = (S * A - x * C - f * M) * I, e[15] = (d * C - m * A + u * M) * I, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, d = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      d * o + n,
      d * l - r * a,
      0,
      c * l - r * o,
      d * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, d = a + a, m = o + o, u = s * c, p = s * d, x = s * m, S = a * d, f = a * m, h = o * m, M = l * c, A = l * d, T = l * m, C = n.x, y = n.y, w = n.z;
    return r[0] = (1 - (S + h)) * C, r[1] = (p + T) * C, r[2] = (x - A) * C, r[3] = 0, r[4] = (p - T) * y, r[5] = (1 - (u + h)) * y, r[6] = (f + M) * y, r[7] = 0, r[8] = (x + A) * w, r[9] = (f - M) * w, r[10] = (1 - (u + S)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12], e.y = r[13], e.z = r[14];
    const s = this.determinant();
    if (s === 0)
      return n.set(1, 1, 1), t.identity(), this;
    let a = yn.set(r[0], r[1], r[2]).length();
    const o = yn.set(r[4], r[5], r[6]).length(), l = yn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Nt.copy(this);
    const c = 1 / a, d = 1 / o, m = 1 / l;
    return Nt.elements[0] *= c, Nt.elements[1] *= c, Nt.elements[2] *= c, Nt.elements[4] *= d, Nt.elements[5] *= d, Nt.elements[6] *= d, Nt.elements[8] *= m, Nt.elements[9] *= m, Nt.elements[10] *= m, t.setFromRotationMatrix(Nt), n.x = a, n.y = o, n.z = l, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, s, a, o = 2e3, l = !1) {
    const c = this.elements, d = 2 * s / (t - e), m = 2 * s / (n - r), u = (t + e) / (t - e), p = (n + r) / (n - r);
    let x, S;
    if (l)
      x = s / (a - s), S = a * s / (a - s);
    else if (o === 2e3)
      x = -(a + s) / (a - s), S = -2 * a * s / (a - s);
    else if (o === 2001)
      x = -a / (a - s), S = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = d, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = m, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = x, c[14] = S, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, s, a, o = 2e3, l = !1) {
    const c = this.elements, d = 2 / (t - e), m = 2 / (n - r), u = -(t + e) / (t - e), p = -(n + r) / (n - r);
    let x, S;
    if (l)
      x = 1 / (a - s), S = a / (a - s);
    else if (o === 2e3)
      x = -2 / (a - s), S = -(a + s) / (a - s);
    else if (o === 2001)
      x = -1 / (a - s), S = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = d, c[4] = 0, c[8] = 0, c[12] = u, c[1] = 0, c[5] = m, c[9] = 0, c[13] = p, c[2] = 0, c[6] = 0, c[10] = x, c[14] = S, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
};
Fi.prototype.isMatrix4 = !0;
let ct = Fi;
const yn = /* @__PURE__ */ new N(), Nt = /* @__PURE__ */ new ct(), La = /* @__PURE__ */ new N(0, 0, 0), Ia = /* @__PURE__ */ new N(1, 1, 1), sn = /* @__PURE__ */ new N(), ai = /* @__PURE__ */ new N(), Pt = /* @__PURE__ */ new N(), Qr = /* @__PURE__ */ new ct(), es = /* @__PURE__ */ new Vn();
class fn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = fn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], d = r[9], m = r[2], u = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ze(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-d, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ze(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-m, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ze(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-m, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ze(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ze(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-m, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-ze(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-d, p), this._y = 0);
        break;
      default:
        Ae("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return Qr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Qr, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return es.setFromEuler(this), this.setFromQuaternion(es, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
fn.DEFAULT_ORDER = "XYZ";
class Ks {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Ua = 0;
const ts = /* @__PURE__ */ new N(), An = /* @__PURE__ */ new Vn(), Zt = /* @__PURE__ */ new ct(), oi = /* @__PURE__ */ new N(), Xn = /* @__PURE__ */ new N(), Fa = /* @__PURE__ */ new N(), Na = /* @__PURE__ */ new Vn(), ns = /* @__PURE__ */ new N(1, 0, 0), is = /* @__PURE__ */ new N(0, 1, 0), rs = /* @__PURE__ */ new N(0, 0, 1), ss = { type: "added" }, Oa = { type: "removed" }, bn = { type: "childadded", child: null }, Zi = { type: "childremoved", child: null };
class Mt extends Mn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ua++ }), this.uuid = ti(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Mt.DEFAULT_UP.clone();
    const e = new N(), t = new fn(), n = new Vn(), r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new ct()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Pe()
      }
    }), this.matrix = new ct(), this.matrixWorld = new ct(), this.matrixAutoUpdate = Mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ks(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return An.setFromAxisAngle(e, t), this.quaternion.multiply(An), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return An.setFromAxisAngle(e, t), this.quaternion.premultiply(An), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(ns, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(is, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(rs, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return ts.copy(e).applyQuaternion(this.quaternion), this.position.add(ts.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(ns, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(is, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(rs, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Zt.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? oi.copy(e) : oi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Xn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Zt.lookAt(Xn, oi, this.up) : Zt.lookAt(oi, Xn, this.up), this.quaternion.setFromRotationMatrix(Zt), r && (Zt.extractRotation(r.matrixWorld), An.setFromRotationMatrix(Zt), this.quaternion.premultiply(An.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (Xe("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ss), bn.child = e, this.dispatchEvent(bn), bn.child = null) : Xe("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Oa), Zi.child = e, this.dispatchEvent(Zi), Zi.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Zt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Zt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Zt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(ss), bn.child = e, this.dispatchEvent(bn), bn.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xn, e, Fa), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xn, Na, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, n = e.y, r = e.z, s = this.matrix.elements;
      s[12] += t - s[0] * t - s[4] * n - s[8] * r, s[13] += n - s[1] * t - s[5] * n - s[9] * r, s[14] += r - s[2] * t - s[6] * n - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const m = l[c];
            s(e.shapes, m);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), d = a(e.images), m = a(e.shapes), u = a(e.skeletons), p = a(e.animations), x = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), m.length > 0 && (n.shapes = m), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), x.length > 0 && (n.nodes = x);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const d = o[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Mt.DEFAULT_UP = /* @__PURE__ */ new N(0, 1, 0);
Mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Nn extends Mt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ba = { type: "move" };
class $i {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Nn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Nn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Nn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N(), this._grip.eventsEnabled = !1), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const S of e.hand.values()) {
          const f = t.getJointPose(S, n), h = this._getHandJoint(c, S);
          f !== null && (h.matrix.fromArray(f.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = f.radius), h.visible = f !== null;
        }
        const d = c.joints["index-finger-tip"], m = c.joints["thumb-tip"], u = d.position.distanceTo(m.position), p = 0.02, x = 5e-3;
        c.inputState.pinching && u > p + x ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= p - x && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1, l.eventsEnabled && l.dispatchEvent({
          type: "gripUpdated",
          data: e,
          target: this
        })));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ba)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Nn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Zs = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, an = { h: 0, s: 0, l: 0 }, li = { h: 0, s: 0, l: 0 };
function ji(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class He {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = Lt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ve.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = Ve.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ve.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = Ve.workingColorSpace) {
    if (e = Aa(e, 1), t = ze(t, 0, 1), n = ze(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = ji(a, s, e + 1 / 3), this.g = ji(a, s, e), this.b = ji(a, s, e - 1 / 3);
    }
    return Ve.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = Lt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && Ae("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          Ae("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      Ae("Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = Lt) {
    const n = Zs[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Ae("Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = en(e.r), this.g = en(e.g), this.b = en(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = On(e.r), this.g = On(e.g), this.b = On(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = Lt) {
    return Ve.workingToColorSpace(yt.copy(this), e), Math.round(ze(yt.r * 255, 0, 255)) * 65536 + Math.round(ze(yt.g * 255, 0, 255)) * 256 + Math.round(ze(yt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Lt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = Ve.workingColorSpace) {
    Ve.workingToColorSpace(yt.copy(this), t);
    const n = yt.r, r = yt.g, s = yt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const d = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const m = a - o;
      switch (c = d <= 0.5 ? m / (a + o) : m / (2 - a - o), a) {
        case n:
          l = (r - s) / m + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / m + 2;
          break;
        case s:
          l = (n - r) / m + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = d, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = Ve.workingColorSpace) {
    return Ve.workingToColorSpace(yt.copy(this), t), e.r = yt.r, e.g = yt.g, e.b = yt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Lt) {
    Ve.workingToColorSpace(yt.copy(this), e);
    const t = yt.r, n = yt.g, r = yt.b;
    return e !== Lt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(an), this.setHSL(an.h + e, an.s + t, an.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(an), e.getHSL(li);
    const n = Wi(an.h, li.h, t), r = Wi(an.s, li.s, t), s = Wi(an.l, li.l, t);
    return this.setHSL(n, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const yt = /* @__PURE__ */ new He();
He.NAMES = Zs;
class br {
  /**
   * Constructs a new fog.
   *
   * @param {number|Color} color - The fog's color.
   * @param {number} [near=1] - The minimum distance to start applying fog.
   * @param {number} [far=1000] - The maximum distance at which fog stops being calculated and applied.
   */
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new He(e), this.near = t, this.far = n;
  }
  /**
   * Returns a new fog with copied values from this instance.
   *
   * @return {Fog} A clone of this instance.
   */
  clone() {
    return new br(this.color, this.near, this.far);
  }
  /**
   * Serializes the fog into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized fog
   */
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class Ga extends Mt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new fn(), this.environmentIntensity = 1, this.environmentRotation = new fn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Ot = /* @__PURE__ */ new N(), $t = /* @__PURE__ */ new N(), Ji = /* @__PURE__ */ new N(), jt = /* @__PURE__ */ new N(), Rn = /* @__PURE__ */ new N(), Cn = /* @__PURE__ */ new N(), as = /* @__PURE__ */ new N(), Qi = /* @__PURE__ */ new N(), er = /* @__PURE__ */ new N(), tr = /* @__PURE__ */ new N(), nr = /* @__PURE__ */ new lt(), ir = /* @__PURE__ */ new lt(), rr = /* @__PURE__ */ new lt();
class Gt {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new N(), t = new N(), n = new N()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ot.subVectors(e, t), r.cross(Ot);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, s) {
    Ot.subVectors(r, t), $t.subVectors(n, t), Ji.subVectors(e, t);
    const a = Ot.dot(Ot), o = Ot.dot($t), l = Ot.dot(Ji), c = $t.dot($t), d = $t.dot(Ji), m = a * c - o * o;
    if (m === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / m, p = (c * l - o * d) * u, x = (a * d - o * l) * u;
    return s.set(1 - p - x, x, p);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, jt) === null ? !1 : jt.x >= 0 && jt.y >= 0 && jt.x + jt.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, jt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, jt.x), l.addScaledVector(a, jt.y), l.addScaledVector(o, jt.z), l);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return nr.setScalar(0), ir.setScalar(0), rr.setScalar(0), nr.fromBufferAttribute(e, t), ir.fromBufferAttribute(e, n), rr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(nr, s.x), a.addScaledVector(ir, s.y), a.addScaledVector(rr, s.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return Ot.subVectors(n, t), $t.subVectors(e, t), Ot.cross($t).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return Ot.subVectors(this.c, this.b), $t.subVectors(this.a, this.b), Ot.cross($t).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return Gt.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return Gt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, s) {
    return Gt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return Gt.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Gt.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Rn.subVectors(r, n), Cn.subVectors(s, n), Qi.subVectors(e, n);
    const l = Rn.dot(Qi), c = Cn.dot(Qi);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    er.subVectors(e, r);
    const d = Rn.dot(er), m = Cn.dot(er);
    if (d >= 0 && m <= d)
      return t.copy(r);
    const u = l * m - d * c;
    if (u <= 0 && l >= 0 && d <= 0)
      return a = l / (l - d), t.copy(n).addScaledVector(Rn, a);
    tr.subVectors(e, s);
    const p = Rn.dot(tr), x = Cn.dot(tr);
    if (x >= 0 && p <= x)
      return t.copy(s);
    const S = p * c - l * x;
    if (S <= 0 && c >= 0 && x <= 0)
      return o = c / (c - x), t.copy(n).addScaledVector(Cn, o);
    const f = d * x - p * m;
    if (f <= 0 && m - d >= 0 && p - x >= 0)
      return as.subVectors(s, r), o = (m - d) / (m - d + (p - x)), t.copy(r).addScaledVector(as, o);
    const h = 1 / (f + S + u);
    return a = S * h, o = u * h, t.copy(n).addScaledVector(Rn, a).addScaledVector(Cn, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class ni {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Bt.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Bt.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = Bt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Bt) : Bt.fromBufferAttribute(s, a), Bt.applyMatrix4(e.matrixWorld), this.expandByPoint(Bt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ci.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ci.copy(n.boundingBox)), ci.applyMatrix4(e.matrixWorld), this.union(ci);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, Bt), Bt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(qn), ui.subVectors(this.max, qn), wn.subVectors(e.a, qn), Pn.subVectors(e.b, qn), Dn.subVectors(e.c, qn), on.subVectors(Pn, wn), ln.subVectors(Dn, Pn), pn.subVectors(wn, Dn);
    let t = [
      0,
      -on.z,
      on.y,
      0,
      -ln.z,
      ln.y,
      0,
      -pn.z,
      pn.y,
      on.z,
      0,
      -on.x,
      ln.z,
      0,
      -ln.x,
      pn.z,
      0,
      -pn.x,
      -on.y,
      on.x,
      0,
      -ln.y,
      ln.x,
      0,
      -pn.y,
      pn.x,
      0
    ];
    return !sr(t, wn, Pn, Dn, ui) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !sr(t, wn, Pn, Dn, ui)) ? !1 : (hi.crossVectors(on, ln), t = [hi.x, hi.y, hi.z], sr(t, wn, Pn, Dn, ui));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Bt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Bt).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Jt), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const Jt = [
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N()
], Bt = /* @__PURE__ */ new N(), ci = /* @__PURE__ */ new ni(), wn = /* @__PURE__ */ new N(), Pn = /* @__PURE__ */ new N(), Dn = /* @__PURE__ */ new N(), on = /* @__PURE__ */ new N(), ln = /* @__PURE__ */ new N(), pn = /* @__PURE__ */ new N(), qn = /* @__PURE__ */ new N(), ui = /* @__PURE__ */ new N(), hi = /* @__PURE__ */ new N(), mn = /* @__PURE__ */ new N();
function sr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    mn.fromArray(i, s);
    const o = r.x * Math.abs(mn.x) + r.y * Math.abs(mn.y) + r.z * Math.abs(mn.z), l = e.dot(mn), c = t.dot(mn), d = n.dot(mn);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o)
      return !1;
  }
  return !0;
}
const pt = /* @__PURE__ */ new N(), fi = /* @__PURE__ */ new Ce();
let za = 0;
class qt extends Mn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: za++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        fi.fromBufferAttribute(this, t), fi.applyMatrix3(e), this.setXY(t, fi.x, fi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        pt.fromBufferAttribute(this, t), pt.applyMatrix3(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t), pt.applyMatrix4(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t), pt.applyNormalMatrix(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      pt.fromBufferAttribute(this, t), pt.transformDirection(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Wn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = Rt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Rt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Rt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Rt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Wn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Rt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Rt(t, this.array), n = Rt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Rt(t, this.array), n = Rt(n, this.array), r = Rt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Rt(t, this.array), n = Rt(n, this.array), r = Rt(r, this.array), s = Rt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
  /**
   * Disposes of the buffer attribute. Available only in {@link WebGPURenderer}.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class $s extends qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class js extends qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Je extends qt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const Va = /* @__PURE__ */ new ni(), Yn = /* @__PURE__ */ new N(), ar = /* @__PURE__ */ new N();
class Ni {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new N(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Va.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Yn.subVectors(e, this.center);
    const t = Yn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Yn, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ar.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Yn.copy(e.center).add(ar)), this.expandByPoint(Yn.copy(e.center).sub(ar))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let Ha = 0;
const Ut = /* @__PURE__ */ new ct(), or = /* @__PURE__ */ new Mt(), Ln = /* @__PURE__ */ new N(), Dt = /* @__PURE__ */ new ni(), Kn = /* @__PURE__ */ new ni(), vt = /* @__PURE__ */ new N();
class St extends Mn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ha++ }), this.uuid = ti(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Sa(e) ? js : $s)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Pe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return or.lookAt(e), or.updateMatrix(), this.applyMatrix4(or.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ln).negate(), this.translate(Ln.x, Ln.y, Ln.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Je(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ni());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new N(-1 / 0, -1 / 0, -1 / 0),
        new N(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (vt.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(vt), vt.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(vt)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ni());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Kn.setFromBufferAttribute(o), this.morphTargetsRelative ? (vt.addVectors(Dt.min, Kn.min), Dt.expandByPoint(vt), vt.addVectors(Dt.max, Kn.max), Dt.expandByPoint(vt)) : (Dt.expandByPoint(Kn.min), Dt.expandByPoint(Kn.max));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        vt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(vt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, d = o.count; c < d; c++)
            vt.fromBufferAttribute(o, c), l && (Ln.fromBufferAttribute(e, c), vt.add(Ln)), r = Math.max(r, n.distanceToSquared(vt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new qt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let g = 0; g < n.count; g++)
      o[g] = new N(), l[g] = new N();
    const c = new N(), d = new N(), m = new N(), u = new Ce(), p = new Ce(), x = new Ce(), S = new N(), f = new N();
    function h(g, b, D) {
      c.fromBufferAttribute(n, g), d.fromBufferAttribute(n, b), m.fromBufferAttribute(n, D), u.fromBufferAttribute(s, g), p.fromBufferAttribute(s, b), x.fromBufferAttribute(s, D), d.sub(c), m.sub(c), p.sub(u), x.sub(u);
      const R = 1 / (p.x * x.y - x.x * p.y);
      isFinite(R) && (S.copy(d).multiplyScalar(x.y).addScaledVector(m, -p.y).multiplyScalar(R), f.copy(m).multiplyScalar(p.x).addScaledVector(d, -x.x).multiplyScalar(R), o[g].add(S), o[b].add(S), o[D].add(S), l[g].add(f), l[b].add(f), l[D].add(f));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let g = 0, b = M.length; g < b; ++g) {
      const D = M[g], R = D.start, F = D.count;
      for (let k = R, X = R + F; k < X; k += 3)
        h(
          e.getX(k + 0),
          e.getX(k + 1),
          e.getX(k + 2)
        );
    }
    const A = new N(), T = new N(), C = new N(), y = new N();
    function w(g) {
      C.fromBufferAttribute(r, g), y.copy(C);
      const b = o[g];
      A.copy(b), A.sub(C.multiplyScalar(C.dot(b))).normalize(), T.crossVectors(y, b);
      const R = T.dot(l[g]) < 0 ? -1 : 1;
      a.setXYZW(g, A.x, A.y, A.z, R);
    }
    for (let g = 0, b = M.length; g < b; ++g) {
      const D = M[g], R = D.start, F = D.count;
      for (let k = R, X = R + F; k < X; k += 3)
        w(e.getX(k + 0)), w(e.getX(k + 1)), w(e.getX(k + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new qt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, p = n.count; u < p; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new N(), s = new N(), a = new N(), o = new N(), l = new N(), c = new N(), d = new N(), m = new N();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const x = e.getX(u + 0), S = e.getX(u + 1), f = e.getX(u + 2);
          r.fromBufferAttribute(t, x), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, f), d.subVectors(a, s), m.subVectors(r, s), d.cross(m), o.fromBufferAttribute(n, x), l.fromBufferAttribute(n, S), c.fromBufferAttribute(n, f), o.add(d), l.add(d), c.add(d), n.setXYZ(x, o.x, o.y, o.z), n.setXYZ(S, l.x, l.y, l.z), n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let u = 0, p = t.count; u < p; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), d.subVectors(a, s), m.subVectors(r, s), d.cross(m), n.setXYZ(u + 0, d.x, d.y, d.z), n.setXYZ(u + 1, d.x, d.y, d.z), n.setXYZ(u + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      vt.fromBufferAttribute(e, t), vt.normalize(), e.setXYZ(t, vt.x, vt.y, vt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, d = o.itemSize, m = o.normalized, u = new c.constructor(l.length * d);
      let p = 0, x = 0;
      for (let S = 0, f = l.length; S < f; S++) {
        o.isInterleavedBufferAttribute ? p = l[S] * o.data.stride + o.offset : p = l[S] * d;
        for (let h = 0; h < d; h++)
          u[x++] = c[p++];
      }
      return new qt(u, d, m);
    }
    if (this.index === null)
      return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new St(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let d = 0, m = c.length; d < m; d++) {
        const u = c[d], p = e(u, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], d = [];
      for (let m = 0, u = c.length; m < u; m++) {
        const p = c[m];
        d.push(p.toJSON(e.data));
      }
      d.length > 0 && (r[l] = d, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const c in r) {
      const d = r[c];
      this.setAttribute(c, d.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const d = [], m = s[c];
      for (let u = 0, p = m.length; u < p; u++)
        d.push(m[u].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, d = a.length; c < d; c++) {
      const m = a[c];
      this.addGroup(m.start, m.count, m.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
let ka = 0;
class Hn extends Mn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ka++ }), this.uuid = ti(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new He(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Ae(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Qt = /* @__PURE__ */ new N(), lr = /* @__PURE__ */ new N(), di = /* @__PURE__ */ new N(), cn = /* @__PURE__ */ new N(), cr = /* @__PURE__ */ new N(), pi = /* @__PURE__ */ new N(), ur = /* @__PURE__ */ new N();
class Js {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new N(), t = new N(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, Qt)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = Qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Qt.copy(this.origin).addScaledVector(this.direction, t), Qt.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    lr.copy(e).add(t).multiplyScalar(0.5), di.copy(t).sub(e).normalize(), cn.copy(this.origin).sub(lr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(di), o = cn.dot(this.direction), l = -cn.dot(di), c = cn.lengthSq(), d = Math.abs(1 - a * a);
    let m, u, p, x;
    if (d > 0)
      if (m = a * l - o, u = a * o - l, x = s * d, m >= 0)
        if (u >= -x)
          if (u <= x) {
            const S = 1 / d;
            m *= S, u *= S, p = m * (m + a * u + 2 * o) + u * (a * m + u + 2 * l) + c;
          } else
            u = s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * l) + c;
        else
          u = -s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * l) + c;
      else
        u <= -x ? (m = Math.max(0, -(-a * s + o)), u = m > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -m * m + u * (u + 2 * l) + c) : u <= x ? (m = 0, u = Math.min(Math.max(-s, -l), s), p = u * (u + 2 * l) + c) : (m = Math.max(0, -(a * s + o)), u = m > 0 ? s : Math.min(Math.max(-s, -l), s), p = -m * m + u * (u + 2 * l) + c);
    else
      u = a > 0 ? -s : s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, m), r && r.copy(lr).addScaledVector(di, u), p;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    Qt.subVectors(e.center, this.origin);
    const n = Qt.dot(this.direction), r = Qt.dot(Qt) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, d = 1 / this.direction.y, m = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, r = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, r = (e.min.x - u.x) * c), d >= 0 ? (s = (e.min.y - u.y) * d, a = (e.max.y - u.y) * d) : (s = (e.max.y - u.y) * d, a = (e.min.y - u.y) * d), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), m >= 0 ? (o = (e.min.z - u.z) * m, l = (e.max.z - u.z) * m) : (o = (e.max.z - u.z) * m, l = (e.min.z - u.z) * m), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, Qt) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, s) {
    cr.subVectors(t, e), pi.subVectors(n, e), ur.crossVectors(cr, pi);
    let a = this.direction.dot(ur), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    cn.subVectors(this.origin, e);
    const l = o * this.direction.dot(pi.crossVectors(cn, pi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(cr.cross(cn));
    if (c < 0 || l + c > a)
      return null;
    const d = -o * cn.dot(ur);
    return d < 0 ? null : this.at(d / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Rr extends Hn {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new He(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const os = /* @__PURE__ */ new ct(), _n = /* @__PURE__ */ new Js(), mi = /* @__PURE__ */ new Ni(), ls = /* @__PURE__ */ new N(), _i = /* @__PURE__ */ new N(), gi = /* @__PURE__ */ new N(), xi = /* @__PURE__ */ new N(), hr = /* @__PURE__ */ new N(), vi = /* @__PURE__ */ new N(), cs = /* @__PURE__ */ new N(), Mi = /* @__PURE__ */ new N();
class dt extends Mt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new St(), t = new Rr()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      vi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = o[l], m = s[l];
        d !== 0 && (hr.fromBufferAttribute(m, e), a ? vi.addScaledVector(hr, d) : vi.addScaledVector(hr.sub(t), d));
      }
      t.add(vi);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), mi.copy(n.boundingSphere), mi.applyMatrix4(s), _n.copy(e.ray).recast(e.near), !(mi.containsPoint(_n.origin) === !1 && (_n.intersectSphere(mi, ls) === null || _n.origin.distanceToSquared(ls) > (e.far - e.near) ** 2)) && (os.copy(s).invert(), _n.copy(e.ray).applyMatrix4(os), !(n.boundingBox !== null && _n.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, _n)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, d = s.attributes.uv1, m = s.attributes.normal, u = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let x = 0, S = u.length; x < S; x++) {
          const f = u[x], h = a[f.materialIndex], M = Math.max(f.start, p.start), A = Math.min(o.count, Math.min(f.start + f.count, p.start + p.count));
          for (let T = M, C = A; T < C; T += 3) {
            const y = o.getX(T), w = o.getX(T + 1), g = o.getX(T + 2);
            r = Si(this, h, e, n, c, d, m, y, w, g), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = f.materialIndex, t.push(r));
          }
        }
      else {
        const x = Math.max(0, p.start), S = Math.min(o.count, p.start + p.count);
        for (let f = x, h = S; f < h; f += 3) {
          const M = o.getX(f), A = o.getX(f + 1), T = o.getX(f + 2);
          r = Si(this, a, e, n, c, d, m, M, A, T), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let x = 0, S = u.length; x < S; x++) {
          const f = u[x], h = a[f.materialIndex], M = Math.max(f.start, p.start), A = Math.min(l.count, Math.min(f.start + f.count, p.start + p.count));
          for (let T = M, C = A; T < C; T += 3) {
            const y = T, w = T + 1, g = T + 2;
            r = Si(this, h, e, n, c, d, m, y, w, g), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = f.materialIndex, t.push(r));
          }
        }
      else {
        const x = Math.max(0, p.start), S = Math.min(l.count, p.start + p.count);
        for (let f = x, h = S; f < h; f += 3) {
          const M = f, A = f + 1, T = f + 2;
          r = Si(this, a, e, n, c, d, m, M, A, T), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
        }
      }
  }
}
function Wa(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === 0, o), l === null) return null;
  Mi.copy(o), Mi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Mi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Mi.clone(),
    object: i
  };
}
function Si(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, _i), i.getVertexPosition(l, gi), i.getVertexPosition(c, xi);
  const d = Wa(i, e, t, n, _i, gi, xi, cs);
  if (d) {
    const m = new N();
    Gt.getBarycoord(cs, _i, gi, xi, m), r && (d.uv = Gt.getInterpolatedAttribute(r, o, l, c, m, new Ce())), s && (d.uv1 = Gt.getInterpolatedAttribute(s, o, l, c, m, new Ce())), a && (d.normal = Gt.getInterpolatedAttribute(a, o, l, c, m, new N()), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: l,
      c,
      normal: new N(),
      materialIndex: 0
    };
    Gt.getNormal(_i, gi, xi, u.normal), d.face = u, d.barycoord = m;
  }
  return d;
}
class Xa extends bt {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = null, t = 1, n = 1, r, s, a, o, l, c = 1003, d = 1003, m, u) {
    super(null, a, o, l, c, d, r, s, m, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const fr = /* @__PURE__ */ new N(), qa = /* @__PURE__ */ new N(), Ya = /* @__PURE__ */ new Pe();
class xn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new N(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = fr.subVectors(n, t).cross(qa.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @param {boolean} [clampToLine=true] - Whether to clamp the intersection to the line segment.
   * @return {?Vector3} The intersection point. Returns `null` if no intersection is detected.
   */
  intersectLine(e, t, n = !0) {
    const r = e.delta(fr), s = this.normal.dot(r);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / s;
    return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || Ya.getNormalMatrix(e), r = this.coplanarPoint(fr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const gn = /* @__PURE__ */ new Ni(), Ka = /* @__PURE__ */ new Ce(0.5, 0.5), Ei = /* @__PURE__ */ new N();
class Cr {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new xn(), t = new xn(), n = new xn(), r = new xn(), s = new xn(), a = new xn()) {
    this.planes = [e, t, n, r, s, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], l = s[2], c = s[3], d = s[4], m = s[5], u = s[6], p = s[7], x = s[8], S = s[9], f = s[10], h = s[11], M = s[12], A = s[13], T = s[14], C = s[15];
    if (r[0].setComponents(c - a, p - d, h - x, C - M).normalize(), r[1].setComponents(c + a, p + d, h + x, C + M).normalize(), r[2].setComponents(c + o, p + m, h + S, C + A).normalize(), r[3].setComponents(c - o, p - m, h - S, C - A).normalize(), n)
      r[4].setComponents(l, u, f, T).normalize(), r[5].setComponents(c - l, p - u, h - f, C - T).normalize();
    else if (r[4].setComponents(c - l, p - u, h - f, C - T).normalize(), t === 2e3)
      r[5].setComponents(c + l, p + u, h + f, C + T).normalize();
    else if (t === 2001)
      r[5].setComponents(l, u, f, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(gn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    gn.center.set(0, 0, 0);
    const t = Ka.distanceTo(e.center);
    return gn.radius = 0.7071067811865476 + t, gn.applyMatrix4(e.matrixWorld), this.intersectsSphere(gn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Ei.x = r.normal.x > 0 ? e.max.x : e.min.x, Ei.y = r.normal.y > 0 ? e.max.y : e.min.y, Ei.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ei) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qs extends Hn {
  /**
   * Constructs a new line basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new He(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ii = /* @__PURE__ */ new N(), Ui = /* @__PURE__ */ new N(), us = /* @__PURE__ */ new ct(), Zn = /* @__PURE__ */ new Js(), Ti = /* @__PURE__ */ new Ni(), dr = /* @__PURE__ */ new N(), hs = /* @__PURE__ */ new N();
class Za extends Mt {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new St(), t = new Qs()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Ii.fromBufferAttribute(t, r - 1), Ui.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Ii.distanceTo(Ui);
      e.setAttribute("lineDistance", new Je(n, 1));
    } else
      Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ti.copy(n.boundingSphere), Ti.applyMatrix4(r), Ti.radius += s, e.ray.intersectsSphere(Ti) === !1) return;
    us.copy(r).invert(), Zn.copy(e.ray).applyMatrix4(us);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, d = n.index, u = n.attributes.position;
    if (d !== null) {
      const p = Math.max(0, a.start), x = Math.min(d.count, a.start + a.count);
      for (let S = p, f = x - 1; S < f; S += c) {
        const h = d.getX(S), M = d.getX(S + 1), A = yi(this, e, Zn, l, h, M, S);
        A && t.push(A);
      }
      if (this.isLineLoop) {
        const S = d.getX(x - 1), f = d.getX(p), h = yi(this, e, Zn, l, S, f, x - 1);
        h && t.push(h);
      }
    } else {
      const p = Math.max(0, a.start), x = Math.min(u.count, a.start + a.count);
      for (let S = p, f = x - 1; S < f; S += c) {
        const h = yi(this, e, Zn, l, S, S + 1, S);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const S = yi(this, e, Zn, l, x - 1, p, x - 1);
        S && t.push(S);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function yi(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (Ii.fromBufferAttribute(o, r), Ui.fromBufferAttribute(o, s), t.distanceSqToSegment(Ii, Ui, dr, hs) > n) return;
  dr.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(dr);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: hs.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
class ea extends bt {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = 301, n, r, s, a, o, l, c, d) {
    super(e, t, n, r, s, a, o, l, c, d), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Gn extends bt {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, n = 1014, r, s, a, o = 1003, l = 1003, c, d = 1026, m = 1) {
    if (d !== 1026 && d !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: m };
    super(u, r, s, a, o, l, d, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Ar(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class $a extends Gn {
  /**
   * Constructs a new cube depth texture.
   *
   * @param {number} size - The size (width and height) of each cube face.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(e, t = 1014, n = 301, r, s, a = 1003, o = 1003, l, c = 1026) {
    const d = { width: e, height: e, depth: 1 }, m = [d, d, d, d, d, d];
    super(e, e, t, n, r, s, a, o, l, c), this.image = m, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  /**
   * Alias for {@link CubeDepthTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ta extends bt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class ii extends St {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], d = [], m = [];
    let u = 0, p = 0;
    x("z", "y", "x", -1, -1, n, t, e, a, s, 0), x("z", "y", "x", 1, -1, n, t, -e, a, s, 1), x("x", "z", "y", 1, 1, e, n, t, r, a, 2), x("x", "z", "y", 1, -1, e, n, -t, r, a, 3), x("x", "y", "z", 1, -1, e, t, n, r, s, 4), x("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Je(c, 3)), this.setAttribute("normal", new Je(d, 3)), this.setAttribute("uv", new Je(m, 2));
    function x(S, f, h, M, A, T, C, y, w, g, b) {
      const D = T / w, R = C / g, F = T / 2, k = C / 2, X = y / 2, I = w + 1, H = g + 1;
      let z = 0, J = 0;
      const Q = new N();
      for (let ce = 0; ce < H; ce++) {
        const xe = ce * R - k;
        for (let Ee = 0; Ee < I; Ee++) {
          const ke = Ee * D - F;
          Q[S] = ke * M, Q[f] = xe * A, Q[h] = X, c.push(Q.x, Q.y, Q.z), Q[S] = 0, Q[f] = 0, Q[h] = y > 0 ? 1 : -1, d.push(Q.x, Q.y, Q.z), m.push(Ee / w), m.push(1 - ce / g), z += 1;
        }
      }
      for (let ce = 0; ce < g; ce++)
        for (let xe = 0; xe < w; xe++) {
          const Ee = u + xe + I * ce, ke = u + xe + I * (ce + 1), Ke = u + (xe + 1) + I * (ce + 1), Ie = u + (xe + 1) + I * ce;
          l.push(Ee, ke, Ie), l.push(ke, Ke, Ie), J += 6;
        }
      o.addGroup(p, J, b), p += J, u += z;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new ii(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class wr extends St {
  /**
   * Constructs a new capsule geometry.
   *
   * @param {number} [radius=1] - Radius of the capsule.
   * @param {number} [height=1] - Height of the middle section.
   * @param {number} [capSegments=4] - Number of curve segments used to build each cap.
   * @param {number} [radialSegments=8] - Number of segmented faces around the circumference of the capsule. Must be an integer >= 3.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the middle section. Must be an integer >= 1.
   */
  constructor(e = 1, t = 1, n = 4, r = 8, s = 1) {
    super(), this.type = "CapsuleGeometry", this.parameters = {
      radius: e,
      height: t,
      capSegments: n,
      radialSegments: r,
      heightSegments: s
    }, t = Math.max(0, t), n = Math.max(1, Math.floor(n)), r = Math.max(3, Math.floor(r)), s = Math.max(1, Math.floor(s));
    const a = [], o = [], l = [], c = [], d = t / 2, m = Math.PI / 2 * e, u = t, p = 2 * m + u, x = n * 2 + s, S = r + 1, f = new N(), h = new N();
    for (let M = 0; M <= x; M++) {
      let A = 0, T = 0, C = 0, y = 0;
      if (M <= n) {
        const b = M / n, D = b * Math.PI / 2;
        T = -d - e * Math.cos(D), C = e * Math.sin(D), y = -e * Math.cos(D), A = b * m;
      } else if (M <= n + s) {
        const b = (M - n) / s;
        T = -d + b * t, C = e, y = 0, A = m + b * u;
      } else {
        const b = (M - n - s) / n, D = b * Math.PI / 2;
        T = d + e * Math.sin(D), C = e * Math.cos(D), y = e * Math.sin(D), A = m + u + b * m;
      }
      const w = Math.max(0, Math.min(1, A / p));
      let g = 0;
      M === 0 ? g = 0.5 / r : M === x && (g = -0.5 / r);
      for (let b = 0; b <= r; b++) {
        const D = b / r, R = D * Math.PI * 2, F = Math.sin(R), k = Math.cos(R);
        h.x = -C * k, h.y = T, h.z = C * F, o.push(h.x, h.y, h.z), f.set(
          -C * k,
          y,
          C * F
        ), f.normalize(), l.push(f.x, f.y, f.z), c.push(D + g, w);
      }
      if (M > 0) {
        const b = (M - 1) * S;
        for (let D = 0; D < r; D++) {
          const R = b + D, F = b + D + 1, k = M * S + D, X = M * S + D + 1;
          a.push(R, F, k), a.push(F, X, k);
        }
      }
    }
    this.setIndex(a), this.setAttribute("position", new Je(o, 3)), this.setAttribute("normal", new Je(l, 3)), this.setAttribute("uv", new Je(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CapsuleGeometry} A new instance.
   */
  static fromJSON(e) {
    return new wr(e.radius, e.height, e.capSegments, e.radialSegments, e.heightSegments);
  }
}
class Pr extends St {
  /**
   * Constructs a new circle geometry.
   *
   * @param {number} [radius=1] - Radius of the circle.
   * @param {number} [segments=32] - Number of segments (triangles), minimum = `3`.
   * @param {number} [thetaStart=0] - Start angle for first segment in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta,
   * of the circular sector in radians. The default value results in a complete circle.
   */
  constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: r
    }, t = Math.max(3, t);
    const s = [], a = [], o = [], l = [], c = new N(), d = new Ce();
    a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5);
    for (let m = 0, u = 3; m <= t; m++, u += 3) {
      const p = n + m / t * r;
      c.x = e * Math.cos(p), c.y = e * Math.sin(p), a.push(c.x, c.y, c.z), o.push(0, 0, 1), d.x = (a[u] / e + 1) / 2, d.y = (a[u + 1] / e + 1) / 2, l.push(d.x, d.y);
    }
    for (let m = 1; m <= t; m++)
      s.push(m, m + 1, 0);
    this.setIndex(s), this.setAttribute("position", new Je(a, 3)), this.setAttribute("normal", new Je(o, 3)), this.setAttribute("uv", new Je(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CircleGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Pr(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Oi extends St {
  /**
   * Constructs a new cylinder geometry.
   *
   * @param {number} [radiusTop=1] - Radius of the cylinder at the top.
   * @param {number} [radiusBottom=1] - Radius of the cylinder at the bottom.
   * @param {number} [height=1] - Height of the cylinder.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cylinder.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cylinder.
   * @param {boolean} [openEnded=false] - Whether the base of the cylinder is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cylinder.
   */
  constructor(e = 1, t = 1, n = 1, r = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const d = [], m = [], u = [], p = [];
    let x = 0;
    const S = [], f = n / 2;
    let h = 0;
    M(), a === !1 && (e > 0 && A(!0), t > 0 && A(!1)), this.setIndex(d), this.setAttribute("position", new Je(m, 3)), this.setAttribute("normal", new Je(u, 3)), this.setAttribute("uv", new Je(p, 2));
    function M() {
      const T = new N(), C = new N();
      let y = 0;
      const w = (t - e) / n;
      for (let g = 0; g <= s; g++) {
        const b = [], D = g / s, R = D * (t - e) + e;
        for (let F = 0; F <= r; F++) {
          const k = F / r, X = k * l + o, I = Math.sin(X), H = Math.cos(X);
          C.x = R * I, C.y = -D * n + f, C.z = R * H, m.push(C.x, C.y, C.z), T.set(I, w, H).normalize(), u.push(T.x, T.y, T.z), p.push(k, 1 - D), b.push(x++);
        }
        S.push(b);
      }
      for (let g = 0; g < r; g++)
        for (let b = 0; b < s; b++) {
          const D = S[b][g], R = S[b + 1][g], F = S[b + 1][g + 1], k = S[b][g + 1];
          (e > 0 || b !== 0) && (d.push(D, R, k), y += 3), (t > 0 || b !== s - 1) && (d.push(R, F, k), y += 3);
        }
      c.addGroup(h, y, 0), h += y;
    }
    function A(T) {
      const C = x, y = new Ce(), w = new N();
      let g = 0;
      const b = T === !0 ? e : t, D = T === !0 ? 1 : -1;
      for (let F = 1; F <= r; F++)
        m.push(0, f * D, 0), u.push(0, D, 0), p.push(0.5, 0.5), x++;
      const R = x;
      for (let F = 0; F <= r; F++) {
        const X = F / r * l + o, I = Math.cos(X), H = Math.sin(X);
        w.x = b * H, w.y = f * D, w.z = b * I, m.push(w.x, w.y, w.z), u.push(0, D, 0), y.x = I * 0.5 + 0.5, y.y = H * 0.5 * D + 0.5, p.push(y.x, y.y), x++;
      }
      for (let F = 0; F < r; F++) {
        const k = C + F, X = R + F;
        T === !0 ? d.push(X, X + 1, k) : d.push(X + 1, X, k), g += 3;
      }
      c.addGroup(h, g, T === !0 ? 1 : 2), h += g;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CylinderGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Oi(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Dr extends Oi {
  /**
   * Constructs a new cone geometry.
   *
   * @param {number} [radius=1] - Radius of the cone base.
   * @param {number} [height=1] - Height of the cone.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cone.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cone.
   * @param {boolean} [openEnded=false] - Whether the base of the cone is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cone.
   */
  constructor(e = 1, t = 1, n = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, r, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: r,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {ConeGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Dr(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Lr extends St {
  /**
   * Constructs a new lathe geometry.
   *
   * @param {Array<Vector2|Vector3>} [points] - An array of points in 2D space. The x-coordinate of each point
   * must be greater than zero.
   * @param {number} [segments=12] - The number of circumference segments to generate.
   * @param {number} [phiStart=0] - The starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The radian (0 to 2PI) range of the lathed section 2PI is a
   * closed lathe, less than 2PI is a portion.
   */
  constructor(e = [new Ce(0, -0.5), new Ce(0.5, 0), new Ce(0, 0.5)], t = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: r
    }, t = Math.floor(t), r = ze(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], d = 1 / t, m = new N(), u = new Ce(), p = new N(), x = new N(), S = new N();
    let f = 0, h = 0;
    for (let M = 0; M <= e.length - 1; M++)
      switch (M) {
        case 0:
          f = e[M + 1].x - e[M].x, h = e[M + 1].y - e[M].y, p.x = h * 1, p.y = -f, p.z = h * 0, S.copy(p), p.normalize(), l.push(p.x, p.y, p.z);
          break;
        case e.length - 1:
          l.push(S.x, S.y, S.z);
          break;
        default:
          f = e[M + 1].x - e[M].x, h = e[M + 1].y - e[M].y, p.x = h * 1, p.y = -f, p.z = h * 0, x.copy(p), p.x += S.x, p.y += S.y, p.z += S.z, p.normalize(), l.push(p.x, p.y, p.z), S.copy(x);
      }
    for (let M = 0; M <= t; M++) {
      const A = n + M * d * r, T = Math.sin(A), C = Math.cos(A);
      for (let y = 0; y <= e.length - 1; y++) {
        m.x = e[y].x * T, m.y = e[y].y, m.z = e[y].x * C, a.push(m.x, m.y, m.z), u.x = M / t, u.y = y / (e.length - 1), o.push(u.x, u.y);
        const w = l[3 * y + 0] * T, g = l[3 * y + 1], b = l[3 * y + 0] * C;
        c.push(w, g, b);
      }
    }
    for (let M = 0; M < t; M++)
      for (let A = 0; A < e.length - 1; A++) {
        const T = A + M * e.length, C = T, y = T + e.length, w = T + e.length + 1, g = T + 1;
        s.push(C, y, g), s.push(w, g, y);
      }
    this.setIndex(s), this.setAttribute("position", new Je(a, 3)), this.setAttribute("uv", new Je(o, 2)), this.setAttribute("normal", new Je(c, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {LatheGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Lr(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Bi extends St {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, d = l + 1, m = e / o, u = t / l, p = [], x = [], S = [], f = [];
    for (let h = 0; h < d; h++) {
      const M = h * u - a;
      for (let A = 0; A < c; A++) {
        const T = A * m - s;
        x.push(T, -M, 0), S.push(0, 0, 1), f.push(A / o), f.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let M = 0; M < o; M++) {
        const A = M + c * h, T = M + c * (h + 1), C = M + 1 + c * (h + 1), y = M + 1 + c * h;
        p.push(A, T, y), p.push(T, C, y);
      }
    this.setIndex(p), this.setAttribute("position", new Je(x, 3)), this.setAttribute("normal", new Je(S, 3)), this.setAttribute("uv", new Je(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Bi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ei extends St {
  /**
   * Constructs a new sphere geometry.
   *
   * @param {number} [radius=1] - The sphere radius.
   * @param {number} [widthSegments=32] - The number of horizontal segments. Minimum value is `3`.
   * @param {number} [heightSegments=16] - The number of vertical segments. Minimum value is `2`.
   * @param {number} [phiStart=0] - The horizontal starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The horizontal sweep angle size.
   * @param {number} [thetaStart=0] - The vertical starting angle in radians.
   * @param {number} [thetaLength=Math.PI] - The vertical sweep angle size.
   */
  constructor(e = 1, t = 32, n = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const d = [], m = new N(), u = new N(), p = [], x = [], S = [], f = [];
    for (let h = 0; h <= n; h++) {
      const M = [], A = h / n;
      let T = 0;
      h === 0 && a === 0 ? T = 0.5 / t : h === n && l === Math.PI && (T = -0.5 / t);
      for (let C = 0; C <= t; C++) {
        const y = C / t;
        m.x = -e * Math.cos(r + y * s) * Math.sin(a + A * o), m.y = e * Math.cos(a + A * o), m.z = e * Math.sin(r + y * s) * Math.sin(a + A * o), x.push(m.x, m.y, m.z), u.copy(m).normalize(), S.push(u.x, u.y, u.z), f.push(y + T, 1 - A), M.push(c++);
      }
      d.push(M);
    }
    for (let h = 0; h < n; h++)
      for (let M = 0; M < t; M++) {
        const A = d[h][M + 1], T = d[h][M], C = d[h + 1][M], y = d[h + 1][M + 1];
        (h !== 0 || a > 0) && p.push(A, T, y), (h !== n - 1 || l < Math.PI) && p.push(T, C, y);
      }
    this.setIndex(p), this.setAttribute("position", new Je(x, 3)), this.setAttribute("normal", new Je(S, 3)), this.setAttribute("uv", new Je(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {SphereGeometry} A new instance.
   */
  static fromJSON(e) {
    return new ei(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Bn extends St {
  /**
   * Constructs a new torus geometry.
   *
   * @param {number} [radius=1] - Radius of the torus, from the center of the torus to the center of the tube.
   * @param {number} [tube=0.4] - Radius of the tube. Must be smaller than `radius`.
   * @param {number} [radialSegments=12] - The number of radial segments.
   * @param {number} [tubularSegments=48] - The number of tubular segments.
   * @param {number} [arc=Math.PI*2] - Central angle in radians.
   * @param {number} [thetaStart=0] - Start of the tubular sweep in radians.
   * @param {number} [thetaLength=Math.PI*2] - Length of the tubular sweep in radians.
   */
  constructor(e = 1, t = 0.4, n = 12, r = 48, s = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: r,
      arc: s,
      thetaStart: a,
      thetaLength: o
    }, n = Math.floor(n), r = Math.floor(r);
    const l = [], c = [], d = [], m = [], u = new N(), p = new N(), x = new N();
    for (let S = 0; S <= n; S++) {
      const f = a + S / n * o;
      for (let h = 0; h <= r; h++) {
        const M = h / r * s;
        p.x = (e + t * Math.cos(f)) * Math.cos(M), p.y = (e + t * Math.cos(f)) * Math.sin(M), p.z = t * Math.sin(f), c.push(p.x, p.y, p.z), u.x = e * Math.cos(M), u.y = e * Math.sin(M), x.subVectors(p, u).normalize(), d.push(x.x, x.y, x.z), m.push(h / r), m.push(S / n);
      }
    }
    for (let S = 1; S <= n; S++)
      for (let f = 1; f <= r; f++) {
        const h = (r + 1) * S + f - 1, M = (r + 1) * (S - 1) + f - 1, A = (r + 1) * (S - 1) + f, T = (r + 1) * S + f;
        l.push(h, M, T), l.push(M, A, T);
      }
    this.setIndex(l), this.setAttribute("position", new Je(c, 3)), this.setAttribute("normal", new Je(d, 3)), this.setAttribute("uv", new Je(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {TorusGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Bn(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
function zn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (fs(r))
        r.isRenderTargetTexture ? (Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (fs(r[0])) {
          const s = [];
          for (let a = 0, o = r.length; a < o; a++)
            s[a] = r[a].clone();
          e[t][n] = s;
        } else
          e[t][n] = r.slice();
      else
        e[t][n] = r;
    }
  }
  return e;
}
function At(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = zn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function fs(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function ja(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function na(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ve.workingColorSpace;
}
const Ja = { clone: zn, merge: At };
var Qa = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, eo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Yt extends Hn {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Qa, this.fragmentShader = eo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = zn(e.uniforms), this.uniformsGroups = ja(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class to extends Yt {
  /**
   * Constructs a new raw shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class Jn extends Hn {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new He(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new He(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class no extends Hn {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class io extends Hn {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class ia extends Mt {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new He(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class ro extends ia {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Mt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new He(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const pr = /* @__PURE__ */ new ct(), ds = /* @__PURE__ */ new N(), ps = /* @__PURE__ */ new N();
class so {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ce(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new ct(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Cr(), this._frameExtents = new Ce(1, 1), this._viewportCount = 1, this._viewports = [
      new lt(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    ds.setFromMatrixPosition(e.matrixWorld), t.position.copy(ds), ps.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ps), t.updateMatrixWorld(), pr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(pr, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      1,
      0,
      // Identity Z (preserving the correct [0, 1] range from the projection matrix)
      0,
      0,
      0,
      1
    ) : n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(pr);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const Ai = /* @__PURE__ */ new N(), bi = /* @__PURE__ */ new Vn(), Ht = /* @__PURE__ */ new N();
class ra extends Mt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ct(), this.projectionMatrix = new ct(), this.projectionMatrixInverse = new ct(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(Ai, bi, Ht), Ht.x === 1 && Ht.y === 1 && Ht.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Ai, bi, Ht.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(Ai, bi, Ht), Ht.x === 1 && Ht.y === 1 && Ht.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Ai, bi, Ht.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const un = /* @__PURE__ */ new N(), ms = /* @__PURE__ */ new Ce(), _s = /* @__PURE__ */ new Ce();
class Ft extends ra {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Er * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(ki * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Er * 2 * Math.atan(
      Math.tan(ki * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    un.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(un.x, un.y).multiplyScalar(-e / un.z), un.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(un.x, un.y).multiplyScalar(-e / un.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, ms, _s), t.subVectors(_s, ms);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ki * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class Ir extends ra {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= d * this.view.offsetY, l = o - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class ao extends so {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Ir(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class gs extends ia {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Mt.DEFAULT_UP), this.updateMatrix(), this.target = new Mt(), this.shadow = new ao();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
const In = -90, Un = 1;
class oo extends Mt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ft(In, Un, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Ft(In, Un, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ft(In, Un, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ft(In, Un, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ft(In, Un, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ft(In, Un, e, t);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, d] = this.children, m = e.getRenderTarget(), u = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), x = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let f = !1;
    e.isWebGLRenderer === !0 ? f = e.state.buffers.depth.getReversed() : f = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), f && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), f && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), f && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), f && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(n, 4, r), f && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), f && e.autoClear === !1 && e.clearDepth(), e.render(t, d), e.setRenderTarget(m, u, p), e.xr.enabled = x, n.texture.needsPMREMUpdate = !0;
  }
}
class lo extends Ft {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
class co {
  /**
   * Constructs a new clock.
   *
   * @deprecated since 183.
   * @param {boolean} [autoStart=true] - Whether to automatically start the clock when
   * `getDelta()` is called for the first time.
   */
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1, Ae("Clock: This module has been deprecated. Please use THREE.Timer instead.");
  }
  /**
   * Starts the clock. When `autoStart` is set to `true`, the method is automatically
   * called by the class.
   */
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  /**
   * Stops the clock.
   */
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  /**
   * Returns the elapsed time in seconds.
   *
   * @return {number} The elapsed time.
   */
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  /**
   * Returns the delta time in seconds.
   *
   * @return {number} The delta time.
   */
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
const Br = class Br {
  /**
   * Constructs a new 2x2 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   */
  constructor(e, t, n, r) {
    this.elements = [
      1,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r);
  }
  /**
   * Sets this matrix to the 2x2 identity matrix.
   *
   * @return {Matrix2} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix2} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} n11 - 1-1 matrix element.
   * @param {number} n12 - 1-2 matrix element.
   * @param {number} n21 - 2-1 matrix element.
   * @param {number} n22 - 2-2 matrix element.
   * @return {Matrix2} A reference to this matrix.
   */
  set(e, t, n, r) {
    const s = this.elements;
    return s[0] = e, s[2] = t, s[1] = n, s[3] = r, this;
  }
};
Br.prototype.isMatrix2 = !0;
let xs = Br;
function vs(i, e, t, n) {
  const r = uo(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case 1021:
      return i * e;
    case 1028:
      return i * e / r.components * r.byteLength;
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
      return i * e * 2 / r.components * r.byteLength;
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
      return i * e * 4 / r.components * r.byteLength;
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function uo(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "184"
} }));
typeof window < "u" && (window.__THREE__ ? Ae("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "184");
function sa() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && i !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i !== null && i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function ho(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, d = o.usage, m = c.byteLength, u = i.createBuffer();
    i.bindBuffer(l, u), i.bufferData(l, c, d), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: u,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: m
    };
  }
  function n(o, l, c) {
    const d = l.array, m = l.updateRanges;
    if (i.bindBuffer(c, o), m.length === 0)
      i.bufferSubData(c, 0, d);
    else {
      m.sort((p, x) => p.start - x.start);
      let u = 0;
      for (let p = 1; p < m.length; p++) {
        const x = m[u], S = m[p];
        S.start <= x.start + x.count + 1 ? x.count = Math.max(
          x.count,
          S.start + S.count - x.start
        ) : (++u, m[u] = S);
      }
      m.length = u + 1;
      for (let p = 0, x = m.length; p < x; p++) {
        const S = m[p];
        i.bufferSubData(
          c,
          S.start * d.BYTES_PER_ELEMENT,
          d,
          S.start,
          S.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const d = e.get(o);
      (!d || d.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var fo = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, po = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, mo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, _o = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, go = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, xo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vo = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Mo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, So = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, Eo = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, To = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, yo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ao = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, bo = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Ro = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Co = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, wo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Po = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Do = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Lo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Io = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Uo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Fo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, No = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Oo = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Bo = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Go = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, zo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Vo = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ho = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ko = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wo = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Xo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, qo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, Yo = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Ko = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Zo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, $o = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, jo = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Jo = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qo = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, el = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, tl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, nl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, il = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, rl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, sl = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, al = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ol = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ll = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, cl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ul = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, hl = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, fl = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, dl = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, pl = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ml = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, _l = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, gl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, vl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Ml = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Sl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, El = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Tl = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Al = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bl = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Rl = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Cl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, wl = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Pl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Dl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ll = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Il = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ul = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Fl = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Nl = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Ol = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Bl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Gl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, zl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Vl = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Hl = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, kl = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Wl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Xl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, ql = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Yl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Kl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Zl = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, $l = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, jl = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Jl = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Ql = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ec = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, tc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, nc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, ic = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, rc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, sc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ac = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, oc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, lc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, cc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, hc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, fc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const dc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, pc = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, mc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _c = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, xc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vc = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Mc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Sc = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Ec = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, Tc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, yc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ac = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, bc = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Rc = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Cc = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wc = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pc = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dc = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Lc = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ic = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Uc = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Fc = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nc = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Oc = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Bc = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vc = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Hc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, kc = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Wc = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Xc = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, qc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Fe = {
  alphahash_fragment: fo,
  alphahash_pars_fragment: po,
  alphamap_fragment: mo,
  alphamap_pars_fragment: _o,
  alphatest_fragment: go,
  alphatest_pars_fragment: xo,
  aomap_fragment: vo,
  aomap_pars_fragment: Mo,
  batching_pars_vertex: So,
  batching_vertex: Eo,
  begin_vertex: To,
  beginnormal_vertex: yo,
  bsdfs: Ao,
  iridescence_fragment: bo,
  bumpmap_pars_fragment: Ro,
  clipping_planes_fragment: Co,
  clipping_planes_pars_fragment: wo,
  clipping_planes_pars_vertex: Po,
  clipping_planes_vertex: Do,
  color_fragment: Lo,
  color_pars_fragment: Io,
  color_pars_vertex: Uo,
  color_vertex: Fo,
  common: No,
  cube_uv_reflection_fragment: Oo,
  defaultnormal_vertex: Bo,
  displacementmap_pars_vertex: Go,
  displacementmap_vertex: zo,
  emissivemap_fragment: Vo,
  emissivemap_pars_fragment: Ho,
  colorspace_fragment: ko,
  colorspace_pars_fragment: Wo,
  envmap_fragment: Xo,
  envmap_common_pars_fragment: qo,
  envmap_pars_fragment: Yo,
  envmap_pars_vertex: Ko,
  envmap_physical_pars_fragment: sl,
  envmap_vertex: Zo,
  fog_vertex: $o,
  fog_pars_vertex: jo,
  fog_fragment: Jo,
  fog_pars_fragment: Qo,
  gradientmap_pars_fragment: el,
  lightmap_pars_fragment: tl,
  lights_lambert_fragment: nl,
  lights_lambert_pars_fragment: il,
  lights_pars_begin: rl,
  lights_toon_fragment: al,
  lights_toon_pars_fragment: ol,
  lights_phong_fragment: ll,
  lights_phong_pars_fragment: cl,
  lights_physical_fragment: ul,
  lights_physical_pars_fragment: hl,
  lights_fragment_begin: fl,
  lights_fragment_maps: dl,
  lights_fragment_end: pl,
  lightprobes_pars_fragment: ml,
  logdepthbuf_fragment: _l,
  logdepthbuf_pars_fragment: gl,
  logdepthbuf_pars_vertex: xl,
  logdepthbuf_vertex: vl,
  map_fragment: Ml,
  map_pars_fragment: Sl,
  map_particle_fragment: El,
  map_particle_pars_fragment: Tl,
  metalnessmap_fragment: yl,
  metalnessmap_pars_fragment: Al,
  morphinstance_vertex: bl,
  morphcolor_vertex: Rl,
  morphnormal_vertex: Cl,
  morphtarget_pars_vertex: wl,
  morphtarget_vertex: Pl,
  normal_fragment_begin: Dl,
  normal_fragment_maps: Ll,
  normal_pars_fragment: Il,
  normal_pars_vertex: Ul,
  normal_vertex: Fl,
  normalmap_pars_fragment: Nl,
  clearcoat_normal_fragment_begin: Ol,
  clearcoat_normal_fragment_maps: Bl,
  clearcoat_pars_fragment: Gl,
  iridescence_pars_fragment: zl,
  opaque_fragment: Vl,
  packing: Hl,
  premultiplied_alpha_fragment: kl,
  project_vertex: Wl,
  dithering_fragment: Xl,
  dithering_pars_fragment: ql,
  roughnessmap_fragment: Yl,
  roughnessmap_pars_fragment: Kl,
  shadowmap_pars_fragment: Zl,
  shadowmap_pars_vertex: $l,
  shadowmap_vertex: jl,
  shadowmask_pars_fragment: Jl,
  skinbase_vertex: Ql,
  skinning_pars_vertex: ec,
  skinning_vertex: tc,
  skinnormal_vertex: nc,
  specularmap_fragment: ic,
  specularmap_pars_fragment: rc,
  tonemapping_fragment: sc,
  tonemapping_pars_fragment: ac,
  transmission_fragment: oc,
  transmission_pars_fragment: lc,
  uv_pars_fragment: cc,
  uv_pars_vertex: uc,
  uv_vertex: hc,
  worldpos_vertex: fc,
  background_vert: dc,
  background_frag: pc,
  backgroundCube_vert: mc,
  backgroundCube_frag: _c,
  cube_vert: gc,
  cube_frag: xc,
  depth_vert: vc,
  depth_frag: Mc,
  distance_vert: Sc,
  distance_frag: Ec,
  equirect_vert: Tc,
  equirect_frag: yc,
  linedashed_vert: Ac,
  linedashed_frag: bc,
  meshbasic_vert: Rc,
  meshbasic_frag: Cc,
  meshlambert_vert: wc,
  meshlambert_frag: Pc,
  meshmatcap_vert: Dc,
  meshmatcap_frag: Lc,
  meshnormal_vert: Ic,
  meshnormal_frag: Uc,
  meshphong_vert: Fc,
  meshphong_frag: Nc,
  meshphysical_vert: Oc,
  meshphysical_frag: Bc,
  meshtoon_vert: Gc,
  meshtoon_frag: zc,
  points_vert: Vc,
  points_frag: Hc,
  shadow_vert: kc,
  shadow_frag: Wc,
  sprite_vert: Xc,
  sprite_frag: qc
}, le = {
  common: {
    diffuse: { value: /* @__PURE__ */ new He(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Pe() },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Pe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Pe() },
    normalScale: { value: /* @__PURE__ */ new Ce(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Pe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Pe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new He(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new N() },
    probesMax: { value: /* @__PURE__ */ new N() },
    probesResolution: { value: /* @__PURE__ */ new N() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new He(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Pe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new He(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ce(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Pe() },
    alphaTest: { value: 0 }
  }
}, Wt = {
  basic: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.specularmap,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.specularmap,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new He(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.specularmap,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new He(0) },
        specular: { value: /* @__PURE__ */ new He(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.roughnessmap,
      le.metalnessmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new He(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.gradientmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new He(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ At([
      le.points,
      le.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ At([
      le.sprite,
      le.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Pe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Pe() }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ At([
      le.common,
      le.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new N() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distance_vert,
    fragmentShader: Fe.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ At([
      le.lights,
      le.fog,
      {
        color: { value: /* @__PURE__ */ new He(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
Wt.physical = {
  uniforms: /* @__PURE__ */ At([
    Wt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Pe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Pe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ce(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Pe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Pe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Pe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new He(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Pe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Pe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Pe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Pe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new He(0) },
      specularColor: { value: /* @__PURE__ */ new He(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Pe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Pe() },
      anisotropyVector: { value: /* @__PURE__ */ new Ce() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Pe() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const Ri = { r: 0, b: 0, g: 0 }, Yc = /* @__PURE__ */ new ct(), aa = /* @__PURE__ */ new Pe();
aa.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Kc(i, e, t, n, r, s) {
  const a = new He(0);
  let o = r === !0 ? 0 : 1, l, c, d = null, m = 0, u = null;
  function p(M) {
    let A = M.isScene === !0 ? M.background : null;
    if (A && A.isTexture) {
      const T = M.backgroundBlurriness > 0;
      A = e.get(A, T);
    }
    return A;
  }
  function x(M) {
    let A = !1;
    const T = p(M);
    T === null ? f(a, o) : T && T.isColor && (f(T, 1), A = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : C === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || A) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function S(M, A) {
    const T = p(A);
    T && (T.isCubeTexture || T.mapping === 306) ? (c === void 0 && (c = new dt(
      new ii(1, 1, 1),
      new Yt({
        name: "BackgroundCubeMaterial",
        uniforms: zn(Wt.backgroundCube.uniforms),
        vertexShader: Wt.backgroundCube.vertexShader,
        fragmentShader: Wt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(C, y, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(c)), c.material.uniforms.envMap.value = T, c.material.uniforms.backgroundBlurriness.value = A.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yc.makeRotationFromEuler(A.backgroundRotation)).transpose(), T.isCubeTexture && T.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(aa), c.material.toneMapped = Ve.getTransfer(T.colorSpace) !== Ye, (d !== T || m !== T.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, d = T, m = T.version, u = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null)) : T && T.isTexture && (l === void 0 && (l = new dt(
      new Bi(2, 2),
      new Yt({
        name: "BackgroundMaterial",
        uniforms: zn(Wt.background.uniforms),
        vertexShader: Wt.background.vertexShader,
        fragmentShader: Wt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(l)), l.material.uniforms.t2D.value = T, l.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, l.material.toneMapped = Ve.getTransfer(T.colorSpace) !== Ye, T.matrixAutoUpdate === !0 && T.updateMatrix(), l.material.uniforms.uvTransform.value.copy(T.matrix), (d !== T || m !== T.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, d = T, m = T.version, u = i.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function f(M, A) {
    M.getRGB(Ri, na(i)), t.buffers.color.setClear(Ri.r, Ri.g, Ri.b, A, s);
  }
  function h() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(M, A = 1) {
      a.set(M), o = A, f(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(M) {
      o = M, f(a, o);
    },
    render: x,
    addToRenderList: S,
    dispose: h
  };
}
function Zc(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(R, F, k, X, I) {
    let H = !1;
    const z = m(R, X, k, F);
    s !== z && (s = z, c(s.object)), H = p(R, X, k, I), H && x(R, X, k, I), I !== null && e.update(I, i.ELEMENT_ARRAY_BUFFER), (H || a) && (a = !1, T(R, F, k, X), I !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(I).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(R) {
    return i.bindVertexArray(R);
  }
  function d(R) {
    return i.deleteVertexArray(R);
  }
  function m(R, F, k, X) {
    const I = X.wireframe === !0;
    let H = n[F.id];
    H === void 0 && (H = {}, n[F.id] = H);
    const z = R.isInstancedMesh === !0 ? R.id : 0;
    let J = H[z];
    J === void 0 && (J = {}, H[z] = J);
    let Q = J[k.id];
    Q === void 0 && (Q = {}, J[k.id] = Q);
    let ce = Q[I];
    return ce === void 0 && (ce = u(l()), Q[I] = ce), ce;
  }
  function u(R) {
    const F = [], k = [], X = [];
    for (let I = 0; I < t; I++)
      F[I] = 0, k[I] = 0, X[I] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: F,
      enabledAttributes: k,
      attributeDivisors: X,
      object: R,
      attributes: {},
      index: null
    };
  }
  function p(R, F, k, X) {
    const I = s.attributes, H = F.attributes;
    let z = 0;
    const J = k.getAttributes();
    for (const Q in J)
      if (J[Q].location >= 0) {
        const xe = I[Q];
        let Ee = H[Q];
        if (Ee === void 0 && (Q === "instanceMatrix" && R.instanceMatrix && (Ee = R.instanceMatrix), Q === "instanceColor" && R.instanceColor && (Ee = R.instanceColor)), xe === void 0 || xe.attribute !== Ee || Ee && xe.data !== Ee.data) return !0;
        z++;
      }
    return s.attributesNum !== z || s.index !== X;
  }
  function x(R, F, k, X) {
    const I = {}, H = F.attributes;
    let z = 0;
    const J = k.getAttributes();
    for (const Q in J)
      if (J[Q].location >= 0) {
        let xe = H[Q];
        xe === void 0 && (Q === "instanceMatrix" && R.instanceMatrix && (xe = R.instanceMatrix), Q === "instanceColor" && R.instanceColor && (xe = R.instanceColor));
        const Ee = {};
        Ee.attribute = xe, xe && xe.data && (Ee.data = xe.data), I[Q] = Ee, z++;
      }
    s.attributes = I, s.attributesNum = z, s.index = X;
  }
  function S() {
    const R = s.newAttributes;
    for (let F = 0, k = R.length; F < k; F++)
      R[F] = 0;
  }
  function f(R) {
    h(R, 0);
  }
  function h(R, F) {
    const k = s.newAttributes, X = s.enabledAttributes, I = s.attributeDivisors;
    k[R] = 1, X[R] === 0 && (i.enableVertexAttribArray(R), X[R] = 1), I[R] !== F && (i.vertexAttribDivisor(R, F), I[R] = F);
  }
  function M() {
    const R = s.newAttributes, F = s.enabledAttributes;
    for (let k = 0, X = F.length; k < X; k++)
      F[k] !== R[k] && (i.disableVertexAttribArray(k), F[k] = 0);
  }
  function A(R, F, k, X, I, H, z) {
    z === !0 ? i.vertexAttribIPointer(R, F, k, I, H) : i.vertexAttribPointer(R, F, k, X, I, H);
  }
  function T(R, F, k, X) {
    S();
    const I = X.attributes, H = k.getAttributes(), z = F.defaultAttributeValues;
    for (const J in H) {
      const Q = H[J];
      if (Q.location >= 0) {
        let ce = I[J];
        if (ce === void 0 && (J === "instanceMatrix" && R.instanceMatrix && (ce = R.instanceMatrix), J === "instanceColor" && R.instanceColor && (ce = R.instanceColor)), ce !== void 0) {
          const xe = ce.normalized, Ee = ce.itemSize, ke = e.get(ce);
          if (ke === void 0) continue;
          const Ke = ke.buffer, Ie = ke.type, Z = ke.bytesPerElement, fe = Ie === i.INT || Ie === i.UNSIGNED_INT || ce.gpuType === 1013;
          if (ce.isInterleavedBufferAttribute) {
            const ie = ce.data, ye = ie.stride, we = ce.offset;
            if (ie.isInstancedInterleavedBuffer) {
              for (let be = 0; be < Q.locationSize; be++)
                h(Q.location + be, ie.meshPerAttribute);
              R.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let be = 0; be < Q.locationSize; be++)
                f(Q.location + be);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let be = 0; be < Q.locationSize; be++)
              A(
                Q.location + be,
                Ee / Q.locationSize,
                Ie,
                xe,
                ye * Z,
                (we + Ee / Q.locationSize * be) * Z,
                fe
              );
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let ie = 0; ie < Q.locationSize; ie++)
                h(Q.location + ie, ce.meshPerAttribute);
              R.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else
              for (let ie = 0; ie < Q.locationSize; ie++)
                f(Q.location + ie);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let ie = 0; ie < Q.locationSize; ie++)
              A(
                Q.location + ie,
                Ee / Q.locationSize,
                Ie,
                xe,
                Ee * Z,
                Ee / Q.locationSize * ie * Z,
                fe
              );
          }
        } else if (z !== void 0) {
          const xe = z[J];
          if (xe !== void 0)
            switch (xe.length) {
              case 2:
                i.vertexAttrib2fv(Q.location, xe);
                break;
              case 3:
                i.vertexAttrib3fv(Q.location, xe);
                break;
              case 4:
                i.vertexAttrib4fv(Q.location, xe);
                break;
              default:
                i.vertexAttrib1fv(Q.location, xe);
            }
        }
      }
    }
    M();
  }
  function C() {
    b();
    for (const R in n) {
      const F = n[R];
      for (const k in F) {
        const X = F[k];
        for (const I in X) {
          const H = X[I];
          for (const z in H)
            d(H[z].object), delete H[z];
          delete X[I];
        }
      }
      delete n[R];
    }
  }
  function y(R) {
    if (n[R.id] === void 0) return;
    const F = n[R.id];
    for (const k in F) {
      const X = F[k];
      for (const I in X) {
        const H = X[I];
        for (const z in H)
          d(H[z].object), delete H[z];
        delete X[I];
      }
    }
    delete n[R.id];
  }
  function w(R) {
    for (const F in n) {
      const k = n[F];
      for (const X in k) {
        const I = k[X];
        if (I[R.id] === void 0) continue;
        const H = I[R.id];
        for (const z in H)
          d(H[z].object), delete H[z];
        delete I[R.id];
      }
    }
  }
  function g(R) {
    for (const F in n) {
      const k = n[F], X = R.isInstancedMesh === !0 ? R.id : 0, I = k[X];
      if (I !== void 0) {
        for (const H in I) {
          const z = I[H];
          for (const J in z)
            d(z[J].object), delete z[J];
          delete I[H];
        }
        delete k[X], Object.keys(k).length === 0 && delete n[F];
      }
    }
  }
  function b() {
    D(), a = !0, s !== r && (s = r, c(s.object));
  }
  function D() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: b,
    resetDefaultState: D,
    dispose: C,
    releaseStatesOfGeometry: y,
    releaseStatesOfObject: g,
    releaseStatesOfProgram: w,
    initAttributes: S,
    enableAttribute: f,
    disableUnusedAttributes: M
  };
}
function $c(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, c) {
    i.drawArrays(n, l, c), t.update(c, n, 1);
  }
  function a(l, c, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, c, d), t.update(c, n, d));
  }
  function o(l, c, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, c, 0, d);
    let u = 0;
    for (let p = 0; p < d; p++)
      u += c[p];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function jc(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(w) {
    return !(w !== 1023 && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const g = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !g);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const d = l(c);
  d !== c && (Ae("WebGLRenderer:", c, "not supported, using", d, "instead."), c = d);
  const m = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = i.getParameter(i.MAX_TEXTURE_SIZE), f = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), M = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), A = i.getParameter(i.MAX_VARYING_VECTORS), T = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), C = i.getParameter(i.MAX_SAMPLES), y = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: m,
    reversedDepthBuffer: u,
    maxTextures: p,
    maxVertexTextures: x,
    maxTextureSize: S,
    maxCubemapSize: f,
    maxAttributes: h,
    maxVertexUniforms: M,
    maxVaryings: A,
    maxFragmentUniforms: T,
    maxSamples: C,
    samples: y
  };
}
function Jc(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new xn(), o = new Pe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, u) {
    const p = m.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = m.length, p;
  }, this.beginShadows = function() {
    s = !0, d(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(m, u) {
    t = d(m, u, 0);
  }, this.setState = function(m, u, p) {
    const x = m.clippingPlanes, S = m.clipIntersection, f = m.clipShadows, h = i.get(m);
    if (!r || x === null || x.length === 0 || s && !f)
      s ? d(null) : c();
    else {
      const M = s ? 0 : n, A = M * 4;
      let T = h.clippingState || null;
      l.value = T, T = d(x, u, A, p);
      for (let C = 0; C !== A; ++C)
        T[C] = t[C];
      h.clippingState = T, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function d(m, u, p, x) {
    const S = m !== null ? m.length : 0;
    let f = null;
    if (S !== 0) {
      if (f = l.value, x !== !0 || f === null) {
        const h = p + S * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (f === null || f.length < h) && (f = new Float32Array(h));
        for (let A = 0, T = p; A !== S; ++A, T += 4)
          a.copy(m[A]).applyMatrix4(M, o), a.normal.toArray(f, T), f[T + 3] = a.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, f;
  }
}
const hn = 4, Ms = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vn = 20, Qc = 256, $n = /* @__PURE__ */ new Ir(), Ss = /* @__PURE__ */ new He();
let mr = null, _r = 0, gr = 0, xr = !1;
const eu = /* @__PURE__ */ new N();
class Es {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.position=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = eu
    } = s;
    mr = this._renderer.getRenderTarget(), _r = this._renderer.getActiveCubeFace(), gr = this._renderer.getActiveMipmapLevel(), xr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(e, n, r, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = As(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ys(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(mr, _r, gr), this._renderer.xr.enabled = xr, e.scissorTest = !1, Fn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), mr = this._renderer.getRenderTarget(), _r = this._renderer.getActiveCubeFace(), gr = this._renderer.getActiveMipmapLevel(), xr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: Pi,
      depthBuffer: !1
    }, r = Ts(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ts(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = tu(s)), this._blurMaterial = iu(s, e, t), this._ggxMaterial = nu(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new dt(new St(), e);
    this._renderer.compile(t, $n);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const l = new Ft(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], d = [1, 1, 1, -1, -1, -1], m = this._renderer, u = m.autoClear, p = m.toneMapping;
    m.getClearColor(Ss), m.toneMapping = 0, m.autoClear = !1, m.state.buffers.depth.getReversed() && (m.setRenderTarget(r), m.clearDepth(), m.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new dt(
      new ii(),
      new Rr({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const S = this._backgroundBox, f = S.material;
    let h = !1;
    const M = e.background;
    M ? M.isColor && (f.color.copy(M), e.background = null, h = !0) : (f.color.copy(Ss), h = !0);
    for (let A = 0; A < 6; A++) {
      const T = A % 3;
      T === 0 ? (l.up.set(0, c[A], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + d[A], s.y, s.z)) : T === 1 ? (l.up.set(0, 0, c[A]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + d[A], s.z)) : (l.up.set(0, c[A], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + d[A]));
      const C = this._cubeSize;
      Fn(r, T * C, A > 2 ? C : 0, C, C), m.setRenderTarget(r), h && m.render(S, l), m.render(e, l);
    }
    m.toneMapping = p, m.autoClear = u, e.background = M;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = As()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ys());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Fn(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, $n);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++)
      this._applyGGXFilter(e, s - 1, s);
    t.autoClear = n;
  }
  /**
   * Applies GGX VNDF importance sampling filter to generate a prefiltered environment map.
   * Uses Monte Carlo integration with VNDF importance sampling to accurately represent the
   * GGX BRDF for physically-based rendering. Reads from the previous LOD level and
   * applies incremental roughness filtering to avoid over-blurring.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn - Source LOD level to read from
   * @param {number} lodOut - Target LOD level to write to
   */
  _applyGGXFilter(e, t, n) {
    const r = this._renderer, s = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const l = a.uniforms, c = n / (this._lodMeshes.length - 1), d = t / (this._lodMeshes.length - 1), m = Math.sqrt(c * c - d * d), u = 0 + c * 1.25, p = m * u, { _lodMax: x } = this, S = this._sizeLods[n], f = 3 * S * (n > x - hn ? n - x + hn : 0), h = 4 * (this._cubeSize - S);
    l.envMap.value = e.texture, l.roughness.value = p, l.mipInt.value = x - t, Fn(s, f, h, 3 * S, 2 * S), r.setRenderTarget(s), r.render(o, $n), l.envMap.value = s.texture, l.roughness.value = 0, l.mipInt.value = x - n, Fn(e, f, h, 3 * S, 2 * S), r.setRenderTarget(e), r.render(o, $n);
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * Used for initial scene blur in fromScene() method when sigma > 0.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && Xe(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const d = 3, m = this._lodMeshes[r];
    m.material = c;
    const u = c.uniforms, p = this._sizeLods[n] - 1, x = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * vn - 1), S = s / x, f = isFinite(s) ? 1 + Math.floor(d * S) : vn;
    f > vn && Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vn}`);
    const h = [];
    let M = 0;
    for (let w = 0; w < vn; ++w) {
      const g = w / S, b = Math.exp(-g * g / 2);
      h.push(b), w === 0 ? M += b : w < f && (M += 2 * b);
    }
    for (let w = 0; w < h.length; w++)
      h[w] = h[w] / M;
    u.envMap.value = e.texture, u.samples.value = f, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: A } = this;
    u.dTheta.value = x, u.mipInt.value = A - n;
    const T = this._sizeLods[r], C = 3 * T * (r > A - hn ? r - A + hn : 0), y = 4 * (this._cubeSize - T);
    Fn(t, C, y, 3 * T, 2 * T), l.setRenderTarget(t), l.render(m, $n);
  }
}
function tu(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - hn + 1 + Ms.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let l = 1 / o;
    a > i - hn ? l = Ms[a - i + hn - 1] : a === 0 && (l = 0), t.push(l);
    const c = 1 / (o - 2), d = -c, m = 1 + c, u = [d, d, m, d, m, m, d, d, m, m, d, m], p = 6, x = 6, S = 3, f = 2, h = 1, M = new Float32Array(S * x * p), A = new Float32Array(f * x * p), T = new Float32Array(h * x * p);
    for (let y = 0; y < p; y++) {
      const w = y % 3 * 2 / 3 - 1, g = y > 2 ? 0 : -1, b = [
        w,
        g,
        0,
        w + 2 / 3,
        g,
        0,
        w + 2 / 3,
        g + 1,
        0,
        w,
        g,
        0,
        w + 2 / 3,
        g + 1,
        0,
        w,
        g + 1,
        0
      ];
      M.set(b, S * x * y), A.set(u, f * x * y);
      const D = [y, y, y, y, y, y];
      T.set(D, h * x * y);
    }
    const C = new St();
    C.setAttribute("position", new qt(M, S)), C.setAttribute("uv", new qt(A, f)), C.setAttribute("faceIndex", new qt(T, h)), n.push(new dt(C, null)), r > hn && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function Ts(i, e, t) {
  const n = new Xt(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Fn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function nu(i, e, t) {
  return new Yt({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Qc,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Gi(),
    fragmentShader: (
      /* glsl */
      `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function iu(i, e, t) {
  const n = new Float32Array(vn), r = new N(0, 1, 0);
  return new Yt({
    name: "SphericalGaussianBlur",
    defines: {
      n: vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Gi(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ys() {
  return new Yt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Gi(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function As() {
  return new Yt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Gi(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Gi() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
class oa extends Xt {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new ea(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new ii(5, 5, 5), s = new Yt({
      name: "CubemapFromEquirect",
      uniforms: zn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new dt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new oo(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
function ru(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, p = !1) {
    return u == null ? null : p ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const p = u.mapping;
      if (p === 303 || p === 304)
        if (e.has(u)) {
          const x = e.get(u).texture;
          return o(x, u.mapping);
        } else {
          const x = u.image;
          if (x && x.height > 0) {
            const S = new oa(x.height);
            return S.fromEquirectangularTexture(i, u), e.set(u, S), u.addEventListener("dispose", c), o(S.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const p = u.mapping, x = p === 303 || p === 304, S = p === 301 || p === 302;
      if (x || S) {
        let f = t.get(u);
        const h = f !== void 0 ? f.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== h)
          return n === null && (n = new Es(i)), f = x ? n.fromEquirectangular(u, f) : n.fromCubemap(u, f), f.texture.pmremVersion = u.pmremVersion, t.set(u, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const M = u.image;
          return x && M && M.height > 0 || S && M && l(M) ? (n === null && (n = new Es(i)), f = x ? n.fromEquirectangular(u) : n.fromCubemap(u), f.texture.pmremVersion = u.pmremVersion, t.set(u, f), u.addEventListener("dispose", d), f.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, p) {
    return p === 303 ? u.mapping = 301 : p === 304 && (u.mapping = 302), u;
  }
  function l(u) {
    let p = 0;
    const x = 6;
    for (let S = 0; S < x; S++)
      u[S] !== void 0 && p++;
    return p === x;
  }
  function c(u) {
    const p = u.target;
    p.removeEventListener("dispose", c);
    const x = e.get(p);
    x !== void 0 && (e.delete(p), x.dispose());
  }
  function d(u) {
    const p = u.target;
    p.removeEventListener("dispose", d);
    const x = t.get(p);
    x !== void 0 && (t.delete(p), x.dispose());
  }
  function m() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: m
  };
}
function su(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    const r = i.getExtension(n);
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && Sr("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function au(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(m) {
    const u = m.target;
    u.index !== null && e.remove(u.index);
    for (const x in u.attributes)
      e.remove(u.attributes[x]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const p = s.get(u);
    p && (e.remove(p), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(m, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, t.memory.geometries++), u;
  }
  function l(m) {
    const u = m.attributes;
    for (const p in u)
      e.update(u[p], i.ARRAY_BUFFER);
  }
  function c(m) {
    const u = [], p = m.index, x = m.attributes.position;
    let S = 0;
    if (x === void 0)
      return;
    if (p !== null) {
      const M = p.array;
      S = p.version;
      for (let A = 0, T = M.length; A < T; A += 3) {
        const C = M[A + 0], y = M[A + 1], w = M[A + 2];
        u.push(C, y, y, w, w, C);
      }
    } else {
      const M = x.array;
      S = x.version;
      for (let A = 0, T = M.length / 3 - 1; A < T; A += 3) {
        const C = A + 0, y = A + 1, w = A + 2;
        u.push(C, y, y, w, w, C);
      }
    }
    const f = new (x.count >= 65535 ? js : $s)(u, 1);
    f.version = S;
    const h = s.get(m);
    h && e.remove(h), s.set(m, f);
  }
  function d(m) {
    const u = s.get(m);
    if (u) {
      const p = m.index;
      p !== null && u.version < p.version && c(m);
    } else
      c(m);
    return s.get(m);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: d
  };
}
function ou(i, e, t) {
  let n;
  function r(m) {
    n = m;
  }
  let s, a;
  function o(m) {
    s = m.type, a = m.bytesPerElement;
  }
  function l(m, u) {
    i.drawElements(n, u, s, m * a), t.update(u, n, 1);
  }
  function c(m, u, p) {
    p !== 0 && (i.drawElementsInstanced(n, u, s, m * a, p), t.update(u, n, p));
  }
  function d(m, u, p) {
    if (p === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, s, m, 0, p);
    let S = 0;
    for (let f = 0; f < p; f++)
      S += u[f];
    t.update(S, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = d;
}
function lu(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        Xe("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function cu(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new lt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, d = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, m = d !== void 0 ? d.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== m) {
      let D = function() {
        g.dispose(), n.delete(o), o.removeEventListener("dispose", D);
      };
      var p = D;
      u !== void 0 && u.texture.dispose();
      const x = o.morphAttributes.position !== void 0, S = o.morphAttributes.normal !== void 0, f = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], M = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let T = 0;
      x === !0 && (T = 1), S === !0 && (T = 2), f === !0 && (T = 3);
      let C = o.attributes.position.count * T, y = 1;
      C > e.maxTextureSize && (y = Math.ceil(C / e.maxTextureSize), C = e.maxTextureSize);
      const w = new Float32Array(C * y * 4 * m), g = new Ys(w, C, y, m);
      g.type = 1015, g.needsUpdate = !0;
      const b = T * 4;
      for (let R = 0; R < m; R++) {
        const F = h[R], k = M[R], X = A[R], I = C * y * 4 * R;
        for (let H = 0; H < F.count; H++) {
          const z = H * b;
          x === !0 && (r.fromBufferAttribute(F, H), w[I + z + 0] = r.x, w[I + z + 1] = r.y, w[I + z + 2] = r.z, w[I + z + 3] = 0), S === !0 && (r.fromBufferAttribute(k, H), w[I + z + 4] = r.x, w[I + z + 5] = r.y, w[I + z + 6] = r.z, w[I + z + 7] = 0), f === !0 && (r.fromBufferAttribute(X, H), w[I + z + 8] = r.x, w[I + z + 9] = r.y, w[I + z + 10] = r.z, w[I + z + 11] = X.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: m,
        texture: g,
        size: new Ce(C, y)
      }, n.set(o, u), o.addEventListener("dispose", D);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let x = 0;
      for (let f = 0; f < c.length; f++)
        x += c[f];
      const S = o.morphTargetsRelative ? 1 : 1 - x;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", S), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function uu(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const d = r.render.frame, m = c.geometry, u = e.get(c, m);
    if (s.get(u) !== d && (e.update(u), s.set(u, d)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), s.get(c) !== d && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), s.set(c, d))), c.isSkinnedMesh) {
      const p = c.skeleton;
      s.get(p) !== d && (p.update(), s.set(p, d));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const d = c.target;
    d.removeEventListener("dispose", l), n.releaseStatesOfObject(d), t.remove(d.instanceMatrix), d.instanceColor !== null && t.remove(d.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
const hu = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function fu(i, e, t, n, r) {
  const s = new Xt(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r,
    depthTexture: n ? new Gn(e, t) : void 0
  }), a = new Xt(e, t, {
    type: 1016,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new St();
  o.setAttribute("position", new Je([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new Je([0, 2, 0, 0, 2, 0], 2));
  const l = new to({
    uniforms: {
      tDiffuse: { value: null }
    },
    vertexShader: (
      /* glsl */
      `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`
    ),
    fragmentShader: (
      /* glsl */
      `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`
    ),
    depthTest: !1,
    depthWrite: !1
  }), c = new dt(o, l), d = new Ir(-1, 1, 1, -1, 0, 1);
  let m = null, u = null, p = !1, x, S = null, f = [], h = !1;
  this.setSize = function(M, A) {
    s.setSize(M, A), a.setSize(M, A);
    for (let T = 0; T < f.length; T++) {
      const C = f[T];
      C.setSize && C.setSize(M, A);
    }
  }, this.setEffects = function(M) {
    f = M, h = f.length > 0 && f[0].isRenderPass === !0;
    const A = s.width, T = s.height;
    for (let C = 0; C < f.length; C++) {
      const y = f[C];
      y.setSize && y.setSize(A, T);
    }
  }, this.begin = function(M, A) {
    if (p || M.toneMapping === 0 && f.length === 0) return !1;
    if (S = A, A !== null) {
      const T = A.width, C = A.height;
      (s.width !== T || s.height !== C) && this.setSize(T, C);
    }
    return h === !1 && M.setRenderTarget(s), x = M.toneMapping, M.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return h;
  }, this.end = function(M, A) {
    M.toneMapping = x, p = !0;
    let T = s, C = a;
    for (let y = 0; y < f.length; y++) {
      const w = f[y];
      if (w.enabled !== !1 && (w.render(M, C, T, A), w.needsSwap !== !1)) {
        const g = T;
        T = C, C = g;
      }
    }
    if (m !== M.outputColorSpace || u !== M.toneMapping) {
      m = M.outputColorSpace, u = M.toneMapping, l.defines = {}, Ve.getTransfer(m) === Ye && (l.defines.SRGB_TRANSFER = "");
      const y = hu[u];
      y && (l.defines[y] = ""), l.needsUpdate = !0;
    }
    l.uniforms.tDiffuse.value = T.texture, M.setRenderTarget(S), M.render(c, d), S = null, p = !1;
  }, this.isCompositing = function() {
    return p;
  }, this.dispose = function() {
    s.depthTexture && s.depthTexture.dispose(), s.dispose(), a.dispose(), o.dispose(), l.dispose();
  };
}
const la = /* @__PURE__ */ new bt(), Tr = /* @__PURE__ */ new Gn(1, 1), ca = /* @__PURE__ */ new Ys(), ua = /* @__PURE__ */ new Da(), ha = /* @__PURE__ */ new ea(), bs = [], Rs = [], Cs = new Float32Array(16), ws = new Float32Array(9), Ps = new Float32Array(4);
function kn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = bs[r];
  if (s === void 0 && (s = new Float32Array(r), bs[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function gt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function xt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function zi(i, e) {
  let t = Rs[e];
  t === void 0 && (t = new Int32Array(e), Rs[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function du(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function pu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2fv(this.addr, e), xt(t, e);
  }
}
function mu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (gt(t, e)) return;
    i.uniform3fv(this.addr, e), xt(t, e);
  }
}
function _u(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4fv(this.addr, e), xt(t, e);
  }
}
function gu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), xt(t, e);
  } else {
    if (gt(t, n)) return;
    Ps.set(n), i.uniformMatrix2fv(this.addr, !1, Ps), xt(t, n);
  }
}
function xu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), xt(t, e);
  } else {
    if (gt(t, n)) return;
    ws.set(n), i.uniformMatrix3fv(this.addr, !1, ws), xt(t, n);
  }
}
function vu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), xt(t, e);
  } else {
    if (gt(t, n)) return;
    Cs.set(n), i.uniformMatrix4fv(this.addr, !1, Cs), xt(t, n);
  }
}
function Mu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Su(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2iv(this.addr, e), xt(t, e);
  }
}
function Eu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3iv(this.addr, e), xt(t, e);
  }
}
function Tu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4iv(this.addr, e), xt(t, e);
  }
}
function yu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Au(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2uiv(this.addr, e), xt(t, e);
  }
}
function bu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3uiv(this.addr, e), xt(t, e);
  }
}
function Ru(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4uiv(this.addr, e), xt(t, e);
  }
}
function Cu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Tr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, s = Tr) : s = la, t.setTexture2D(e || s, r);
}
function wu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ua, r);
}
function Pu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || ha, r);
}
function Du(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ca, r);
}
function Lu(i) {
  switch (i) {
    case 5126:
      return du;
    // FLOAT
    case 35664:
      return pu;
    // _VEC2
    case 35665:
      return mu;
    // _VEC3
    case 35666:
      return _u;
    // _VEC4
    case 35674:
      return gu;
    // _MAT2
    case 35675:
      return xu;
    // _MAT3
    case 35676:
      return vu;
    // _MAT4
    case 5124:
    case 35670:
      return Mu;
    // INT, BOOL
    case 35667:
    case 35671:
      return Su;
    // _VEC2
    case 35668:
    case 35672:
      return Eu;
    // _VEC3
    case 35669:
    case 35673:
      return Tu;
    // _VEC4
    case 5125:
      return yu;
    // UINT
    case 36294:
      return Au;
    // _VEC2
    case 36295:
      return bu;
    // _VEC3
    case 36296:
      return Ru;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Cu;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return wu;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Pu;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Du;
  }
}
function Iu(i, e) {
  i.uniform1fv(this.addr, e);
}
function Uu(i, e) {
  const t = kn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Fu(i, e) {
  const t = kn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Nu(i, e) {
  const t = kn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Ou(i, e) {
  const t = kn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Bu(i, e) {
  const t = kn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Gu(i, e) {
  const t = kn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function zu(i, e) {
  i.uniform1iv(this.addr, e);
}
function Vu(i, e) {
  i.uniform2iv(this.addr, e);
}
function Hu(i, e) {
  i.uniform3iv(this.addr, e);
}
function ku(i, e) {
  i.uniform4iv(this.addr, e);
}
function Wu(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Xu(i, e) {
  i.uniform2uiv(this.addr, e);
}
function qu(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Yu(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Ku(i, e, t) {
  const n = this.cache, r = e.length, s = zi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = Tr : a = la;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function Zu(i, e, t) {
  const n = this.cache, r = e.length, s = zi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || ua, s[a]);
}
function $u(i, e, t) {
  const n = this.cache, r = e.length, s = zi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || ha, s[a]);
}
function ju(i, e, t) {
  const n = this.cache, r = e.length, s = zi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || ca, s[a]);
}
function Ju(i) {
  switch (i) {
    case 5126:
      return Iu;
    // FLOAT
    case 35664:
      return Uu;
    // _VEC2
    case 35665:
      return Fu;
    // _VEC3
    case 35666:
      return Nu;
    // _VEC4
    case 35674:
      return Ou;
    // _MAT2
    case 35675:
      return Bu;
    // _MAT3
    case 35676:
      return Gu;
    // _MAT4
    case 5124:
    case 35670:
      return zu;
    // INT, BOOL
    case 35667:
    case 35671:
      return Vu;
    // _VEC2
    case 35668:
    case 35672:
      return Hu;
    // _VEC3
    case 35669:
    case 35673:
      return ku;
    // _VEC4
    case 5125:
      return Wu;
    // UINT
    case 36294:
      return Xu;
    // _VEC2
    case 36295:
      return qu;
    // _VEC3
    case 36296:
      return Yu;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Ku;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Zu;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return $u;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return ju;
  }
}
class Qu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Lu(t.type);
  }
}
class eh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Ju(t.type);
  }
}
class th {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const vr = /(\w+)(\])?(\[|\.)?/g;
function Ds(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function nh(i, e, t) {
  const n = i.name, r = n.length;
  for (vr.lastIndex = 0; ; ) {
    const s = vr.exec(n), a = vr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Ds(t, c === void 0 ? new Qu(o, i, e) : new eh(o, i, e));
      break;
    } else {
      let m = t.map[o];
      m === void 0 && (m = new th(o), Ds(t, m)), t = m;
    }
  }
}
class wi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), l = e.getUniformLocation(t, o.name);
      nh(o, l, this);
    }
    const r = [], s = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(a) : s.push(a);
    r.length > 0 && (this.seq = r.concat(s));
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ls(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const ih = 37297;
let rh = 0;
function sh(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Is = /* @__PURE__ */ new Pe();
function ah(i) {
  Ve._getMatrix(Is, Ve.workingColorSpace, i);
  const e = `mat3( ${Is.elements.map((t) => t.toFixed(4))} )`;
  switch (Ve.getTransfer(i)) {
    case Di:
      return [e, "LinearTransferOETF"];
    case Ye:
      return [e, "sRGBTransferOETF"];
    default:
      return Ae("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Us(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + sh(i.getShaderSource(e), o);
  } else
    return s;
}
function oh(i, e) {
  const t = ah(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const lh = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function ch(i, e) {
  const t = lh[e];
  return t === void 0 ? (Ae("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Ci = /* @__PURE__ */ new N();
function uh() {
  Ve.getLuminanceCoefficients(Ci);
  const i = Ci.x.toFixed(4), e = Ci.y.toFixed(4), t = Ci.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function hh(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Qn).join(`
`);
}
function fh(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function dh(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Qn(i) {
  return i !== "";
}
function Fs(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ns(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ph = /^[ \t]*#include +<([\w\d./]+)>/gm;
function yr(i) {
  return i.replace(ph, _h);
}
const mh = /* @__PURE__ */ new Map();
function _h(i, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = mh.get(e);
    if (n !== void 0)
      t = Fe[n], Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return yr(t);
}
const gh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Os(i) {
  return i.replace(gh, xh);
}
function xh(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Bs(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const vh = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function Mh(i) {
  return vh[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Sh = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Eh(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Sh[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Th = {
  302: "ENVMAP_MODE_REFRACTION"
};
function yh(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Th[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const Ah = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function bh(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Ah[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Rh(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Ch(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Mh(t), c = Eh(t), d = yh(t), m = bh(t), u = Rh(t), p = hh(t), x = fh(s), S = r.createProgram();
  let f, h, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x
  ].filter(Qn).join(`
`), f.length > 0 && (f += `
`), h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x
  ].filter(Qn).join(`
`), h.length > 0 && (h += `
`)) : (f = [
    Bs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + d : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexNormals ? "#define HAS_NORMAL" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Qn).join(`
`), h = [
    Bs(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + d : "",
    t.envMap ? "#define " + m : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? ch("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    oh("linearToOutputTexel", t.outputColorSpace),
    uh(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Qn).join(`
`)), a = yr(a), a = Fs(a, t), a = Ns(a, t), o = yr(o), o = Fs(o, t), o = Ns(o, t), a = Os(a), o = Os(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, f = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, h = [
    "#define varying in",
    t.glslVersion === Yr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Yr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const A = M + f + a, T = M + h + o, C = Ls(r, r.VERTEX_SHADER, A), y = Ls(r, r.FRAGMENT_SHADER, T);
  r.attachShader(S, C), r.attachShader(S, y), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function w(R) {
    if (i.debug.checkShaderErrors) {
      const F = r.getProgramInfoLog(S) || "", k = r.getShaderInfoLog(C) || "", X = r.getShaderInfoLog(y) || "", I = F.trim(), H = k.trim(), z = X.trim();
      let J = !0, Q = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (J = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, S, C, y);
        else {
          const ce = Us(r, C, "vertex"), xe = Us(r, y, "fragment");
          Xe(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + I + `
` + ce + `
` + xe
          );
        }
      else I !== "" ? Ae("WebGLProgram: Program Info Log:", I) : (H === "" || z === "") && (Q = !1);
      Q && (R.diagnostics = {
        runnable: J,
        programLog: I,
        vertexShader: {
          log: H,
          prefix: f
        },
        fragmentShader: {
          log: z,
          prefix: h
        }
      });
    }
    r.deleteShader(C), r.deleteShader(y), g = new wi(r, S), b = dh(r, S);
  }
  let g;
  this.getUniforms = function() {
    return g === void 0 && w(this), g;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && w(this), b;
  };
  let D = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return D === !1 && (D = r.getProgramParameter(S, ih)), D;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = rh++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = C, this.fragmentShader = y, this;
}
let wh = 0;
class Ph {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Dh(e), t.set(e, n)), n;
  }
}
class Dh {
  constructor(e) {
    this.id = wh++, this.code = e, this.usedTimes = 0;
  }
}
function Lh(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function Ih(i, e, t, n, r, s) {
  const a = new Ks(), o = new Ph(), l = /* @__PURE__ */ new Set(), c = [], d = /* @__PURE__ */ new Map(), m = n.logarithmicDepthBuffer;
  let u = n.precision;
  const p = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function x(g) {
    return l.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function S(g, b, D, R, F, k) {
    const X = R.fog, I = F.geometry, H = g.isMeshStandardMaterial || g.isMeshLambertMaterial || g.isMeshPhongMaterial ? R.environment : null, z = g.isMeshStandardMaterial || g.isMeshLambertMaterial && !g.envMap || g.isMeshPhongMaterial && !g.envMap, J = e.get(g.envMap || H, z), Q = J && J.mapping === 306 ? J.image.height : null, ce = p[g.type];
    g.precision !== null && (u = n.getMaxPrecision(g.precision), u !== g.precision && Ae("WebGLProgram.getParameters:", g.precision, "not supported, using", u, "instead."));
    const xe = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, Ee = xe !== void 0 ? xe.length : 0;
    let ke = 0;
    I.morphAttributes.position !== void 0 && (ke = 1), I.morphAttributes.normal !== void 0 && (ke = 2), I.morphAttributes.color !== void 0 && (ke = 3);
    let Ke, Ie, Z, fe;
    if (ce) {
      const De = Wt[ce];
      Ke = De.vertexShader, Ie = De.fragmentShader;
    } else
      Ke = g.vertexShader, Ie = g.fragmentShader, o.update(g), Z = o.getVertexShaderID(g), fe = o.getFragmentShaderID(g);
    const ie = i.getRenderTarget(), ye = i.state.buffers.depth.getReversed(), we = F.isInstancedMesh === !0, be = F.isBatchedMesh === !0, rt = !!g.map, Be = !!g.matcap, Ze = !!J, it = !!g.aoMap, Oe = !!g.lightMap, mt = !!g.bumpMap, st = !!g.normalMap, Ct = !!g.displacementMap, L = !!g.emissiveMap, _t = !!g.metalnessMap, Ge = !!g.roughnessMap, tt = g.anisotropy > 0, oe = g.clearcoat > 0, at = g.dispersion > 0, E = g.iridescence > 0, _ = g.sheen > 0, O = g.transmission > 0, Y = tt && !!g.anisotropyMap, j = oe && !!g.clearcoatMap, ee = oe && !!g.clearcoatNormalMap, ae = oe && !!g.clearcoatRoughnessMap, W = E && !!g.iridescenceMap, K = E && !!g.iridescenceThicknessMap, de = _ && !!g.sheenColorMap, _e = _ && !!g.sheenRoughnessMap, re = !!g.specularMap, te = !!g.specularColorMap, Re = !!g.specularIntensityMap, Ue = O && !!g.transmissionMap, qe = O && !!g.thicknessMap, P = !!g.gradientMap, ne = !!g.alphaMap, q = g.alphaTest > 0, pe = !!g.alphaHash, se = !!g.extensions;
    let $ = 0;
    g.toneMapped && (ie === null || ie.isXRRenderTarget === !0) && ($ = i.toneMapping);
    const Me = {
      shaderID: ce,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: Ke,
      fragmentShader: Ie,
      defines: g.defines,
      customVertexShaderID: Z,
      customFragmentShaderID: fe,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: u,
      batching: be,
      batchingColor: be && F._colorsTexture !== null,
      instancing: we,
      instancingColor: we && F.instanceColor !== null,
      instancingMorph: we && F.morphTexture !== null,
      outputColorSpace: ie === null ? i.outputColorSpace : ie.isXRRenderTarget === !0 ? ie.texture.colorSpace : Ve.workingColorSpace,
      alphaToCoverage: !!g.alphaToCoverage,
      map: rt,
      matcap: Be,
      envMap: Ze,
      envMapMode: Ze && J.mapping,
      envMapCubeUVHeight: Q,
      aoMap: it,
      lightMap: Oe,
      bumpMap: mt,
      normalMap: st,
      displacementMap: Ct,
      emissiveMap: L,
      normalMapObjectSpace: st && g.normalMapType === 1,
      normalMapTangentSpace: st && g.normalMapType === 0,
      packedNormalMap: st && g.normalMapType === 0 && Lh(g.normalMap.format),
      metalnessMap: _t,
      roughnessMap: Ge,
      anisotropy: tt,
      anisotropyMap: Y,
      clearcoat: oe,
      clearcoatMap: j,
      clearcoatNormalMap: ee,
      clearcoatRoughnessMap: ae,
      dispersion: at,
      iridescence: E,
      iridescenceMap: W,
      iridescenceThicknessMap: K,
      sheen: _,
      sheenColorMap: de,
      sheenRoughnessMap: _e,
      specularMap: re,
      specularColorMap: te,
      specularIntensityMap: Re,
      transmission: O,
      transmissionMap: Ue,
      thicknessMap: qe,
      gradientMap: P,
      opaque: g.transparent === !1 && g.blending === 1 && g.alphaToCoverage === !1,
      alphaMap: ne,
      alphaTest: q,
      alphaHash: pe,
      combine: g.combine,
      //
      mapUv: rt && x(g.map.channel),
      aoMapUv: it && x(g.aoMap.channel),
      lightMapUv: Oe && x(g.lightMap.channel),
      bumpMapUv: mt && x(g.bumpMap.channel),
      normalMapUv: st && x(g.normalMap.channel),
      displacementMapUv: Ct && x(g.displacementMap.channel),
      emissiveMapUv: L && x(g.emissiveMap.channel),
      metalnessMapUv: _t && x(g.metalnessMap.channel),
      roughnessMapUv: Ge && x(g.roughnessMap.channel),
      anisotropyMapUv: Y && x(g.anisotropyMap.channel),
      clearcoatMapUv: j && x(g.clearcoatMap.channel),
      clearcoatNormalMapUv: ee && x(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ae && x(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: W && x(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: K && x(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: de && x(g.sheenColorMap.channel),
      sheenRoughnessMapUv: _e && x(g.sheenRoughnessMap.channel),
      specularMapUv: re && x(g.specularMap.channel),
      specularColorMapUv: te && x(g.specularColorMap.channel),
      specularIntensityMapUv: Re && x(g.specularIntensityMap.channel),
      transmissionMapUv: Ue && x(g.transmissionMap.channel),
      thicknessMapUv: qe && x(g.thicknessMap.channel),
      alphaMapUv: ne && x(g.alphaMap.channel),
      //
      vertexTangents: !!I.attributes.tangent && (st || tt),
      vertexNormals: !!I.attributes.normal,
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      pointsUvs: F.isPoints === !0 && !!I.attributes.uv && (rt || ne),
      fog: !!X,
      useFog: g.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: g.wireframe === !1 && (g.flatShading === !0 || I.attributes.normal === void 0 && st === !1 && (g.isMeshLambertMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isMeshPhysicalMaterial)),
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: m,
      reversedDepthBuffer: ye,
      skinning: F.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: Ee,
      morphTextureStride: ke,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numLightProbes: b.numLightProbes,
      numLightProbeGrids: k.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: $,
      decodeVideoTexture: rt && g.map.isVideoTexture === !0 && Ve.getTransfer(g.map.colorSpace) === Ye,
      decodeVideoTextureEmissive: L && g.emissiveMap.isVideoTexture === !0 && Ve.getTransfer(g.emissiveMap.colorSpace) === Ye,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === 2,
      flipSided: g.side === 1,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance: se && g.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (se && g.extensions.multiDraw === !0 || be) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
    return Me.vertexUv1s = l.has(1), Me.vertexUv2s = l.has(2), Me.vertexUv3s = l.has(3), l.clear(), Me;
  }
  function f(g) {
    const b = [];
    if (g.shaderID ? b.push(g.shaderID) : (b.push(g.customVertexShaderID), b.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const D in g.defines)
        b.push(D), b.push(g.defines[D]);
    return g.isRawShaderMaterial === !1 && (h(b, g), M(b, g), b.push(i.outputColorSpace)), b.push(g.customProgramCacheKey), b.join();
  }
  function h(g, b) {
    g.push(b.precision), g.push(b.outputColorSpace), g.push(b.envMapMode), g.push(b.envMapCubeUVHeight), g.push(b.mapUv), g.push(b.alphaMapUv), g.push(b.lightMapUv), g.push(b.aoMapUv), g.push(b.bumpMapUv), g.push(b.normalMapUv), g.push(b.displacementMapUv), g.push(b.emissiveMapUv), g.push(b.metalnessMapUv), g.push(b.roughnessMapUv), g.push(b.anisotropyMapUv), g.push(b.clearcoatMapUv), g.push(b.clearcoatNormalMapUv), g.push(b.clearcoatRoughnessMapUv), g.push(b.iridescenceMapUv), g.push(b.iridescenceThicknessMapUv), g.push(b.sheenColorMapUv), g.push(b.sheenRoughnessMapUv), g.push(b.specularMapUv), g.push(b.specularColorMapUv), g.push(b.specularIntensityMapUv), g.push(b.transmissionMapUv), g.push(b.thicknessMapUv), g.push(b.combine), g.push(b.fogExp2), g.push(b.sizeAttenuation), g.push(b.morphTargetsCount), g.push(b.morphAttributeCount), g.push(b.numDirLights), g.push(b.numPointLights), g.push(b.numSpotLights), g.push(b.numSpotLightMaps), g.push(b.numHemiLights), g.push(b.numRectAreaLights), g.push(b.numDirLightShadows), g.push(b.numPointLightShadows), g.push(b.numSpotLightShadows), g.push(b.numSpotLightShadowsWithMaps), g.push(b.numLightProbes), g.push(b.shadowMapType), g.push(b.toneMapping), g.push(b.numClippingPlanes), g.push(b.numClipIntersection), g.push(b.depthPacking);
  }
  function M(g, b) {
    a.disableAll(), b.instancing && a.enable(0), b.instancingColor && a.enable(1), b.instancingMorph && a.enable(2), b.matcap && a.enable(3), b.envMap && a.enable(4), b.normalMapObjectSpace && a.enable(5), b.normalMapTangentSpace && a.enable(6), b.clearcoat && a.enable(7), b.iridescence && a.enable(8), b.alphaTest && a.enable(9), b.vertexColors && a.enable(10), b.vertexAlphas && a.enable(11), b.vertexUv1s && a.enable(12), b.vertexUv2s && a.enable(13), b.vertexUv3s && a.enable(14), b.vertexTangents && a.enable(15), b.anisotropy && a.enable(16), b.alphaHash && a.enable(17), b.batching && a.enable(18), b.dispersion && a.enable(19), b.batchingColor && a.enable(20), b.gradientMap && a.enable(21), b.packedNormalMap && a.enable(22), b.vertexNormals && a.enable(23), g.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.reversedDepthBuffer && a.enable(4), b.skinning && a.enable(5), b.morphTargets && a.enable(6), b.morphNormals && a.enable(7), b.morphColors && a.enable(8), b.premultipliedAlpha && a.enable(9), b.shadowMapEnabled && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), b.decodeVideoTexture && a.enable(19), b.decodeVideoTextureEmissive && a.enable(20), b.alphaToCoverage && a.enable(21), b.numLightProbeGrids > 0 && a.enable(22), g.push(a.mask);
  }
  function A(g) {
    const b = p[g.type];
    let D;
    if (b) {
      const R = Wt[b];
      D = Ja.clone(R.uniforms);
    } else
      D = g.uniforms;
    return D;
  }
  function T(g, b) {
    let D = d.get(b);
    return D !== void 0 ? ++D.usedTimes : (D = new Ch(i, b, g, r), c.push(D), d.set(b, D)), D;
  }
  function C(g) {
    if (--g.usedTimes === 0) {
      const b = c.indexOf(g);
      c[b] = c[c.length - 1], c.pop(), d.delete(g.cacheKey), g.destroy();
    }
  }
  function y(g) {
    o.remove(g);
  }
  function w() {
    o.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: f,
    getUniforms: A,
    acquireProgram: T,
    releaseProgram: C,
    releaseShaderCache: y,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: w
  };
}
function Uh() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Fh(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Gs(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function zs() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let p = 0;
    return u.isInstancedMesh && (p += 2), u.isSkinnedMesh && (p += 1), p;
  }
  function o(u, p, x, S, f, h) {
    let M = i[e];
    return M === void 0 ? (M = {
      id: u.id,
      object: u,
      geometry: p,
      material: x,
      materialVariant: a(u),
      groupOrder: S,
      renderOrder: u.renderOrder,
      z: f,
      group: h
    }, i[e] = M) : (M.id = u.id, M.object = u, M.geometry = p, M.material = x, M.materialVariant = a(u), M.groupOrder = S, M.renderOrder = u.renderOrder, M.z = f, M.group = h), e++, M;
  }
  function l(u, p, x, S, f, h) {
    const M = o(u, p, x, S, f, h);
    x.transmission > 0 ? n.push(M) : x.transparent === !0 ? r.push(M) : t.push(M);
  }
  function c(u, p, x, S, f, h) {
    const M = o(u, p, x, S, f, h);
    x.transmission > 0 ? n.unshift(M) : x.transparent === !0 ? r.unshift(M) : t.unshift(M);
  }
  function d(u, p) {
    t.length > 1 && t.sort(u || Fh), n.length > 1 && n.sort(p || Gs), r.length > 1 && r.sort(p || Gs);
  }
  function m() {
    for (let u = e, p = i.length; u < p; u++) {
      const x = i[u];
      if (x.id === null) break;
      x.id = null, x.object = null, x.geometry = null, x.material = null, x.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: l,
    unshift: c,
    finish: m,
    sort: d
  };
}
function Nh() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new zs(), i.set(n, [a])) : r >= s.length ? (a = new zs(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Oh() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new N(),
            color: new He()
          };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new He(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new N(),
            color: new He(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new N(),
            skyColor: new He(),
            groundColor: new He()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new He(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Bh() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Gh = 0;
function zh(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Vh(i) {
  const e = new Oh(), t = Bh(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new N());
  const r = new N(), s = new ct(), a = new ct();
  function o(c) {
    let d = 0, m = 0, u = 0;
    for (let b = 0; b < 9; b++) n.probe[b].set(0, 0, 0);
    let p = 0, x = 0, S = 0, f = 0, h = 0, M = 0, A = 0, T = 0, C = 0, y = 0, w = 0;
    c.sort(zh);
    for (let b = 0, D = c.length; b < D; b++) {
      const R = c[b], F = R.color, k = R.intensity, X = R.distance;
      let I = null;
      if (R.shadow && R.shadow.map && (R.shadow.map.texture.format === 1030 ? I = R.shadow.map.texture : I = R.shadow.map.depthTexture || R.shadow.map.texture), R.isAmbientLight)
        d += F.r * k, m += F.g * k, u += F.b * k;
      else if (R.isLightProbe) {
        for (let H = 0; H < 9; H++)
          n.probe[H].addScaledVector(R.sh.coefficients[H], k);
        w++;
      } else if (R.isDirectionalLight) {
        const H = e.get(R);
        if (H.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const z = R.shadow, J = t.get(R);
          J.shadowIntensity = z.intensity, J.shadowBias = z.bias, J.shadowNormalBias = z.normalBias, J.shadowRadius = z.radius, J.shadowMapSize = z.mapSize, n.directionalShadow[p] = J, n.directionalShadowMap[p] = I, n.directionalShadowMatrix[p] = R.shadow.matrix, M++;
        }
        n.directional[p] = H, p++;
      } else if (R.isSpotLight) {
        const H = e.get(R);
        H.position.setFromMatrixPosition(R.matrixWorld), H.color.copy(F).multiplyScalar(k), H.distance = X, H.coneCos = Math.cos(R.angle), H.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), H.decay = R.decay, n.spot[S] = H;
        const z = R.shadow;
        if (R.map && (n.spotLightMap[C] = R.map, C++, z.updateMatrices(R), R.castShadow && y++), n.spotLightMatrix[S] = z.matrix, R.castShadow) {
          const J = t.get(R);
          J.shadowIntensity = z.intensity, J.shadowBias = z.bias, J.shadowNormalBias = z.normalBias, J.shadowRadius = z.radius, J.shadowMapSize = z.mapSize, n.spotShadow[S] = J, n.spotShadowMap[S] = I, T++;
        }
        S++;
      } else if (R.isRectAreaLight) {
        const H = e.get(R);
        H.color.copy(F).multiplyScalar(k), H.halfWidth.set(R.width * 0.5, 0, 0), H.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[f] = H, f++;
      } else if (R.isPointLight) {
        const H = e.get(R);
        if (H.color.copy(R.color).multiplyScalar(R.intensity), H.distance = R.distance, H.decay = R.decay, R.castShadow) {
          const z = R.shadow, J = t.get(R);
          J.shadowIntensity = z.intensity, J.shadowBias = z.bias, J.shadowNormalBias = z.normalBias, J.shadowRadius = z.radius, J.shadowMapSize = z.mapSize, J.shadowCameraNear = z.camera.near, J.shadowCameraFar = z.camera.far, n.pointShadow[x] = J, n.pointShadowMap[x] = I, n.pointShadowMatrix[x] = R.shadow.matrix, A++;
        }
        n.point[x] = H, x++;
      } else if (R.isHemisphereLight) {
        const H = e.get(R);
        H.skyColor.copy(R.color).multiplyScalar(k), H.groundColor.copy(R.groundColor).multiplyScalar(k), n.hemi[h] = H, h++;
      }
    }
    f > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = le.LTC_FLOAT_1, n.rectAreaLTC2 = le.LTC_FLOAT_2) : (n.rectAreaLTC1 = le.LTC_HALF_1, n.rectAreaLTC2 = le.LTC_HALF_2)), n.ambient[0] = d, n.ambient[1] = m, n.ambient[2] = u;
    const g = n.hash;
    (g.directionalLength !== p || g.pointLength !== x || g.spotLength !== S || g.rectAreaLength !== f || g.hemiLength !== h || g.numDirectionalShadows !== M || g.numPointShadows !== A || g.numSpotShadows !== T || g.numSpotMaps !== C || g.numLightProbes !== w) && (n.directional.length = p, n.spot.length = S, n.rectArea.length = f, n.point.length = x, n.hemi.length = h, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = A, n.pointShadowMap.length = A, n.spotShadow.length = T, n.spotShadowMap.length = T, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = A, n.spotLightMatrix.length = T + C - y, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = y, n.numLightProbes = w, g.directionalLength = p, g.pointLength = x, g.spotLength = S, g.rectAreaLength = f, g.hemiLength = h, g.numDirectionalShadows = M, g.numPointShadows = A, g.numSpotShadows = T, g.numSpotMaps = C, g.numLightProbes = w, n.version = Gh++);
  }
  function l(c, d) {
    let m = 0, u = 0, p = 0, x = 0, S = 0;
    const f = d.matrixWorldInverse;
    for (let h = 0, M = c.length; h < M; h++) {
      const A = c[h];
      if (A.isDirectionalLight) {
        const T = n.directional[m];
        T.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(f), m++;
      } else if (A.isSpotLight) {
        const T = n.spot[p];
        T.position.setFromMatrixPosition(A.matrixWorld), T.position.applyMatrix4(f), T.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(f), p++;
      } else if (A.isRectAreaLight) {
        const T = n.rectArea[x];
        T.position.setFromMatrixPosition(A.matrixWorld), T.position.applyMatrix4(f), a.identity(), s.copy(A.matrixWorld), s.premultiply(f), a.extractRotation(s), T.halfWidth.set(A.width * 0.5, 0, 0), T.halfHeight.set(0, A.height * 0.5, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), x++;
      } else if (A.isPointLight) {
        const T = n.point[u];
        T.position.setFromMatrixPosition(A.matrixWorld), T.position.applyMatrix4(f), u++;
      } else if (A.isHemisphereLight) {
        const T = n.hemi[S];
        T.direction.setFromMatrixPosition(A.matrixWorld), T.direction.transformDirection(f), S++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Vs(i) {
  const e = new Vh(i), t = [], n = [], r = [];
  function s(u) {
    m.camera = u, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function l(u) {
    r.push(u);
  }
  function c() {
    e.setup(t);
  }
  function d(u) {
    e.setupView(t, u);
  }
  const m = {
    lightsArray: t,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: s,
    state: m,
    setupLights: c,
    setupLightsView: d,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: l
  };
}
function Hh(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Vs(i), e.set(r, [o])) : s >= a.length ? (o = new Vs(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const kh = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Wh = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, Xh = [
  /* @__PURE__ */ new N(1, 0, 0),
  /* @__PURE__ */ new N(-1, 0, 0),
  /* @__PURE__ */ new N(0, 1, 0),
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, 0, 1),
  /* @__PURE__ */ new N(0, 0, -1)
], qh = [
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, 0, 1),
  /* @__PURE__ */ new N(0, 0, -1),
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, -1, 0)
], Hs = /* @__PURE__ */ new ct(), jn = /* @__PURE__ */ new N(), Mr = /* @__PURE__ */ new N();
function Yh(i, e, t) {
  let n = new Cr();
  const r = new Ce(), s = new Ce(), a = new lt(), o = new no(), l = new io(), c = {}, d = t.maxTextureSize, m = { 0: 1, 1: 0, 2: 2 }, u = new Yt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ce() },
      radius: { value: 4 }
    },
    vertexShader: kh,
    fragmentShader: Wh
  }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const x = new St();
  x.setAttribute(
    "position",
    new qt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new dt(x, u), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let h = this.type;
  this.render = function(y, w, g) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || y.length === 0) return;
    this.type === 2 && (Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const b = i.getRenderTarget(), D = i.getActiveCubeFace(), R = i.getActiveMipmapLevel(), F = i.state;
    F.setBlending(0), F.buffers.depth.getReversed() === !0 ? F.buffers.color.setClear(0, 0, 0, 0) : F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    const k = h !== this.type;
    k && w.traverse(function(X) {
      X.material && (Array.isArray(X.material) ? X.material.forEach((I) => I.needsUpdate = !0) : X.material.needsUpdate = !0);
    });
    for (let X = 0, I = y.length; X < I; X++) {
      const H = y[X], z = H.shadow;
      if (z === void 0) {
        Ae("WebGLShadowMap:", H, "has no shadow.");
        continue;
      }
      if (z.autoUpdate === !1 && z.needsUpdate === !1) continue;
      r.copy(z.mapSize);
      const J = z.getFrameExtents();
      r.multiply(J), s.copy(z.mapSize), (r.x > d || r.y > d) && (r.x > d && (s.x = Math.floor(d / J.x), r.x = s.x * J.x, z.mapSize.x = s.x), r.y > d && (s.y = Math.floor(d / J.y), r.y = s.y * J.y, z.mapSize.y = s.y));
      const Q = i.state.buffers.depth.getReversed();
      if (z.camera._reversedDepth = Q, z.map === null || k === !0) {
        if (z.map !== null && (z.map.depthTexture !== null && (z.map.depthTexture.dispose(), z.map.depthTexture = null), z.map.dispose()), this.type === 3) {
          if (H.isPointLight) {
            Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          z.map = new Xt(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), z.map.texture.name = H.name + ".shadowMap", z.map.depthTexture = new Gn(r.x, r.y, 1015), z.map.depthTexture.name = H.name + ".shadowMapDepth", z.map.depthTexture.format = 1026, z.map.depthTexture.compareFunction = null, z.map.depthTexture.minFilter = 1003, z.map.depthTexture.magFilter = 1003;
        } else
          H.isPointLight ? (z.map = new oa(r.x), z.map.depthTexture = new $a(r.x, 1014)) : (z.map = new Xt(r.x, r.y), z.map.depthTexture = new Gn(r.x, r.y, 1014)), z.map.depthTexture.name = H.name + ".shadowMap", z.map.depthTexture.format = 1026, this.type === 1 ? (z.map.depthTexture.compareFunction = Q ? 518 : 515, z.map.depthTexture.minFilter = 1006, z.map.depthTexture.magFilter = 1006) : (z.map.depthTexture.compareFunction = null, z.map.depthTexture.minFilter = 1003, z.map.depthTexture.magFilter = 1003);
        z.camera.updateProjectionMatrix();
      }
      const ce = z.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let xe = 0; xe < ce; xe++) {
        if (z.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(z.map, xe), i.clear();
        else {
          xe === 0 && (i.setRenderTarget(z.map), i.clear());
          const Ee = z.getViewport(xe);
          a.set(
            s.x * Ee.x,
            s.y * Ee.y,
            s.x * Ee.z,
            s.y * Ee.w
          ), F.viewport(a);
        }
        if (H.isPointLight) {
          const Ee = z.camera, ke = z.matrix, Ke = H.distance || Ee.far;
          Ke !== Ee.far && (Ee.far = Ke, Ee.updateProjectionMatrix()), jn.setFromMatrixPosition(H.matrixWorld), Ee.position.copy(jn), Mr.copy(Ee.position), Mr.add(Xh[xe]), Ee.up.copy(qh[xe]), Ee.lookAt(Mr), Ee.updateMatrixWorld(), ke.makeTranslation(-jn.x, -jn.y, -jn.z), Hs.multiplyMatrices(Ee.projectionMatrix, Ee.matrixWorldInverse), z._frustum.setFromProjectionMatrix(Hs, Ee.coordinateSystem, Ee.reversedDepth);
        } else
          z.updateMatrices(H);
        n = z.getFrustum(), T(w, g, z.camera, H, this.type);
      }
      z.isPointLightShadow !== !0 && this.type === 3 && M(z, g), z.needsUpdate = !1;
    }
    h = this.type, f.needsUpdate = !1, i.setRenderTarget(b, D, R);
  };
  function M(y, w) {
    const g = e.update(S);
    u.defines.VSM_SAMPLES !== y.blurSamples && (u.defines.VSM_SAMPLES = y.blurSamples, p.defines.VSM_SAMPLES = y.blurSamples, u.needsUpdate = !0, p.needsUpdate = !0), y.mapPass === null && (y.mapPass = new Xt(r.x, r.y, {
      format: 1030,
      type: 1016
    })), u.uniforms.shadow_pass.value = y.map.depthTexture, u.uniforms.resolution.value = y.mapSize, u.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(w, null, g, u, S, null), p.uniforms.shadow_pass.value = y.mapPass.texture, p.uniforms.resolution.value = y.mapSize, p.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(w, null, g, p, S, null);
  }
  function A(y, w, g, b) {
    let D = null;
    const R = g.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (R !== void 0)
      D = R;
    else if (D = g.isPointLight === !0 ? l : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const F = D.uuid, k = w.uuid;
      let X = c[F];
      X === void 0 && (X = {}, c[F] = X);
      let I = X[k];
      I === void 0 && (I = D.clone(), X[k] = I, w.addEventListener("dispose", C)), D = I;
    }
    if (D.visible = w.visible, D.wireframe = w.wireframe, b === 3 ? D.side = w.shadowSide !== null ? w.shadowSide : w.side : D.side = w.shadowSide !== null ? w.shadowSide : m[w.side], D.alphaMap = w.alphaMap, D.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, D.map = w.map, D.clipShadows = w.clipShadows, D.clippingPlanes = w.clippingPlanes, D.clipIntersection = w.clipIntersection, D.displacementMap = w.displacementMap, D.displacementScale = w.displacementScale, D.displacementBias = w.displacementBias, D.wireframeLinewidth = w.wireframeLinewidth, D.linewidth = w.linewidth, g.isPointLight === !0 && D.isMeshDistanceMaterial === !0) {
      const F = i.properties.get(D);
      F.light = g;
    }
    return D;
  }
  function T(y, w, g, b, D) {
    if (y.visible === !1) return;
    if (y.layers.test(w.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && D === 3) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, y.matrixWorld);
      const k = e.update(y), X = y.material;
      if (Array.isArray(X)) {
        const I = k.groups;
        for (let H = 0, z = I.length; H < z; H++) {
          const J = I[H], Q = X[J.materialIndex];
          if (Q && Q.visible) {
            const ce = A(y, Q, b, D);
            y.onBeforeShadow(i, y, w, g, k, ce, J), i.renderBufferDirect(g, null, k, ce, y, J), y.onAfterShadow(i, y, w, g, k, ce, J);
          }
        }
      } else if (X.visible) {
        const I = A(y, X, b, D);
        y.onBeforeShadow(i, y, w, g, k, I, null), i.renderBufferDirect(g, null, k, I, y, null), y.onAfterShadow(i, y, w, g, k, I, null);
      }
    }
    const F = y.children;
    for (let k = 0, X = F.length; k < X; k++)
      T(F[k], w, g, b, D);
  }
  function C(y) {
    y.target.removeEventListener("dispose", C);
    for (const g in c) {
      const b = c[g], D = y.target.uuid;
      D in b && (b[D].dispose(), delete b[D]);
    }
  }
}
function Kh(i, e) {
  function t() {
    let P = !1;
    const ne = new lt();
    let q = null;
    const pe = new lt(0, 0, 0, 0);
    return {
      setMask: function(se) {
        q !== se && !P && (i.colorMask(se, se, se, se), q = se);
      },
      setLocked: function(se) {
        P = se;
      },
      setClear: function(se, $, Me, De, ut) {
        ut === !0 && (se *= De, $ *= De, Me *= De), ne.set(se, $, Me, De), pe.equals(ne) === !1 && (i.clearColor(se, $, Me, De), pe.copy(ne));
      },
      reset: function() {
        P = !1, q = null, pe.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = !1, ne = !1, q = null, pe = null, se = null;
    return {
      setReversed: function($) {
        if (ne !== $) {
          const Me = e.get("EXT_clip_control");
          $ ? Me.clipControlEXT(Me.LOWER_LEFT_EXT, Me.ZERO_TO_ONE_EXT) : Me.clipControlEXT(Me.LOWER_LEFT_EXT, Me.NEGATIVE_ONE_TO_ONE_EXT), ne = $;
          const De = se;
          se = null, this.setClear(De);
        }
      },
      getReversed: function() {
        return ne;
      },
      setTest: function($) {
        $ ? ie(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function($) {
        q !== $ && !P && (i.depthMask($), q = $);
      },
      setFunc: function($) {
        if (ne && ($ = ya[$]), pe !== $) {
          switch ($) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          pe = $;
        }
      },
      setLocked: function($) {
        P = $;
      },
      setClear: function($) {
        se !== $ && (se = $, ne && ($ = 1 - $), i.clearDepth($));
      },
      reset: function() {
        P = !1, q = null, pe = null, se = null, ne = !1;
      }
    };
  }
  function r() {
    let P = !1, ne = null, q = null, pe = null, se = null, $ = null, Me = null, De = null, ut = null;
    return {
      setTest: function($e) {
        P || ($e ? ie(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function($e) {
        ne !== $e && !P && (i.stencilMask($e), ne = $e);
      },
      setFunc: function($e, Kt, zt) {
        (q !== $e || pe !== Kt || se !== zt) && (i.stencilFunc($e, Kt, zt), q = $e, pe = Kt, se = zt);
      },
      setOp: function($e, Kt, zt) {
        ($ !== $e || Me !== Kt || De !== zt) && (i.stencilOp($e, Kt, zt), $ = $e, Me = Kt, De = zt);
      },
      setLocked: function($e) {
        P = $e;
      },
      setClear: function($e) {
        ut !== $e && (i.clearStencil($e), ut = $e);
      },
      reset: function() {
        P = !1, ne = null, q = null, pe = null, se = null, $ = null, Me = null, De = null, ut = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), x = [], S = null, f = !1, h = null, M = null, A = null, T = null, C = null, y = null, w = null, g = new He(0, 0, 0), b = 0, D = !1, R = null, F = null, k = null, X = null, I = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let z = !1, J = 0;
  const Q = i.getParameter(i.VERSION);
  Q.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(Q)[1]), z = J >= 1) : Q.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), z = J >= 2);
  let ce = null, xe = {};
  const Ee = i.getParameter(i.SCISSOR_BOX), ke = i.getParameter(i.VIEWPORT), Ke = new lt().fromArray(Ee), Ie = new lt().fromArray(ke);
  function Z(P, ne, q, pe) {
    const se = new Uint8Array(4), $ = i.createTexture();
    i.bindTexture(P, $), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Me = 0; Me < q; Me++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(ne, 0, i.RGBA, 1, 1, pe, 0, i.RGBA, i.UNSIGNED_BYTE, se) : i.texImage2D(ne + Me, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, se);
    return $;
  }
  const fe = {};
  fe[i.TEXTURE_2D] = Z(i.TEXTURE_2D, i.TEXTURE_2D, 1), fe[i.TEXTURE_CUBE_MAP] = Z(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), fe[i.TEXTURE_2D_ARRAY] = Z(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), fe[i.TEXTURE_3D] = Z(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ie(i.DEPTH_TEST), a.setFunc(3), mt(!1), st(1), ie(i.CULL_FACE), it(0);
  function ie(P) {
    d[P] !== !0 && (i.enable(P), d[P] = !0);
  }
  function ye(P) {
    d[P] !== !1 && (i.disable(P), d[P] = !1);
  }
  function we(P, ne) {
    return u[P] !== ne ? (i.bindFramebuffer(P, ne), u[P] = ne, P === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = ne), P === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = ne), !0) : !1;
  }
  function be(P, ne) {
    let q = x, pe = !1;
    if (P) {
      q = p.get(ne), q === void 0 && (q = [], p.set(ne, q));
      const se = P.textures;
      if (q.length !== se.length || q[0] !== i.COLOR_ATTACHMENT0) {
        for (let $ = 0, Me = se.length; $ < Me; $++)
          q[$] = i.COLOR_ATTACHMENT0 + $;
        q.length = se.length, pe = !0;
      }
    } else
      q[0] !== i.BACK && (q[0] = i.BACK, pe = !0);
    pe && i.drawBuffers(q);
  }
  function rt(P) {
    return S !== P ? (i.useProgram(P), S = P, !0) : !1;
  }
  const Be = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  Be[103] = i.MIN, Be[104] = i.MAX;
  const Ze = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function it(P, ne, q, pe, se, $, Me, De, ut, $e) {
    if (P === 0) {
      f === !0 && (ye(i.BLEND), f = !1);
      return;
    }
    if (f === !1 && (ie(i.BLEND), f = !0), P !== 5) {
      if (P !== h || $e !== D) {
        if ((M !== 100 || C !== 100) && (i.blendEquation(i.FUNC_ADD), M = 100, C = 100), $e)
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              Xe("WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Xe("WebGLState: Invalid blending: ", P);
              break;
          }
        A = null, T = null, y = null, w = null, g.set(0, 0, 0), b = 0, h = P, D = $e;
      }
      return;
    }
    se = se || ne, $ = $ || q, Me = Me || pe, (ne !== M || se !== C) && (i.blendEquationSeparate(Be[ne], Be[se]), M = ne, C = se), (q !== A || pe !== T || $ !== y || Me !== w) && (i.blendFuncSeparate(Ze[q], Ze[pe], Ze[$], Ze[Me]), A = q, T = pe, y = $, w = Me), (De.equals(g) === !1 || ut !== b) && (i.blendColor(De.r, De.g, De.b, ut), g.copy(De), b = ut), h = P, D = !1;
  }
  function Oe(P, ne) {
    P.side === 2 ? ye(i.CULL_FACE) : ie(i.CULL_FACE);
    let q = P.side === 1;
    ne && (q = !q), mt(q), P.blending === 1 && P.transparent === !1 ? it(0) : it(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const pe = P.stencilWrite;
    o.setTest(pe), pe && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), L(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? ie(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function mt(P) {
    R !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), R = P);
  }
  function st(P) {
    P !== 0 ? (ie(i.CULL_FACE), P !== F && (P === 1 ? i.cullFace(i.BACK) : P === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), F = P;
  }
  function Ct(P) {
    P !== k && (z && i.lineWidth(P), k = P);
  }
  function L(P, ne, q) {
    P ? (ie(i.POLYGON_OFFSET_FILL), (X !== ne || I !== q) && (X = ne, I = q, a.getReversed() && (ne = -ne), i.polygonOffset(ne, q))) : ye(i.POLYGON_OFFSET_FILL);
  }
  function _t(P) {
    P ? ie(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function Ge(P) {
    P === void 0 && (P = i.TEXTURE0 + H - 1), ce !== P && (i.activeTexture(P), ce = P);
  }
  function tt(P, ne, q) {
    q === void 0 && (ce === null ? q = i.TEXTURE0 + H - 1 : q = ce);
    let pe = xe[q];
    pe === void 0 && (pe = { type: void 0, texture: void 0 }, xe[q] = pe), (pe.type !== P || pe.texture !== ne) && (ce !== q && (i.activeTexture(q), ce = q), i.bindTexture(P, ne || fe[P]), pe.type = P, pe.texture = ne);
  }
  function oe() {
    const P = xe[ce];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function at() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function E() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function _() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function O() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function Y() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function j() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function ee() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function ae() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function W() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function K() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      Xe("WebGLState:", P);
    }
  }
  function de(P) {
    return m[P] !== void 0 ? m[P] : i.getParameter(P);
  }
  function _e(P, ne) {
    m[P] !== ne && (i.pixelStorei(P, ne), m[P] = ne);
  }
  function re(P) {
    Ke.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), Ke.copy(P));
  }
  function te(P) {
    Ie.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), Ie.copy(P));
  }
  function Re(P, ne) {
    let q = c.get(ne);
    q === void 0 && (q = /* @__PURE__ */ new WeakMap(), c.set(ne, q));
    let pe = q.get(P);
    pe === void 0 && (pe = i.getUniformBlockIndex(ne, P.name), q.set(P, pe));
  }
  function Ue(P, ne) {
    const pe = c.get(ne).get(P);
    l.get(ne) !== pe && (i.uniformBlockBinding(ne, pe, P.__bindingPointIndex), l.set(ne, pe));
  }
  function qe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), d = {}, m = {}, ce = null, xe = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), x = [], S = null, f = !1, h = null, M = null, A = null, T = null, C = null, y = null, w = null, g = new He(0, 0, 0), b = 0, D = !1, R = null, F = null, k = null, X = null, I = null, Ke.set(0, 0, i.canvas.width, i.canvas.height), Ie.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: ie,
    disable: ye,
    bindFramebuffer: we,
    drawBuffers: be,
    useProgram: rt,
    setBlending: it,
    setMaterial: Oe,
    setFlipSided: mt,
    setCullFace: st,
    setLineWidth: Ct,
    setPolygonOffset: L,
    setScissorTest: _t,
    activeTexture: Ge,
    bindTexture: tt,
    unbindTexture: oe,
    compressedTexImage2D: at,
    compressedTexImage3D: E,
    texImage2D: W,
    texImage3D: K,
    pixelStorei: _e,
    getParameter: de,
    updateUBOMapping: Re,
    uniformBlockBinding: Ue,
    texStorage2D: ee,
    texStorage3D: ae,
    texSubImage2D: _,
    texSubImage3D: O,
    compressedTexSubImage2D: Y,
    compressedTexSubImage3D: j,
    scissor: re,
    viewport: te,
    reset: qe
  };
}
function Zh(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Ce(), d = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set();
  let u;
  const p = /* @__PURE__ */ new WeakMap();
  let x = !1;
  try {
    x = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(E, _) {
    return x ? new OffscreenCanvas(E, _) : Li("canvas");
  }
  function f(E, _, O) {
    let Y = 1;
    const j = at(E);
    if ((j.width > O || j.height > O) && (Y = O / Math.max(j.width, j.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const ee = Math.floor(Y * j.width), ae = Math.floor(Y * j.height);
        u === void 0 && (u = S(ee, ae));
        const W = _ ? S(ee, ae) : u;
        return W.width = ee, W.height = ae, W.getContext("2d").drawImage(E, 0, 0, ee, ae), Ae("WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + ee + "x" + ae + ")."), W;
      } else
        return "data" in E && Ae("WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), E;
    return E;
  }
  function h(E) {
    return E.generateMipmaps;
  }
  function M(E) {
    i.generateMipmap(E);
  }
  function A(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(E, _, O, Y, j, ee = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ae;
    Y && (ae = e.get("EXT_texture_norm16"), ae || Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let W = _;
    if (_ === i.RED && (O === i.FLOAT && (W = i.R32F), O === i.HALF_FLOAT && (W = i.R16F), O === i.UNSIGNED_BYTE && (W = i.R8), O === i.UNSIGNED_SHORT && ae && (W = ae.R16_EXT), O === i.SHORT && ae && (W = ae.R16_SNORM_EXT)), _ === i.RED_INTEGER && (O === i.UNSIGNED_BYTE && (W = i.R8UI), O === i.UNSIGNED_SHORT && (W = i.R16UI), O === i.UNSIGNED_INT && (W = i.R32UI), O === i.BYTE && (W = i.R8I), O === i.SHORT && (W = i.R16I), O === i.INT && (W = i.R32I)), _ === i.RG && (O === i.FLOAT && (W = i.RG32F), O === i.HALF_FLOAT && (W = i.RG16F), O === i.UNSIGNED_BYTE && (W = i.RG8), O === i.UNSIGNED_SHORT && ae && (W = ae.RG16_EXT), O === i.SHORT && ae && (W = ae.RG16_SNORM_EXT)), _ === i.RG_INTEGER && (O === i.UNSIGNED_BYTE && (W = i.RG8UI), O === i.UNSIGNED_SHORT && (W = i.RG16UI), O === i.UNSIGNED_INT && (W = i.RG32UI), O === i.BYTE && (W = i.RG8I), O === i.SHORT && (W = i.RG16I), O === i.INT && (W = i.RG32I)), _ === i.RGB_INTEGER && (O === i.UNSIGNED_BYTE && (W = i.RGB8UI), O === i.UNSIGNED_SHORT && (W = i.RGB16UI), O === i.UNSIGNED_INT && (W = i.RGB32UI), O === i.BYTE && (W = i.RGB8I), O === i.SHORT && (W = i.RGB16I), O === i.INT && (W = i.RGB32I)), _ === i.RGBA_INTEGER && (O === i.UNSIGNED_BYTE && (W = i.RGBA8UI), O === i.UNSIGNED_SHORT && (W = i.RGBA16UI), O === i.UNSIGNED_INT && (W = i.RGBA32UI), O === i.BYTE && (W = i.RGBA8I), O === i.SHORT && (W = i.RGBA16I), O === i.INT && (W = i.RGBA32I)), _ === i.RGB && (O === i.UNSIGNED_SHORT && ae && (W = ae.RGB16_EXT), O === i.SHORT && ae && (W = ae.RGB16_SNORM_EXT), O === i.UNSIGNED_INT_5_9_9_9_REV && (W = i.RGB9_E5), O === i.UNSIGNED_INT_10F_11F_11F_REV && (W = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const K = ee ? Di : Ve.getTransfer(j);
      O === i.FLOAT && (W = i.RGBA32F), O === i.HALF_FLOAT && (W = i.RGBA16F), O === i.UNSIGNED_BYTE && (W = K === Ye ? i.SRGB8_ALPHA8 : i.RGBA8), O === i.UNSIGNED_SHORT && ae && (W = ae.RGBA16_EXT), O === i.SHORT && ae && (W = ae.RGBA16_SNORM_EXT), O === i.UNSIGNED_SHORT_4_4_4_4 && (W = i.RGBA4), O === i.UNSIGNED_SHORT_5_5_5_1 && (W = i.RGB5_A1);
    }
    return (W === i.R16F || W === i.R32F || W === i.RG16F || W === i.RG32F || W === i.RGBA16F || W === i.RGBA32F) && e.get("EXT_color_buffer_float"), W;
  }
  function C(E, _) {
    let O;
    return E ? _ === null || _ === 1014 || _ === 1020 ? O = i.DEPTH24_STENCIL8 : _ === 1015 ? O = i.DEPTH32F_STENCIL8 : _ === 1012 && (O = i.DEPTH24_STENCIL8, Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? O = i.DEPTH_COMPONENT24 : _ === 1015 ? O = i.DEPTH_COMPONENT32F : _ === 1012 && (O = i.DEPTH_COMPONENT16), O;
  }
  function y(E, _) {
    return h(E) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function w(E) {
    const _ = E.target;
    _.removeEventListener("dispose", w), b(_), _.isVideoTexture && d.delete(_), _.isHTMLTexture && m.delete(_);
  }
  function g(E) {
    const _ = E.target;
    _.removeEventListener("dispose", g), R(_);
  }
  function b(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const O = E.source, Y = p.get(O);
    if (Y) {
      const j = Y[_.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && D(E), Object.keys(Y).length === 0 && p.delete(O);
    }
    n.remove(E);
  }
  function D(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const O = E.source, Y = p.get(O);
    delete Y[_.__cacheKey], a.memory.textures--;
  }
  function R(E) {
    const _ = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(_.__webglFramebuffer[Y]))
          for (let j = 0; j < _.__webglFramebuffer[Y].length; j++) i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[Y]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let Y = 0; Y < _.__webglFramebuffer.length; Y++) i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++)
          _.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const O = E.textures;
    for (let Y = 0, j = O.length; Y < j; Y++) {
      const ee = n.get(O[Y]);
      ee.__webglTexture && (i.deleteTexture(ee.__webglTexture), a.memory.textures--), n.remove(O[Y]);
    }
    n.remove(E);
  }
  let F = 0;
  function k() {
    F = 0;
  }
  function X() {
    return F;
  }
  function I(E) {
    F = E;
  }
  function H() {
    const E = F;
    return E >= r.maxTextures && Ae("WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), F += 1, E;
  }
  function z(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function J(E, _) {
    const O = n.get(E);
    if (E.isVideoTexture && tt(E), E.isRenderTargetTexture === !1 && E.isExternalTexture !== !0 && E.version > 0 && O.__version !== E.version) {
      const Y = E.image;
      if (Y === null)
        Ae("WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        Ae("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ye(O, E, _);
        return;
      }
    } else E.isExternalTexture && (O.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + _);
  }
  function Q(E, _) {
    const O = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && O.__version !== E.version) {
      ye(O, E, _);
      return;
    } else E.isExternalTexture && (O.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + _);
  }
  function ce(E, _) {
    const O = n.get(E);
    if (E.isRenderTargetTexture === !1 && E.version > 0 && O.__version !== E.version) {
      ye(O, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + _);
  }
  function xe(E, _) {
    const O = n.get(E);
    if (E.isCubeDepthTexture !== !0 && E.version > 0 && O.__version !== E.version) {
      we(O, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + _);
  }
  const Ee = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, ke = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, Ke = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Ie(E, _) {
    if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, Ee[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, Ee[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, Ee[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ke[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ke[_.minFilter]), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Ke[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const O = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Z(E, _) {
    let O = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", w));
    const Y = _.source;
    let j = p.get(Y);
    j === void 0 && (j = {}, p.set(Y, j));
    const ee = z(_);
    if (ee !== E.__cacheKey) {
      j[ee] === void 0 && (j[ee] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, O = !0), j[ee].usedTimes++;
      const ae = j[E.__cacheKey];
      ae !== void 0 && (j[E.__cacheKey].usedTimes--, ae.usedTimes === 0 && D(_)), E.__cacheKey = ee, E.__webglTexture = j[ee].texture;
    }
    return O;
  }
  function fe(E, _, O) {
    return Math.floor(Math.floor(E / O) / _);
  }
  function ie(E, _, O, Y) {
    const ee = E.updateRanges;
    if (ee.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, O, Y, _.data);
    else {
      ee.sort((_e, re) => _e.start - re.start);
      let ae = 0;
      for (let _e = 1; _e < ee.length; _e++) {
        const re = ee[ae], te = ee[_e], Re = re.start + re.count, Ue = fe(te.start, _.width, 4), qe = fe(re.start, _.width, 4);
        te.start <= Re + 1 && Ue === qe && fe(te.start + te.count - 1, _.width, 4) === Ue ? re.count = Math.max(
          re.count,
          te.start + te.count - re.start
        ) : (++ae, ee[ae] = te);
      }
      ee.length = ae + 1;
      const W = t.getParameter(i.UNPACK_ROW_LENGTH), K = t.getParameter(i.UNPACK_SKIP_PIXELS), de = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let _e = 0, re = ee.length; _e < re; _e++) {
        const te = ee[_e], Re = Math.floor(te.start / 4), Ue = Math.ceil(te.count / 4), qe = Re % _.width, P = Math.floor(Re / _.width), ne = Ue, q = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, qe), t.pixelStorei(i.UNPACK_SKIP_ROWS, P), t.texSubImage2D(i.TEXTURE_2D, 0, qe, P, ne, q, O, Y, _.data);
      }
      E.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, W), t.pixelStorei(i.UNPACK_SKIP_PIXELS, K), t.pixelStorei(i.UNPACK_SKIP_ROWS, de);
    }
  }
  function ye(E, _, O) {
    let Y = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Y = i.TEXTURE_3D);
    const j = Z(E, _), ee = _.source;
    t.bindTexture(Y, E.__webglTexture, i.TEXTURE0 + O);
    const ae = n.get(ee);
    if (ee.version !== ae.__version || j === !0) {
      if (t.activeTexture(i.TEXTURE0 + O), (typeof ImageBitmap < "u" && _.image instanceof ImageBitmap) === !1) {
        const q = Ve.getPrimaries(Ve.workingColorSpace), pe = _.colorSpace === "" ? null : Ve.getPrimaries(_.colorSpace), se = _.colorSpace === "" || q === pe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, se);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment);
      let K = f(_.image, !1, r.maxTextureSize);
      K = oe(_, K);
      const de = s.convert(_.format, _.colorSpace), _e = s.convert(_.type);
      let re = T(_.internalFormat, de, _e, _.normalized, _.colorSpace, _.isVideoTexture);
      Ie(Y, _);
      let te;
      const Re = _.mipmaps, Ue = _.isVideoTexture !== !0, qe = ae.__version === void 0 || j === !0, P = ee.dataReady, ne = y(_, K);
      if (_.isDepthTexture)
        re = C(_.format === 1027, _.type), qe && (Ue ? t.texStorage2D(i.TEXTURE_2D, 1, re, K.width, K.height) : t.texImage2D(i.TEXTURE_2D, 0, re, K.width, K.height, 0, de, _e, null));
      else if (_.isDataTexture)
        if (Re.length > 0) {
          Ue && qe && t.texStorage2D(i.TEXTURE_2D, ne, re, Re[0].width, Re[0].height);
          for (let q = 0, pe = Re.length; q < pe; q++)
            te = Re[q], Ue ? P && t.texSubImage2D(i.TEXTURE_2D, q, 0, 0, te.width, te.height, de, _e, te.data) : t.texImage2D(i.TEXTURE_2D, q, re, te.width, te.height, 0, de, _e, te.data);
          _.generateMipmaps = !1;
        } else
          Ue ? (qe && t.texStorage2D(i.TEXTURE_2D, ne, re, K.width, K.height), P && ie(_, K, de, _e)) : t.texImage2D(i.TEXTURE_2D, 0, re, K.width, K.height, 0, de, _e, K.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ue && qe && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, re, Re[0].width, Re[0].height, K.depth);
          for (let q = 0, pe = Re.length; q < pe; q++)
            if (te = Re[q], _.format !== 1023)
              if (de !== null)
                if (Ue) {
                  if (P)
                    if (_.layerUpdates.size > 0) {
                      const se = vs(te.width, te.height, _.format, _.type);
                      for (const $ of _.layerUpdates) {
                        const Me = te.data.subarray(
                          $ * se / te.data.BYTES_PER_ELEMENT,
                          ($ + 1) * se / te.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, q, 0, 0, $, te.width, te.height, 1, de, Me);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, q, 0, 0, 0, te.width, te.height, K.depth, de, te.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, q, re, te.width, te.height, K.depth, 0, te.data, 0, 0);
              else
                Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ue ? P && t.texSubImage3D(i.TEXTURE_2D_ARRAY, q, 0, 0, 0, te.width, te.height, K.depth, de, _e, te.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, q, re, te.width, te.height, K.depth, 0, de, _e, te.data);
        } else {
          Ue && qe && t.texStorage2D(i.TEXTURE_2D, ne, re, Re[0].width, Re[0].height);
          for (let q = 0, pe = Re.length; q < pe; q++)
            te = Re[q], _.format !== 1023 ? de !== null ? Ue ? P && t.compressedTexSubImage2D(i.TEXTURE_2D, q, 0, 0, te.width, te.height, de, te.data) : t.compressedTexImage2D(i.TEXTURE_2D, q, re, te.width, te.height, 0, te.data) : Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ue ? P && t.texSubImage2D(i.TEXTURE_2D, q, 0, 0, te.width, te.height, de, _e, te.data) : t.texImage2D(i.TEXTURE_2D, q, re, te.width, te.height, 0, de, _e, te.data);
        }
      else if (_.isDataArrayTexture)
        if (Ue) {
          if (qe && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, re, K.width, K.height, K.depth), P)
            if (_.layerUpdates.size > 0) {
              const q = vs(K.width, K.height, _.format, _.type);
              for (const pe of _.layerUpdates) {
                const se = K.data.subarray(
                  pe * q / K.data.BYTES_PER_ELEMENT,
                  (pe + 1) * q / K.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, pe, K.width, K.height, 1, de, _e, se);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K.width, K.height, K.depth, de, _e, K.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, re, K.width, K.height, K.depth, 0, de, _e, K.data);
      else if (_.isData3DTexture)
        Ue ? (qe && t.texStorage3D(i.TEXTURE_3D, ne, re, K.width, K.height, K.depth), P && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth, de, _e, K.data)) : t.texImage3D(i.TEXTURE_3D, 0, re, K.width, K.height, K.depth, 0, de, _e, K.data);
      else if (_.isFramebufferTexture) {
        if (qe)
          if (Ue)
            t.texStorage2D(i.TEXTURE_2D, ne, re, K.width, K.height);
          else {
            let q = K.width, pe = K.height;
            for (let se = 0; se < ne; se++)
              t.texImage2D(i.TEXTURE_2D, se, re, q, pe, 0, de, _e, null), q >>= 1, pe >>= 1;
          }
      } else if (_.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const q = i.canvas;
          if (q.hasAttribute("layoutsubtree") || q.setAttribute("layoutsubtree", "true"), K.parentNode !== q) {
            q.appendChild(K), m.add(_), q.onpaint = (De) => {
              const ut = De.changedElements;
              for (const $e of m)
                ut.includes($e.image) && ($e.needsUpdate = !0);
            }, q.requestPaint();
            return;
          }
          const pe = 0, se = i.RGBA, $ = i.RGBA, Me = i.UNSIGNED_BYTE;
          i.texElementImage2D(i.TEXTURE_2D, pe, se, $, Me, K), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Re.length > 0) {
        if (Ue && qe) {
          const q = at(Re[0]);
          t.texStorage2D(i.TEXTURE_2D, ne, re, q.width, q.height);
        }
        for (let q = 0, pe = Re.length; q < pe; q++)
          te = Re[q], Ue ? P && t.texSubImage2D(i.TEXTURE_2D, q, 0, 0, de, _e, te) : t.texImage2D(i.TEXTURE_2D, q, re, de, _e, te);
        _.generateMipmaps = !1;
      } else if (Ue) {
        if (qe) {
          const q = at(K);
          t.texStorage2D(i.TEXTURE_2D, ne, re, q.width, q.height);
        }
        P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, de, _e, K);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, re, de, _e, K);
      h(_) && M(Y), ae.__version = ee.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function we(E, _, O) {
    if (_.image.length !== 6) return;
    const Y = Z(E, _), j = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + O);
    const ee = n.get(j);
    if (j.version !== ee.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + O);
      const ae = Ve.getPrimaries(Ve.workingColorSpace), W = _.colorSpace === "" ? null : Ve.getPrimaries(_.colorSpace), K = _.colorSpace === "" || ae === W ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, K);
      const de = _.isCompressedTexture || _.image[0].isCompressedTexture, _e = _.image[0] && _.image[0].isDataTexture, re = [];
      for (let $ = 0; $ < 6; $++)
        !de && !_e ? re[$] = f(_.image[$], !0, r.maxCubemapSize) : re[$] = _e ? _.image[$].image : _.image[$], re[$] = oe(_, re[$]);
      const te = re[0], Re = s.convert(_.format, _.colorSpace), Ue = s.convert(_.type), qe = T(_.internalFormat, Re, Ue, _.normalized, _.colorSpace), P = _.isVideoTexture !== !0, ne = ee.__version === void 0 || Y === !0, q = j.dataReady;
      let pe = y(_, te);
      Ie(i.TEXTURE_CUBE_MAP, _);
      let se;
      if (de) {
        P && ne && t.texStorage2D(i.TEXTURE_CUBE_MAP, pe, qe, te.width, te.height);
        for (let $ = 0; $ < 6; $++) {
          se = re[$].mipmaps;
          for (let Me = 0; Me < se.length; Me++) {
            const De = se[Me];
            _.format !== 1023 ? Re !== null ? P ? q && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me, 0, 0, De.width, De.height, Re, De.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me, qe, De.width, De.height, 0, De.data) : Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : P ? q && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me, 0, 0, De.width, De.height, Re, Ue, De.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me, qe, De.width, De.height, 0, Re, Ue, De.data);
          }
        }
      } else {
        if (se = _.mipmaps, P && ne) {
          se.length > 0 && pe++;
          const $ = at(re[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, pe, qe, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (_e) {
            P ? q && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, re[$].width, re[$].height, Re, Ue, re[$].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, qe, re[$].width, re[$].height, 0, Re, Ue, re[$].data);
            for (let Me = 0; Me < se.length; Me++) {
              const ut = se[Me].image[$].image;
              P ? q && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me + 1, 0, 0, ut.width, ut.height, Re, Ue, ut.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me + 1, qe, ut.width, ut.height, 0, Re, Ue, ut.data);
            }
          } else {
            P ? q && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Re, Ue, re[$]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, qe, Re, Ue, re[$]);
            for (let Me = 0; Me < se.length; Me++) {
              const De = se[Me];
              P ? q && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me + 1, 0, 0, Re, Ue, De.image[$]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + $, Me + 1, qe, Re, Ue, De.image[$]);
            }
          }
      }
      h(_) && M(i.TEXTURE_CUBE_MAP), ee.__version = j.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function be(E, _, O, Y, j, ee) {
    const ae = s.convert(O.format, O.colorSpace), W = s.convert(O.type), K = T(O.internalFormat, ae, W, O.normalized, O.colorSpace), de = n.get(_), _e = n.get(O);
    if (_e.__renderTarget = _, !de.__hasExternalTextures) {
      const re = Math.max(1, _.width >> ee), te = Math.max(1, _.height >> ee);
      j === i.TEXTURE_3D || j === i.TEXTURE_2D_ARRAY ? t.texImage3D(j, ee, K, re, te, _.depth, 0, ae, W, null) : t.texImage2D(j, ee, K, re, te, 0, ae, W, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), Ge(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, j, _e.__webglTexture, 0, _t(_)) : (j === i.TEXTURE_2D || j >= i.TEXTURE_CUBE_MAP_POSITIVE_X && j <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, j, _e.__webglTexture, ee), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function rt(E, _, O) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer) {
      const Y = _.depthTexture, j = Y && Y.isDepthTexture ? Y.type : null, ee = C(_.stencilBuffer, j), ae = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      Ge(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, _t(_), ee, _.width, _.height) : O ? i.renderbufferStorageMultisample(i.RENDERBUFFER, _t(_), ee, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ee, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ae, i.RENDERBUFFER, E);
    } else {
      const Y = _.textures;
      for (let j = 0; j < Y.length; j++) {
        const ee = Y[j], ae = s.convert(ee.format, ee.colorSpace), W = s.convert(ee.type), K = T(ee.internalFormat, ae, W, ee.normalized, ee.colorSpace);
        Ge(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, _t(_), K, _.width, _.height) : O ? i.renderbufferStorageMultisample(i.RENDERBUFFER, _t(_), K, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, K, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Be(E, _, O) {
    const Y = _.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(_.depthTexture);
    if (j.__renderTarget = _, (!j.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), Y) {
      if (j.__webglInit === void 0 && (j.__webglInit = !0, _.depthTexture.addEventListener("dispose", w)), j.__webglTexture === void 0) {
        j.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture), Ie(i.TEXTURE_CUBE_MAP, _.depthTexture);
        const de = s.convert(_.depthTexture.format), _e = s.convert(_.depthTexture.type);
        let re;
        _.depthTexture.format === 1026 ? re = i.DEPTH_COMPONENT24 : _.depthTexture.format === 1027 && (re = i.DEPTH24_STENCIL8);
        for (let te = 0; te < 6; te++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, re, _.width, _.height, 0, de, _e, null);
      }
    } else
      J(_.depthTexture, 0);
    const ee = j.__webglTexture, ae = _t(_), W = Y ? i.TEXTURE_CUBE_MAP_POSITIVE_X + O : i.TEXTURE_2D, K = _.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === 1026)
      Ge(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, W, ee, 0, ae) : i.framebufferTexture2D(i.FRAMEBUFFER, K, W, ee, 0);
    else if (_.depthTexture.format === 1027)
      Ge(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, W, ee, 0, ae) : i.framebufferTexture2D(i.FRAMEBUFFER, K, W, ee, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ze(E) {
    const _ = n.get(E), O = E.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const Y = E.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), Y) {
        const j = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, Y.removeEventListener("dispose", j);
        };
        Y.addEventListener("dispose", j), _.__depthDisposeCallback = j;
      }
      _.__boundDepthTexture = Y;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer)
      if (O)
        for (let Y = 0; Y < 6; Y++)
          Be(_.__webglFramebuffer[Y], E, Y);
      else {
        const Y = E.texture.mipmaps;
        Y && Y.length > 0 ? Be(_.__webglFramebuffer[0], E, 0) : Be(_.__webglFramebuffer, E, 0);
      }
    else if (O) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]), _.__webglDepthbuffer[Y] === void 0)
          _.__webglDepthbuffer[Y] = i.createRenderbuffer(), rt(_.__webglDepthbuffer[Y], E, !1);
        else {
          const j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ee = _.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, ee), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, ee);
        }
    } else {
      const Y = E.texture.mipmaps;
      if (Y && Y.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), rt(_.__webglDepthbuffer, E, !1);
      else {
        const j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ee = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, ee), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, ee);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function it(E, _, O) {
    const Y = n.get(E);
    _ !== void 0 && be(Y.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), O !== void 0 && Ze(E);
  }
  function Oe(E) {
    const _ = E.texture, O = n.get(E), Y = n.get(_);
    E.addEventListener("dispose", g);
    const j = E.textures, ee = E.isWebGLCubeRenderTarget === !0, ae = j.length > 1;
    if (ae || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = _.version, a.memory.textures++), ee) {
      O.__webglFramebuffer = [];
      for (let W = 0; W < 6; W++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          O.__webglFramebuffer[W] = [];
          for (let K = 0; K < _.mipmaps.length; K++)
            O.__webglFramebuffer[W][K] = i.createFramebuffer();
        } else
          O.__webglFramebuffer[W] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let W = 0; W < _.mipmaps.length; W++)
          O.__webglFramebuffer[W] = i.createFramebuffer();
      } else
        O.__webglFramebuffer = i.createFramebuffer();
      if (ae)
        for (let W = 0, K = j.length; W < K; W++) {
          const de = n.get(j[W]);
          de.__webglTexture === void 0 && (de.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && Ge(E) === !1) {
        O.__webglMultisampledFramebuffer = i.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let W = 0; W < j.length; W++) {
          const K = j[W];
          O.__webglColorRenderbuffer[W] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[W]);
          const de = s.convert(K.format, K.colorSpace), _e = s.convert(K.type), re = T(K.internalFormat, de, _e, K.normalized, K.colorSpace, E.isXRRenderTarget === !0), te = _t(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, te, re, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + W, i.RENDERBUFFER, O.__webglColorRenderbuffer[W]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (O.__webglDepthRenderbuffer = i.createRenderbuffer(), rt(O.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ee) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), Ie(i.TEXTURE_CUBE_MAP, _);
      for (let W = 0; W < 6; W++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let K = 0; K < _.mipmaps.length; K++)
            be(O.__webglFramebuffer[W][K], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + W, K);
        else
          be(O.__webglFramebuffer[W], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0);
      h(_) && M(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ae) {
      for (let W = 0, K = j.length; W < K; W++) {
        const de = j[W], _e = n.get(de);
        let re = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (re = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(re, _e.__webglTexture), Ie(re, de), be(O.__webglFramebuffer, E, de, i.COLOR_ATTACHMENT0 + W, re, 0), h(de) && M(re);
      }
      t.unbindTexture();
    } else {
      let W = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (W = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(W, Y.__webglTexture), Ie(W, _), _.mipmaps && _.mipmaps.length > 0)
        for (let K = 0; K < _.mipmaps.length; K++)
          be(O.__webglFramebuffer[K], E, _, i.COLOR_ATTACHMENT0, W, K);
      else
        be(O.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, W, 0);
      h(_) && M(W), t.unbindTexture();
    }
    E.depthBuffer && Ze(E);
  }
  function mt(E) {
    const _ = E.textures;
    for (let O = 0, Y = _.length; O < Y; O++) {
      const j = _[O];
      if (h(j)) {
        const ee = A(E), ae = n.get(j).__webglTexture;
        t.bindTexture(ee, ae), M(ee), t.unbindTexture();
      }
    }
  }
  const st = [], Ct = [];
  function L(E) {
    if (E.samples > 0) {
      if (Ge(E) === !1) {
        const _ = E.textures, O = E.width, Y = E.height;
        let j = i.COLOR_BUFFER_BIT;
        const ee = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = n.get(E), W = _.length > 1;
        if (W)
          for (let de = 0; de < _.length; de++)
            t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
        const K = E.texture.mipmaps;
        K && K.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ae.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ae.__webglFramebuffer);
        for (let de = 0; de < _.length; de++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (j |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (j |= i.STENCIL_BUFFER_BIT)), W) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ae.__webglColorRenderbuffer[de]);
            const _e = n.get(_[de]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, _e, 0);
          }
          i.blitFramebuffer(0, 0, O, Y, 0, 0, O, Y, j, i.NEAREST), l === !0 && (st.length = 0, Ct.length = 0, st.push(i.COLOR_ATTACHMENT0 + de), E.depthBuffer && E.resolveDepthBuffer === !1 && (st.push(ee), Ct.push(ee), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Ct)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, st));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), W)
          for (let de = 0; de < _.length; de++) {
            t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, ae.__webglColorRenderbuffer[de]);
            const _e = n.get(_[de]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, _e, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const _ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function _t(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function Ge(E) {
    const _ = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function tt(E) {
    const _ = a.render.frame;
    d.get(E) !== _ && (d.set(E, _), E.update());
  }
  function oe(E, _) {
    const O = E.colorSpace, Y = E.format, j = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || O !== Pi && O !== "" && (Ve.getTransfer(O) === Ye ? (Y !== 1023 || j !== 1009) && Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Xe("WebGLTextures: Unsupported texture color space:", O)), _;
  }
  function at(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = k, this.getTextureUnits = X, this.setTextureUnits = I, this.setTexture2D = J, this.setTexture2DArray = Q, this.setTexture3D = ce, this.setTextureCube = xe, this.rebindTextures = it, this.setupRenderTarget = Oe, this.updateRenderTargetMipmap = mt, this.updateMultisampleRenderTarget = L, this.setupDepthRenderbuffer = Ze, this.setupFrameBufferTexture = be, this.useMultisampledRTT = Ge, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function $h(i, e) {
  function t(n, r = "") {
    let s;
    const a = Ve.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === Ye)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === Ye ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === Ye ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === Ye ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const jh = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Jh = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Qh {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const n = new ta(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Yt({
        vertexShader: jh,
        fragmentShader: Jh,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new dt(new Bi(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class ef extends Mn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, d = null, m = null, u = null, p = null, x = null;
    const S = typeof XRWebGLBinding < "u", f = new Qh(), h = {}, M = t.getContextAttributes();
    let A = null, T = null;
    const C = [], y = [], w = new Ce();
    let g = null;
    const b = new Ft();
    b.viewport = new lt();
    const D = new Ft();
    D.viewport = new lt();
    const R = [b, D], F = new lo();
    let k = null, X = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Z) {
      let fe = C[Z];
      return fe === void 0 && (fe = new $i(), C[Z] = fe), fe.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let fe = C[Z];
      return fe === void 0 && (fe = new $i(), C[Z] = fe), fe.getGripSpace();
    }, this.getHand = function(Z) {
      let fe = C[Z];
      return fe === void 0 && (fe = new $i(), C[Z] = fe), fe.getHandSpace();
    };
    function I(Z) {
      const fe = y.indexOf(Z.inputSource);
      if (fe === -1)
        return;
      const ie = C[fe];
      ie !== void 0 && (ie.update(Z.inputSource, Z.frame, c || a), ie.dispatchEvent({ type: Z.type, data: Z.inputSource }));
    }
    function H() {
      r.removeEventListener("select", I), r.removeEventListener("selectstart", I), r.removeEventListener("selectend", I), r.removeEventListener("squeeze", I), r.removeEventListener("squeezestart", I), r.removeEventListener("squeezeend", I), r.removeEventListener("end", H), r.removeEventListener("inputsourceschange", z);
      for (let Z = 0; Z < C.length; Z++) {
        const fe = y[Z];
        fe !== null && (y[Z] = null, C[Z].disconnect(fe));
      }
      k = null, X = null, f.reset();
      for (const Z in h)
        delete h[Z];
      e.setRenderTarget(A), p = null, u = null, m = null, r = null, T = null, Ie.stop(), n.isPresenting = !1, e.setPixelRatio(g), e.setSize(w.width, w.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      s = Z, n.isPresenting === !0 && Ae("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      o = Z, n.isPresenting === !0 && Ae("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Z) {
      c = Z;
    }, this.getBaseLayer = function() {
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return m === null && S && (m = new XRWebGLBinding(r, t)), m;
    }, this.getFrame = function() {
      return x;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Z) {
      if (r = Z, r !== null) {
        if (A = e.getRenderTarget(), r.addEventListener("select", I), r.addEventListener("selectstart", I), r.addEventListener("selectend", I), r.addEventListener("squeeze", I), r.addEventListener("squeezestart", I), r.addEventListener("squeezeend", I), r.addEventListener("end", H), r.addEventListener("inputsourceschange", z), M.xrCompatible !== !0 && await t.makeXRCompatible(), g = e.getPixelRatio(), e.getSize(w), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ie = null, ye = null, we = null;
          M.depth && (we = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ie = M.stencil ? 1027 : 1026, ye = M.stencil ? 1020 : 1014);
          const be = {
            colorFormat: t.RGBA8,
            depthFormat: we,
            scaleFactor: s
          };
          m = this.getBinding(), u = m.createProjectionLayer(be), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), T = new Xt(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Gn(u.textureWidth, u.textureHeight, ye, void 0, void 0, void 0, void 0, void 0, void 0, ie),
              stencilBuffer: M.stencil,
              colorSpace: e.outputColorSpace,
              samples: M.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const ie = {
            antialias: M.antialias,
            alpha: !0,
            depth: M.depth,
            stencil: M.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, ie), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), T = new Xt(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: M.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        T.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Ie.setContext(r), Ie.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return f.getDepthTexture();
    };
    function z(Z) {
      for (let fe = 0; fe < Z.removed.length; fe++) {
        const ie = Z.removed[fe], ye = y.indexOf(ie);
        ye >= 0 && (y[ye] = null, C[ye].disconnect(ie));
      }
      for (let fe = 0; fe < Z.added.length; fe++) {
        const ie = Z.added[fe];
        let ye = y.indexOf(ie);
        if (ye === -1) {
          for (let be = 0; be < C.length; be++)
            if (be >= y.length) {
              y.push(ie), ye = be;
              break;
            } else if (y[be] === null) {
              y[be] = ie, ye = be;
              break;
            }
          if (ye === -1) break;
        }
        const we = C[ye];
        we && we.connect(ie);
      }
    }
    const J = new N(), Q = new N();
    function ce(Z, fe, ie) {
      J.setFromMatrixPosition(fe.matrixWorld), Q.setFromMatrixPosition(ie.matrixWorld);
      const ye = J.distanceTo(Q), we = fe.projectionMatrix.elements, be = ie.projectionMatrix.elements, rt = we[14] / (we[10] - 1), Be = we[14] / (we[10] + 1), Ze = (we[9] + 1) / we[5], it = (we[9] - 1) / we[5], Oe = (we[8] - 1) / we[0], mt = (be[8] + 1) / be[0], st = rt * Oe, Ct = rt * mt, L = ye / (-Oe + mt), _t = L * -Oe;
      if (fe.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(_t), Z.translateZ(L), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert(), we[10] === -1)
        Z.projectionMatrix.copy(fe.projectionMatrix), Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);
      else {
        const Ge = rt + L, tt = Be + L, oe = st - _t, at = Ct + (ye - _t), E = Ze * Be / tt * Ge, _ = it * Be / tt * Ge;
        Z.projectionMatrix.makePerspective(oe, at, E, _, Ge, tt), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert();
      }
    }
    function xe(Z, fe) {
      fe === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(fe.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (r === null) return;
      let fe = Z.near, ie = Z.far;
      f.texture !== null && (f.depthNear > 0 && (fe = f.depthNear), f.depthFar > 0 && (ie = f.depthFar)), F.near = D.near = b.near = fe, F.far = D.far = b.far = ie, (k !== F.near || X !== F.far) && (r.updateRenderState({
        depthNear: F.near,
        depthFar: F.far
      }), k = F.near, X = F.far), F.layers.mask = Z.layers.mask | 6, b.layers.mask = F.layers.mask & -5, D.layers.mask = F.layers.mask & -3;
      const ye = Z.parent, we = F.cameras;
      xe(F, ye);
      for (let be = 0; be < we.length; be++)
        xe(we[be], ye);
      we.length === 2 ? ce(F, b, D) : F.projectionMatrix.copy(b.projectionMatrix), Ee(Z, F, ye);
    };
    function Ee(Z, fe, ie) {
      ie === null ? Z.matrix.copy(fe.matrixWorld) : (Z.matrix.copy(ie.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(fe.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(!0), Z.projectionMatrix.copy(fe.projectionMatrix), Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Er * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return F;
    }, this.getFoveation = function() {
      if (!(u === null && p === null))
        return l;
    }, this.setFoveation = function(Z) {
      l = Z, u !== null && (u.fixedFoveation = Z), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return f.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return f.getMesh(F);
    }, this.getCameraTexture = function(Z) {
      return h[Z];
    };
    let ke = null;
    function Ke(Z, fe) {
      if (d = fe.getViewerPose(c || a), x = fe, d !== null) {
        const ie = d.views;
        p !== null && (e.setRenderTargetFramebuffer(T, p.framebuffer), e.setRenderTarget(T));
        let ye = !1;
        ie.length !== F.cameras.length && (F.cameras.length = 0, ye = !0);
        for (let Be = 0; Be < ie.length; Be++) {
          const Ze = ie[Be];
          let it = null;
          if (p !== null)
            it = p.getViewport(Ze);
          else {
            const mt = m.getViewSubImage(u, Ze);
            it = mt.viewport, Be === 0 && (e.setRenderTargetTextures(
              T,
              mt.colorTexture,
              mt.depthStencilTexture
            ), e.setRenderTarget(T));
          }
          let Oe = R[Be];
          Oe === void 0 && (Oe = new Ft(), Oe.layers.enable(Be), Oe.viewport = new lt(), R[Be] = Oe), Oe.matrix.fromArray(Ze.transform.matrix), Oe.matrix.decompose(Oe.position, Oe.quaternion, Oe.scale), Oe.projectionMatrix.fromArray(Ze.projectionMatrix), Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(), Oe.viewport.set(it.x, it.y, it.width, it.height), Be === 0 && (F.matrix.copy(Oe.matrix), F.matrix.decompose(F.position, F.quaternion, F.scale)), ye === !0 && F.cameras.push(Oe);
        }
        const we = r.enabledFeatures;
        if (we && we.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && S) {
          m = n.getBinding();
          const Be = m.getDepthInformation(ie[0]);
          Be && Be.isValid && Be.texture && f.init(Be, r.renderState);
        }
        if (we && we.includes("camera-access") && S) {
          e.state.unbindTexture(), m = n.getBinding();
          for (let Be = 0; Be < ie.length; Be++) {
            const Ze = ie[Be].camera;
            if (Ze) {
              let it = h[Ze];
              it || (it = new ta(), h[Ze] = it);
              const Oe = m.getCameraImage(Ze);
              it.sourceTexture = Oe;
            }
          }
        }
      }
      for (let ie = 0; ie < C.length; ie++) {
        const ye = y[ie], we = C[ie];
        ye !== null && we !== void 0 && we.update(ye, fe, c || a);
      }
      ke && ke(Z, fe), fe.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: fe }), x = null;
    }
    const Ie = new sa();
    Ie.setAnimationLoop(Ke), this.setAnimationLoop = function(Z) {
      ke = Z;
    }, this.dispose = function() {
    };
  }
}
const tf = /* @__PURE__ */ new ct(), fa = /* @__PURE__ */ new Pe();
fa.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function nf(i, e) {
  function t(f, h) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), h.value.copy(f.matrix);
  }
  function n(f, h) {
    h.color.getRGB(f.fogColor.value, na(i)), h.isFog ? (f.fogNear.value = h.near, f.fogFar.value = h.far) : h.isFogExp2 && (f.fogDensity.value = h.density);
  }
  function r(f, h, M, A, T) {
    h.isNodeMaterial ? h.uniformsNeedUpdate = !1 : h.isMeshBasicMaterial ? s(f, h) : h.isMeshLambertMaterial ? (s(f, h), h.envMap && (f.envMapIntensity.value = h.envMapIntensity)) : h.isMeshToonMaterial ? (s(f, h), m(f, h)) : h.isMeshPhongMaterial ? (s(f, h), d(f, h), h.envMap && (f.envMapIntensity.value = h.envMapIntensity)) : h.isMeshStandardMaterial ? (s(f, h), u(f, h), h.isMeshPhysicalMaterial && p(f, h, T)) : h.isMeshMatcapMaterial ? (s(f, h), x(f, h)) : h.isMeshDepthMaterial ? s(f, h) : h.isMeshDistanceMaterial ? (s(f, h), S(f, h)) : h.isMeshNormalMaterial ? s(f, h) : h.isLineBasicMaterial ? (a(f, h), h.isLineDashedMaterial && o(f, h)) : h.isPointsMaterial ? l(f, h, M, A) : h.isSpriteMaterial ? c(f, h) : h.isShadowMaterial ? (f.color.value.copy(h.color), f.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(f, h) {
    f.opacity.value = h.opacity, h.color && f.diffuse.value.copy(h.color), h.emissive && f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (f.map.value = h.map, t(h.map, f.mapTransform)), h.alphaMap && (f.alphaMap.value = h.alphaMap, t(h.alphaMap, f.alphaMapTransform)), h.bumpMap && (f.bumpMap.value = h.bumpMap, t(h.bumpMap, f.bumpMapTransform), f.bumpScale.value = h.bumpScale, h.side === 1 && (f.bumpScale.value *= -1)), h.normalMap && (f.normalMap.value = h.normalMap, t(h.normalMap, f.normalMapTransform), f.normalScale.value.copy(h.normalScale), h.side === 1 && f.normalScale.value.negate()), h.displacementMap && (f.displacementMap.value = h.displacementMap, t(h.displacementMap, f.displacementMapTransform), f.displacementScale.value = h.displacementScale, f.displacementBias.value = h.displacementBias), h.emissiveMap && (f.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, f.emissiveMapTransform)), h.specularMap && (f.specularMap.value = h.specularMap, t(h.specularMap, f.specularMapTransform)), h.alphaTest > 0 && (f.alphaTest.value = h.alphaTest);
    const M = e.get(h), A = M.envMap, T = M.envMapRotation;
    A && (f.envMap.value = A, f.envMapRotation.value.setFromMatrix4(tf.makeRotationFromEuler(T)).transpose(), A.isCubeTexture && A.isRenderTargetTexture === !1 && f.envMapRotation.value.premultiply(fa), f.reflectivity.value = h.reflectivity, f.ior.value = h.ior, f.refractionRatio.value = h.refractionRatio), h.lightMap && (f.lightMap.value = h.lightMap, f.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, f.lightMapTransform)), h.aoMap && (f.aoMap.value = h.aoMap, f.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, f.aoMapTransform));
  }
  function a(f, h) {
    f.diffuse.value.copy(h.color), f.opacity.value = h.opacity, h.map && (f.map.value = h.map, t(h.map, f.mapTransform));
  }
  function o(f, h) {
    f.dashSize.value = h.dashSize, f.totalSize.value = h.dashSize + h.gapSize, f.scale.value = h.scale;
  }
  function l(f, h, M, A) {
    f.diffuse.value.copy(h.color), f.opacity.value = h.opacity, f.size.value = h.size * M, f.scale.value = A * 0.5, h.map && (f.map.value = h.map, t(h.map, f.uvTransform)), h.alphaMap && (f.alphaMap.value = h.alphaMap, t(h.alphaMap, f.alphaMapTransform)), h.alphaTest > 0 && (f.alphaTest.value = h.alphaTest);
  }
  function c(f, h) {
    f.diffuse.value.copy(h.color), f.opacity.value = h.opacity, f.rotation.value = h.rotation, h.map && (f.map.value = h.map, t(h.map, f.mapTransform)), h.alphaMap && (f.alphaMap.value = h.alphaMap, t(h.alphaMap, f.alphaMapTransform)), h.alphaTest > 0 && (f.alphaTest.value = h.alphaTest);
  }
  function d(f, h) {
    f.specular.value.copy(h.specular), f.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function m(f, h) {
    h.gradientMap && (f.gradientMap.value = h.gradientMap);
  }
  function u(f, h) {
    f.metalness.value = h.metalness, h.metalnessMap && (f.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, f.metalnessMapTransform)), f.roughness.value = h.roughness, h.roughnessMap && (f.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, f.roughnessMapTransform)), h.envMap && (f.envMapIntensity.value = h.envMapIntensity);
  }
  function p(f, h, M) {
    f.ior.value = h.ior, h.sheen > 0 && (f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), f.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (f.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, f.sheenColorMapTransform)), h.sheenRoughnessMap && (f.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, f.sheenRoughnessMapTransform))), h.clearcoat > 0 && (f.clearcoat.value = h.clearcoat, f.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (f.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, f.clearcoatMapTransform)), h.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (f.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === 1 && f.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (f.dispersion.value = h.dispersion), h.iridescence > 0 && (f.iridescence.value = h.iridescence, f.iridescenceIOR.value = h.iridescenceIOR, f.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (f.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, f.iridescenceMapTransform)), h.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), h.transmission > 0 && (f.transmission.value = h.transmission, f.transmissionSamplerMap.value = M.texture, f.transmissionSamplerSize.value.set(M.width, M.height), h.transmissionMap && (f.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, f.transmissionMapTransform)), f.thickness.value = h.thickness, h.thicknessMap && (f.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = h.attenuationDistance, f.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (f.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (f.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = h.specularIntensity, f.specularColor.value.copy(h.specularColor), h.specularColorMap && (f.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, f.specularColorMapTransform)), h.specularIntensityMap && (f.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function x(f, h) {
    h.matcap && (f.matcap.value = h.matcap);
  }
  function S(f, h) {
    const M = e.get(h).light;
    f.referencePosition.value.setFromMatrixPosition(M.matrixWorld), f.nearDistance.value = M.shadow.camera.near, f.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function rf(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(M, A) {
    const T = A.program;
    n.uniformBlockBinding(M, T);
  }
  function c(M, A) {
    let T = r[M.id];
    T === void 0 && (x(M), T = d(M), r[M.id] = T, M.addEventListener("dispose", f));
    const C = A.program;
    n.updateUBOMapping(M, C);
    const y = e.render.frame;
    s[M.id] !== y && (u(M), s[M.id] = y);
  }
  function d(M) {
    const A = m();
    M.__bindingPointIndex = A;
    const T = i.createBuffer(), C = M.__size, y = M.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, T), i.bufferData(i.UNIFORM_BUFFER, C, y), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, A, T), T;
  }
  function m() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const A = r[M.id], T = M.uniforms, C = M.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, A);
    for (let y = 0, w = T.length; y < w; y++) {
      const g = Array.isArray(T[y]) ? T[y] : [T[y]];
      for (let b = 0, D = g.length; b < D; b++) {
        const R = g[b];
        if (p(R, y, b, C) === !0) {
          const F = R.__offset, k = Array.isArray(R.value) ? R.value : [R.value];
          let X = 0;
          for (let I = 0; I < k.length; I++) {
            const H = k[I], z = S(H);
            typeof H == "number" || typeof H == "boolean" ? (R.__data[0] = H, i.bufferSubData(i.UNIFORM_BUFFER, F + X, R.__data)) : H.isMatrix3 ? (R.__data[0] = H.elements[0], R.__data[1] = H.elements[1], R.__data[2] = H.elements[2], R.__data[3] = 0, R.__data[4] = H.elements[3], R.__data[5] = H.elements[4], R.__data[6] = H.elements[5], R.__data[7] = 0, R.__data[8] = H.elements[6], R.__data[9] = H.elements[7], R.__data[10] = H.elements[8], R.__data[11] = 0) : ArrayBuffer.isView(H) ? R.__data.set(new H.constructor(H.buffer, H.byteOffset, R.__data.length)) : (H.toArray(R.__data, X), X += z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, F, R.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(M, A, T, C) {
    const y = M.value, w = A + "_" + T;
    if (C[w] === void 0)
      return typeof y == "number" || typeof y == "boolean" ? C[w] = y : ArrayBuffer.isView(y) ? C[w] = y.slice() : C[w] = y.clone(), !0;
    {
      const g = C[w];
      if (typeof y == "number" || typeof y == "boolean") {
        if (g !== y)
          return C[w] = y, !0;
      } else {
        if (ArrayBuffer.isView(y))
          return !0;
        if (g.equals(y) === !1)
          return g.copy(y), !0;
      }
    }
    return !1;
  }
  function x(M) {
    const A = M.uniforms;
    let T = 0;
    const C = 16;
    for (let w = 0, g = A.length; w < g; w++) {
      const b = Array.isArray(A[w]) ? A[w] : [A[w]];
      for (let D = 0, R = b.length; D < R; D++) {
        const F = b[D], k = Array.isArray(F.value) ? F.value : [F.value];
        for (let X = 0, I = k.length; X < I; X++) {
          const H = k[X], z = S(H), J = T % C, Q = J % z.boundary, ce = J + Q;
          T += Q, ce !== 0 && C - ce < z.storage && (T += C - ce), F.__data = new Float32Array(z.storage / Float32Array.BYTES_PER_ELEMENT), F.__offset = T, T += z.storage;
        }
      }
    }
    const y = T % C;
    return y > 0 && (T += C - y), M.__size = T, M.__cache = {}, this;
  }
  function S(M) {
    const A = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (A.boundary = 4, A.storage = 4) : M.isVector2 ? (A.boundary = 8, A.storage = 8) : M.isVector3 || M.isColor ? (A.boundary = 16, A.storage = 12) : M.isVector4 ? (A.boundary = 16, A.storage = 16) : M.isMatrix3 ? (A.boundary = 48, A.storage = 48) : M.isMatrix4 ? (A.boundary = 64, A.storage = 64) : M.isTexture ? Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (A.boundary = 16, A.storage = M.byteLength) : Ae("WebGLRenderer: Unsupported uniform value type.", M), A;
  }
  function f(M) {
    const A = M.target;
    A.removeEventListener("dispose", f);
    const T = a.indexOf(A.__bindingPointIndex);
    a.splice(T, 1), i.deleteBuffer(r[A.id]), delete r[A.id], delete s[A.id];
  }
  function h() {
    for (const M in r)
      i.deleteBuffer(r[M]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
const sf = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]);
let kt = null;
function af() {
  return kt === null && (kt = new Xa(sf, 16, 16, 1030, 1016), kt.name = "DFG_LUT", kt.minFilter = 1006, kt.magFilter = 1006, kt.wrapS = 1001, kt.wrapT = 1001, kt.generateMipmaps = !1, kt.needsUpdate = !0), kt;
}
class of {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Ea(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: d = "default",
      failIfMajorPerformanceCaveat: m = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: p = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let x;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      x = n.getContextAttributes().alpha;
    } else
      x = a;
    const S = p, f = /* @__PURE__ */ new Set([
      1033,
      1031,
      1029
    ]), h = /* @__PURE__ */ new Set([
      1009,
      1014,
      1012,
      1020,
      1017,
      1018
    ]), M = new Uint32Array(4), A = new Int32Array(4), T = new N();
    let C = null, y = null;
    const w = [], g = [];
    let b = null;
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const D = this;
    let R = !1, F = null;
    this._outputColorSpace = Lt;
    let k = 0, X = 0, I = null, H = -1, z = null;
    const J = new lt(), Q = new lt();
    let ce = null;
    const xe = new He(0);
    let Ee = 0, ke = t.width, Ke = t.height, Ie = 1, Z = null, fe = null;
    const ie = new lt(0, 0, ke, Ke), ye = new lt(0, 0, ke, Ke);
    let we = !1;
    const be = new Cr();
    let rt = !1, Be = !1;
    const Ze = new ct(), it = new N(), Oe = new lt(), mt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let st = !1;
    function Ct() {
      return I === null ? Ie : 1;
    }
    let L = n;
    function _t(v, U) {
      return t.getContext(v, U);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: d,
        failIfMajorPerformanceCaveat: m
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r184"), t.addEventListener("webglcontextlost", $, !1), t.addEventListener("webglcontextrestored", Me, !1), t.addEventListener("webglcontextcreationerror", De, !1), L === null) {
        const U = "webgl2";
        if (L = _t(U, v), L === null)
          throw _t(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw Xe("WebGLRenderer: " + v.message), v;
    }
    let Ge, tt, oe, at, E, _, O, Y, j, ee, ae, W, K, de, _e, re, te, Re, Ue, qe, P, ne, q;
    function pe() {
      Ge = new su(L), Ge.init(), P = new $h(L, Ge), tt = new jc(L, Ge, e, P), oe = new Kh(L, Ge), tt.reversedDepthBuffer && u && oe.buffers.depth.setReversed(!0), at = new lu(L), E = new Uh(), _ = new Zh(L, Ge, oe, E, tt, P, at), O = new ru(D), Y = new ho(L), ne = new Zc(L, Y), j = new au(L, Y, at, ne), ee = new uu(L, j, Y, ne, at), Re = new cu(L, tt, _), _e = new Jc(E), ae = new Ih(D, O, Ge, tt, ne, _e), W = new nf(D, E), K = new Nh(), de = new Hh(Ge), te = new Kc(D, O, oe, ee, x, l), re = new Yh(D, ee, tt), q = new rf(L, at, tt, oe), Ue = new $c(L, Ge, at), qe = new ou(L, Ge, at), at.programs = ae.programs, D.capabilities = tt, D.extensions = Ge, D.properties = E, D.renderLists = K, D.shadowMap = re, D.state = oe, D.info = at;
    }
    pe(), S !== 1009 && (b = new fu(S, t.width, t.height, r, s));
    const se = new ef(D, L);
    this.xr = se, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ge.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ge.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return Ie;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (Ie = v, this.setSize(ke, Ke, !1));
    }, this.getSize = function(v) {
      return v.set(ke, Ke);
    }, this.setSize = function(v, U, V = !0) {
      if (se.isPresenting) {
        Ae("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ke = v, Ke = U, t.width = Math.floor(v * Ie), t.height = Math.floor(U * Ie), V === !0 && (t.style.width = v + "px", t.style.height = U + "px"), b !== null && b.setSize(t.width, t.height), this.setViewport(0, 0, v, U);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(ke * Ie, Ke * Ie).floor();
    }, this.setDrawingBufferSize = function(v, U, V) {
      ke = v, Ke = U, Ie = V, t.width = Math.floor(v * V), t.height = Math.floor(U * V), this.setViewport(0, 0, v, U);
    }, this.setEffects = function(v) {
      if (S === 1009) {
        Xe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (v) {
        for (let U = 0; U < v.length; U++)
          if (v[U].isOutputPass === !0) {
            Ae("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      b.setEffects(v || []);
    }, this.getCurrentViewport = function(v) {
      return v.copy(J);
    }, this.getViewport = function(v) {
      return v.copy(ie);
    }, this.setViewport = function(v, U, V, B) {
      v.isVector4 ? ie.set(v.x, v.y, v.z, v.w) : ie.set(v, U, V, B), oe.viewport(J.copy(ie).multiplyScalar(Ie).round());
    }, this.getScissor = function(v) {
      return v.copy(ye);
    }, this.setScissor = function(v, U, V, B) {
      v.isVector4 ? ye.set(v.x, v.y, v.z, v.w) : ye.set(v, U, V, B), oe.scissor(Q.copy(ye).multiplyScalar(Ie).round());
    }, this.getScissorTest = function() {
      return we;
    }, this.setScissorTest = function(v) {
      oe.setScissorTest(we = v);
    }, this.setOpaqueSort = function(v) {
      Z = v;
    }, this.setTransparentSort = function(v) {
      fe = v;
    }, this.getClearColor = function(v) {
      return v.copy(te.getClearColor());
    }, this.setClearColor = function() {
      te.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return te.getClearAlpha();
    }, this.setClearAlpha = function() {
      te.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, U = !0, V = !0) {
      let B = 0;
      if (v) {
        let G = !1;
        if (I !== null) {
          const he = I.texture.format;
          G = f.has(he);
        }
        if (G) {
          const he = I.texture.type, ge = h.has(he), ue = te.getClearColor(), ve = te.getClearAlpha(), Se = ue.r, Le = ue.g, Ne = ue.b;
          ge ? (M[0] = Se, M[1] = Le, M[2] = Ne, M[3] = ve, L.clearBufferuiv(L.COLOR, 0, M)) : (A[0] = Se, A[1] = Le, A[2] = Ne, A[3] = ve, L.clearBufferiv(L.COLOR, 0, A));
        } else
          B |= L.COLOR_BUFFER_BIT;
      }
      U && (B |= L.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), V && (B |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), B !== 0 && L.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(v) {
      v.setRenderer(this), F = v;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", $, !1), t.removeEventListener("webglcontextrestored", Me, !1), t.removeEventListener("webglcontextcreationerror", De, !1), te.dispose(), K.dispose(), de.dispose(), E.dispose(), O.dispose(), ee.dispose(), ne.dispose(), q.dispose(), ae.dispose(), se.dispose(), se.removeEventListener("sessionstart", Gr), se.removeEventListener("sessionend", zr), dn.stop();
    };
    function $(v) {
      v.preventDefault(), Zr("WebGLRenderer: Context Lost."), R = !0;
    }
    function Me() {
      Zr("WebGLRenderer: Context Restored."), R = !1;
      const v = at.autoReset, U = re.enabled, V = re.autoUpdate, B = re.needsUpdate, G = re.type;
      pe(), at.autoReset = v, re.enabled = U, re.autoUpdate = V, re.needsUpdate = B, re.type = G;
    }
    function De(v) {
      Xe("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function ut(v) {
      const U = v.target;
      U.removeEventListener("dispose", ut), $e(U);
    }
    function $e(v) {
      Kt(v), E.remove(v);
    }
    function Kt(v) {
      const U = E.get(v).programs;
      U !== void 0 && (U.forEach(function(V) {
        ae.releaseProgram(V);
      }), v.isShaderMaterial && ae.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, U, V, B, G, he) {
      U === null && (U = mt);
      const ge = G.isMesh && G.matrixWorld.determinant() < 0, ue = ma(v, U, V, B, G);
      oe.setMaterial(B, ge);
      let ve = V.index, Se = 1;
      if (B.wireframe === !0) {
        if (ve = j.getWireframeAttribute(V), ve === void 0) return;
        Se = 2;
      }
      const Le = V.drawRange, Ne = V.attributes.position;
      let Te = Le.start * Se, je = (Le.start + Le.count) * Se;
      he !== null && (Te = Math.max(Te, he.start * Se), je = Math.min(je, (he.start + he.count) * Se)), ve !== null ? (Te = Math.max(Te, 0), je = Math.min(je, ve.count)) : Ne != null && (Te = Math.max(Te, 0), je = Math.min(je, Ne.count));
      const ht = je - Te;
      if (ht < 0 || ht === 1 / 0) return;
      ne.setup(G, B, ue, V, ve);
      let ot, Qe = Ue;
      if (ve !== null && (ot = Y.get(ve), Qe = qe, Qe.setIndex(ot)), G.isMesh)
        B.wireframe === !0 ? (oe.setLineWidth(B.wireframeLinewidth * Ct()), Qe.setMode(L.LINES)) : Qe.setMode(L.TRIANGLES);
      else if (G.isLine) {
        let Et = B.linewidth;
        Et === void 0 && (Et = 1), oe.setLineWidth(Et * Ct()), G.isLineSegments ? Qe.setMode(L.LINES) : G.isLineLoop ? Qe.setMode(L.LINE_LOOP) : Qe.setMode(L.LINE_STRIP);
      } else G.isPoints ? Qe.setMode(L.POINTS) : G.isSprite && Qe.setMode(L.TRIANGLES);
      if (G.isBatchedMesh)
        if (Ge.get("WEBGL_multi_draw"))
          Qe.renderMultiDraw(G._multiDrawStarts, G._multiDrawCounts, G._multiDrawCount);
        else {
          const Et = G._multiDrawStarts, me = G._multiDrawCounts, wt = G._multiDrawCount, We = ve ? Y.get(ve).bytesPerElement : 1, It = E.get(B).currentProgram.getUniforms();
          for (let Vt = 0; Vt < wt; Vt++)
            It.setValue(L, "_gl_DrawID", Vt), Qe.render(Et[Vt] / We, me[Vt]);
        }
      else if (G.isInstancedMesh)
        Qe.renderInstances(Te, ht, G.count);
      else if (V.isInstancedBufferGeometry) {
        const Et = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, me = Math.min(V.instanceCount, Et);
        Qe.renderInstances(Te, ht, me);
      } else
        Qe.render(Te, ht);
    };
    function zt(v, U, V) {
      v.transparent === !0 && v.side === 2 && v.forceSinglePass === !1 ? (v.side = 1, v.needsUpdate = !0, si(v, U, V), v.side = 0, v.needsUpdate = !0, si(v, U, V), v.side = 2) : si(v, U, V);
    }
    this.compile = function(v, U, V = null) {
      V === null && (V = v), y = de.get(V), y.init(U), g.push(y), V.traverseVisible(function(G) {
        G.isLight && G.layers.test(U.layers) && (y.pushLight(G), G.castShadow && y.pushShadow(G));
      }), v !== V && v.traverseVisible(function(G) {
        G.isLight && G.layers.test(U.layers) && (y.pushLight(G), G.castShadow && y.pushShadow(G));
      }), y.setupLights();
      const B = /* @__PURE__ */ new Set();
      return v.traverse(function(G) {
        if (!(G.isMesh || G.isPoints || G.isLine || G.isSprite))
          return;
        const he = G.material;
        if (he)
          if (Array.isArray(he))
            for (let ge = 0; ge < he.length; ge++) {
              const ue = he[ge];
              zt(ue, V, G), B.add(ue);
            }
          else
            zt(he, V, G), B.add(he);
      }), y = g.pop(), B;
    }, this.compileAsync = function(v, U, V = null) {
      const B = this.compile(v, U, V);
      return new Promise((G) => {
        function he() {
          if (B.forEach(function(ge) {
            E.get(ge).currentProgram.isReady() && B.delete(ge);
          }), B.size === 0) {
            G(v);
            return;
          }
          setTimeout(he, 10);
        }
        Ge.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let Vi = null;
    function da(v) {
      Vi && Vi(v);
    }
    function Gr() {
      dn.stop();
    }
    function zr() {
      dn.start();
    }
    const dn = new sa();
    dn.setAnimationLoop(da), typeof self < "u" && dn.setContext(self), this.setAnimationLoop = function(v) {
      Vi = v, se.setAnimationLoop(v), v === null ? dn.stop() : dn.start();
    }, se.addEventListener("sessionstart", Gr), se.addEventListener("sessionend", zr), this.render = function(v, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0) return;
      F !== null && F.renderStart(v, U);
      const V = se.enabled === !0 && se.isPresenting === !0, B = b !== null && (I === null || V) && b.begin(D, I);
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), se.enabled === !0 && se.isPresenting === !0 && (b === null || b.isCompositing() === !1) && (se.cameraAutoUpdate === !0 && se.updateCamera(U), U = se.getCamera()), v.isScene === !0 && v.onBeforeRender(D, v, U, I), y = de.get(v, g.length), y.init(U), y.state.textureUnits = _.getTextureUnits(), g.push(y), Ze.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), be.setFromProjectionMatrix(Ze, 2e3, U.reversedDepth), Be = this.localClippingEnabled, rt = _e.init(this.clippingPlanes, Be), C = K.get(v, w.length), C.init(), w.push(C), se.enabled === !0 && se.isPresenting === !0) {
        const ge = D.xr.getDepthSensingMesh();
        ge !== null && Hi(ge, U, -1 / 0, D.sortObjects);
      }
      Hi(v, U, 0, D.sortObjects), C.finish(), D.sortObjects === !0 && C.sort(Z, fe), st = se.enabled === !1 || se.isPresenting === !1 || se.hasDepthSensing() === !1, st && te.addToRenderList(C, v), this.info.render.frame++, rt === !0 && _e.beginShadows();
      const G = y.state.shadowsArray;
      if (re.render(G, v, U), rt === !0 && _e.endShadows(), this.info.autoReset === !0 && this.info.reset(), (B && b.hasRenderPass()) === !1) {
        const ge = C.opaque, ue = C.transmissive;
        if (y.setupLights(), U.isArrayCamera) {
          const ve = U.cameras;
          if (ue.length > 0)
            for (let Se = 0, Le = ve.length; Se < Le; Se++) {
              const Ne = ve[Se];
              Hr(ge, ue, v, Ne);
            }
          st && te.render(v);
          for (let Se = 0, Le = ve.length; Se < Le; Se++) {
            const Ne = ve[Se];
            Vr(C, v, Ne, Ne.viewport);
          }
        } else
          ue.length > 0 && Hr(ge, ue, v, U), st && te.render(v), Vr(C, v, U);
      }
      I !== null && X === 0 && (_.updateMultisampleRenderTarget(I), _.updateRenderTargetMipmap(I)), B && b.end(D), v.isScene === !0 && v.onAfterRender(D, v, U), ne.resetDefaultState(), H = -1, z = null, g.pop(), g.length > 0 ? (y = g[g.length - 1], _.setTextureUnits(y.state.textureUnits), rt === !0 && _e.setGlobalState(D.clippingPlanes, y.state.camera)) : y = null, w.pop(), w.length > 0 ? C = w[w.length - 1] : C = null, F !== null && F.renderEnd();
    };
    function Hi(v, U, V, B) {
      if (v.visible === !1) return;
      if (v.layers.test(U.layers)) {
        if (v.isGroup)
          V = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(U);
        else if (v.isLightProbeGrid)
          y.pushLightProbeGrid(v);
        else if (v.isLight)
          y.pushLight(v), v.castShadow && y.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || be.intersectsSprite(v)) {
            B && Oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ze);
            const ge = ee.update(v), ue = v.material;
            ue.visible && C.push(v, ge, ue, V, Oe.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || be.intersectsObject(v))) {
          const ge = ee.update(v), ue = v.material;
          if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Oe.copy(v.boundingSphere.center)) : (ge.boundingSphere === null && ge.computeBoundingSphere(), Oe.copy(ge.boundingSphere.center)), Oe.applyMatrix4(v.matrixWorld).applyMatrix4(Ze)), Array.isArray(ue)) {
            const ve = ge.groups;
            for (let Se = 0, Le = ve.length; Se < Le; Se++) {
              const Ne = ve[Se], Te = ue[Ne.materialIndex];
              Te && Te.visible && C.push(v, ge, Te, V, Oe.z, Ne);
            }
          } else ue.visible && C.push(v, ge, ue, V, Oe.z, null);
        }
      }
      const he = v.children;
      for (let ge = 0, ue = he.length; ge < ue; ge++)
        Hi(he[ge], U, V, B);
    }
    function Vr(v, U, V, B) {
      const { opaque: G, transmissive: he, transparent: ge } = v;
      y.setupLightsView(V), rt === !0 && _e.setGlobalState(D.clippingPlanes, V), B && oe.viewport(J.copy(B)), G.length > 0 && ri(G, U, V), he.length > 0 && ri(he, U, V), ge.length > 0 && ri(ge, U, V), oe.buffers.depth.setTest(!0), oe.buffers.depth.setMask(!0), oe.buffers.color.setMask(!0), oe.setPolygonOffset(!1);
    }
    function Hr(v, U, V, B) {
      if ((V.isScene === !0 ? V.overrideMaterial : null) !== null)
        return;
      if (y.state.transmissionRenderTarget[B.id] === void 0) {
        const Te = Ge.has("EXT_color_buffer_half_float") || Ge.has("EXT_color_buffer_float");
        y.state.transmissionRenderTarget[B.id] = new Xt(1, 1, {
          generateMipmaps: !0,
          type: Te ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, tt.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Ve.workingColorSpace
        });
      }
      const he = y.state.transmissionRenderTarget[B.id], ge = B.viewport || J;
      he.setSize(ge.z * D.transmissionResolutionScale, ge.w * D.transmissionResolutionScale);
      const ue = D.getRenderTarget(), ve = D.getActiveCubeFace(), Se = D.getActiveMipmapLevel();
      D.setRenderTarget(he), D.getClearColor(xe), Ee = D.getClearAlpha(), Ee < 1 && D.setClearColor(16777215, 0.5), D.clear(), st && te.render(V);
      const Le = D.toneMapping;
      D.toneMapping = 0;
      const Ne = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), y.setupLightsView(B), rt === !0 && _e.setGlobalState(D.clippingPlanes, B), ri(v, V, B), _.updateMultisampleRenderTarget(he), _.updateRenderTargetMipmap(he), Ge.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Te = !1;
        for (let je = 0, ht = U.length; je < ht; je++) {
          const ot = U[je], { object: Qe, geometry: Et, material: me, group: wt } = ot;
          if (me.side === 2 && Qe.layers.test(B.layers)) {
            const We = me.side;
            me.side = 1, me.needsUpdate = !0, kr(Qe, V, B, Et, me, wt), me.side = We, me.needsUpdate = !0, Te = !0;
          }
        }
        Te === !0 && (_.updateMultisampleRenderTarget(he), _.updateRenderTargetMipmap(he));
      }
      D.setRenderTarget(ue, ve, Se), D.setClearColor(xe, Ee), Ne !== void 0 && (B.viewport = Ne), D.toneMapping = Le;
    }
    function ri(v, U, V) {
      const B = U.isScene === !0 ? U.overrideMaterial : null;
      for (let G = 0, he = v.length; G < he; G++) {
        const ge = v[G], { object: ue, geometry: ve, group: Se } = ge;
        let Le = ge.material;
        Le.allowOverride === !0 && B !== null && (Le = B), ue.layers.test(V.layers) && kr(ue, U, V, ve, Le, Se);
      }
    }
    function kr(v, U, V, B, G, he) {
      v.onBeforeRender(D, U, V, B, G, he), v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), G.onBeforeRender(D, U, V, B, v, he), G.transparent === !0 && G.side === 2 && G.forceSinglePass === !1 ? (G.side = 1, G.needsUpdate = !0, D.renderBufferDirect(V, U, B, G, v, he), G.side = 0, G.needsUpdate = !0, D.renderBufferDirect(V, U, B, G, v, he), G.side = 2) : D.renderBufferDirect(V, U, B, G, v, he), v.onAfterRender(D, U, V, B, G, he);
    }
    function si(v, U, V) {
      U.isScene !== !0 && (U = mt);
      const B = E.get(v), G = y.state.lights, he = y.state.shadowsArray, ge = G.state.version, ue = ae.getParameters(v, G.state, he, U, V, y.state.lightProbeGridArray), ve = ae.getProgramCacheKey(ue);
      let Se = B.programs;
      B.environment = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? U.environment : null, B.fog = U.fog;
      const Le = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap;
      B.envMap = O.get(v.envMap || B.environment, Le), B.envMapRotation = B.environment !== null && v.envMap === null ? U.environmentRotation : v.envMapRotation, Se === void 0 && (v.addEventListener("dispose", ut), Se = /* @__PURE__ */ new Map(), B.programs = Se);
      let Ne = Se.get(ve);
      if (Ne !== void 0) {
        if (B.currentProgram === Ne && B.lightsStateVersion === ge)
          return Xr(v, ue), Ne;
      } else
        ue.uniforms = ae.getUniforms(v), F !== null && v.isNodeMaterial && F.build(v, V, ue), v.onBeforeCompile(ue, D), Ne = ae.acquireProgram(ue, ve), Se.set(ve, Ne), B.uniforms = ue.uniforms;
      const Te = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Te.clippingPlanes = _e.uniform), Xr(v, ue), B.needsLights = ga(v), B.lightsStateVersion = ge, B.needsLights && (Te.ambientLightColor.value = G.state.ambient, Te.lightProbe.value = G.state.probe, Te.directionalLights.value = G.state.directional, Te.directionalLightShadows.value = G.state.directionalShadow, Te.spotLights.value = G.state.spot, Te.spotLightShadows.value = G.state.spotShadow, Te.rectAreaLights.value = G.state.rectArea, Te.ltc_1.value = G.state.rectAreaLTC1, Te.ltc_2.value = G.state.rectAreaLTC2, Te.pointLights.value = G.state.point, Te.pointLightShadows.value = G.state.pointShadow, Te.hemisphereLights.value = G.state.hemi, Te.directionalShadowMatrix.value = G.state.directionalShadowMatrix, Te.spotLightMatrix.value = G.state.spotLightMatrix, Te.spotLightMap.value = G.state.spotLightMap, Te.pointShadowMatrix.value = G.state.pointShadowMatrix), B.lightProbeGrid = y.state.lightProbeGridArray.length > 0, B.currentProgram = Ne, B.uniformsList = null, Ne;
    }
    function Wr(v) {
      if (v.uniformsList === null) {
        const U = v.currentProgram.getUniforms();
        v.uniformsList = wi.seqWithValue(U.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Xr(v, U) {
      const V = E.get(v);
      V.outputColorSpace = U.outputColorSpace, V.batching = U.batching, V.batchingColor = U.batchingColor, V.instancing = U.instancing, V.instancingColor = U.instancingColor, V.instancingMorph = U.instancingMorph, V.skinning = U.skinning, V.morphTargets = U.morphTargets, V.morphNormals = U.morphNormals, V.morphColors = U.morphColors, V.morphTargetsCount = U.morphTargetsCount, V.numClippingPlanes = U.numClippingPlanes, V.numIntersection = U.numClipIntersection, V.vertexAlphas = U.vertexAlphas, V.vertexTangents = U.vertexTangents, V.toneMapping = U.toneMapping;
    }
    function pa(v, U) {
      if (v.length === 0) return null;
      if (v.length === 1)
        return v[0].texture !== null ? v[0] : null;
      T.setFromMatrixPosition(U.matrixWorld);
      for (let V = 0, B = v.length; V < B; V++) {
        const G = v[V];
        if (G.texture !== null && G.boundingBox.containsPoint(T)) return G;
      }
      return null;
    }
    function ma(v, U, V, B, G) {
      U.isScene !== !0 && (U = mt), _.resetTextureUnits();
      const he = U.fog, ge = B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial ? U.environment : null, ue = I === null ? D.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : Ve.workingColorSpace, ve = B.isMeshStandardMaterial || B.isMeshLambertMaterial && !B.envMap || B.isMeshPhongMaterial && !B.envMap, Se = O.get(B.envMap || ge, ve), Le = B.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, Ne = !!V.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Te = !!V.morphAttributes.position, je = !!V.morphAttributes.normal, ht = !!V.morphAttributes.color;
      let ot = 0;
      B.toneMapped && (I === null || I.isXRRenderTarget === !0) && (ot = D.toneMapping);
      const Qe = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, Et = Qe !== void 0 ? Qe.length : 0, me = E.get(B), wt = y.state.lights;
      if (rt === !0 && (Be === !0 || v !== z)) {
        const nt = v === z && B.id === H;
        _e.setState(B, v, nt);
      }
      let We = !1;
      B.version === me.__version ? (me.needsLights && me.lightsStateVersion !== wt.state.version || me.outputColorSpace !== ue || G.isBatchedMesh && me.batching === !1 || !G.isBatchedMesh && me.batching === !0 || G.isBatchedMesh && me.batchingColor === !0 && G.colorTexture === null || G.isBatchedMesh && me.batchingColor === !1 && G.colorTexture !== null || G.isInstancedMesh && me.instancing === !1 || !G.isInstancedMesh && me.instancing === !0 || G.isSkinnedMesh && me.skinning === !1 || !G.isSkinnedMesh && me.skinning === !0 || G.isInstancedMesh && me.instancingColor === !0 && G.instanceColor === null || G.isInstancedMesh && me.instancingColor === !1 && G.instanceColor !== null || G.isInstancedMesh && me.instancingMorph === !0 && G.morphTexture === null || G.isInstancedMesh && me.instancingMorph === !1 && G.morphTexture !== null || me.envMap !== Se || B.fog === !0 && me.fog !== he || me.numClippingPlanes !== void 0 && (me.numClippingPlanes !== _e.numPlanes || me.numIntersection !== _e.numIntersection) || me.vertexAlphas !== Le || me.vertexTangents !== Ne || me.morphTargets !== Te || me.morphNormals !== je || me.morphColors !== ht || me.toneMapping !== ot || me.morphTargetsCount !== Et || !!me.lightProbeGrid != y.state.lightProbeGridArray.length > 0) && (We = !0) : (We = !0, me.__version = B.version);
      let It = me.currentProgram;
      We === !0 && (It = si(B, U, G), F && B.isNodeMaterial && F.onUpdateProgram(B, It, me));
      let Vt = !1, tn = !1, Sn = !1;
      const et = It.getUniforms(), ft = me.uniforms;
      if (oe.useProgram(It.program) && (Vt = !0, tn = !0, Sn = !0), B.id !== H && (H = B.id, tn = !0), me.needsLights) {
        const nt = pa(y.state.lightProbeGridArray, G);
        me.lightProbeGrid !== nt && (me.lightProbeGrid = nt, tn = !0);
      }
      if (Vt || z !== v) {
        oe.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), et.setValue(L, "projectionMatrix", v.projectionMatrix), et.setValue(L, "viewMatrix", v.matrixWorldInverse);
        const rn = et.map.cameraPosition;
        rn !== void 0 && rn.setValue(L, it.setFromMatrixPosition(v.matrixWorld)), tt.logarithmicDepthBuffer && et.setValue(
          L,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && et.setValue(L, "isOrthographic", v.isOrthographicCamera === !0), z !== v && (z = v, tn = !0, Sn = !0);
      }
      if (me.needsLights && (wt.state.directionalShadowMap.length > 0 && et.setValue(L, "directionalShadowMap", wt.state.directionalShadowMap, _), wt.state.spotShadowMap.length > 0 && et.setValue(L, "spotShadowMap", wt.state.spotShadowMap, _), wt.state.pointShadowMap.length > 0 && et.setValue(L, "pointShadowMap", wt.state.pointShadowMap, _)), G.isSkinnedMesh) {
        et.setOptional(L, G, "bindMatrix"), et.setOptional(L, G, "bindMatrixInverse");
        const nt = G.skeleton;
        nt && (nt.boneTexture === null && nt.computeBoneTexture(), et.setValue(L, "boneTexture", nt.boneTexture, _));
      }
      G.isBatchedMesh && (et.setOptional(L, G, "batchingTexture"), et.setValue(L, "batchingTexture", G._matricesTexture, _), et.setOptional(L, G, "batchingIdTexture"), et.setValue(L, "batchingIdTexture", G._indirectTexture, _), et.setOptional(L, G, "batchingColorTexture"), G._colorsTexture !== null && et.setValue(L, "batchingColorTexture", G._colorsTexture, _));
      const nn = V.morphAttributes;
      if ((nn.position !== void 0 || nn.normal !== void 0 || nn.color !== void 0) && Re.update(G, V, It), (tn || me.receiveShadow !== G.receiveShadow) && (me.receiveShadow = G.receiveShadow, et.setValue(L, "receiveShadow", G.receiveShadow)), (B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial) && B.envMap === null && U.environment !== null && (ft.envMapIntensity.value = U.environmentIntensity), ft.dfgLUT !== void 0 && (ft.dfgLUT.value = af()), tn) {
        if (et.setValue(L, "toneMappingExposure", D.toneMappingExposure), me.needsLights && _a(ft, Sn), he && B.fog === !0 && W.refreshFogUniforms(ft, he), W.refreshMaterialUniforms(ft, B, Ie, Ke, y.state.transmissionRenderTarget[v.id]), me.needsLights && me.lightProbeGrid) {
          const nt = me.lightProbeGrid;
          ft.probesSH.value = nt.texture, ft.probesMin.value.copy(nt.boundingBox.min), ft.probesMax.value.copy(nt.boundingBox.max), ft.probesResolution.value.copy(nt.resolution);
        }
        wi.upload(L, Wr(me), ft, _);
      }
      if (B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (wi.upload(L, Wr(me), ft, _), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && et.setValue(L, "center", G.center), et.setValue(L, "modelViewMatrix", G.modelViewMatrix), et.setValue(L, "normalMatrix", G.normalMatrix), et.setValue(L, "modelMatrix", G.matrixWorld), B.uniformsGroups !== void 0) {
        const nt = B.uniformsGroups;
        for (let rn = 0, En = nt.length; rn < En; rn++) {
          const qr = nt[rn];
          q.update(qr, It), q.bind(qr, It);
        }
      }
      return It;
    }
    function _a(v, U) {
      v.ambientLightColor.needsUpdate = U, v.lightProbe.needsUpdate = U, v.directionalLights.needsUpdate = U, v.directionalLightShadows.needsUpdate = U, v.pointLights.needsUpdate = U, v.pointLightShadows.needsUpdate = U, v.spotLights.needsUpdate = U, v.spotLightShadows.needsUpdate = U, v.rectAreaLights.needsUpdate = U, v.hemisphereLights.needsUpdate = U;
    }
    function ga(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return k;
    }, this.getActiveMipmapLevel = function() {
      return X;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(v, U, V) {
      const B = E.get(v);
      B.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1), E.get(v.texture).__webglTexture = U, E.get(v.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : V, B.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, U) {
      const V = E.get(v);
      V.__webglFramebuffer = U, V.__useDefaultFramebuffer = U === void 0;
    };
    const xa = L.createFramebuffer();
    this.setRenderTarget = function(v, U = 0, V = 0) {
      I = v, k = U, X = V;
      let B = null, G = !1, he = !1;
      if (v) {
        const ue = E.get(v);
        if (ue.__useDefaultFramebuffer !== void 0) {
          oe.bindFramebuffer(L.FRAMEBUFFER, ue.__webglFramebuffer), J.copy(v.viewport), Q.copy(v.scissor), ce = v.scissorTest, oe.viewport(J), oe.scissor(Q), oe.setScissorTest(ce), H = -1;
          return;
        } else if (ue.__webglFramebuffer === void 0)
          _.setupRenderTarget(v);
        else if (ue.__hasExternalTextures)
          _.rebindTextures(v, E.get(v.texture).__webglTexture, E.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Le = v.depthTexture;
          if (ue.__boundDepthTexture !== Le) {
            if (Le !== null && E.has(Le) && (v.width !== Le.image.width || v.height !== Le.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            _.setupDepthRenderbuffer(v);
          }
        }
        const ve = v.texture;
        (ve.isData3DTexture || ve.isDataArrayTexture || ve.isCompressedArrayTexture) && (he = !0);
        const Se = E.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Se[U]) ? B = Se[U][V] : B = Se[U], G = !0) : v.samples > 0 && _.useMultisampledRTT(v) === !1 ? B = E.get(v).__webglMultisampledFramebuffer : Array.isArray(Se) ? B = Se[V] : B = Se, J.copy(v.viewport), Q.copy(v.scissor), ce = v.scissorTest;
      } else
        J.copy(ie).multiplyScalar(Ie).floor(), Q.copy(ye).multiplyScalar(Ie).floor(), ce = we;
      if (V !== 0 && (B = xa), oe.bindFramebuffer(L.FRAMEBUFFER, B) && oe.drawBuffers(v, B), oe.viewport(J), oe.scissor(Q), oe.setScissorTest(ce), G) {
        const ue = E.get(v.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + U, ue.__webglTexture, V);
      } else if (he) {
        const ue = U;
        for (let ve = 0; ve < v.textures.length; ve++) {
          const Se = E.get(v.textures[ve]);
          L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0 + ve, Se.__webglTexture, V, ue);
        }
      } else if (v !== null && V !== 0) {
        const ue = E.get(v.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, ue.__webglTexture, V);
      }
      H = -1;
    }, this.readRenderTargetPixels = function(v, U, V, B, G, he, ge, ue = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ve = E.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ge !== void 0 && (ve = ve[ge]), ve) {
        oe.bindFramebuffer(L.FRAMEBUFFER, ve);
        try {
          const Se = v.textures[ue], Le = Se.format, Ne = Se.type;
          if (v.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + ue), !tt.textureFormatReadable(Le)) {
            Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!tt.textureTypeReadable(Ne)) {
            Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= v.width - B && V >= 0 && V <= v.height - G && L.readPixels(U, V, B, G, P.convert(Le), P.convert(Ne), he);
        } finally {
          const Se = I !== null ? E.get(I).__webglFramebuffer : null;
          oe.bindFramebuffer(L.FRAMEBUFFER, Se);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, U, V, B, G, he, ge, ue = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ve = E.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ge !== void 0 && (ve = ve[ge]), ve)
        if (U >= 0 && U <= v.width - B && V >= 0 && V <= v.height - G) {
          oe.bindFramebuffer(L.FRAMEBUFFER, ve);
          const Se = v.textures[ue], Le = Se.format, Ne = Se.type;
          if (v.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + ue), !tt.textureFormatReadable(Le))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!tt.textureTypeReadable(Ne))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Te = L.createBuffer();
          L.bindBuffer(L.PIXEL_PACK_BUFFER, Te), L.bufferData(L.PIXEL_PACK_BUFFER, he.byteLength, L.STREAM_READ), L.readPixels(U, V, B, G, P.convert(Le), P.convert(Ne), 0);
          const je = I !== null ? E.get(I).__webglFramebuffer : null;
          oe.bindFramebuffer(L.FRAMEBUFFER, je);
          const ht = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return L.flush(), await Ta(L, ht, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, Te), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, he), L.deleteBuffer(Te), L.deleteSync(ht), he;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, U = null, V = 0) {
      const B = Math.pow(2, -V), G = Math.floor(v.image.width * B), he = Math.floor(v.image.height * B), ge = U !== null ? U.x : 0, ue = U !== null ? U.y : 0;
      _.setTexture2D(v, 0), L.copyTexSubImage2D(L.TEXTURE_2D, V, 0, 0, ge, ue, G, he), oe.unbindTexture();
    };
    const va = L.createFramebuffer(), Ma = L.createFramebuffer();
    this.copyTextureToTexture = function(v, U, V = null, B = null, G = 0, he = 0) {
      let ge, ue, ve, Se, Le, Ne, Te, je, ht;
      const ot = v.isCompressedTexture ? v.mipmaps[he] : v.image;
      if (V !== null)
        ge = V.max.x - V.min.x, ue = V.max.y - V.min.y, ve = V.isBox3 ? V.max.z - V.min.z : 1, Se = V.min.x, Le = V.min.y, Ne = V.isBox3 ? V.min.z : 0;
      else {
        const ft = Math.pow(2, -G);
        ge = Math.floor(ot.width * ft), ue = Math.floor(ot.height * ft), v.isDataArrayTexture ? ve = ot.depth : v.isData3DTexture ? ve = Math.floor(ot.depth * ft) : ve = 1, Se = 0, Le = 0, Ne = 0;
      }
      B !== null ? (Te = B.x, je = B.y, ht = B.z) : (Te = 0, je = 0, ht = 0);
      const Qe = P.convert(U.format), Et = P.convert(U.type);
      let me;
      U.isData3DTexture ? (_.setTexture3D(U, 0), me = L.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (_.setTexture2DArray(U, 0), me = L.TEXTURE_2D_ARRAY) : (_.setTexture2D(U, 0), me = L.TEXTURE_2D), oe.activeTexture(L.TEXTURE0), oe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, U.flipY), oe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), oe.pixelStorei(L.UNPACK_ALIGNMENT, U.unpackAlignment);
      const wt = oe.getParameter(L.UNPACK_ROW_LENGTH), We = oe.getParameter(L.UNPACK_IMAGE_HEIGHT), It = oe.getParameter(L.UNPACK_SKIP_PIXELS), Vt = oe.getParameter(L.UNPACK_SKIP_ROWS), tn = oe.getParameter(L.UNPACK_SKIP_IMAGES);
      oe.pixelStorei(L.UNPACK_ROW_LENGTH, ot.width), oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ot.height), oe.pixelStorei(L.UNPACK_SKIP_PIXELS, Se), oe.pixelStorei(L.UNPACK_SKIP_ROWS, Le), oe.pixelStorei(L.UNPACK_SKIP_IMAGES, Ne);
      const Sn = v.isDataArrayTexture || v.isData3DTexture, et = U.isDataArrayTexture || U.isData3DTexture;
      if (v.isDepthTexture) {
        const ft = E.get(v), nn = E.get(U), nt = E.get(ft.__renderTarget), rn = E.get(nn.__renderTarget);
        oe.bindFramebuffer(L.READ_FRAMEBUFFER, nt.__webglFramebuffer), oe.bindFramebuffer(L.DRAW_FRAMEBUFFER, rn.__webglFramebuffer);
        for (let En = 0; En < ve; En++)
          Sn && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, E.get(v).__webglTexture, G, Ne + En), L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, E.get(U).__webglTexture, he, ht + En)), L.blitFramebuffer(Se, Le, ge, ue, Te, je, ge, ue, L.DEPTH_BUFFER_BIT, L.NEAREST);
        oe.bindFramebuffer(L.READ_FRAMEBUFFER, null), oe.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else if (G !== 0 || v.isRenderTargetTexture || E.has(v)) {
        const ft = E.get(v), nn = E.get(U);
        oe.bindFramebuffer(L.READ_FRAMEBUFFER, va), oe.bindFramebuffer(L.DRAW_FRAMEBUFFER, Ma);
        for (let nt = 0; nt < ve; nt++)
          Sn ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, ft.__webglTexture, G, Ne + nt) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, ft.__webglTexture, G), et ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, nn.__webglTexture, he, ht + nt) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, nn.__webglTexture, he), G !== 0 ? L.blitFramebuffer(Se, Le, ge, ue, Te, je, ge, ue, L.COLOR_BUFFER_BIT, L.NEAREST) : et ? L.copyTexSubImage3D(me, he, Te, je, ht + nt, Se, Le, ge, ue) : L.copyTexSubImage2D(me, he, Te, je, Se, Le, ge, ue);
        oe.bindFramebuffer(L.READ_FRAMEBUFFER, null), oe.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else
        et ? v.isDataTexture || v.isData3DTexture ? L.texSubImage3D(me, he, Te, je, ht, ge, ue, ve, Qe, Et, ot.data) : U.isCompressedArrayTexture ? L.compressedTexSubImage3D(me, he, Te, je, ht, ge, ue, ve, Qe, ot.data) : L.texSubImage3D(me, he, Te, je, ht, ge, ue, ve, Qe, Et, ot) : v.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, he, Te, je, ge, ue, Qe, Et, ot.data) : v.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, he, Te, je, ot.width, ot.height, Qe, ot.data) : L.texSubImage2D(L.TEXTURE_2D, he, Te, je, ge, ue, Qe, Et, ot);
      oe.pixelStorei(L.UNPACK_ROW_LENGTH, wt), oe.pixelStorei(L.UNPACK_IMAGE_HEIGHT, We), oe.pixelStorei(L.UNPACK_SKIP_PIXELS, It), oe.pixelStorei(L.UNPACK_SKIP_ROWS, Vt), oe.pixelStorei(L.UNPACK_SKIP_IMAGES, tn), he === 0 && U.generateMipmaps && L.generateMipmap(me), oe.unbindTexture();
    }, this.initRenderTarget = function(v) {
      E.get(v).__webglFramebuffer === void 0 && _.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? _.setTextureCube(v, 0) : v.isData3DTexture ? _.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? _.setTexture2DArray(v, 0) : _.setTexture2D(v, 0), oe.unbindTexture();
    }, this.resetState = function() {
      k = 0, X = 0, I = null, oe.reset(), ne.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return 2e3;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ve._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ve._getUnpackColorSpace();
  }
}
const ks = {
  black: { hat: "#111111", trim: "#d8c1a0", label: "Black wool" },
  oat: { hat: "#d8c8a4", trim: "#161412", label: "Oat wool" },
  moss: { hat: "#344339", trim: "#d7c099", label: "Moss wool" },
  clay: { hat: "#9b4f36", trim: "#181514", label: "Clay wool" }
}, lf = {
  natural: "#d8c1a0",
  black: "#111111",
  ice: "#b8d5d0"
}, Ws = {
  classic: { scaleY: 1, brim: 0.93, lift: 0, label: "Classic bell" },
  tall: { scaleY: 1.16, brim: 0.91, lift: 0.06, label: "Tall heat room" },
  low: { scaleY: 0.88, brim: 0.97, lift: -0.03, label: "Low profile" }
};
function Xs() {
  document.querySelectorAll("[data-drift-tryon]").forEach((i) => {
    if (!i.dataset.ready) {
      i.dataset.ready = "1";
      try {
        cf(i);
      } catch (e) {
        i.classList.add("is-fallback"), i.querySelector("[data-tryon-fallback]")?.removeAttribute("hidden"), window.__driftTryOnError = e.message;
      }
    }
  });
}
function cf(i) {
  const e = i.querySelector("[data-tryon-canvas]"), t = i.querySelector("[data-tryon-state]"), n = new of({ antialias: !0, alpha: !0 });
  n.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), n.outputColorSpace = Lt, n.shadowMap.enabled = !0, n.shadowMap.type = 2, e.appendChild(n.domElement), n.domElement.setAttribute("aria-label", "3D sauna hat try-on preview");
  const r = new Ga();
  r.background = new He("#080807"), r.fog = new br("#080807", 6, 14);
  const s = new Ft(34, 1, 0.1, 100);
  s.position.set(0, 1.58, 6.2);
  const a = new Nn();
  a.rotation.y = -0.22, r.add(a);
  const o = uf(), { hatGroup: l, hatMaterial: c, trimMaterial: d, seamMaterial: m } = hf(a, o), u = df(r), p = {
    color: "black",
    dragging: !1,
    fit: 1,
    targetRotation: a.rotation.y,
    trim: "natural",
    variant: "classic"
  }, x = () => {
    const A = i.getBoundingClientRect(), T = Math.max(320, Math.floor(A.width)), C = Math.max(520, Math.floor(A.height));
    n.setSize(T, C, !1), s.aspect = T / C, s.position.z = T < 720 ? 7 : 6.2, s.position.y = T < 720 ? 1.7 : 1.58, s.updateProjectionMatrix();
  }, S = () => {
    const A = ks[p.color] || ks.black, T = Ws[p.variant] || Ws.classic, C = lf[p.trim] || A.trim;
    c.color.set(A.hat), d.color.set(C), m.color.set(C).multiplyScalar(0.72);
    const y = Number(p.fit);
    l.scale.set(y * T.brim, y * T.scaleY, y * T.brim), l.position.y = T.lift, t.textContent = `${A.label} / ${T.label}`, i.dataset.color = p.color, i.dataset.variant = p.variant, window.__driftTryOnState = { ...p };
  };
  pf(i, p, S), mf(n.domElement, p), new ResizeObserver(x).observe(i), x(), S();
  const h = new co(), M = () => {
    const A = h.getElapsedTime(), T = Math.sin(A * 0.48) * 0.08;
    a.rotation.y += (p.targetRotation + T - a.rotation.y) * 0.045, l.rotation.z = Math.sin(A * 0.85) * 0.012, u.rotation.z = A * 0.025, n.render(r, s), window.__driftTryOnReady = !0, requestAnimationFrame(M);
  };
  M();
}
function uf() {
  return {
    fabric: new Jn({
      color: "#111111",
      metalness: 0,
      roughness: 0.92
    }),
    skin: new Jn({
      color: "#a77967",
      metalness: 0,
      roughness: 0.68
    }),
    trim: new Jn({
      color: "#d8c1a0",
      metalness: 0,
      roughness: 0.82
    }),
    body: new Jn({
      color: "#191918",
      metalness: 0,
      roughness: 0.76
    }),
    seam: new Qs({
      color: "#bda27c",
      transparent: !0,
      opacity: 0.62
    })
  };
}
function hf(i, e) {
  const t = new dt(new wr(0.82, 1.18, 12, 36), e.body);
  t.position.set(0, -0.58, 0), t.scale.set(1.2, 0.68, 0.76), t.castShadow = !0, i.add(t);
  const n = new dt(new Oi(0.26, 0.34, 0.52, 36), e.skin);
  n.position.y = 0.28, n.castShadow = !0, i.add(n);
  const r = new dt(new ei(0.78, 56, 36), e.skin);
  r.position.y = 1.07, r.scale.set(0.88, 1.05, 0.8), r.castShadow = !0, i.add(r);
  const s = new dt(new ei(0.52, 40, 20), e.skin);
  s.position.set(0, 0.7, 0.08), s.scale.set(0.95, 0.58, 0.9), s.castShadow = !0, i.add(s);
  const a = new dt(new Dr(0.08, 0.22, 24), e.skin);
  a.position.set(0, 1.08, 0.67), a.rotation.x = Math.PI / 2, i.add(a);
  const o = new ei(0.14, 24, 16);
  [-0.68, 0.68].forEach((x) => {
    const S = new dt(o, e.skin);
    S.position.set(x, 1.06, 0.02), S.scale.set(0.55, 1, 0.34), S.castShadow = !0, i.add(S);
  });
  const l = new Nn();
  l.position.y = 0, i.add(l);
  const c = new Lr(
    [
      new Ce(0, 2.37),
      new Ce(0.15, 2.36),
      new Ce(0.43, 2.2),
      new Ce(0.67, 1.94),
      new Ce(0.84, 1.62),
      new Ce(0.94, 1.34),
      new Ce(0.9, 1.22)
    ],
    72
  ), d = new dt(c, e.fabric);
  d.castShadow = !0, d.receiveShadow = !0, l.add(d);
  const m = new dt(new Bn(0.88, 0.046, 16, 96), e.trim);
  m.position.y = 1.24, m.rotation.x = Math.PI / 2, m.castShadow = !0, l.add(m);
  const u = new dt(new Bn(0.77, 0.018, 12, 96), e.trim);
  u.position.y = 1.225, u.rotation.x = Math.PI / 2, l.add(u);
  const p = new dt(new Bn(0.13, 0.018, 12, 40), e.trim);
  p.position.set(0, 2.45, 0.02), p.scale.y = 1.35, p.castShadow = !0, l.add(p);
  for (let x = 0; x < 10; x += 1) {
    const S = x / 10 * Math.PI * 2, f = ff(S, e.seam);
    l.add(f);
  }
  return {
    hatGroup: l,
    hatMaterial: e.fabric,
    trimMaterial: e.trim,
    seamMaterial: e.seam
  };
}
function ff(i, e) {
  const t = [];
  for (let r = 0; r <= 22; r += 1) {
    const s = r / 22, a = 2.32 - s * 0.95, o = 0.08 + s * 0.82;
    t.push(new N(Math.cos(i) * o, a, Math.sin(i) * o));
  }
  const n = new St().setFromPoints(t);
  return new Za(n, e);
}
function df(i) {
  i.add(new ro("#fff0d0", "#1d201c", 1.25));
  const e = new gs("#fff1c8", 2.4);
  e.position.set(3, 5, 4), e.castShadow = !0, e.shadow.mapSize.set(1024, 1024), i.add(e);
  const t = new gs("#b8d5d0", 1.7);
  t.position.set(-3, 2.8, -2), i.add(t);
  const n = new dt(
    new Pr(3.1, 96),
    new Jn({
      color: "#161512",
      metalness: 0,
      roughness: 0.88
    })
  );
  n.rotation.x = -Math.PI / 2, n.position.y = -1.52, n.receiveShadow = !0, i.add(n);
  const r = new dt(
    new Bn(2.28, 0.012, 8, 160),
    new Rr({ color: "#d87435", transparent: !0, opacity: 0.28 })
  );
  return r.rotation.x = Math.PI / 2, r.position.y = -1.48, i.add(r), r;
}
function pf(i, e, t) {
  i.querySelectorAll("[data-color]").forEach((r) => {
    r.addEventListener("click", () => {
      e.color = r.dataset.color, i.querySelectorAll("[data-color]").forEach((s) => s.classList.toggle("is-active", s === r)), t();
    });
  }), i.querySelectorAll("[data-trim]").forEach((r) => {
    r.addEventListener("click", () => {
      e.trim = r.dataset.trim, i.querySelectorAll("[data-trim]").forEach((s) => s.classList.toggle("is-active", s === r)), t();
    });
  }), i.querySelectorAll("[data-variant]").forEach((r) => {
    r.addEventListener("click", () => {
      e.variant = r.dataset.variant, i.querySelectorAll("[data-variant]").forEach((s) => s.classList.toggle("is-active", s === r)), t();
    });
  });
  const n = i.querySelector("[data-fit]");
  n?.addEventListener("input", () => {
    e.fit = Number(n.value), t();
  });
}
function mf(i, e) {
  let t = 0, n = e.targetRotation;
  i.addEventListener("pointerdown", (s) => {
    e.dragging = !0, t = s.clientX, n = e.targetRotation, i.setPointerCapture?.(s.pointerId);
  }), i.addEventListener("pointermove", (s) => {
    e.dragging && (e.targetRotation = n + (s.clientX - t) * 8e-3);
  });
  const r = (s) => {
    e.dragging = !1, i.releasePointerCapture?.(s.pointerId);
  };
  i.addEventListener("pointerup", r), i.addEventListener("pointercancel", r);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Xs) : Xs();
