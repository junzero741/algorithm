var isPalindrome = function (s) {
	// 정규표현식 \W 는 알파벳과 **_(언더스코어)** 가 아닌 것들을 걸러낸다.
	const str = s.replace(/[\W&&_]/gm, "").toLowerCase();
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left++] !== str[right--]) return false;
	}

	return true;
};
