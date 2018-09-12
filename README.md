# Vue.js-Workshop
A gentle introduction to [Vue.js](https://vuejs.org/)

This workshop is designed to introduce the basic concepts of the [Vue.js](https://vuejs.org/) framework, culminating in the creation of a basic ToDo List application. [Bootstrap](https://getbootstrap.com/docs/4.0/components/alerts/) and [FontAwesome](fontawesome.io/icons/) are also used throughout the talk.

## Node.js Installation

This workshop depends on Node.js version `8.x` and above. You can check your version of node with the `node --version` command.

**If you need to install Node.js**, please do the following:.

**Windows / MacOs**

[Official Node.js Installer](https://nodejs.org/en/download/)

**Ubuntu Linux**

``` bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

## What if I don't want to install Node.js?

You can follow along and learn the basic concepts of Vue.js the following HTML file:

- `VuejsWorkshop/HelloVue.html`

You won't have the advantages of working with with `.vue` files, but you will still be able to learn and apply the basic concepts.

## Text Editor
In this workshop we'll be working inside files with the `.vue` extension. This filetype encapsulates the template, styles, and JavaScript for a a single Vue.js component. It will be helpful for your text editor has support for `.vue` file syntax highligting - we recommend using either [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), or [VSCode](https://code.visualstudio.com/) - though any text editor will suffice for basic usage.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader) for the Vue.js starter template from which this workshop was created.

## Let's get started!

During this workshop we're going to be creating two Vue.js components - you will only be editing the following two files:

- `VuejsWorkshop/src/components/Hello.vue`
- `VuejsWorkshop/src/components/TodoList.vue`

The following are the complete, documented examples of the components we'll be building:

- `VuejsWorkshop/src/components/Hello.complete.vue`
- `VuejsWorkshop/src/components/TodoList.complete.vue`

## Topics Covered

- What is Vue.js?
  - Reactivity
  - Progressive frameworks

- What is a component?
  - `<template>`, `<script>`, and `<style>` tags

- Vue.js Template Directives
  - `v-model`
  - `v-if`, `v-else-if`, `v-else`
  - `v-bind`
  - `v-on`

- Vue.js Component Properties
  - `data`
  - `methods`
  - `computed`
  - `props`
  - `components`
