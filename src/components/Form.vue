<template>
  <div class='row'>

    <!-- V-FOR -->

    <div class="col-lg-12">
      <p class="lead mb-0">
        <i class="fa fa-info-circle"></i>
        Please fill out all the fields below
      </p>
      <hr>
    </div>

    <div class="col-lg-4">
      <FormInput label="First Name" placeholder="First Name" v-model="fields.first" required="true" help="Your first name" />
    </div>

    <div class="col-lg-4">
      <FormInput label="Last Name" placeholder="Last Name" v-model="fields.last" required="true" help="Your last name" />
    </div>

    <div class="col-lg-4">
      <FormInput name="email" type="EMAIL" label="RPI Email" placeholder="RPI Email" v-model="fields.email" required="true" help="Your RPI Email" />

    </div>

    <div class="col-lg-4">
      <FormInput label="RPI RIN" placeholder="RIN" v-model="fields.rin" type="NUMBER" required="true" help="Your Rensselaer ID Number - '661000000'" />
    </div>

    <div class="col-lg-4">
      <FormInput label="RPI Major" placeholder="Major" v-model="fields.major" required="true" help="Example: 'CSCI'" />
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label class='mb-0'>
          Class Year
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-1">Your class year at RPI</small>
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
        <label class='mb-0'>
          Course
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-1">Choose "CSCI 2941" if you are taking RCOS for the first time.</small>
        <select class="form-control" v-model="fields.course">
          <option value="CSCI 2941">CSCI 2941</option>
          <option value="CSCI 4941">CSCI 4941</option>
        </select>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label class='mb-0'>
          Credits
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-1">The number of credits you'll be pursuing in RCOS.</small>
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
      <FormInput label="Project Name" placeholder="Project Name" v-model="fields.project" required="true" help="The name of your RCOS project" />
    </div>

    <div class="col-lg-12 text-center">
      <p class='lead mb-0'>Signature</p>
      <small class="text-muted">Please draw your signature in the box below</small>
      <div class='col-lg-12 mt-2 d-flex justify-content-center'>
        <br>
        <canvas id='sig-canvas' width='450' height='150'></canvas>
      </div>
      <button class="btn btn-sm btn-warning mt-3" @click="clearSignature()">
        <i class="fa fa-eraser"></i>
        Clear Signature
      </button>
    </div>

    <div class="col-lg-12">
      <hr>
      <div class="row d-flex justify-content-center mb-4">
        <div class="col-lg-6">
          <button type="button" name="button" class="btn btn-success btn-lg btn-block py-3 px-3" style='font-size: 2rem;' @click="onSubmit()">
            <i class="fa fa-gears"></i>
            Generate URP Form
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
  components: {
    FormInput
  },
  mounted () {
    const canvas = document.getElementById('sig-canvas')
    const signaturePad = new SignaturePad(canvas)
    this.signaturePad = signaturePad
  },
  methods: {
    clearSignature () {
      this.signaturePad.clear()
    },
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
      window.location = '#/download'
    }
  },
  data () {
    const event = new Date()
    const month = event.getMonth() + 1
    const day = event.getDate()
    const year = event.getFullYear()
    return {
      fields: {
        first: '',
        last: '',
        email: '',
        rin: '',
        project: '',
        course: 'CSCI 2941',
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
