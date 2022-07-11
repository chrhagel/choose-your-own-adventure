const ellies = {
  "nodes": [ // list of graph elements to start with
    {
      data: { id: 'n1', name:"Start", body:"You at the beginning of stuff" }
    },
    {
      data: { id: 'n2', name:"East", body:"the eastern room with many flowers" }
    },
    {
      data: { id: 'n3', name:"West", body:"The western room with much spice" }
    },
    {
      data: { id: 'n4', name:"North", body:"The nothern room which is very hot" }
    },
    {
      data: { id: 'n5', name:'Room 1', body:"Room 1, you see an ogre" }
    },
    {
      data: { id: 'n6', name:"Room 2", body:"Room 2, Two kobolds" }
    },
    {
      data: { id: 'n7', name:"Room 3", body:"Room 3, a troll!!!!" }
    },
    {
      data: { id: 'n8', name:"Room 4", body:"Room 4, is that a chest? Why my, yes it is!" }
    },
    {
      data: { id: 'n9', name:"Room 5", body:"Oh no, a big hole. Jump!" }
    },

  ],
  "edges":[
    { data: { id: 'e0', source: 'n1', target: 'n2', name: "Go East" } },
    { data: { id: 'e1', source: 'n1', target: 'n3', name: "Go West" } },
    { data: { id: 'e2', source: 'n1', target: 'n4', name: "Go North" } },
    { data: { id: 'e3', source: 'n2', target: 'n5', name: "Go Go forward" } },
    { data: { id: 'e4', source: 'n3', target: 'n6', name: "To room 2" } },
    { data: { id: 'e5', source: 'n4', target: 'n7', name: "To room 3" } },
    { data: { id: 'e6', source: 'n6', target: 'n8', name: "To room 4" } },
    { data: { id: 'e7', source: 'n7', target: 'n8', name: "To room 4" } },
    { data: { id: 'e8', source: 'n5', target: 'n9', name: "To room 5" } },
    { data: { id: 'e9', source: 'n9', target: 'n8', name: "To room 4" } },
    { data: { id: 'e10', source: 'n6', target: 'n7', name: "To room 3" } },
    { data: { id: 'e11', source: 'n8', target: 'n7', name: "To room 3" } },
    { data: { id: 'e12', source: 'n8', target: 'n6', name: "To room 2" } },
    // { data: { id: '13', source: 'c', target: 'd' } },
    // { data: { id: '14', source: 'c', target: 'd' } },
    // { data: { id: '15', source: 'c', target: 'd' } },
    // { data: { id: '16', source: 'c', target: 'd' } },
  ]
}



// { // node a
//   data: { id: 'c' },
//   "position": {"x": 100, "y":100}
// }