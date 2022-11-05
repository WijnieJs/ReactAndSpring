import React, { useState } from 'react'
import { useForm } from '../utils/form-hook'
import Button from '../components/Forms/Button'
import axios from 'axios'
import ImageUpload from '../components/Forms/ImageUpload'
import './UploadForm.css'

const Home = () => {
  const [file, setFile] = useState('')

  // const acceptImageHandler = (event) => {
  //   event.preventDefault()
  //  let file = event.target.files[0];
  //       const imageData = new FormData();
  //       imageData.append('imageFile', file);
  //       setImageData(imageData);
  //       setImagePreview(URL.createObjectURL(file));

  //   const formData = new FormData()
  //   formData.append('image', formState.inputs.image.value)

  //   console.log(formData)
  // }
  const fileChangedHandler = (event) => {
    const file = event.target.files[0]
    setFile(file)
  }
  const uploadHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    let prodId = 1002
    try {
      const result = await axios.post(
        `http://localhost:8080/students/${prodId}/photo`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log(result.data)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <div>
        <h1>Image upload for spring boot app</h1>
        <form className="upload-form" onSubmit={uploadHandler}>
          <input
            type="file"
            name="image-field"
            id="student-image"
            onChange={fileChangedHandler}
          />
          <button onClick={uploadHandler}>Upload!</button>
          <Button mode="raised">Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Home
