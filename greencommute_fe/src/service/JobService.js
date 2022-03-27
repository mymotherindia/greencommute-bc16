export const jobResource = `a88c54c7db6ca46bfb3cda43375942ad-586354257.ap-south-1.elb.amazonaws.com`;
// const jobResource = `http://localhost:9000/jobs`;
import axios from "axios";

export const getAllJobs = (reqParams, cb) => {
  return axios(`${jobResource}?${reqParams}`).then((res) => {
    const result = res.data;
    cb(result);
  });
};

export const saveJob = (jobId, cb) => {
  return axios
    .post(`${jobResource}/${jobId}/save`, {
      jobId: jobId,
    })
    .then((res) => cb(res.data.id));
};

export const removeJob = (saveJobId) => {
  return axios.delete(`${jobResource}/saved/${saveJobId}`);
};

export const getAllSavedJobs = (cb) => {
  return axios(`${jobResource}/saved`).then((res) => {
    const savedJobsId = res.map((item) => item.id);
    cb(savedJobsId);
  });
};
