<template>
  <div class='row'>

    <!-- V-FOR -->
    <div class='col-lg-3'>
      <button class="btn btn-lg btn-primary" name="button" v-if="downloadUrl" @click="downloadImage()">
        DOWNLOAD
      </button>
    </div>

    <div class='col-lg-9'>
      <canvas id='canvas' width='1760' height='1300'></canvas>
    </div>

  </div>
</template>

<!-- // // // // -->

<script>
import download from 'downloadjs'

const mapping = {
  // first: { x: 235, y: 165 },
  name: { x: 235, y: 165 },
  email: { x: 160, y: 210 },
  rin: { x: 160, y: 247 },
  project: { x: 1360, y: 357 },
  course: { x: 320, y: 555 },
  credits: { x: 320, y: 598 },
  date: { x: 430, y: 1130 },
  major: { x: 260, y: 320 },
  class_year: {
    FRESHMAN: { x: 220, y: 366 },
    SOPHMORE: { x: 330, y: 366 },
    JUNIOR: { x: 440, y: 366 },
    SENIOR: { x: 530, y: 366 }
  },
  semester: {
    FALL: { x: 270, y: 415 },
    SPRING: { x: 420, y: 415 },
    SUMMER: { x: 570, y: 415 }
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
            context.drawImage(sigImg, 100, 1080, scalar * 900, scalar * 300)
          }
          sigImg.src = fields.signature
        }

        // Adds class year checkbox
        const checkboxField = mapping['class_year'][window.fields['class_year']]
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
        context.font = '25pt Calibri'
        context.fillText(year, semesterField.x, semesterField.y)

        // Other fields
        Object.keys(fields).forEach((key) => {
          if (key === 'signature') return
          if (key === 'class_year') return
          const value = fields[key]
          const field = mapping[key]
          // console.log(key)
          context.font = '15pt Calibri'
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
