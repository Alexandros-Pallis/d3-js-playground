import '../scss/main.scss';
import axios from 'axios';
import * as d3 from 'd3';

// const data = [
//    {
//       id: 17,
//       ws_id: 17,
//       ws_af_id: 17,
//       ws_url: 'test7 inc ws 1',
//       ws_country_code: 'EL',
//       ws_language_id: null,
//       ws_category_id: null,
//       ws_page_rank: null,
//       placements: [
//          {
//             id: 57,
//             pl_id: 57,
//             pl_af_id: 17,
//             pl_ws_id: 17,
//             pl_name: 'ws17 pl 1',
//             pl_description: null,
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '1',
//          },
//          {
//             id: 58,
//             pl_id: 58,
//             pl_af_id: 17,
//             pl_ws_id: 17,
//             pl_name: 'ws17 pl 2',
//             pl_description: null,
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '1',
//          },
//          {
//             id: 59,
//             pl_id: 59,
//             pl_af_id: 17,
//             pl_ws_id: 17,
//             pl_name: 'ws17 pl 3',
//             pl_description: null,
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '1',
//          },
//          {
//             id: 60,
//             pl_id: 60,
//             pl_af_id: 17,
//             pl_ws_id: 17,
//             pl_name: 'ws17 pl 4',
//             pl_description: null,
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '1',
//          },
//          {
//             id: 61,
//             pl_id: 61,
//             pl_af_id: 17,
//             pl_ws_id: 17,
//             pl_name: 'ws17 pl 5',
//             pl_description: null,
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '1',
//          },
//       ],
//    },
//    {
//       id: 26,
//       ws_id: 26,
//       ws_af_id: 17,
//       ws_url: 'http://test7new2.gr',
//       ws_country_code: 'EL',
//       ws_language_id: null,
//       ws_category_id: null,
//       ws_page_rank: null,
//       placements: [
//          {
//             id: 64,
//             pl_id: 64,
//             pl_af_id: 17,
//             pl_ws_id: 26,
//             pl_name: 'left-banner-test7new2',
//             pl_description: 'left banner test7 2 new placement',
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '2',
//          },
//          {
//             id: 70,
//             pl_id: 70,
//             pl_af_id: 17,
//             pl_ws_id: 26,
//             pl_name: 'header-top-rectangle',
//             pl_description: 'rectangle placement on top of header',
//             pl_type: 0,
//             pl_width: 0,
//             pl_height: 0,
//             pl_comments: null,
//             pl_pageid: 0,
//             pl_forceappend: 0,
//             pl_appendtype: 0,
//             pl_prepend: null,
//             pl_append: null,
//             pl_cap: 0,
//             pl_cap_session: 0,
//             pl_cap_reset: 0,
//             pl_cap_show_noc: 0,
//             pl_replacewith: '',
//             dimension_group: '4',
//          },
//       ],
//    },
// ];

const data = [
   {
      id: 1,
      ws_name: 'Foxbet',
      ws_url: 'https://foxbet.gr/',
      categories: [
         {
            name: 'Sports',
            impressions: 1000,
            clicks: 500,
            convertions: 40,
            cpm: 0.1,
            cpc: 0.2,
            cpa: 0.3,
            ctr: '10%',
            revenue: 3000,
         },
         {
            name: 'Girly',
            impressions: 2000,
            clicks: 150,
            convertions: 30,
            cpm: 0.1,
            cpc: 0.2,
            cpa: 0.3,
            ctr: '10%',
            revenue: 1000,
         },
      ],
   },
   {
      id: 2,
      ws_name: 'Bookmakers.bet',
      ws_url: 'https://www.bookmakers.bet/',
      categories: [
         {
            name: 'Literature',
            impressions: 1000,
            clicks: 150,
            converstions: 30,
            cpm: 0.15,
            cpc: 0.2,
            cpa: 0.35,
            ctr: '25%',
            revenue: 2000,
         },
      ],
   },
];

const graph = (data) => {
   console.log(data);
   const width = window.innerWidth / 2;
   const height = window.innerHeight / 2;
   const margin = {top: 0, right: 0, bottom: 0, left: 100};
   const revenueSumPerWebsite = [];
   data.map((d) => {
      d.categories.map((c) => revenues.push(c.revenue));
   });
   console.log(revenues);
   const x = d3
      .scaleLinear()
      .domain([0, data.map((d) => d.categories.map((c) => d3.max(c.revenue)))])
      .range([margin.left, width - margin.right]);
   const y = d3
      .scaleBand()
      .domain(data.map((d) => d.ws_name))
      .range([margin.top, height - margin.bottom])
      .padding(0.1)
      .round(true);
   const yAxis = d3.axisLeft().scale(y);

   const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid red');

   svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

   const bars = svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', x(0))
      .attr('y', (d) => y(d.ws_name))
      .attr('width', (d) => x(d.id))
      .attr('height', (d) => y(d.ws_name))
      .style('background-color', '#000');
};
graph(data);
