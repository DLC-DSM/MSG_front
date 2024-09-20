import ReactApexChart from "react-apexcharts";

function Chart() {
  return (
    <div>
      <ReactApexChart
        type="line"
        series={[{ name: "도전과제 참여 횟수", data: [2, 4, 2, 1] }]}
        options={{
          chart: {
            height: 300,
            width: 500,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
        }}
        width={800}
        height={300}
      ></ReactApexChart>
    </div>
  );
}

export default Chart;
