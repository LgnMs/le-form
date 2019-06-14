<template>
  <div class="FormTitle">
    <le-icon icon="jiantou"></le-icon>
    <div class="FormTitle-text">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
$border-color: #ddd;
.FormTitle {
  background-color: #FAFAFA;
  border-top: 1px solid $border-color;
  padding: 12px 8px;
  font-size: 13px;
  font-weight: bolder;
  border-left: 1px solid #ddd;
  &-text {
    display: inline-block;
    margin-left: 8px;
    width: 95%;
  }
}
</style>
