export const acceptCandidate = (data) => {
  console.log(data);
  return {
    type: "ACCEPT",
    payload: data,
  };
};

export const rejectCandidate = (data) => {
  return {
    type: "REJECT",
    payload: data,
  };
};
