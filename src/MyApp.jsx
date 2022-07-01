import React, { useState } from "react";
import { Card, CardHeader, Text, Icon } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { DonutChart, LineChart } from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/donut-chart.js';

const dataset = [
    {
        month: "January",
        data: 65
    },
    {
        month: "February",
        data: 59
    },
    {
        month: "March",
        data: 80
    },
    {
        month: "April",
        data: 81
    },
    {
        month: "May",
        data: 56
    },
    {
        month: "June",
        data: 55
    },
    {
        month: "July",
        data: 40
    }
];

export function MyApp() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);
    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
            }, 2000);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("lineChart");
            }, 2000);
        }
    };
    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Donut Chart';
    const switchToChart = toggleCharts === 'lineChart' ? 'Donut Chart' : 'Line Chart';
    return (
        <div>
            <Card
                header={
                    <CardHeader
                        titleText="Stock Prices"
                        subtitleText={`Click here to switch to ${switchToChart}`}
                        tooltip="Toggle chart"
                        interactive
                        onClick={handleHeaderClick}
                        avatar={
                            <Icon
                                name={
                                    toggleCharts === "lineChart"
                                        ? "line-chart"
                                        : "donut-chart"
                                }
                            />
                        }
                    />
                }
                style={{ width: "300px", padding: "20px" }}
            >
                <Text style={spacing.sapUiContentPadding}>
                    {contentTitle}
                </Text>
                {toggleCharts === "lineChart" ? (
                    <LineChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Stock Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                ) : (
                    <DonutChart
                        dimension={{
                            accessor: 'month'
                        }}
                        measure={{
                            accessor: 'data'
                        }}
                        chartConfig={{
                            paddingAngle: 5
                        }}
                        dataset={dataset}
                        loading={loading}
                    />
                )}
            </Card>
        </div>
    );
}