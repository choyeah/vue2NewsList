<template>
  <div>
    <canvas ref="barChart" id="barChart"></canvas>
  </div>
</template>

<script>
export default {
  props: ["propsBarChartDataSet"],
  mounted() {
    const ctx = document.getElementById("barChart");
    // const ctx = this.$refs.barChart;
    new this.$_Chart(ctx, this.propsBarChartDataSet);
  },
};
</script>

<style></style>
