import axios from "@/utils/service"

export function uploadImage(data) {
  return axios({
    url: `/upload/store-image-aws-s3`,
    method: "post",
    data,
    headers: { "Content-Type": "multipart/form-data" },
  })
}

export function getAllIamges() {
  return axios({
    url: `/upload/get-all-uploaded-images`,
    method: "get",
  })
}
