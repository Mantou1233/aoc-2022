
console.log("Day #4");
const range = (start: number, end: number, step = 1) =>
	Array.from(
		{ length: (end - start) / step + 1 },
		(_, index) => start + index * step
	);
const ta = (n: string) =>
	n.split("-").map((v: any) => parseInt(v)) as [number, number];
const tn = (n: string) => parseInt(n);

let count = 0;

const input = require("./input") as string;

for (let line of input.split("\n")) {
	const [first, second] = line.split(",");
	const r1 = range(...ta(first));
	const r2 = range(...ta(second));

	if (first === second) {
		++count;
		continue;
	}

	const ba = r1.length > r2.length ? r1 : r2;
	const sa = r1.length > r2.length ? r2 : r1;

	count +=
		ba.filter(val => {
			return [...sa].includes(val);
		}).length === sa.length
			? 1
			: 0;
}
console.log(`Part 1: ${count}`);
count = 0;
for (let line of input.split("\n")) {
	const [first, second] = line.split(",");
	const r1 = range(...ta(first));
	const r2 = range(...ta(second));

	if (first === second) {
		++count;
		continue;
	}

	const ba = r1.length > r2.length ? r1 : r2;
	const sa = r1.length > r2.length ? r2 : r1;

	count +=
		ba.filter(val => {
			return [...sa].includes(val);
		}).length > 0
			? 1
			: 0;
}

console.log(`Part 2: ${count}`);