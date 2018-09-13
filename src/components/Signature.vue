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

    <div class="col-lg-3">
      <div class="form-group">
        <label for="">RPI Email</label>
        <input type="text" class='form-control' v-model="fields.email">
      </div>
    </div>

    <div class="col-lg-3">
      <div class="form-group">
        <label for="">RIN</label>
        <input type="text" class='form-control' v-model="fields.rin">
      </div>
    </div>

    <div class="col-lg-3">
      <div class="form-group">
        <label for="">Major</label>
        <input type="text" class='form-control' v-model="fields.major">
      </div>
    </div>

    <div class="col-lg-3">
      <div class="form-group">
        <label for="">Class Year</label>
        <select class="form-control" v-model="fields.classYear">
          <option value="FRESHMAN">Freshman</option>
          <option value="SOPHMORE">Sophmore</option>
          <option value="JUNIOR">Junior</option>
          <option value="SENIOR">Senior</option>
        </select>
      </div>
    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Course</label>
        <select class="form-control" v-model="fields.course">
          <option value="CSCI 2941">CSCI 2941</option>
          <option value="CSCI 4941">CSCI 4941</option>
        </select>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Credits</label>
        <select class="form-control" v-model="fields.credits">
          <option value="0">0 Credits (Experience)</option>
          <option value="1">1 Credit</option>
          <option value="2">2 Credits</option>
          <option value="3">3 Credits</option>
          <option value="4">4 Credits</option>
        </select>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Project</label>
        <input type="text" class='form-control' v-model="fields.project">
      </div>
    </div>

    <div class="col-lg-12 text-center">
      <p class='lead'>Signature</p>
      <div class='col-lg-12 d-flex justify-content-center'>
        <br>
        <canvas id='sig-canvas' width='450' height='150'></canvas>
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
import FormInput from './FormInput'

export default {
  name: 'Signature',
  computed: {
    FormInput
  },
  mounted () {
    const canvas = document.getElementById('sig-canvas')
    const signaturePad = new SignaturePad(canvas)
    this.signaturePad = signaturePad
  },
  methods: {
    onSubmit () {
      const { first, last, email, rin, project, course, credits, date, major, classYear } = this.fields
      window.fields = {
        name: first + ' ' + last,
        signature: this.signaturePad.toDataURL(),
        email,
        rin,
        project,
        course,
        credits,
        date,
        major,
        classYear
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
        course: 'CSCI 4941',
        credits: '4',
        signature: '',
        major: 'CSCI',
        classYear: 'SOPHMORE',
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
