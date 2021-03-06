const solution = (nodeCnt, linkInfo) => {
	let answer = 0;
	const matrix = Array.from(Array(nodeCnt + 1), () => Array(nodeCnt + 1).fill(0));
	for (let [a, b] of linkInfo) matrix[a][b] = 1;
	const path = [];
	const check = Array(nodeCnt + 1).fill(0);

	const DFS = (v) => {
		if (v === nodeCnt) {
			answer++;
			console.log(path);
		} else {
			for (let i = 1; i <= nodeCnt; i++) {
				if (check[i] === 0 && matrix[v][i] === 1) {
					check[i] = 1;
					path.push(i);
					DFS(i);
					path.pop();
					check[i] = 0;
				}
			}
		}
	};

	check[1] = 1;
	path.push(1);
	DFS(1);
	console.log(answer);
	return answer;
};

solution(5, [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5],
]);
