import axios from "axios"

const cloudName="chwlyzl0"
const preset="image123"
class CloudnaryServices{

    

    async UploadImage(image){
        try{
            let formData= new FormData()
            formData.append("file",image)
            formData.append("upload_preset",preset)

            let url = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData)


            return url.data.secure_url
        }catch(err){
            console.log(err);
            
        }
    }
}
export default new  CloudnaryServices