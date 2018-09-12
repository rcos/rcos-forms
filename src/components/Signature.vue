<template>
  <div class='row'>

    <!-- V-FOR -->

    <div class="col-lg-6">
      <div class="form-group">
        <label for="">First Name</label>
        <input type="text" class='form-control' v-model="fields.first">
      </div>
    </div>

    <div class="col-lg-6">
      <div class="form-group">
        <label for="">Last Name</label>
        <input type="text" class='form-control' v-model="fields.last">
      </div>
    </div>

    <div class="col-lg-6">
      <div class="form-group">
        <label for="">RPI Email</label>
        <input type="text" class='form-control' v-model="fields.email">
      </div>
    </div>

    <div class="col-lg-6">
      <div class="form-group">
        <label for="">RIN</label>
        <input type="text" class='form-control' v-model="fields.rin">
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Course</label>
        <input type="text" class='form-control' v-model="fields.course">
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Credits</label>
        <input type="text" class='form-control' v-model="fields.credits">
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Project</label>
        <input type="text" class='form-control' v-model="fields.project">
      </div>
    </div>

    <div class="col-lg-12">
      <p class='lead'>Signature</p>
      <div class='col-lg-12 d-flex justify-content-center'>
        <br>
        <canvas id='sig-canvas' width='900' height='300'></canvas>
      </div>
    </div>

    <div class="col-lg-12">
      <hr>
      <div class="row d-flex justify-content-center mb-4">
        <div class="col-lg-6">
          <button type="button" name="button" class="btn btn-success btn-lg btn-block" @click="onSubmit()">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- // // // // -->

<script>
import SignaturePad from 'signature_pad'

export default {
  name: 'Signature',
  mounted () {
    const canvas = document.getElementById('sig-canvas')
    // const context = canvas.getContext('2d')
    // const imageObj = new Image()

    // imageObj.onload = function () {
    //   context.drawImage(imageObj, 0, 0)
    // }

    // imageObj.src = 'https://image.ibb.co/cKwi4p/Screenshot_2018_09_11_21_21_25.png'
    // context.font = '15pt Calibri'
    // setTimeout(() => {
    //   this.fields.forEach((field) => {
    //     context.fillText(field.text, field.x, field.y)
    //   })
    // }, 100)

    const signaturePad = new SignaturePad(canvas)
    this.signaturePad = signaturePad

    // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
    // signaturePad.toDataURL() // save image as PNG
    // signaturePad.toDataURL("image/jpeg") // save image as JPEG
    // signaturePad.toDataURL("image/svg+xml") // save image as SVG

    // Draws signature image from data URL.
    // NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
    // signaturePad.fromDataURL("data:image/pngbase64,iVBORw0K...")

    // Returns signature image as an array of point groups
    // const data = signaturePad.toData()

    // Draws signature image from an array of point groups
    // signaturePad.fromData(data)

    // Clears the canvas
    // signaturePad.clear()

    // Returns true if canvas is empty, otherwise returns false
    // signaturePad.isEmpty()

    // Unbinds all event handlers
    // signaturePad.off()

    // Rebinds all event handlers
    // signaturePad.on()
  },
  methods: {
    onSubmit () {
      // console.log(this.signaturePad.toData())
      // console.log(this.signaturePad.toDataURL())
      this.fields.signature = this.signaturePad.toDataURL()
      // window.fields = this.fields
      const { first, last, email, rin, project, course, credits, date } = this.fields
      window.fields = {
        name: first + ' ' + last,
        signature: this.signaturePad.toDataURL(),
        email,
        rin,
        project,
        course,
        credits,
        date
      }
      window.location = '#/form'
    }
  },
  data () {
    const event = new Date()
    const month = event.getMonth() + 1
    const day = event.getDate()
    const year = event.getFullYear()
    return {
      fields: {
        first: 'John',
        last: 'Doe',
        email: 'johndoe@rpi.edu',
        rin: '661000001',
        project: 'YACS',
        course: 'CSCI 2941 or CSCI 4941',
        credits: 4,
        signature: '',
        date: `${month} / ${day} / ${year}`
      }
    }
  }
}

</script>

<!-- // // // // -->

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  canvas {
    border: 1px #000 solid;
  }
</style>
