import axios from "axios";

const scenicspotRequest = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",
});

export const apiScenicSpot = (page) =>
  scenicspotRequest.get(`?$top=30&$skip=${page}&$format=JSON`);
