import axios from "@/utils/service"

export function uploadImage(data) {
  return axios({
    url: `/upload/image`,
    method: "post",
    data,
    headers: { "Content-Type": "multipart/form-data" },
  })
}
