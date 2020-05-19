module.exports = [
  //JS elements
  { data: { id: "js", label: "JavaScript" } },
  { data: { id: "wth-is-es", label: "What is ES", url: "docs/wth-is-es" } },
  { data: { id: "let-vs-var", label: "let vs var", url: "docs/let-vs-var" } },
  {
    data: {
      id: "cb-promise-asaw",
      label: "Async programming",
      url: "docs/cb-promise-asaw",
    },
  },
  { data: { id: "js-memory-model", label: "JS memory model" } },
  { data: { id: "set-vs-map", label: "set vs map" } },
  { data: { id: "oop-1", label: "OOP1" } },
  { data: { id: "oop-2", label: "OOP2" } },
  { data: { id: "for-of-for-in-loops", label: "for-of vs for-in loops" } },
  { data: { id: "regex", label: "Regex" } },
  { data: { id: "map-filter-reduce", label: "Map Filter Reduce" } },
  //JS linkage
  {
    data: {
      source: "wth-is-es",
      target: "js",
    },
  },
  {
    data: {
      source: "let-vs-var",
      target: "js",
    },
  },
  {
    data: {
      source: "cb-promise-asaw",
      target: "js",
    },
  },
  {
    data: {
      source: "js-memory-model",
      target: "js",
    },
  },
  {
    data: {
      source: "set-vs-map",
      target: "js",
    },
  },
  {
    data: {
      source: "oop-1",
      target: "js",
    },
  },
  {
    data: {
      source: "oop-2",
      target: "js",
    },
  },
  {
    data: {
      source: "for-of-for-in-loops",
      target: "js",
    },
  },
  {
    data: {
      source: "regex",
      target: "js",
    },
  },
  {
    data: {
      source: "map-filter-reduce",
      target: "js",
    },
  },
  //TS
  { data: { id: "ts", label: "TypeScript" } },
  { data: { id: "intro-to-ts", label: "Intro to TS" } },
  { data: { id: "react-in-ts", label: "React in TS" } },
  {
    data: {
      source: "intro-to-ts",
      target: "ts",
    },
  },
  {
    data: {
      source: "react-in-ts",
      target: "ts",
    },
  },
  {
    data: {
      source: "react-in-ts",
      target: "react",
    },
  },
  //React
  { data: { id: "react", label: "React" } },
  { data: { id: "react-cytoscape", label: "React Cytoscape" } },
  { data: { id: "react-dropdown", label: "React Dropdown" } },
  { data: { id: "react-testing", label: "React Testing" } },
  { data: { id: "react-redux-analogy", label: "React Redux Analogy" } },
  {
    data: {
      source: "react-cytoscape",
      target: "react",
      label: "Edge from Node1 to Node2",
    },
  },
  {
    data: {
      source: "react-dropdown",
      target: "react",
      label: "Edge from Node1 to Node2",
    },
  },
  {
    data: {
      source: "react-testing",
      target: "react",
      label: "Edge from Node1 to Node2",
    },
  },
  {
    data: {
      source: "react-redux-analogy",
      target: "react",
      label: "Edge from Node1 to Node2",
    },
  },
  //Angular
  { data: { id: "ang", label: "Angular" } },
  { data: { id: "intro-to-angular", label: "Intro to Angular" } },
  {
    data: {
      source: "intro-to-angular",
      target: "ang",
    },
  },
  // CSS
  { data: { id: "css", label: "CSS" } },
  { data: { id: "em-vs-rem", label: "em vs rem" } },
  {
    data: { source: "em-vs-rem", target: "css" },
  },
  {
    data: { source: "css", target: "lib" },
  },
  // DevOps
  { data: { id: "devops", label: "DevOps" } },
  { data: { id: "docker-command-101", label: "Docker Command 101" } },
  {
    data: { id: "docker-pizza-analogy", label: "docker analogy" },
  },
  {
    data: { id: "container-orchestration", label: "docker container" },
  },
  {
    data: { source: "docker-command-101", target: "devops" },
  },
  {
    data: { source: "docker-pizza-analogy", target: "devops" },
  },
  {
    data: { source: "container-orchestration", target: "devops" },
  },
  // Classification
  { data: { id: "lib", label: "Frontend Frameworks" } },
  { data: { id: "dev", label: "Programming" } },
  // Path
  {
    data: { source: "lib", target: "ang" },
  },
  {
    data: { source: "lib", target: "react" },
  },
  {
    data: { source: "ts", target: "js" },
  },
  {
    data: { source: "js", target: "lib" },
  },
  {
    data: { source: "js", target: "dev" },
  },
  {
    data: { source: "devops", target: "dev" },
  },
]
