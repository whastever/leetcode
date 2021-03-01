/**
 * Created by WHASTEVER on 2021/3/1.
 * Description:
 */
// 求t
function _52pojie_MMXXI_(t) {
	let e = [];
	for (let f of t) {
		let t = f.codePointAt(0),
			h = 0;
		t -= 0x1d4 << 0x1c8;"bkd0egfw002whccadqf6gm0q3mi2".match(/../g).forEach(f => {
			f = parseInt(f, 0x24), t >= f && t < f + 0x1A && e.push(h % 7), h++
		})
	}
	let f = [];
	for (; e.length >= 3;) {
		let t = 0x31 * e.shift();
		if (t += 7 * e.shift(), (t += e.shift()) > 0xff) break;
		f.push(t)
	}
	return new Uint8Array(f);
	// const flag1 = 'n0w_wh3r3_1s_th3_c1ph3rt3xt?'
}

