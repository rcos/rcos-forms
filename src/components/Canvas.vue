<template>
  <div class='row'>
    <div class='col-lg-12 text-center'>
      <h2>Your URP form is ready</h2>
      <p class="lead">Download your form and send it to <a target="_blank" href="https://github.com/aeksco">@aeksco</a> on Slack</p>

      <button class="btn btn-lg btn-primary mr-4" v-if="downloadUrl" @click="downloadImage()">
        <i class="fa fa-download"></i>
        Download
      </button>

      <button class="btn btn-lg btn-outline-primary" @click="downloadImage()">
        <i class="fa fa-refresh"></i>
        Reset
      </button>

      <hr>
    </div>

    <!-- V-FOR -->
    <div class='col-lg-12'>
      <canvas id='canvas' width='2086' height='1612'></canvas>
    </div>

  </div>
</template>

<!-- // // // // -->

<script>
import download from 'downloadjs'

const mapping = {
  name: { x: 265, y: 194 },
  email: { x: 180, y: 244 },
  rin: { x: 180, y: 290 },
  project: { x: 1580, y: 422 },
  course: { x: 280, y: 662 },
  credits: { x: 380, y: 715 },
  date: { x: 500, y: 1350 },
  major: { x: 300, y: 384 },
  classYear: {
    FRESHMAN: { x: 220, y: 426 },
    SOPHMORE: { x: 390, y: 426 },
    JUNIOR: { x: 440, y: 426 },
    SENIOR: { x: 530, y: 426 }
  },
  semester: {
    FALL: { x: 310, y: 490 },
    SPRING: { x: 420, y: 490 },
    SUMMER: { x: 570, y: 490 }
  }
}

export default {
  name: 'Canvas',
  mounted () {
    setTimeout(() => {
      this.renderForm()
    }, 500)
  },
  created () {
    if (!window.fields) { window.location = '#/' }
  },
  computed: {
    downloadUrl () {
      if (!window.fields) return
      return window.fields.signature
    }
  },
  methods: {
    downloadImage () {
      const canvas = document.getElementById('canvas')
      canvas.toBlob((blob) => {
        download(blob, 'rcos_urp_form.png', 'image/png')
      })
    },
    renderForm () {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const imageObj = new Image()

      imageObj.onload = function () {
        const fields = window.fields
        context.drawImage(imageObj, 0, 0)
        // Adds signaturePad
        if (fields.signature) {
          const sigImg = new Image()
          sigImg.onload = function () {
            const scalar = 0.3
            // ctx.drawImage(image, dx, dy, dWidth, dHeight);
            context.drawImage(sigImg, 100, 1280, scalar * 900, scalar * 300)
          }
          sigImg.src = fields.signature
        }

        // Adds class year checkbox
        const checkboxField = mapping['classYear'][window.fields['classYear']]
        context.font = '25pt Calibri'
        context.fillText('X', checkboxField.x, checkboxField.y)

        // Adds semester checkbox
        let semesterField
        const event = new Date()
        const month = event.getMonth() + 1
        const year = event.getFullYear() - 2000
        if ([8, 9, 10, 11, 12].includes(month)) {
          semesterField = mapping['semester']['FALL']
        } else if ([1, 2, 3, 4, 5].includes(month)) {
          semesterField = mapping['semester']['SPRING']
        } else {
          semesterField = mapping['semester']['SUMMER']
        }

        // Places semester checkbox
        context.font = '20pt Calibri'
        context.fillText(year, semesterField.x, semesterField.y)

        // Other fields
        Object.keys(fields).forEach((key) => {
          if (key === 'signature') return
          if (key === 'classYear') return
          const value = fields[key]
          const field = mapping[key]
          // console.log(key)
          context.font = '20pt Calibri'
          context.fillText(value, field.x, field.y)
        })
      }

      // Sets the form image
      imageObj.src = 'static/form.png'
    }
  }
}

</script>

<!-- // // // // -->

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  p.subtitle {
    font-size: 1.25rem;
    color: #999999;
  }
  canvas {
    width: 100%;
    border: 1px #000 solid;
  }
</style>
