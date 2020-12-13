<template>
	<article class="repositoryChart"></article>
</template>

<script>
import * as d3 from 'd3';
export default {
	data() {
		return {
			width: 400,
			height: 300,
			margin: { top: 30, right: 0, bottom: 10, left: 30 },
			data: {
				data: [
					{ name: 'HTML', value: 30 },
					{ name: 'CSS', value: 15 },
					{ name: 'JAVASCRIPT', value: 24 },
					{ name: 'SASS', value: 40 },
					{ name: 'VUE', value: 50 },
					{ name: 'REACT', value: 18 },
					{ name: 'ANGULAR', value: 17 },
					{ name: 'TYPESCRIPT', value: 4 },
				],
				format: '%',
			},
		};
	},
	mounted() {
		this.drawChart();
	},
	methods: {
		drawChart() {
			const canvas = d3
				.select('.repositoryChart')
				.append('svg')
				.attr('viewBox', [0, 0, this.width, this.height]);

			const margin = { left: 80, top: 30, right: 10, bottom: 10 };
			const x = d3
				.scaleLinear()
				.domain([0, d3.max(this.data.data, d => d.value)])
				.range([margin.left, this.width - margin.right]);
			const y = d3
				.scaleBand()
				.domain(d3.range(this.data.data.length))
				.rangeRound([margin.top, this.height - margin.bottom])
				.padding(0.1);

			const xAxis = g =>
				g
					.attr('transform', `translate(0, ${margin.top})`)
					.call(d3.axisTop(x).tickFormat(d => d + '%'));

			const yAxis = g =>
				g
					.attr('transform', `translate(${margin.left},0)`)
					.call(d3.axisLeft(y).tickFormat(i => this.data.data[i].name));
			canvas
				.append('g')
				.selectAll('rect')
				.data(this.data.data)
				.join('rect')
				.attr('x', x(0))
				.attr('y', (d, i) => y(i))
				.attr('width', d => x(d.value) - x(0))
				.attr('height', y.bandwidth())
				.attr('fill', 'steelblue');

			canvas
				.append('g')
				.attr('fill', '#fff')
				.attr('text-anchor', 'end')
				.attr('font-family', 'sans-serif')
				.attr('font-size', 12)
				.selectAll('text')
				.data(this.data.data)
				.join('text')
				.attr('x', d => x(d.value))
				.attr('y', (d, i) => y(i) + y.bandwidth() / 2)
				.attr('dy', '0.35em')
				.attr('dx', -4)
				.text(d => d.value);

			canvas.append('g').call(xAxis);
			canvas.append('g').call(yAxis);
			return canvas.node();
		},
	},
};
</script>

<style lang="scss" scoped>
.repositoryChart {
	padding: 10px;
}
</style>
