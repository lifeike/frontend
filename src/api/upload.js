import axios from "@/utils/service"

export function uploadImage(data) {
  return axios({
    url: `/upload/store-image-aws-s3`,
    method: "post",
    data,
    headers: { "Content-Type": "multipart/form-data" },
  })
}
