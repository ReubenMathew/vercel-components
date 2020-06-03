<template>
  <div class="text-center mt-12 ">
    <Button type="error">Action</Button>
    <SmallButton type="error">Action</SmallButton>
    <Button mod="shadow" type="warning">Action</Button>
    <SmallButton mod="shadow" type="warning">Action</SmallButton>
    <Badge type="primary">NEW</Badge>
  </div>
</template>

<script>

import Button from '../components/buttons/Button'
import SmallButton from '../components/buttons/SmallButton'
import Badge from '../components/badge/Badge'

export default {
  components: {
    SmallButton,
    Button,
    Badge,
  }
}
</script>