import '../scss/main.scss';
import axios from 'axios';
import * as d3 from 'd3';

const data = [
   {
      id: 17,
      ws_id: 17,
      ws_af_id: 17,
      ws_url: 'test7 inc ws 1',
      ws_country_code: 'EL',
      ws_language_id: null,
      ws_category_id: null,
      ws_page_rank: null,
      placements: [
         {
            id: 57,
            pl_id: 57,
            pl_af_id: 17,
            pl_ws_id: 17,
            pl_name: 'ws17 pl 1',
            pl_description: null,
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '1',
         },
         {
            id: 58,
            pl_id: 58,
            pl_af_id: 17,
            pl_ws_id: 17,
            pl_name: 'ws17 pl 2',
            pl_description: null,
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '1',
         },
         {
            id: 59,
            pl_id: 59,
            pl_af_id: 17,
            pl_ws_id: 17,
            pl_name: 'ws17 pl 3',
            pl_description: null,
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '1',
         },
         {
            id: 60,
            pl_id: 60,
            pl_af_id: 17,
            pl_ws_id: 17,
            pl_name: 'ws17 pl 4',
            pl_description: null,
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '1',
         },
         {
            id: 61,
            pl_id: 61,
            pl_af_id: 17,
            pl_ws_id: 17,
            pl_name: 'ws17 pl 5',
            pl_description: null,
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '1',
         },
      ],
   },
   {
      id: 26,
      ws_id: 26,
      ws_af_id: 17,
      ws_url: 'http://test7new2.gr',
      ws_country_code: 'EL',
      ws_language_id: null,
      ws_category_id: null,
      ws_page_rank: null,
      placements: [
         {
            id: 64,
            pl_id: 64,
            pl_af_id: 17,
            pl_ws_id: 26,
            pl_name: 'left-banner-test7new2',
            pl_description: 'left banner test7 2 new placement',
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '2',
         },
         {
            id: 70,
            pl_id: 70,
            pl_af_id: 17,
            pl_ws_id: 26,
            pl_name: 'header-top-rectangle',
            pl_description: 'rectangle placement on top of header',
            pl_type: 0,
            pl_width: 0,
            pl_height: 0,
            pl_comments: null,
            pl_pageid: 0,
            pl_forceappend: 0,
            pl_appendtype: 0,
            pl_prepend: null,
            pl_append: null,
            pl_cap: 0,
            pl_cap_session: 0,
            pl_cap_reset: 0,
            pl_cap_show_noc: 0,
            pl_replacewith: '',
            dimension_group: '4',
         },
      ],
   },
];

const graph = (data) => {
   const placements = data.map((d) => d.placements);
   const websiteNames = data.map((d) => d.ws_url);
   const width = 604;
   const height = 202;
   const margin = {top: 20, right: 0, bottom: 0, left: 30};
   const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.id)])
      .range([margin.left, 1000 - margin.right])
      .interpolate(d3.interpolateRound());
   const y = d3
      .scaleBand()
      .domain(data.map((d) => d.ws_url))
      .range([margin.top, 1000 - margin.bottom])
      .padding(0.1)
      .round(true);

   console.log(y.domain());
   const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('margin-inline', 'auto')
      .style('border', '1px solid red');

   const scales = svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.id))
      .attr('width', (d) => width - x(d.id))
      .attr('y', y(data.ws_url))
      .attr('height', y.bandwidth());

   //    svg.selectAll('rect')
   //       .data(data)
   //       .join('rect')
   //       .attr('y', (d) => d.placements.id)
   //       .attr('x', (d) => d.id)
   //       .attr('width', (d) => d.id)
   //       .attr(
   //          'height',
   //          y.domain((d) => d.id),
   //       )
   //       .style('fill', '#000');
};
graph(data);
