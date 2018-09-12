<template>
  <div class='row'>

    <!-- V-FOR -->
    <div class='col-lg-4'>
      <button class="btn btn-lg btn-primary" name="button" v-if="downloadUrl" @click="downloadImage()">
        DOWNLOAD
      </button>
    </div>

    <div class='col-lg-8'>
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
  date: { x: 430, y: 1130 }
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
        context.drawImage(imageObj, 0, 0)
        // Adds signaturePad
        if (window.fields.signature) {
          const sigImg = new Image()
          sigImg.onload = function () {
            const scalar = 0.3
            // ctx.drawImage(image, dx, dy, dWidth, dHeight);
            context.drawImage(sigImg, 100, 1080, scalar * 900, scalar * 300)
          }
          sigImg.src = window.fields.signature
        }
      }

      imageObj.src = '/static/form.png'
      context.font = '15pt Calibri'
      setTimeout(() => {
        Object.keys(window.fields).forEach((key) => {
          if (key === 'signature') return
          const value = window.fields[key]
          const field = mapping[key]
          // console.log(key)
          context.fillText(value, field.x, field.y)
        })
      }, 100)
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
