const apiUrl = "https://api.imgbb.com/1/upload";
const apiKey = "f8570b5cfbdbaee50de8a20453e7e99a";

export function UploadImage(base64ImageData: string): void {
  // Remove data type declaration (e.g., "data:image/jpeg;base64,")
  const imageData = base64ImageData.replace(/^data:image\/\w+;base64,/, '');

  const formData = new FormData();
  formData.append("image", imageData);
  
  const queryParams = new URLSearchParams({
    expiration: "600",
    key: apiKey,
  });
  
  const url = `${apiUrl}?${queryParams}`;
  
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
