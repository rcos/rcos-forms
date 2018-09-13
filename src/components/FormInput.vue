<template>
  <div class="form-group">
    <label class='mb-0'>
      {{ label }}
      <span class='text-danger' v-if="required">*</span>
    </label>

    <small class="form-text text-muted mb-1" v-if="help">{{help}}</small>

    <input :name="name" v-if="type === 'BOOL'" type="checkbox" ref="input_el" class="form-control" :checked="value" @change="updateModel()">
    <input :name="name" v-else-if="type === 'DATE'" type="date" ref="input_el" class="form-control" :placeholder="placeholder" :value="value" @input="updateModel()" >
    <input :name="name" v-else-if="type === 'TIME'" type="time" ref="input_el" class="form-control" :placeholder="placeholder" :value="value" @input="updateModel()" >
    <input :name="name" v-else-if="type === 'EMAIL'" type="email" ref="input_el" class="form-control" :placeholder="placeholder" :value="value" @input="updateModel()" >
    <input :name="name" v-else-if="type === 'NUMBER'" type="number" ref="input_el" class="form-control" :placeholder="placeholder" :value="value" @input="updateModel()" >
    <input :name="name" v-else type="text" ref="input_el" class="form-control" :placeholder="placeholder" :value="value" @input="updateModel()" >

  </div>
</template>

<script>
export default {
  props: ['required', 'label', 'name', 'type', 'example', 'ex', 'help', 'placeholder', 'value'],
  methods: {
    updateModel () {
      if (this.type === 'BOOL') {
        this.$emit('input', this.$refs.input_el.checked)
      } else {
        this.$emit('input', this.$refs.input_el.value)
      }
    }
  }
}
</script>

<style>
.form-group {
  label {
    margin-bottom: 0;
  }
  small {
    margin-bottom: .6rem;
  }
}
</style>
