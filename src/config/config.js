const SERVER_MODE_FROM_ARGS = process.argv[2];

export default  {
  CLUSTER: SERVER_MODE_FROM_ARGS === "CLUSTER" ? true : false,
};