<template>
  <div>
    <canvas ref="lineChart" id="lineChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    //const ctx = document.getElementById("lineChart");
    const ctx = this.$refs.lineChart;
    new this.$_Chart(ctx, this.propsLineChartDataSet);
  },
};
</script>

<style></style>
