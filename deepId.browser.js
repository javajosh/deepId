// import {randomBytes} from 'node:crypto'
//
// const atob = a => Buffer.from(a, 'base64').toString();
// const btoa = a => Buffer.from(a).toString('base64');
// The above lines are not needed in the browser.

/**
 * Return N bytes (default 20) of random base64 encoded in a URL-safe string.
 * Inspired by: https://neilmadden.blog/2018/08/30/moving-away-from-uuids/
 * @example
 *  console.log("deepId()", deepId());
 * @returns 20 bytes of random data, base64 encoded.
 */
export default function deepId(depthInBytes=20, debug=false) {
    const data = new Uint8Array(depthInBytes);
    self.crypto.getRandomValues(data);
    // The above two lines are for the browser, and the following line is for node:
    // const data = randomBytes(depthInBytes);

    const chars = []; // NB: you can't use map() here because of array typing.
    for(let i = 0; i < data.length; i++){
        chars.push(String.fromCharCode(data[i]));
    }
    if (debug) console.log(
        'data', data,
        'chars', chars,
        "chars.join('')", chars.join(''),
        "btoa(chars.join(''))", btoa(chars.join('')),
    );
    return btoa(chars.join(''));
}