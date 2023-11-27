<script>
import axios from "axios"

export default{
  data() {
    return {
      file: ""
    }
  },
  methods: {
    async submitFile() {
      try {
        let formData = new FormData();
        formData.append('uploaded_file', this.file);
        console.log('>> formData >> ', formData);
        const { data } = axios.post("http://localhost:3000/deck/ydk",
          formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ODRkMGZjOGY0MzMyMDg3MDEzZmQiLCJ1c2VybmFtZSI6IlZlZW1vbnIiLCJpYXQiOjE2OTgxNDE2MTB9.0kZLkvBSSgLgPIw0XIA-5dnFCZFb8iGjpmAbES2B24k"
              }
            })
          console.log("test");
        console.log(data);

      } catch(err) {
        console.log(err);
      }
    },

    handleFileUploud() {
      this.file = this.$refs.file.files[0]
      console.log('>>>> 1st element in files array >>>> ', this.file);    }
  }
}
</script>

<template>
  <form @submit.prevent="submitFile" enctype="multipart/form-data">
    <input type="file" name="uploaded_file" class="form-control-file" @change="handleFileUploud" id="file" ref="file" />
    <button type="submit">Submit</button>
  </form>
</template>