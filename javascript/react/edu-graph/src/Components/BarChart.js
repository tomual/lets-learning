import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      yScale: '',
      xScale: ''
    }
  }

  static defaultProps = {
    height: 500,
    width: 500,
    chartBg: '#F4F4F4',
    barColor: 'steelBlue',
    barWidth: 40,
    barOffset: 5
  }

  setYScale() {
    let y = d3.scaleLinear()
      .domain([0, d3.max(this.state.data)])
      .range([0, this.props.height]);

    this.setState({yScale: y});
  }

  setXScale() {
    let x = d3.scaleBand()
      .domain(d3.range(0, this.props.data.length))
      .range([0, this.props.width]);

    this.setState({xScale: x});
  }

  componentWillMount() {
    this.setYScale();
    this.setXScale();
  }

  render() {
    const chart = ReactFauxDOM.createElement('div');

    let tooltip = d3.select('body').append('div')
      .style('position', 'absolute')
      .style('background', '#CCC')
      .style('opacity', '0')
      .style('padding', '10px')
      .style('border', '1px')
      .style('border-radius', '5px')

    d3.select(chart).append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .style('background', this.props.chartBg)
      .selectAll('rect')
      .data(this.state.data)
      .enter().append('rect')
        .style('fill', this.props.barColor)
        .attr('width', this.props.barWidth)
        .attr('height', (d) => {
          // return d;
          return this.state.yScale(d);
        })
        .attr('x', (d, i) => {
          // return i * (this.props.barWidth + this.props.barOffset);

          return this.state.xScale(i);
        })
        .attr('y', (d, i) => {
          // return this.props.height - d;

          return this.props.height - this.state.yScale(d);
        })
        .on('mouseover', (d) => {
          tooltip.style('opacity', 1);
          tooltip.html(d)
            .style('left', d3.event.pageX + 'px')
            .style('top', d3.event.pageY + 'px')
        })
        .on('mouseout', (d) => {
          tooltip.style('opacity', 0)
        })

    return chart.toReact();
  }
}

export default BarChart;
