<template>
  <div class="text-center mt-12 ">
    <Button type="primary">Action</Button>
    <SmallButton type="primary">Action</SmallButton>
    <Button type="secondary">Action</Button>
    <SmallButton type="secondary">Action</SmallButton>
    <Button type="success">Action</Button>
    <SmallButton type="success">Action</SmallButton>
    <Button type="error">Action</Button>
    <SmallButton type="error">Action</SmallButton>
    <Button mod="shadow" type="warning">Action</Button>
    <SmallButton mod="shadow" type="warning">Action</SmallButton>
  </div>
</template>

<script>

import Button from '../components/buttons/Button'
import SmallButton from '../components/buttons/SmallButton'

export default {
  components: {
    SmallButton,
    Button,

  }
}
</script>