export const SOCKET_START = () => {
  return {
    type: "SOCKET_START"
  };
};

export const SOCKET_POST = ListenData => {
  return {
    type: "SOCKET_POST",
    data: ListenData
  };
};
